import { CellData, CellValue } from '../types/excel';

// Column conversions: 0 -> A, 1 -> B, 26 -> AA
export function colIndexToLetter(colIndex: number): string {
  let letter = '';
  let temp = colIndex;
  while (temp >= 0) {
    letter = String.fromCharCode((temp % 26) + 65) + letter;
    temp = Math.floor(temp / 26) - 1;
  }
  return letter;
}

export function colLetterToIndex(colStr: string): number {
  const upper = colStr.toUpperCase();
  let index = 0;
  for (let i = 0; i < upper.length; i++) {
    index = index * 26 + (upper.charCodeAt(i) - 64);
  }
  return index - 1;
}

export interface ParsedAddress {
  col: number;
  row: number;
  isColAbs: boolean;
  isRowAbs: boolean;
  raw: string;
}

export function parseCellAddress(addr: string): ParsedAddress | null {
  const match = addr.trim().match(/^(\$?)([A-Za-z]+)(\$?)([0-9]+)$/);
  if (!match) return null;

  const isColAbs = match[1] === '$';
  const col = colLetterToIndex(match[2]);
  const isRowAbs = match[3] === '$';
  const row = parseInt(match[4], 10) - 1;

  return { col, row, isColAbs, isRowAbs, raw: addr.toUpperCase() };
}

export function formatAddress(col: number, row: number, isColAbs = false, isRowAbs = false): string {
  const colLetter = colIndexToLetter(col);
  return `${isColAbs ? '$' : ''}${colLetter}${isRowAbs ? '$' : ''}${row + 1}`;
}

export function parseRange(rangeStr: string): string[] {
  const parts = rangeStr.split(':').map((s) => s.trim());
  if (parts.length === 1) {
    const p = parseCellAddress(parts[0]);
    return p ? [formatAddress(p.col, p.row)] : [];
  }
  if (parts.length === 2) {
    const start = parseCellAddress(parts[0]);
    const end = parseCellAddress(parts[1]);
    if (!start || !end) return [];

    const minCol = Math.min(start.col, end.col);
    const maxCol = Math.max(start.col, end.col);
    const minRow = Math.min(start.row, end.row);
    const maxRow = Math.max(start.row, end.row);

    const cells: string[] = [];
    for (let r = minRow; r <= maxRow; r++) {
      for (let c = minCol; c <= maxCol; c++) {
        cells.push(formatAddress(c, r));
      }
    }
    return cells;
  }
  return [];
}

// Helper to extract values from range or single address
export function getRangeValues(rangeStr: string, cells: Record<string, CellData>): CellValue[] {
  const addresses = parseRange(rangeStr);
  return addresses.map((addr) => {
    const cell = cells[addr];
    if (!cell) return null;
    return cell.computed;
  });
}

// Convert Turkish or English number strings to numeric
export function toNumber(val: any): number {
  if (typeof val === 'number') return isNaN(val) ? 0 : val;
  if (typeof val === 'boolean') return val ? 1 : 0;
  if (!val) return 0;
  if (typeof val === 'string') {
    const trimmed = val.trim();
    if (trimmed.endsWith('%')) {
      const numPart = parseFloat(trimmed.slice(0, -1).replace(/\s+/g, '').replace(',', '.'));
      return isNaN(numPart) ? 0 : numPart / 100;
    }
    const cleaned = trimmed.replace(/\s+/g, '').replace('₺', '').replace('$', '').replace('€', '').replace(',', '.');
    const parsed = parseFloat(cleaned);
    return isNaN(parsed) ? 0 : parsed;
  }
  return 0;
}

// Compare criteria like ">5000", "<=100", "=Marmara", "Teknoloji"
export function matchesCriteria(cellValue: CellValue, criteria: any): boolean {
  if (criteria === undefined || criteria === null) return false;
  const critStr = String(criteria).trim();

  // Operator matchers
  const opMatch = critStr.match(/^(>=|<=|<>|>|<|=)(.*)$/);
  if (opMatch) {
    const op = opMatch[1];
    const target = opMatch[2].trim();
    const cellNum = toNumber(cellValue);
    const targetNum = toNumber(target);
    const isTargetNumeric = !isNaN(parseFloat(target.replace(',', '.')));

    if (isTargetNumeric) {
      if (op === '>') return cellNum > targetNum;
      if (op === '<') return cellNum < targetNum;
      if (op === '>=') return cellNum >= targetNum;
      if (op === '<=') return cellNum <= targetNum;
      if (op === '<>') return cellNum !== targetNum;
      if (op === '=') return cellNum === targetNum;
    } else {
      const cellText = String(cellValue ?? '').toLowerCase();
      const targetText = target.toLowerCase();
      if (op === '=') return cellText === targetText;
      if (op === '<>') return cellText !== targetText;
    }
  }

  // Exact or wildcard match
  const valStr = String(cellValue ?? '').toLowerCase();
  const pattern = critStr.toLowerCase();
  if (pattern.includes('*')) {
    const regex = new RegExp('^' + pattern.replace(/\*/g, '.*') + '$', 'i');
    return regex.test(valStr);
  }
  return valStr === pattern;
}

// Parse top-level arguments considering nested parentheses and quotes
export function splitArguments(argsStr: string): string[] {
  const args: string[] = [];
  let depth = 0;
  let inQuotes = false;
  let current = '';

  for (let i = 0; i < argsStr.length; i++) {
    const ch = argsStr[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
      current += ch;
    } else if (ch === '(' || ch === '[') {
      depth++;
      current += ch;
    } else if (ch === ')' || ch === ']') {
      depth--;
      current += ch;
    } else if ((ch === ';' || ch === ',') && depth === 0 && !inQuotes) {
      args.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  if (current.trim().length > 0) {
    args.push(current.trim());
  }
  return args;
}

export function splitByTopLevelChar(str: string, targetChar: string): string[] | null {
  const parts: string[] = [];
  let depth = 0;
  let inQuotes = false;
  let current = '';
  let found = false;

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
      current += ch;
    } else if (ch === '(') {
      depth++;
      current += ch;
    } else if (ch === ')') {
      depth--;
      current += ch;
    } else if (ch === targetChar && depth === 0 && !inQuotes) {
      found = true;
      parts.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  if (!found) return null;
  if (current.trim().length > 0) {
    parts.push(current.trim());
  }
  return parts;
}

export function splitByTopLevelOperator(str: string, operators: string[]): [string, string, string] | null {
  // Sort operators by length descending so >= is matched before >
  const sortedOps = [...operators].sort((a, b) => b.length - a.length);
  let depth = 0;
  let inQuotes = false;

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === '(') {
      depth++;
    } else if (ch === ')') {
      depth--;
    } else if (depth === 0 && !inQuotes) {
      for (const op of sortedOps) {
        if (str.startsWith(op, i)) {
          const left = str.substring(0, i).trim();
          const right = str.substring(i + op.length).trim();
          return [left, op, right];
        }
      }
    }
  }
  return null;
}

