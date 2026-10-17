import { WorkbookData } from '../types/excel';

export function createTableSheet(
  sheetId?: string,
  sheetName?: string,
  headers?: string[],
  rows?: (string | number)[][],
  columnWidths?: Record<string, number>
): WorkbookData {
  const safeId = sheetId || 'sheet1';
  const safeName = sheetName || 'Sayfa 1';
  const safeHeaders = Array.isArray(headers) && headers.length > 0 ? headers : ['Açıklama', 'Değer', 'Sonuç'];
  const safeRows = Array.isArray(rows) ? rows : [];
  const cells: Record<string, any> = {};

  // Headers in row 1
  safeHeaders.forEach((h, colIdx) => {
    const colLetter = String.fromCharCode(65 + colIdx);
    const addr = `${colLetter}1`;
    cells[addr] = {
      raw: h,
      computed: h,
      format: {
        bold: true,
        bgColor: '#047857', // emerald 700
        textColor: '#FFFFFF',
        align: 'center',
        border: 'all',
      },
    };
  });

  // Data in rows 2..
  safeRows.forEach((row, rowIdx) => {
    const rowNum = rowIdx + 2;
    row.forEach((val, colIdx) => {
      const colLetter = String.fromCharCode(65 + colIdx);
      const addr = `${colLetter}${rowNum}`;
      const isNum = typeof val === 'number';
      cells[addr] = {
        raw: String(val),
        computed: val,
        format: {
          align: isNum ? 'right' : 'left',
          border: 'all',
          numberFormat: isNum && val > 1000 ? 'currency' : 'general',
        },
      };
    });
  });

  return {
    activeSheetId: safeId,
    sheets: [
      {
        id: safeId,
        name: safeName,
        cells,
        columnWidths: columnWidths || { A: 140, B: 130, C: 120, D: 140, E: 120 },
      },
    ],
  };
}