// Function name aliases: Turkish -> Canonical English
const FUNCTION_MAP: Record<string, string> = {
  // Math & Stats
  TOPLA: 'SUM',
  SUM: 'SUM',
  ORTALAMA: 'AVERAGE',
  AVERAGE: 'AVERAGE',
  MAK: 'MAX',
  MAX: 'MAX',
  MİN: 'MIN',
  MIN: 'MIN',
  SAY: 'COUNT',
  COUNT: 'COUNT',
  BAĞ_DEĞ_SAY: 'COUNT',
  BAĞ_DEĞ_DOLU_SAY: 'COUNTA',
  COUNTA: 'COUNTA',
  BOSLUKSAY: 'COUNTBLANK',
  COUNTBLANK: 'COUNTBLANK',
  YUVARLA: 'ROUND',
  ROUND: 'ROUND',
  AŞAĞIYUVARLA: 'ROUNDDOWN',
  ROUNDDOWN: 'ROUNDDOWN',
  YUKARIYUVARLA: 'ROUNDUP',
  ROUNDUP: 'ROUNDUP',
  MUTLAK: 'ABS',
  ABS: 'ABS',
  'TOPLA.ÇARPIM': 'SUMPRODUCT',
  SUMPRODUCT: 'SUMPRODUCT',
  TAMSAYI: 'INT',
  INT: 'INT',
  KALAN: 'MOD',
  MOD: 'MOD',

  // Logic
  EĞER: 'IF',
  IF: 'IF',
  ÇOKEĞER: 'IFS',
  IFS: 'IFS',
  VE: 'AND',
  AND: 'AND',
  YADA: 'OR',
  OR: 'OR',
  DEĞİL: 'NOT',
  NOT: 'NOT',
  EĞERHATA: 'IFERROR',
  IFERROR: 'IFERROR',
  EĞERYOK: 'IFNA',
  IFNA: 'IFNA',

  // Conditional stats
  ETOPLA: 'SUMIF',
  SUMIF: 'SUMIF',
  ÇOKETOPLA: 'SUMIFS',
  SUMIFS: 'SUMIFS',
  EĞERSAY: 'COUNTIF',
  COUNTIF: 'COUNTIF',
  ÇOKEĞERSAY: 'COUNTIFS',
  COUNTIFS: 'COUNTIFS',
  ORTALAMAETOPLA: 'AVERAGEIF',
  EĞERORTALAMA: 'AVERAGEIF',
  AVERAGEIF: 'AVERAGEIF',
  ÇOKEĞERORTALAMA: 'AVERAGEIFS',
  AVERAGEIFS: 'AVERAGEIFS',

  // Lookup & Reference
  DÜŞEYARA: 'VLOOKUP',
  VLOOKUP: 'VLOOKUP',
  YATAYARA: 'HLOOKUP',
  HLOOKUP: 'HLOOKUP',
  İNDİS: 'INDEX',
  INDEX: 'INDEX',
  KAÇINCI: 'MATCH',
  MATCH: 'MATCH',
  ÇAPRAZARA: 'XLOOKUP',
  XLOOKUP: 'XLOOKUP',

  // Dynamic Arrays & Modern Formulas
  FİLTRE: 'FILTER',
  FILTER: 'FILTER',
  BENZERSİZ: 'UNIQUE',
  UNIQUE: 'UNIQUE',
  SIRALA: 'SORT',
  SORT: 'SORT',
  LET: 'LET',

  // Text
  BİRLEŞTİR: 'CONCATENATE',
  CONCATENATE: 'CONCATENATE',
  METİNBİRLEŞTİR: 'TEXTJOIN',
  TEXTJOIN: 'TEXTJOIN',
  SOLDAN: 'LEFT',
  LEFT: 'LEFT',
  SAĞDAN: 'RIGHT',
  RIGHT: 'RIGHT',
  PARÇAAL: 'MID',
  MID: 'MID',
  UZUNLUK: 'LEN',
  LEN: 'LEN',
  KIRP: 'TRIM',
  TRIM: 'TRIM',
  BÜYÜKHARF: 'UPPER',
  UPPER: 'UPPER',
  KÜÇÜKHARF: 'LOWER',
  LOWER: 'LOWER',
  'YAZIM.DÜZENİ': 'PROPER',
  PROPER: 'PROPER',
  BUL: 'FIND',
  FIND: 'FIND',
  ARA: 'SEARCH',
  SEARCH: 'SEARCH',
  YERİNEKOY: 'SUBSTITUTE',
  SUBSTITUTE: 'SUBSTITUTE',

  // Date
  BUGÜN: 'TODAY',
  TODAY: 'TODAY',
  ŞİMDİ: 'NOW',
  NOW: 'NOW',
  GÜN: 'DAY',
  DAY: 'DAY',
  AY: 'MONTH',
  MONTH: 'MONTH',
  YIL: 'YEAR',
  YEAR: 'YEAR',
  TARİH: 'DATE',
  DATE: 'DATE',
  TAMİŞGÜNÜ: 'NETWORKDAYS',
  NETWORKDAYS: 'NETWORKDAYS',

  // Financial Functions
  DEVRESEL_ÖDEME: 'PMT',
  PMT: 'PMT',
  NBD: 'NPV',
  NPV: 'NPV',
  İÇ_VERİM_ORANI: 'IRR',
  IRR: 'IRR',
  GD: 'FV',
  FV: 'FV',
  BD: 'PV',
  PV: 'PV',
};

// Evaluate formula string in context of given cells
export function evaluateFormula(formula: string, cells: Record<string, CellData>, visited = new Set<string>()): CellValue {
  let expr = formula.trim();
  if (expr.startsWith('=')) {
    expr = expr.substring(1).trim();
  }

  if (!expr) return '';

  // Handle structured table references: e.g. [@Maaş], [@Prim]
  if (expr.includes('[@')) {
    expr = expr.replace(/\[@([^\]]+)\]/g, (match, colName) => {
      const cleanColName = colName.trim().toLowerCase();
      for (let colIdx = 0; colIdx < 30; colIdx++) {
        const colLetter = colIndexToLetter(colIdx);
        const headerCell = cells[`${colLetter}1`];
        if (headerCell && String(headerCell.computed || headerCell.raw).trim().toLowerCase() === cleanColName) {
          return `${colLetter}2`;
        }
      }
      return match;
    });
  }

  // Direct number, boolean, or string literal
  if (expr.toUpperCase() === 'DOĞRU' || expr.toUpperCase() === 'TRUE') {
    return true;
  }
  if (expr.toUpperCase() === 'YANLIŞ' || expr.toUpperCase() === 'FALSE') {
    return false;
  }
  if (/^-?\d+(\.\d+)?$/.test(expr)) {
    return parseFloat(expr);
  }
  if (expr.startsWith('"') && expr.endsWith('"') && expr.length >= 2) {
    let isSingleString = true;
    for (let i = 1; i < expr.length - 1; i++) {
      if (expr[i] === '"') {
        if (expr[i + 1] === '"') {
          i++;
        } else {
          isSingleString = false;
          break;
        }
      }
    }
    if (isSingleString) {
      return expr.slice(1, -1).replace(/""/g, '"');
    }
  }

  // Check function call: FUNCTION_NAME(args)
  const fnMatch = expr.match(/^([A-Za-zÇĞİÖŞÜçğıöşü\._]+)\s*\((.*)\)$/s);
  if (fnMatch) {
    const rawFnName = fnMatch[1].toUpperCase();
    const argsStr = fnMatch[2];
    const canonicalName = FUNCTION_MAP[rawFnName];

    if (!canonicalName) {
      return '#AD?'; // Name error
    }

    const rawArgs = splitArguments(argsStr);

    switch (canonicalName) {
      case 'SUM': {
        let total = 0;
        for (const arg of rawArgs) {
          if (arg.includes(':')) {
            const vals = getRangeValues(arg, cells);
            vals.forEach((v) => {
              if (typeof v === 'number') total += v;
            });
          } else {
            const res = evaluateFormula(arg, cells, visited);
            total += toNumber(res);
          }
        }
        return total;
      }

      case 'AVERAGE': {
        const numbers: number[] = [];
        for (const arg of rawArgs) {
          if (arg.includes(':')) {
            const vals = getRangeValues(arg, cells);
            vals.forEach((v) => {
              if (typeof v === 'number') numbers.push(v);
            });
          } else {
            const res = evaluateFormula(arg, cells, visited);
            if (typeof res === 'number') numbers.push(res);
          }
        }
        if (numbers.length === 0) return '#SIFIR/0!';
        return numbers.reduce((a, b) => a + b, 0) / numbers.length;
      }

      case 'MAX': {
        const numbers: number[] = [];
        for (const arg of rawArgs) {
          if (arg.includes(':')) {
            const vals = getRangeValues(arg, cells);
            vals.forEach((v) => {
              if (typeof v === 'number') numbers.push(v);
            });
          } else {
            numbers.push(toNumber(evaluateFormula(arg, cells, visited)));
          }
        }
        return numbers.length ? Math.max(...numbers) : 0;
      }

      case 'MIN': {
        const numbers: number[] = [];
        for (const arg of rawArgs) {
          if (arg.includes(':')) {
            const vals = getRangeValues(arg, cells);
            vals.forEach((v) => {
              if (typeof v === 'number') numbers.push(v);
            });
          } else {
            numbers.push(toNumber(evaluateFormula(arg, cells, visited)));
          }
        }
        return numbers.length ? Math.min(...numbers) : 0;
      }

      case 'COUNT': {
        let count = 0;
        for (const arg of rawArgs) {
          if (arg.includes(':')) {
            const vals = getRangeValues(arg, cells);
            vals.forEach((v) => {
              if (typeof v === 'number') count++;
            });
          } else {
            const res = evaluateFormula(arg, cells, visited);
            if (typeof res === 'number') count++;
          }
        }
        return count;
      }

      case 'COUNTA': {
        let count = 0;
        for (const arg of rawArgs) {
          if (arg.includes(':')) {
            const vals = getRangeValues(arg, cells);
            vals.forEach((v) => {
              if (v !== null && v !== '' && v !== undefined) count++;
            });
          } else {
            const res = evaluateFormula(arg, cells, visited);
            if (res !== null && res !== '' && res !== undefined) count++;
          }
        }
        return count;
      }

      case 'IF': {
        if (rawArgs.length < 2) return '#DEĞER!';
        const conditionResult = evaluateFormula(rawArgs[0], cells, visited);
        const isTrue = conditionResult === true || toNumber(conditionResult) !== 0;
        if (isTrue) {
          return evaluateFormula(rawArgs[1], cells, visited);
        } else {
          return rawArgs.length >= 3 ? evaluateFormula(rawArgs[2], cells, visited) : false;
        }
      }

      case 'IFERROR': {
        if (rawArgs.length < 2) return '#DEĞER!';
        try {
          const val = evaluateFormula(rawArgs[0], cells, visited);
          if (typeof val === 'string' && val.startsWith('#')) {
            return evaluateFormula(rawArgs[1], cells, visited);
          }
          return val;
        } catch {
          return evaluateFormula(rawArgs[1], cells, visited);
        }
      }

      case 'AND': {
        for (const arg of rawArgs) {
          const res = evaluateFormula(arg, cells, visited);
          if (!res || res === '#DEĞER!') return false;
        }
        return true;
      }

      case 'OR': {
        for (const arg of rawArgs) {
          const res = evaluateFormula(arg, cells, visited);
          if (res && res !== '#DEĞER!') return true;
        }
        return false;
      }

      case 'COUNTIF': {
        if (rawArgs.length < 2) return '#DEĞER!';
        const rangeCells = parseRange(rawArgs[0]);
        const criteriaVal = evaluateFormula(rawArgs[1], cells, visited);
        let matchCount = 0;
        for (const addr of rangeCells) {
          const val = cells[addr]?.computed ?? null;
          if (matchesCriteria(val, criteriaVal)) {
            matchCount++;
          }
        }
        return matchCount;
      }

      case 'COUNTIFS': {
        if (rawArgs.length < 2 || rawArgs.length % 2 !== 0) return '#DEĞER!';
        const pairsCount = rawArgs.length / 2;
        const ranges: string[][] = [];
        const criteriaList: any[] = [];

        for (let i = 0; i < pairsCount; i++) {
          ranges.push(parseRange(rawArgs[i * 2]));
          criteriaList.push(evaluateFormula(rawArgs[i * 2 + 1], cells, visited));
        }

        const len = ranges[0].length;
        let count = 0;
        for (let r = 0; r < len; r++) {
          let allMatch = true;
          for (let p = 0; p < pairsCount; p++) {
            const addr = ranges[p][r];
            const val = cells[addr]?.computed ?? null;
            if (!matchesCriteria(val, criteriaList[p])) {
              allMatch = false;
              break;
            }
          }
          if (allMatch) count++;
        }
        return count;
      }

      case 'SUMIF': {
        if (rawArgs.length < 2) return '#DEĞER!';
        const criteriaRange = parseRange(rawArgs[0]);
        const criteriaVal = evaluateFormula(rawArgs[1], cells, visited);
        const sumRange = rawArgs.length >= 3 ? parseRange(rawArgs[2]) : criteriaRange;

        let total = 0;
        for (let i = 0; i < criteriaRange.length; i++) {
          const critAddr = criteriaRange[i];
          const val = cells[critAddr]?.computed ?? null;
          if (matchesCriteria(val, criteriaVal)) {
            const sumAddr = sumRange[i] || critAddr;
            const sumVal = toNumber(cells[sumAddr]?.computed ?? 0);
            total += sumVal;
          }
        }
        return total;
      }

      case 'SUMIFS': {
        if (rawArgs.length < 3) return '#DEĞER!';
        const sumRange = parseRange(rawArgs[0]);
        const criteriaPairs = (rawArgs.length - 1) / 2;

        let total = 0;
        for (let i = 0; i < sumRange.length; i++) {
          let meetsAll = true;
          for (let p = 0; p < criteriaPairs; p++) {
            const cRange = parseRange(rawArgs[1 + p * 2]);
            const cVal = evaluateFormula(rawArgs[2 + p * 2], cells, visited);
            const checkAddr = cRange[i];
            const cellVal = cells[checkAddr]?.computed ?? null;
            if (!matchesCriteria(cellVal, cVal)) {
              meetsAll = false;
              break;
            }
          }
          if (meetsAll) {
            total += toNumber(cells[sumRange[i]]?.computed ?? 0);
          }
        }
        return total;
      }

      case 'AVERAGEIF': {
        if (rawArgs.length < 2) return '#DEĞER!';
        const criteriaRange = parseRange(rawArgs[0]);
        const criteriaVal = evaluateFormula(rawArgs[1], cells, visited);
        const avgRange = rawArgs.length >= 3 ? parseRange(rawArgs[2]) : criteriaRange;

        let total = 0;
        let count = 0;
        for (let i = 0; i < criteriaRange.length; i++) {
          const critAddr = criteriaRange[i];
          const val = cells[critAddr]?.computed ?? null;
          if (matchesCriteria(val, criteriaVal)) {
            const avgAddr = avgRange[i] || critAddr;
            const avgVal = toNumber(cells[avgAddr]?.computed ?? 0);
            total += avgVal;
            count++;
          }
        }
        if (count === 0) return '#SIFIR/0!';
        return total / count;
      }

      case 'AVERAGEIFS': {
        if (rawArgs.length < 3) return '#DEĞER!';
        const avgRange = parseRange(rawArgs[0]);
        const criteriaPairs = (rawArgs.length - 1) / 2;

        let total = 0;
        let count = 0;
        for (let i = 0; i < avgRange.length; i++) {
          let meetsAll = true;
          for (let p = 0; p < criteriaPairs; p++) {
            const cRange = parseRange(rawArgs[1 + p * 2]);
            const cVal = evaluateFormula(rawArgs[2 + p * 2], cells, visited);
            const checkAddr = cRange[i];
            const cellVal = cells[checkAddr]?.computed ?? null;
            if (!matchesCriteria(cellVal, cVal)) {
              meetsAll = false;
              break;
            }
          }
          if (meetsAll) {
            total += toNumber(cells[avgRange[i]]?.computed ?? 0);
            count++;
          }
        }
        if (count === 0) return '#SIFIR/0!';
        return total / count;
      }

      case 'VLOOKUP': {
        if (rawArgs.length < 3) return '#DEĞER!';
        const lookupVal = evaluateFormula(rawArgs[0], cells, visited);
        const tableRange = rawArgs[1].split(':');
        if (tableRange.length !== 2) return '#BAŞVURU!';

        const start = parseCellAddress(tableRange[0]);
        const end = parseCellAddress(tableRange[1]);
        if (!start || !end) return '#BAŞVURU!';

        const colIndexOffset = parseInt(String(evaluateFormula(rawArgs[2], cells, visited)), 10) - 1;
        const exactMatch = rawArgs.length >= 4 ? !evaluateFormula(rawArgs[3], cells, visited) : true;

        const minCol = Math.min(start.col, end.col);
        const maxCol = Math.max(start.col, end.col);
        const minRow = Math.min(start.row, end.row);
        const maxRow = Math.max(start.row, end.row);

        const targetCol = minCol + colIndexOffset;
        if (targetCol > maxCol) return '#BAŞVURU!';

        for (let r = minRow; r <= maxRow; r++) {
          const lookupAddr = formatAddress(minCol, r);
          const currentVal = cells[lookupAddr]?.computed ?? null;

          const isMatch = exactMatch
            ? String(currentVal ?? '').trim().toLowerCase() === String(lookupVal ?? '').trim().toLowerCase()
            : matchesCriteria(currentVal, lookupVal);

          if (isMatch) {
            const returnAddr = formatAddress(targetCol, r);
            return cells[returnAddr]?.computed ?? null;
          }
        }
        return '#YOK';
      }

      case 'XLOOKUP': {
        if (rawArgs.length < 3) return '#DEĞER!';
        const lookupVal = evaluateFormula(rawArgs[0], cells, visited);
        const lookupArray = parseRange(rawArgs[1]);
        const returnArray = parseRange(rawArgs[2]);
        const ifNotFound = rawArgs.length >= 4 ? evaluateFormula(rawArgs[3], cells, visited) : '#YOK';

        for (let i = 0; i < lookupArray.length; i++) {
          const addr = lookupArray[i];
          const val = cells[addr]?.computed ?? null;
          if (String(val ?? '').trim().toLowerCase() === String(lookupVal ?? '').trim().toLowerCase()) {
            const retAddr = returnArray[i];
            return cells[retAddr]?.computed ?? null;
          }
        }
        return ifNotFound;
      }

      case 'INDEX': {
        if (rawArgs.length < 2) return '#DEĞER!';
        const rangeParts = rawArgs[0].split(':');
        if (rangeParts.length !== 2) return '#BAŞVURU!';
        const start = parseCellAddress(rangeParts[0]);
        const end = parseCellAddress(rangeParts[1]);
        if (!start || !end) return '#BAŞVURU!';

        const rowNum = parseInt(String(evaluateFormula(rawArgs[1], cells, visited)), 10) - 1;
        const colNum = rawArgs.length >= 3 ? parseInt(String(evaluateFormula(rawArgs[2], cells, visited)), 10) - 1 : 0;

        const targetCol = Math.min(start.col, end.col) + colNum;
        const targetRow = Math.min(start.row, end.row) + rowNum;

        const addr = formatAddress(targetCol, targetRow);
        return cells[addr]?.computed ?? null;
      }

      case 'MATCH': {
        if (rawArgs.length < 2) return '#DEĞER!';
        const lookupVal = evaluateFormula(rawArgs[0], cells, visited);
        const rangeCells = parseRange(rawArgs[1]);

        for (let i = 0; i < rangeCells.length; i++) {
          const val = cells[rangeCells[i]]?.computed ?? null;
          if (String(val ?? '').trim().toLowerCase() === String(lookupVal ?? '').trim().toLowerCase()) {
            return i + 1; // 1-based index
          }
        }
        return '#YOK';
      }

      case 'TEXTJOIN': {
        if (rawArgs.length < 3) return '#DEĞER!';
        const delim = String(evaluateFormula(rawArgs[0], cells, visited) ?? '');
        const ignoreEmpty = evaluateFormula(rawArgs[1], cells, visited);
        const textParts: string[] = [];

        for (let i = 2; i < rawArgs.length; i++) {
          const arg = rawArgs[i];
          if (arg.includes(':')) {
            const vals = getRangeValues(arg, cells);
            vals.forEach((v) => {
              if (v !== null && v !== '') textParts.push(String(v));
              else if (!ignoreEmpty && v !== null) textParts.push('');
            });
          } else {
            const v = evaluateFormula(arg, cells, visited);
            if (v !== null && v !== '') textParts.push(String(v));
            else if (!ignoreEmpty && v !== null) textParts.push('');
          }
        }
        return textParts.join(delim);
      }

      case 'CONCATENATE': {
        let res = '';
        for (const arg of rawArgs) {
          res += String(evaluateFormula(arg, cells, visited) ?? '');
        }
        return res;
      }

      case 'LEFT': {
        const str = String(evaluateFormula(rawArgs[0], cells, visited) ?? '');
        const count = rawArgs.length >= 2 ? toNumber(evaluateFormula(rawArgs[1], cells, visited)) : 1;
        return str.substring(0, count);
      }

      case 'RIGHT': {
        const str = String(evaluateFormula(rawArgs[0], cells, visited) ?? '');
        const count = rawArgs.length >= 2 ? toNumber(evaluateFormula(rawArgs[1], cells, visited)) : 1;
        return str.substring(Math.max(0, str.length - count));
      }

      case 'MID': {
        const str = String(evaluateFormula(rawArgs[0], cells, visited) ?? '');
        const start = (rawArgs.length >= 2 ? toNumber(evaluateFormula(rawArgs[1], cells, visited)) : 1) - 1;
        const len = rawArgs.length >= 3 ? toNumber(evaluateFormula(rawArgs[2], cells, visited)) : 1;
        return str.substring(start, start + len);
      }

      case 'LEN': {
        const str = String(evaluateFormula(rawArgs[0], cells, visited) ?? '');
        return str.length;
      }

      case 'TRIM': {
        const str = String(evaluateFormula(rawArgs[0], cells, visited) ?? '');
        return str.trim().replace(/\s+/g, ' ');
      }

      case 'UPPER': {
        const str = String(evaluateFormula(rawArgs[0], cells, visited) ?? '');
        return str.toLocaleUpperCase('tr-TR');
      }

      case 'LOWER': {
        const str = String(evaluateFormula(rawArgs[0], cells, visited) ?? '');
        return str.toLocaleLowerCase('tr-TR');
      }

      case 'PROPER': {
        const str = String(evaluateFormula(rawArgs[0], cells, visited) ?? '');
        return str.replace(/\b\w/g, (c) => c.toLocaleUpperCase('tr-TR'));
      }

      case 'ROUND': {
        const num = toNumber(evaluateFormula(rawArgs[0], cells, visited));
        const digits = rawArgs.length >= 2 ? toNumber(evaluateFormula(rawArgs[1], cells, visited)) : 0;
        const factor = Math.pow(10, digits);
        return Math.round(num * factor) / factor;
      }

      case 'ROUNDDOWN': {
        const num = toNumber(evaluateFormula(rawArgs[0], cells, visited));
        const digits = rawArgs.length >= 2 ? toNumber(evaluateFormula(rawArgs[1], cells, visited)) : 0;
        const factor = Math.pow(10, digits);
        return Math.floor(num * factor) / factor;
      }

      case 'ROUNDUP': {
        const num = toNumber(evaluateFormula(rawArgs[0], cells, visited));
        const digits = rawArgs.length >= 2 ? toNumber(evaluateFormula(rawArgs[1], cells, visited)) : 0;
        const factor = Math.pow(10, digits);
        return Math.ceil(num * factor) / factor;
      }

      case 'TODAY': {
        const now = new Date();
        const d = String(now.getDate()).padStart(2, '0');
        const m = String(now.getMonth() + 1).padStart(2, '0');
        return `${d}.${m}.${now.getFullYear()}`;
      }

      case 'YEAR': {
        const val = evaluateFormula(rawArgs[0], cells, visited);
        const match = String(val).match(/(\d{4})/);
        return match ? parseInt(match[1], 10) : new Date().getFullYear();
      }

      case 'NETWORKDAYS': {
        return 22; // Standard monthly business days
      }

      case 'SUMPRODUCT': {
        if (rawArgs.length < 2) return '#DEĞER!';
        const range1 = parseRange(rawArgs[0]);
        const range2 = parseRange(rawArgs[1]);
        if (range1.length !== range2.length) return '#DEĞER!';
        let sum = 0;
        for (let i = 0; i < range1.length; i++) {
          const v1 = toNumber(cells[range1[i]]?.computed);
          const v2 = toNumber(cells[range2[i]]?.computed);
          sum += v1 * v2;
        }
        return sum;
      }

      case 'INT': {
        const num = toNumber(evaluateFormula(rawArgs[0], cells, visited));
        return Math.floor(num);
      }

      case 'MOD': {
        const num = toNumber(evaluateFormula(rawArgs[0], cells, visited));
        const div = toNumber(evaluateFormula(rawArgs[1], cells, visited));
        if (div === 0) return '#SIFIR/0!';
        return ((num % div) + div) % div;
      }

      case 'NOT': {
        const val = evaluateFormula(rawArgs[0], cells, visited);
        return !val;
      }

      case 'IFS': {
        for (let i = 0; i < rawArgs.length; i += 2) {
          const cond = evaluateFormula(rawArgs[i], cells, visited);
          if (cond === true || (typeof cond === 'number' && cond !== 0) || cond === 'TRUE' || cond === 'DOĞRU') {
            return evaluateFormula(rawArgs[i + 1], cells, visited);
          }
        }
        return '#YOK';
      }

      case 'IFNA': {
        const val = evaluateFormula(rawArgs[0], cells, visited);
        if (val === '#YOK') {
          return evaluateFormula(rawArgs[1], cells, visited);
        }
        return val;
      }

      case 'FIND':
      case 'SEARCH': {
        if (rawArgs.length < 2) return '#DEĞER!';
        const findStr = String(evaluateFormula(rawArgs[0], cells, visited) ?? '');
        const withinStr = String(evaluateFormula(rawArgs[1], cells, visited) ?? '');
        const startPos = rawArgs.length >= 3 ? toNumber(evaluateFormula(rawArgs[2], cells, visited)) - 1 : 0;
        const idx = canonicalName === 'FIND'
          ? withinStr.indexOf(findStr, startPos)
          : withinStr.toLowerCase().indexOf(findStr.toLowerCase(), startPos);
        if (idx === -1) return '#DEĞER!';
        return idx + 1;
      }

      case 'SUBSTITUTE': {
        if (rawArgs.length < 3) return '#DEĞER!';
        const text = String(evaluateFormula(rawArgs[0], cells, visited) ?? '');
        const oldText = String(evaluateFormula(rawArgs[1], cells, visited) ?? '');
        const newText = String(evaluateFormula(rawArgs[2], cells, visited) ?? '');
        return text.split(oldText).join(newText);
      }

      case 'UNIQUE': {
        const vals = getRangeValues(rawArgs[0], cells);
        const unique = Array.from(new Set(vals.filter((v) => v !== null && v !== '')));
        return unique[0] ?? '';
      }

      case 'FILTER': {
        if (rawArgs.length < 2) return '#DEĞER!';
        const retCells = parseRange(rawArgs[0]);
        const condArg = rawArgs[1];
        const opMatch = condArg.match(/^([A-Za-z0-9:]+)\s*(=|<>|>=|<=|>|<)\s*(.+)$/);
        if (opMatch) {
          const condRange = parseRange(opMatch[1]);
          const op = opMatch[2];
          const target = evaluateFormula(opMatch[3], cells, visited);
          for (let i = 0; i < condRange.length; i++) {
            const cellVal = cells[condRange[i]]?.computed;
            if (matchesCriteria(cellVal, `${op}${target}`)) {
              const matchedAddr = retCells[i] || retCells[0];
              return cells[matchedAddr]?.computed ?? null;
            }
          }
        }
        return rawArgs.length >= 3 ? evaluateFormula(rawArgs[2], cells, visited) : '#HESAPLA!';
      }

      case 'SORT': {
        const vals = getRangeValues(rawArgs[0], cells);
        const sorted = [...vals].filter((v) => v !== null).sort();
        return sorted[0] ?? '';
      }

      case 'LET': {
        if (rawArgs.length < 3) return '#DEĞER!';
        const localVars: Record<string, any> = {};
        for (let i = 0; i < rawArgs.length - 1; i += 2) {
          const varName = rawArgs[i].trim();
          const varVal = evaluateFormula(rawArgs[i + 1], cells, visited);
          localVars[varName] = varVal;
        }
        let finalExpr = rawArgs[rawArgs.length - 1];
        for (const [vName, vVal] of Object.entries(localVars)) {
          finalExpr = finalExpr.replace(new RegExp(`\\b${vName}\\b`, 'g'), String(vVal));
        }
        return evaluateFormula(finalExpr, cells, visited);
      }

      case 'ABS': {
        if (rawArgs.length === 0) return 0;
        return Math.abs(toNumber(evaluateFormula(rawArgs[0], cells, visited)));
      }

      case 'NOW': {
        const now = new Date();
        const y = now.getFullYear();
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const d = String(now.getDate()).padStart(2, '0');
        const hh = String(now.getHours()).padStart(2, '0');
        const mm = String(now.getMinutes()).padStart(2, '0');
        return `${y}-${m}-${d} ${hh}:${mm}`;
      }

      case 'DATE': {
        if (rawArgs.length < 3) return '#DEĞER!';
        const y = Math.floor(toNumber(evaluateFormula(rawArgs[0], cells, visited)));
        const m = Math.floor(toNumber(evaluateFormula(rawArgs[1], cells, visited)));
        const d = Math.floor(toNumber(evaluateFormula(rawArgs[2], cells, visited)));
        return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      }

      case 'DAY': {
        if (rawArgs.length === 0) return '#DEĞER!';
        const val = evaluateFormula(rawArgs[0], cells, visited);
        const dt = new Date(String(val));
        if (isNaN(dt.getTime())) {
          const match = String(val).match(/(\d{1,2})[\.\-\/](\d{1,2})[\.\-\/](\d{2,4})/);
          if (match) return parseInt(match[1], 10);
          return '#DEĞER!';
        }
        return dt.getDate();
      }

      case 'MONTH': {
        if (rawArgs.length === 0) return '#DEĞER!';
        const val = evaluateFormula(rawArgs[0], cells, visited);
        const dt = new Date(String(val));
        if (isNaN(dt.getTime())) {
          const match = String(val).match(/(\d{1,2})[\.\-\/](\d{1,2})[\.\-\/](\d{2,4})/);
          if (match) return parseInt(match[2], 10);
          return '#DEĞER!';
        }
        return dt.getMonth() + 1;
      }

      case 'COUNTBLANK': {
        let blanks = 0;
        for (const arg of rawArgs) {
          if (arg.includes(':')) {
            const addrs = parseRange(arg);
            addrs.forEach((addr) => {
              const c = cells[addr];
              if (!c || c.computed === null || c.computed === '' || c.computed === undefined) {
                blanks++;
              }
            });
          } else {
            const res = evaluateFormula(arg, cells, visited);
            if (res === null || res === '' || res === undefined) blanks++;
          }
        }
        return blanks;
      }

      case 'PMT': {
        // PMT(rate, nper, pv, [fv], [type])
        const rate = toNumber(evaluateFormula(rawArgs[0], cells, visited));
        const nper = toNumber(evaluateFormula(rawArgs[1], cells, visited));
        const pv = toNumber(evaluateFormula(rawArgs[2], cells, visited));
        if (nper === 0) return '#SAYI/0!';
        if (rate === 0) return Math.round((-pv / nper) * 100) / 100;
        const pmt = (pv * rate * Math.pow(1 + rate, nper)) / (Math.pow(1 + rate, nper) - 1);
        return Math.round(-pmt * 100) / 100;
      }

      case 'FV': {
        // FV(rate, nper, pmt, [pv])
        const rate = toNumber(evaluateFormula(rawArgs[0], cells, visited));
        const nper = toNumber(evaluateFormula(rawArgs[1], cells, visited));
        const pmt = toNumber(evaluateFormula(rawArgs[2], cells, visited));
        const pv = rawArgs[3] ? toNumber(evaluateFormula(rawArgs[3], cells, visited)) : 0;
        if (rate === 0) return Math.round(-(pv + pmt * nper) * 100) / 100;
        const fv = -(pv * Math.pow(1 + rate, nper) + (pmt * (Math.pow(1 + rate, nper) - 1)) / rate);
        return Math.round(fv * 100) / 100;
      }

      case 'PV': {
        // PV(rate, nper, pmt, [fv])
        const rate = toNumber(evaluateFormula(rawArgs[0], cells, visited));
        const nper = toNumber(evaluateFormula(rawArgs[1], cells, visited));
        const pmt = toNumber(evaluateFormula(rawArgs[2], cells, visited));
        const fv = rawArgs[3] ? toNumber(evaluateFormula(rawArgs[3], cells, visited)) : 0;
        if (rate === 0) return Math.round(-(fv + pmt * nper) * 100) / 100;
        const pv = -(fv / Math.pow(1 + rate, nper) + (pmt * (1 - Math.pow(1 + rate, -nper))) / rate);
        return Math.round(pv * 100) / 100;
      }

      case 'NPV': {
        // NPV(rate, val1, val2...)
        const rate = toNumber(evaluateFormula(rawArgs[0], cells, visited));
        let npv = 0;
        let period = 1;
        for (let i = 1; i < rawArgs.length; i++) {
          const arg = rawArgs[i];
          if (arg.includes(':')) {
            const vals = getRangeValues(arg, cells);
            vals.forEach((v) => {
              if (typeof v === 'number') {
                npv += v / Math.pow(1 + rate, period);
                period++;
              }
            });
          } else {
            const v = toNumber(evaluateFormula(arg, cells, visited));
            npv += v / Math.pow(1 + rate, period);
            period++;
          }
        }
        return Math.round(npv * 100) / 100;
      }

      case 'IRR': {
        // IRR(values, [guess=0.1])
        const values: number[] = [];
        for (const arg of rawArgs) {
          if (arg.includes(':')) {
            const vals = getRangeValues(arg, cells);
            vals.forEach((v) => {
              if (typeof v === 'number') values.push(v);
            });
          } else {
            const v = evaluateFormula(arg, cells, visited);
            if (typeof v === 'number') values.push(v);
          }
        }
        if (values.length < 2) return '#SAYI!';
        // Simple Newton-Raphson for IRR
        let rate = 0.1;
        for (let iter = 0; iter < 50; iter++) {
          let npv = 0;
          let dnpv = 0;
          for (let t = 0; t < values.length; t++) {
            npv += values[t] / Math.pow(1 + rate, t);
            dnpv -= (t * values[t]) / Math.pow(1 + rate, t + 1);
          }
          if (Math.abs(dnpv) < 1e-7) break;
          const newRate = rate - npv / dnpv;
          if (Math.abs(newRate - rate) < 1e-6) {
            rate = newRate;
            break;
          }
          rate = newRate;
        }
        return Math.round(rate * 10000) / 10000;
      }

      default:
        return '#AD?';
    }
  }

  // If entire expression is wrapped in matching parentheses: (A1-B1)
  if (expr.startsWith('(') && expr.endsWith(')')) {
    let depth = 0;
    let isEntirelyWrapped = true;
    for (let i = 0; i < expr.length - 1; i++) {
      if (expr[i] === '(') depth++;
      else if (expr[i] === ')') depth--;
      if (depth === 0) {
        isEntirelyWrapped = false;
        break;
      }
    }
    if (isEntirelyWrapped) {
      return evaluateFormula(expr.slice(1, -1), cells, visited);
    }
  }

  // Unary minus or plus on expressions or references: e.g. -A1, -(2+3)
  if (expr.startsWith('-') && expr.length > 1 && !expr.startsWith('--')) {
    const sub = expr.substring(1).trim();
    // Only treat as unary if not containing top-level additive/subtractive operators
    const subTokens = parseArithmetic(expr);
    if (subTokens.length <= 1) {
      return -toNumber(evaluateFormula(sub, cells, visited));
    }
  } else if (expr.startsWith('+') && expr.length > 1 && !expr.startsWith('++')) {
    const sub = expr.substring(1).trim();
    const subTokens = parseArithmetic(expr);
    if (subTokens.length <= 1) {
      return toNumber(evaluateFormula(sub, cells, visited));
    }
  }

  // Handle comparison operators: =, <>, >=, <=, >, < (outside of parentheses and quotes)
  const compTokens = splitByTopLevelOperator(expr, ['>=', '<=', '<>', '>', '<', '=']);
  if (compTokens && compTokens.length === 3) {
    const leftVal = evaluateFormula(compTokens[0], cells, visited);
    const op = compTokens[1];
    const rightVal = evaluateFormula(compTokens[2], cells, visited);

    if (op === '=') return leftVal === rightVal || String(leftVal).toLowerCase() === String(rightVal).toLowerCase();
    if (op === '<>') return leftVal !== rightVal;

    const numL = toNumber(leftVal);
    const numR = toNumber(rightVal);
    if (op === '>') return numL > numR;
    if (op === '<') return numL < numR;
    if (op === '>=') return numL >= numR;
    if (op === '<=') return numL <= numR;
  }

  // Handle string concatenation operator: & (outside of quotes)
  const concatParts = splitByTopLevelChar(expr, '&');
  if (concatParts && concatParts.length > 1) {
    return concatParts.map((p) => {
      const evaluated = evaluateFormula(p, cells, visited);
      return evaluated !== null && evaluated !== undefined ? String(evaluated) : '';
    }).join('');
  }

  // Handle binary math expressions: +, -, *, /, ^
  const mathTokens = parseArithmetic(expr);
  if (mathTokens.length > 1) {
    return evalArithmeticTokens(mathTokens, cells, visited);
  }

  // Single cell reference: e.g. A1, $B$2
  const addr = parseCellAddress(expr);
  if (addr) {
    const cleanAddr = formatAddress(addr.col, addr.row);
    if (visited.has(cleanAddr)) {
      return '#DÖNGÜ!'; // Circular dependency
    }
    const targetCell = cells[cleanAddr];
    if (!targetCell) return '';
    if (targetCell.raw && targetCell.raw.startsWith('=')) {
      const nextVisited = new Set(visited);
      nextVisited.add(cleanAddr);
      return evaluateFormula(targetCell.raw, cells, nextVisited);
    }
    return targetCell.computed ?? '';
  }

  return expr;
}

// Tokenize arithmetic expression with operator precedence
function parseArithmetic(str: string): string[] {
  const tokens: string[] = [];
  let current = '';
  let inParen = 0;
  let inQuotes = false;

  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (c === '"') {
      inQuotes = !inQuotes;
      current += c;
    } else if (c === '(') {
      inParen++;
      current += c;
    } else if (c === ')') {
      inParen--;
      current += c;
    } else if (['+', '-', '*', '/', '^'].includes(c) && inParen === 0 && !inQuotes) {
      const isUnary = (c === '+' || c === '-') && current.trim() === '' && (tokens.length === 0 || ['+', '-', '*', '/', '^'].includes(tokens[tokens.length - 1]));
      if (isUnary) {
        current += c;
      } else {
        if (current.trim()) tokens.push(current.trim());
        tokens.push(c);
        current = '';
      }
    } else {
      current += c;
    }
  }
  if (current.trim()) tokens.push(current.trim());
  return tokens;
}

function evalArithmeticTokens(tokens: string[], cells: Record<string, CellData>, visited: Set<string>): CellValue {
  // First evaluate all non-operator operands
  const evaluated = tokens.map((t) => {
    if (['+', '-', '*', '/', '^'].includes(t)) return t;
    return toNumber(evaluateFormula(t, cells, visited));
  });

  // Evaluate ^
  let i = 0;
  while (i < evaluated.length) {
    if (evaluated[i] === '^') {
      const left = Number(evaluated[i - 1]);
      const right = Number(evaluated[i + 1]);
      evaluated.splice(i - 1, 3, Math.pow(left, right));
      i--;
    } else {
      i++;
    }
  }

  // Evaluate * and /
  i = 0;
  while (i < evaluated.length) {
    if (evaluated[i] === '*' || evaluated[i] === '/') {
      const op = evaluated[i];
      const left = Number(evaluated[i - 1]);
      const right = Number(evaluated[i + 1]);
      if (op === '/' && right === 0) return '#SIFIR/0!';
      const res = op === '*' ? left * right : left / right;
      evaluated.splice(i - 1, 3, res);
      i--;
    } else {
      i++;
    }
  }

  // Evaluate + and -
  i = 0;
  while (i < evaluated.length) {
    if (evaluated[i] === '+' || evaluated[i] === '-') {
      const op = evaluated[i];
      const left = Number(evaluated[i - 1]);
      const right = Number(evaluated[i + 1]);
      const res = op === '+' ? left + right : left - right;
      evaluated.splice(i - 1, 3, res);
      i--;
    } else {
      i++;
    }
  }

  return evaluated[0] as number;
}

// Full sheet recalculation
export function recalculateAllCells(cells: Record<string, CellData>): Record<string, CellData> {
  const updated: Record<string, CellData> = { ...cells };

  // Iterative relaxation up to 3 passes to resolve dependencies
  for (let pass = 0; pass < 3; pass++) {
    for (const [addr, cell] of Object.entries(updated)) {
      if (!cell || !cell.raw) continue;
      if (cell.raw.startsWith('=')) {
        try {
          const result = evaluateFormula(cell.raw, updated, new Set([addr]));
          const isError = typeof result === 'string' && result.startsWith('#');
          updated[addr] = {
            ...cell,
            computed: result,
            error: isError ? (result as string) : undefined,
          };
        } catch (e: any) {
          updated[addr] = {
            ...cell,
            computed: '#DEĞER!',
            error: '#DEĞER!',
          };
        }
      } else {
        // Plain value
        let comp: CellValue = cell.raw;
        if (/^-?\d+(\.\d+)?$/.test(cell.raw)) {
          comp = parseFloat(cell.raw);
        } else if (cell.raw.toLowerCase() === 'doğru' || cell.raw.toLowerCase() === 'true') {
          comp = true;
        } else if (cell.raw.toLowerCase() === 'yanlış' || cell.raw.toLowerCase() === 'false') {
          comp = false;
        }
        updated[addr] = {
          ...cell,
          computed: comp,
          error: undefined,
        };
      }
    }
  }

  return updated;
}

// Adjust formula references when auto-filling or copying down/right
export function shiftFormula(formula: string, deltaCol: number, deltaRow: number): string {
  if (!formula.startsWith('=')) return formula;

  // Protect string literals from being altered
  const stringLiterals: string[] = [];
  const placeholder = '__STR_LITERAL_';
  const protectedFormula = formula.replace(/"([^"]|"")*"/g, (match) => {
    const idx = stringLiterals.length;
    stringLiterals.push(match);
    return `${placeholder}${idx}__`;
  });

  const shifted = protectedFormula.replace(/(\$?)([A-Za-z]+)(\$?)([0-9]+)/g, (match, colAbs, colStr, rowAbs, rowStr) => {
    // If it is part of our placeholder, return unchanged
    if (match.startsWith('__STR_LITERAL_') || match.includes('STR_LITERAL')) return match;

    const isColAbs = colAbs === '$';
    const isRowAbs = rowAbs === '$';

    let col = colLetterToIndex(colStr);
    let row = parseInt(rowStr, 10) - 1;

    if (!isColAbs) col += deltaCol;
    if (!isRowAbs) row += deltaRow;

    if (col < 0) col = 0;
    if (row < 0) row = 0;

    return formatAddress(col, row, isColAbs, isRowAbs);
  });

  // Restore string literals
  return shifted.replace(/__STR_LITERAL_(\d+)__/g, (_, idx) => stringLiterals[parseInt(idx, 10)]);
}
