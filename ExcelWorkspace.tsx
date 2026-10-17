import React, { useState, useEffect, useRef } from 'react';
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  DollarSign,
  Percent,
  Sigma,
  ArrowUpDown,
  Download,
  Plus,
  BarChart2,
  HelpCircle,
  Undo2,
  Redo2,
  Maximize2,
  Minimize2,
} from 'lucide-react';
import { Sheet, CellData, CellFormat } from '../../types/excel';
import {
  colIndexToLetter,
  formatAddress,
  parseCellAddress,
  recalculateAllCells,
  shiftFormula,
  toNumber,
} from '../../engine/formulaEngine';

interface ExcelWorkspaceProps {
  sheet: Sheet;
  onSheetChange: (updated: Sheet) => void;
  targetCell?: string; // Cell to highlight from AI Teacher step
  onCellSelect?: (address: string, cell: CellData | null) => void;
  onOpenChartModal?: () => void;
  isSandbox?: boolean;
  isFocusMode?: boolean;
  onToggleFocusMode?: () => void;
}

const TOTAL_COLS = 12; // A through L
const TOTAL_ROWS = 30; // 1 through 30

export const ExcelWorkspace: React.FC<ExcelWorkspaceProps> = ({
  sheet,
  onSheetChange,
  targetCell,
  onCellSelect,
  onOpenChartModal,
  isSandbox = false,
  isFocusMode = false,
  onToggleFocusMode,
}) => {
  const [activeTab, setActiveTab] = useState<'home' | 'insert' | 'formulas' | 'data'>('home');
  const [selectedCellAddr, setSelectedCellAddr] = useState<string>('B2');
  const [editingCellAddr, setEditingCellAddr] = useState<string | null>(null);
  const [editInputVal, setEditInputVal] = useState<string>('');
  const [formulaBarVal, setFormulaBarVal] = useState<string>('');
  const [history, setHistory] = useState<Record<string, CellData>[]>([sheet.cells]);
  const [historyIdx, setHistoryIdx] = useState<number>(0);
  const [clipboard, setClipboard] = useState<{ addr: string; raw: string; format?: CellFormat } | null>(null);

  const gridContainerRef = useRef<HTMLDivElement>(null);
  const inlineInputRef = useRef<HTMLInputElement>(null);
  const formulaInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync active cell formula bar display
  useEffect(() => {
    const cell = sheet.cells[selectedCellAddr];
    const val = cell ? cell.raw : '';
    setFormulaBarVal(val);
    if (onCellSelect) {
      onCellSelect(selectedCellAddr, cell || null);
    }
  }, [selectedCellAddr, sheet.cells]);

  // When editing opens, focus input
  useEffect(() => {
    if (editingCellAddr && inlineInputRef.current) {
      inlineInputRef.current.focus();
    }
  }, [editingCellAddr]);

  // Commit cell change
  const commitCellVal = (addr: string, rawVal: string) => {
    const currentCells = { ...sheet.cells };
    const existingFormat = currentCells[addr]?.format || {};

    currentCells[addr] = {
      raw: rawVal,
      computed: rawVal,
      format: existingFormat,
    };

    const recalculated = recalculateAllCells(currentCells);
    const updatedSheet: Sheet = { ...sheet, cells: recalculated };
    onSheetChange(updatedSheet);

    // Save undo history
    const nextHistory = history.slice(0, historyIdx + 1);
    nextHistory.push(recalculated);
    setHistory(nextHistory);
    setHistoryIdx(nextHistory.length - 1);
  };

  const scrollToTargetCell = (cellToScroll?: string) => {
    const target = cellToScroll || targetCell;
    if (!target) return;
    const targetUpper = target.toUpperCase();
    setSelectedCellAddr(targetUpper);
    const parsed = parseCellAddress(targetUpper);
    if (parsed && gridContainerRef.current) {
      const approxX = parsed.col * 110;
      const approxY = parsed.row * 32;
      gridContainerRef.current.scrollTo({
        left: Math.max(0, approxX - 80),
        top: Math.max(0, approxY - 80),
        behavior: 'smooth',
      });
    }
  };

  const handleCellClick = (addr: string) => {
    // If tapping the cell that is already selected, enter edit mode directly (vital for touch screens)
    if (selectedCellAddr === addr && !editingCellAddr) {
      const cell = sheet.cells[addr];
      setEditingCellAddr(addr);
      setEditInputVal(cell ? cell.raw : '');
      return;
    }

    if (editingCellAddr && editingCellAddr !== addr) {
      commitCellVal(editingCellAddr, editInputVal);
      setEditingCellAddr(null);
    }
    setSelectedCellAddr(addr);
  };

  const handleCellDoubleClick = (addr: string) => {
    const cell = sheet.cells[addr];
    setSelectedCellAddr(addr);
    setEditingCellAddr(addr);
    setEditInputVal(cell ? cell.raw : '');
  };

  const handleKeyDown = (e: React.KeyboardEvent, addr: string) => {
    if (editingCellAddr) {
      if (e.key === 'Enter') {
        commitCellVal(addr, editInputVal);
        setEditingCellAddr(null);
        // Move to next row
        const parsed = parseCellAddress(addr);
        if (parsed) {
          const nextAddr = formatAddress(parsed.col, parsed.row + 1);
          setSelectedCellAddr(nextAddr);
        }
      } else if (e.key === 'Escape') {
        setEditingCellAddr(null);
      }
      return;
    }

    // Navigation & Shortcuts when not actively typing
    const parsed = parseCellAddress(addr);
    if (!parsed) return;

    // Clipboard: Copy (Ctrl+C)
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'c') {
      const cell = sheet.cells[addr];
      if (cell) {
        setClipboard({ addr, raw: cell.raw, format: cell.format });
      }
      e.preventDefault();
      return;
    }

    // Clipboard: Cut (Ctrl+X)
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'x') {
      const cell = sheet.cells[addr];
      if (cell) {
        setClipboard({ addr, raw: cell.raw, format: cell.format });
        commitCellVal(addr, '');
      }
      e.preventDefault();
      return;
    }

    // Clipboard: Paste (Ctrl+V) with automatic formula reference shifting
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'v') {
      if (clipboard) {
        const srcParsed = parseCellAddress(clipboard.addr);
        const destParsed = parseCellAddress(addr);
        let newRaw = clipboard.raw;
        if (srcParsed && destParsed && newRaw.startsWith('=')) {
          const deltaCol = destParsed.col - srcParsed.col;
          const deltaRow = destParsed.row - srcParsed.row;
          newRaw = shiftFormula(newRaw, deltaCol, deltaRow);
        }
        commitCellVal(addr, newRaw);
      }
      e.preventDefault();
      return;
    }

    // Fill Down (Ctrl+D)
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'd') {
      if (parsed.row > 0) {
        const aboveAddr = formatAddress(parsed.col, parsed.row - 1);
        const aboveCell = sheet.cells[aboveAddr];
        if (aboveCell) {
          let newRaw = aboveCell.raw;
          if (newRaw.startsWith('=')) {
            newRaw = shiftFormula(newRaw, 0, 1);
          }
          commitCellVal(addr, newRaw);
        }
      }
      e.preventDefault();
      return;
    }

    // Undo (Ctrl+Z)
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
      handleUndo();
      e.preventDefault();
      return;
    }

    // Redo (Ctrl+Y)
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') {
      handleRedo();
      e.preventDefault();
      return;
    }

    // Delete or Backspace clears cell
    if (e.key === 'Delete' || e.key === 'Backspace') {
      commitCellVal(addr, '');
      e.preventDefault();
      return;
    }

    if (e.key === 'Enter' || e.key === 'F2') {
      handleCellDoubleClick(addr);
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      if (parsed.row > 0) setSelectedCellAddr(formatAddress(parsed.col, parsed.row - 1));
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      if (parsed.row < TOTAL_ROWS - 1) setSelectedCellAddr(formatAddress(parsed.col, parsed.row + 1));
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      if (parsed.col > 0) setSelectedCellAddr(formatAddress(parsed.col - 1, parsed.row));
      e.preventDefault();
    } else if (e.key === 'ArrowRight' || e.key === 'Tab') {
      if (parsed.col < TOTAL_COLS - 1) setSelectedCellAddr(formatAddress(parsed.col + 1, parsed.row));
      e.preventDefault();
    } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
      // Start typing directly
      setSelectedCellAddr(addr);
      setEditingCellAddr(addr);
      setEditInputVal(e.key);
    }
  };

  const handleFormulaBarChange = (val: string) => {
    setFormulaBarVal(val);
  };

  const handleFormulaBarKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      commitCellVal(selectedCellAddr, formulaBarVal);
      formulaInputRef.current?.blur();
    }
  };

  // Formatting operations
  const updateActiveCellFormat = (formatUpdate: Partial<CellFormat>) => {
    const currentCells = { ...sheet.cells };
    const cell = currentCells[selectedCellAddr] || { raw: '', computed: '' };
    const newFormat = { ...(cell.format || {}), ...formatUpdate };

    currentCells[selectedCellAddr] = {
      ...cell,
      format: newFormat,
    };
    onSheetChange({ ...sheet, cells: currentCells });
  };

  // Undo / Redo
  const handleUndo = () => {
    if (historyIdx > 0) {
      const prevIdx = historyIdx - 1;
      setHistoryIdx(prevIdx);
      onSheetChange({ ...sheet, cells: history[prevIdx] });
    }
  };

  const handleRedo = () => {
    if (historyIdx < history.length - 1) {
      const nextIdx = historyIdx + 1;
      setHistoryIdx(nextIdx);
      onSheetChange({ ...sheet, cells: history[nextIdx] });
    }
  };

  // Quick AutoSum: inserts =TOPLA(col2:colN)
  const handleAutoSum = () => {
    const parsed = parseCellAddress(selectedCellAddr);
    if (!parsed || parsed.row === 0) return;
    const colLetter = colIndexToLetter(parsed.col);
    const startRow = 2; // Usually row 1 is header
    const endRow = parsed.row;
    const formula = `=TOPLA(${colLetter}${startRow}:${colLetter}${endRow})`;
    commitCellVal(selectedCellAddr, formula);
    setFormulaBarVal(formula);
  };

  // Export to CSV
  const exportCSV = () => {
    let csv = '';
    for (let r = 0; r < TOTAL_ROWS; r++) {
      const rowValues = [];
      let hasData = false;
      for (let c = 0; c < TOTAL_COLS; c++) {
        const addr = formatAddress(c, r);
        const cell = sheet.cells[addr];
        const val = cell ? String(cell.computed ?? '') : '';
        if (val) hasData = true;
        rowValues.push(`"${val.replace(/"/g, '""')}"`);
      }
      if (hasData) {
        csv += rowValues.join(';') + '\n';
      }
    }
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${sheet.name || 'Excel_Akademi'}.csv`;
    link.click();
  };

  // Export to Excel-compatible XML Spreadsheet (.xls)
  const exportXLSX = () => {
    let xml = `<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Worksheet ss:Name="${sheet.name || 'Sayfa1'}">
  <Table>`;
    for (let r = 0; r < TOTAL_ROWS; r++) {
      let rowXml = '   <Row>';
      let hasData = false;
      for (let c = 0; c < TOTAL_COLS; c++) {
        const addr = formatAddress(c, r);
        const cell = sheet.cells[addr];
        const val = cell?.computed;
        if (val !== undefined && val !== null && val !== '') {
          hasData = true;
          const isNum = typeof val === 'number';
          const type = isNum ? 'Number' : 'String';
          const safeStr = String(val).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
          rowXml += `<Cell><Data ss:Type="${type}">${safeStr}</Data></Cell>`;
        } else {
          rowXml += '<Cell><Data ss:Type="String"></Data></Cell>';
        }
      }
      rowXml += '</Row>';
      if (hasData) xml += '\n' + rowXml;
    }
    xml += '\n  </Table>\n </Worksheet>\n</Workbook>';
    const blob = new Blob([xml], { type: 'application/vnd.ms-excel;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${sheet.name || 'Excel_Akademi'}.xls`;
    link.click();
  };

  // Import CSV file into worksheet
  const handleImportCSV = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      if (!text) return;
      const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
      const newCells: Record<string, CellData> = {};
      lines.forEach((line, r) => {
        if (r >= TOTAL_ROWS) return;
        const cols = line.split(/[;,]/).map((col) => col.trim().replace(/^"|"$/g, ''));
        cols.forEach((val, c) => {
          if (c >= TOTAL_COLS) return;
          const addr = formatAddress(c, r);
          const isNum = !isNaN(Number(val)) && val !== '';
          newCells[addr] = {
            raw: val,
            computed: isNum ? Number(val) : val,
            format: {
              align: isNum ? 'right' : 'left',
              bold: r === 0,
              bgColor: r === 0 ? '#F3F4F6' : undefined,
            },
          };
        });
      });
      const recalculated = recalculateAllCells(newCells);
      onSheetChange({ ...sheet, cells: recalculated });
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // Active cell status calculation for bottom bar
  const activeCellObj = sheet.cells[selectedCellAddr];
  const activeVal = activeCellObj?.computed;
  const isTarget = targetCell && targetCell.toUpperCase() === selectedCellAddr.toUpperCase();

  return (
    <div className="flex flex-col h-full bg-white border border-neutral-200 rounded-lg shadow-xs overflow-hidden select-none">
      {/* 1. Ribbon Tabs & Toolbar */}
      <div className="border-b border-neutral-200 bg-neutral-50/70">
        {/* Ribbon Tab Bar */}
        <div className="flex items-center gap-1 px-3 pt-1 border-b border-neutral-200 bg-neutral-100/60">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-3 py-1 text-xs font-semibold rounded-t-md transition-colors ${
              activeTab === 'home'
                ? 'bg-white text-emerald-800 border-t-2 border-emerald-600 shadow-2xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Giriş
          </button>
          <button
            onClick={() => setActiveTab('insert')}
            className={`px-3 py-1 text-xs font-semibold rounded-t-md transition-colors ${
              activeTab === 'insert'
                ? 'bg-white text-emerald-800 border-t-2 border-emerald-600 shadow-2xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Ekle
          </button>
          <button
            onClick={() => setActiveTab('formulas')}
            className={`px-3 py-1 text-xs font-semibold rounded-t-md transition-colors ${
              activeTab === 'formulas'
                ? 'bg-white text-emerald-800 border-t-2 border-emerald-600 shadow-2xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Formüller
          </button>
          <button
            onClick={() => setActiveTab('data')}
            className={`px-3 py-1 text-xs font-semibold rounded-t-md transition-colors ${
              activeTab === 'data'
                ? 'bg-white text-emerald-800 border-t-2 border-emerald-600 shadow-2xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Veri
          </button>

          {onToggleFocusMode && (
            <button
              onClick={onToggleFocusMode}
              className={`ml-auto flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all cursor-pointer ${
                isFocusMode
                  ? 'bg-emerald-700 text-white shadow-2xs'
                  : 'bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-300'
              }`}
              title={isFocusMode ? 'Odak modundan çık' : 'Excel tablosunu tam ekran yap (Odak Modu)'}
            >
              {isFocusMode ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5 text-emerald-600" />}
              <span className="hidden sm:inline">{isFocusMode ? 'Normal Düzen' : 'Odak Modu'}</span>
            </button>
          )}
        </div>

        {/* Ribbon Controls Container */}
        <div className="flex items-center justify-between px-3 py-1.5 gap-2 overflow-x-auto excel-scrollbar">
          {activeTab === 'home' && (
            <div className="flex items-center gap-2">
              {/* Undo / Redo */}
              <div className="flex items-center border-r border-neutral-200 pr-2 gap-1">
                <button
                  onClick={handleUndo}
                  disabled={historyIdx <= 0}
                  title="Geri Al (Ctrl+Z)"
                  className="p-1.5 rounded hover:bg-neutral-200 text-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <Undo2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleRedo}
                  disabled={historyIdx >= history.length - 1}
                  title="Yinele (Ctrl+Y)"
                  className="p-1.5 rounded hover:bg-neutral-200 text-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <Redo2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Font Styles */}
              <div className="flex items-center border-r border-neutral-200 pr-2 gap-1">
                <button
                  onClick={() => updateActiveCellFormat({ bold: !activeCellObj?.format?.bold })}
                  className={`p-1.5 rounded text-xs font-bold ${
                    activeCellObj?.format?.bold ? 'bg-emerald-100 text-emerald-800' : 'hover:bg-neutral-200 text-neutral-700'
                  }`}
                  title="Kalın (Ctrl+B)"
                >
                  <Bold className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => updateActiveCellFormat({ italic: !activeCellObj?.format?.italic })}
                  className={`p-1.5 rounded text-xs italic ${
                    activeCellObj?.format?.italic ? 'bg-emerald-100 text-emerald-800' : 'hover:bg-neutral-200 text-neutral-700'
                  }`}
                  title="İtalik (Ctrl+I)"
                >
                  <Italic className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => updateActiveCellFormat({ underline: !activeCellObj?.format?.underline })}
                  className={`p-1.5 rounded text-xs underline ${
                    activeCellObj?.format?.underline ? 'bg-emerald-100 text-emerald-800' : 'hover:bg-neutral-200 text-neutral-700'
                  }`}
                  title="Altı Çizili"
                >
                  <Underline className="w-3.5 h-3.5" />
                </button>

                {/* Fill Color Preset */}
                <div className="flex items-center gap-0.5 ml-1">
                  <button
                    onClick={() => updateActiveCellFormat({ bgColor: '#FEF3C7' })}
                    title="Sarı Vurgu"
                    className="w-4 h-4 rounded-xs bg-amber-100 border border-amber-300"
                  />
                  <button
                    onClick={() => updateActiveCellFormat({ bgColor: '#D1FAE5' })}
                    title="Yeşil Vurgu"
                    className="w-4 h-4 rounded-xs bg-emerald-100 border border-emerald-300"
                  />
                  <button
                    onClick={() => updateActiveCellFormat({ bgColor: undefined })}
                    title="Rengi Temizle"
                    className="w-4 h-4 rounded-xs bg-white border border-neutral-300 text-[9px] flex items-center justify-center text-neutral-400"
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Alignments */}
              <div className="flex items-center border-r border-neutral-200 pr-2 gap-1">
                <button
                  onClick={() => updateActiveCellFormat({ align: 'left' })}
                  className={`p-1.5 rounded ${
                    activeCellObj?.format?.align === 'left' ? 'bg-emerald-100 text-emerald-800' : 'hover:bg-neutral-200 text-neutral-700'
                  }`}
                  title="Sola Hizala"
                >
                  <AlignLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => updateActiveCellFormat({ align: 'center' })}
                  className={`p-1.5 rounded ${
                    activeCellObj?.format?.align === 'center' ? 'bg-emerald-100 text-emerald-800' : 'hover:bg-neutral-200 text-neutral-700'
                  }`}
                  title="Ortala"
                >
                  <AlignCenter className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => updateActiveCellFormat({ align: 'right' })}
                  className={`p-1.5 rounded ${
                    activeCellObj?.format?.align === 'right' ? 'bg-emerald-100 text-emerald-800' : 'hover:bg-neutral-200 text-neutral-700'
                  }`}
                  title="Sağa Hizala"
                >
                  <AlignRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Number Formatting */}
              <div className="flex items-center border-r border-neutral-200 pr-2 gap-1">
                <button
                  onClick={() =>
                    updateActiveCellFormat({
                      numberFormat: activeCellObj?.format?.numberFormat === 'currency' ? 'general' : 'currency',
                    })
                  }
                  className={`flex items-center gap-1 px-2 py-1 text-xs rounded font-medium ${
                    activeCellObj?.format?.numberFormat === 'currency'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'hover:bg-neutral-200 text-neutral-700'
                  }`}
                  title="Para Birimi (₺)"
                >
                  <span className="font-semibold text-xs">₺</span>
                  <span className="text-[11px] hidden sm:inline">Para</span>
                </button>
                <button
                  onClick={() =>
                    updateActiveCellFormat({
                      numberFormat: activeCellObj?.format?.numberFormat === 'percent' ? 'general' : 'percent',
                    })
                  }
                  className={`flex items-center gap-1 px-2 py-1 text-xs rounded font-medium ${
                    activeCellObj?.format?.numberFormat === 'percent'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'hover:bg-neutral-200 text-neutral-700'
                  }`}
                  title="Yüzde Oranı (%)"
                >
                  <Percent className="w-3 h-3" />
                  <span className="text-[11px] hidden sm:inline">Yüzde</span>
                </button>
              </div>

              {/* AutoSum & Functions */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handleAutoSum}
                  className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded border border-emerald-200 transition-colors cursor-pointer"
                  title="Üstteki sütunu otomatik topla"
                >
                  <Sigma className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Otomatik Toplam</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'insert' && (
            <div className="flex items-center gap-2">
              <button
                onClick={onOpenChartModal}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-800 bg-white border border-neutral-300 rounded hover:bg-neutral-100 shadow-2xs cursor-pointer"
              >
                <BarChart2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Grafik Oluştur</span>
              </button>
            </div>
          )}

          {activeTab === 'formulas' && (
            <div className="flex items-center gap-2 text-xs text-neutral-600">
              <span className="font-medium text-neutral-800">Sık Kullanılanlar:</span>
              <button
                onClick={() => {
                  setFormulaBarVal('=TOPLA(');
                  formulaInputRef.current?.focus();
                }}
                className="px-2 py-1 rounded bg-neutral-100 hover:bg-neutral-200 font-mono text-[11px]"
              >
                TOPLA (SUM)
              </button>
              <button
                onClick={() => {
                  setFormulaBarVal('=EĞER(');
                  formulaInputRef.current?.focus();
                }}
                className="px-2 py-1 rounded bg-neutral-100 hover:bg-neutral-200 font-mono text-[11px]"
              >
                EĞER (IF)
              </button>
              <button
                onClick={() => {
                  setFormulaBarVal('=DÜŞEYARA(');
                  formulaInputRef.current?.focus();
                }}
                className="px-2 py-1 rounded bg-neutral-100 hover:bg-neutral-200 font-mono text-[11px]"
              >
                DÜŞEYARA (VLOOKUP)
              </button>
              <button
                onClick={() => {
                  setFormulaBarVal('=ÇAPRAZARA(');
                  formulaInputRef.current?.focus();
                }}
                className="px-2 py-1 rounded bg-neutral-100 hover:bg-neutral-200 font-mono text-[11px]"
              >
                ÇAPRAZARA (XLOOKUP)
              </button>
              <button
                onClick={() => {
                  const parsed = parseCellAddress(selectedCellAddr);
                  if (parsed && parsed.row > 0) {
                    const aboveAddr = formatAddress(parsed.col, parsed.row - 1);
                    const aboveCell = sheet.cells[aboveAddr];
                    if (aboveCell) {
                      let newRaw = aboveCell.raw;
                      if (newRaw.startsWith('=')) {
                        newRaw = shiftFormula(newRaw, 0, 1);
                      }
                      commitCellVal(selectedCellAddr, newRaw);
                    }
                  }
                }}
                className="px-2 py-1 rounded bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 text-[11px] font-medium"
                title="Üstteki formülü aşağı çoğalt (Ctrl+D)"
              >
                Aşağı Doldur (Ctrl+D)
              </button>
            </div>
          )}

          {activeTab === 'data' && (
            <div className="flex items-center gap-2">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImportCSV}
                accept=".csv,text/csv"
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-neutral-800 bg-white border border-neutral-300 rounded hover:bg-neutral-100 cursor-pointer"
                title="Bilgisayarınızdan CSV dosyası yükleyin"
              >
                <span>CSV İçe Aktar</span>
              </button>
              <button
                onClick={exportCSV}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-neutral-800 bg-white border border-neutral-300 rounded hover:bg-neutral-100 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>CSV İndir</span>
              </button>
              <button
                onClick={exportXLSX}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 rounded hover:bg-emerald-100 cursor-pointer"
                title="Excel ile tam uyumlu XML tablosu indir (.xls)"
              >
                <Download className="w-3.5 h-3.5 text-emerald-600" />
                <span>Excel (.xls) İndir</span>
              </button>
            </div>
          )}

          {/* Right Export Quick Action */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={exportCSV}
              title="CSV Olarak İndir"
              className="p-1 rounded hover:bg-neutral-200 text-neutral-500 hover:text-neutral-800 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 2. Formula Bar */}
        <div className="flex items-center px-2 sm:px-3 py-1.5 border-t border-neutral-200 bg-white gap-1.5 sm:gap-2 text-xs">
          {/* Name Box */}
          <div className="w-12 sm:w-16 h-8 sm:h-7 px-1 sm:px-2 flex items-center justify-center font-mono font-bold text-neutral-800 bg-neutral-100 border border-neutral-300 rounded text-xs select-none shrink-0">
            {selectedCellAddr}
          </div>

          {/* fx symbol */}
          <div className="font-serif italic font-bold text-neutral-400 select-none px-0.5 sm:px-1 text-sm shrink-0">
            fx
          </div>

          {/* Formula input */}
          <div className="flex-1 relative min-w-0">
            <input
              ref={formulaInputRef}
              type="text"
              value={formulaBarVal}
              onChange={(e) => handleFormulaBarChange(e.target.value)}
              onKeyDown={handleFormulaBarKeyDown}
              placeholder="Değer girin veya = ile formül başlatın"
              className="w-full h-8 sm:h-7 px-2 font-mono text-xs text-neutral-900 bg-neutral-50/50 sm:bg-transparent border border-neutral-200 rounded focus:border-emerald-600 focus:bg-white focus:outline-hidden touch-manipulation"
            />
          </div>

          {/* Quick Edit / Apply Action Buttons */}
          <div className="flex items-center gap-1 shrink-0">
            {editingCellAddr ? (
              <>
                <button
                  onClick={() => {
                    commitCellVal(editingCellAddr, editInputVal);
                    setEditingCellAddr(null);
                  }}
                  title="Kaydet"
                  className="h-8 sm:h-7 px-2.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded transition-colors cursor-pointer touch-manipulation shadow-2xs"
                >
                  ✓
                </button>
                <button
                  onClick={() => setEditingCellAddr(null)}
                  title="İptal"
                  className="h-8 sm:h-7 px-2 text-xs font-semibold text-neutral-600 bg-neutral-100 hover:bg-neutral-200 rounded transition-colors cursor-pointer touch-manipulation"
                >
                  ✕
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  commitCellVal(selectedCellAddr, formulaBarVal);
                  formulaInputRef.current?.blur();
                }}
                title="Formülü Uygula (Enter)"
                className="h-8 sm:h-7 px-2.5 sm:px-3 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded transition-colors cursor-pointer shrink-0 touch-manipulation flex items-center gap-1 shadow-2xs"
              >
                <span>✓</span>
                <span className="hidden xs:inline sm:inline">Uygula</span>
              </button>
            )}
          </div>
        </div>

        {/* Quick Touch Formula Keypad (Especially powerful on mobile/touch screens) */}
        <div className="flex items-center gap-1.5 px-2 sm:px-3 py-1 bg-neutral-50/90 border-t border-neutral-200 overflow-x-auto excel-scrollbar text-[11px] touch-pan-x">
          <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider shrink-0 mr-0.5 hidden sm:inline">
            Hızlı Tuşlar:
          </span>
          {[
            { label: '=', snippet: '=' },
            { label: '(', snippet: '(' },
            { label: ')', snippet: ')' },
            { label: ';', snippet: ';' },
            { label: ':', snippet: ':' },
            { label: '$', snippet: '$' },
            { label: '"', snippet: '"' },
            { label: 'TOPLA', snippet: 'TOPLA(' },
            { label: 'EĞER', snippet: 'EĞER(' },
            { label: 'DÜŞEYARA', snippet: 'DÜŞEYARA(' },
            { label: 'ÇAPRAZARA', snippet: 'ÇAPRAZARA(' },
            { label: 'ORTALAMA', snippet: 'ORTALAMA(' },
          ].map((op) => (
            <button
              key={op.label}
              onClick={() => {
                const nextVal = (formulaBarVal || '') + op.snippet;
                setFormulaBarVal(nextVal);
                if (formulaInputRef.current) {
                  formulaInputRef.current.focus();
                }
              }}
              className="h-7 sm:h-6 px-2.5 sm:px-2 rounded bg-white hover:bg-neutral-100 active:bg-neutral-200 text-neutral-800 font-mono text-xs border border-neutral-200 shadow-2xs whitespace-nowrap shrink-0 cursor-pointer transition-colors active:scale-95 touch-manipulation"
            >
              {op.label}
            </button>
          ))}
          <button
            onClick={() => setFormulaBarVal('')}
            className="h-7 sm:h-6 px-2 py-0.5 rounded bg-neutral-200 hover:bg-neutral-300 text-neutral-600 text-[11px] font-medium whitespace-nowrap shrink-0 ml-auto cursor-pointer touch-manipulation"
          >
            Temizle
          </button>
        </div>
      </div>

      {/* 3. Interactive Spreadsheet Grid */}
      <div
        ref={gridContainerRef}
        className="flex-1 overflow-auto excel-scrollbar relative bg-neutral-100"
      >
        <div className="inline-block min-w-full">
          <table className="border-collapse table-fixed select-none bg-white min-w-full">
            {/* Column Width Declarations */}
            <colgroup>
              <col style={{ width: 44 }} /> {/* Row headers */}
              {Array.from({ length: TOTAL_COLS }).map((_, cIdx) => {
                const colLetter = colIndexToLetter(cIdx);
                const customW = sheet.columnWidths?.[colLetter] || 110;
                return <col key={colLetter} style={{ width: Math.max(76, customW) }} />;
              })}
            </colgroup>

            {/* Header Row: A, B, C, D... */}
            <thead>
              <tr className="bg-neutral-100 border-b border-neutral-300 text-[11px] text-neutral-600 font-semibold sticky top-0 z-20">
                {/* Top-left corner box */}
                <th className="w-11 h-7 sm:h-6 bg-neutral-200/80 border-r border-b border-neutral-300 text-center font-normal text-neutral-400">
                  ◢
                </th>
                {Array.from({ length: TOTAL_COLS }).map((_, cIdx) => {
                  const letter = colIndexToLetter(cIdx);
                  const parsed = parseCellAddress(selectedCellAddr);
                  const isColActive = parsed?.col === cIdx;

                  return (
                    <th
                      key={letter}
                      className={`h-7 sm:h-6 border-r border-neutral-300 font-medium text-center uppercase transition-colors ${
                        isColActive ? 'bg-emerald-100 text-emerald-900 font-bold' : 'hover:bg-neutral-200'
                      }`}
                    >
                      {letter}
                    </th>
                  );
                })}
              </tr>
            </thead>

            {/* Rows: 1, 2, 3... */}
            <tbody>
              {Array.from({ length: TOTAL_ROWS }).map((_, rIdx) => {
                const rowNum = rIdx + 1;
                const parsed = parseCellAddress(selectedCellAddr);
                const isRowActive = parsed?.row === rIdx;

                return (
                  <tr key={rowNum} className="border-b border-neutral-200">
                    {/* Row Header */}
                    <td
                      className={`h-8 sm:h-6 text-center border-r border-neutral-300 text-[11px] font-mono text-neutral-500 bg-neutral-100 transition-colors sticky left-0 z-10 ${
                        isRowActive ? 'bg-emerald-100 text-emerald-900 font-bold' : 'hover:bg-neutral-200'
                      }`}
                    >
                      {rowNum}
                    </td>

                    {/* Cells in Row */}
                    {Array.from({ length: TOTAL_COLS }).map((_, cIdx) => {
                      const addr = formatAddress(cIdx, rIdx);
                      const isSelected = selectedCellAddr === addr;
                      const isEditing = editingCellAddr === addr;
                      const isStepTarget = targetCell && targetCell.toUpperCase() === addr.toUpperCase();
                      const cell = sheet.cells[addr];
                      const format = cell?.format || {};

                      // Value formatting
                      let displayVal = cell?.computed ?? '';
                      if (typeof displayVal === 'number') {
                        if (format.numberFormat === 'currency') {
                          displayVal = `${displayVal.toLocaleString('tr-TR')} ₺`;
                        } else if (format.numberFormat === 'percent') {
                          displayVal = `%${(displayVal * 100).toFixed(0)}`;
                        } else {
                          displayVal = displayVal.toLocaleString('tr-TR');
                        }
                      } else if (typeof displayVal === 'boolean') {
                        displayVal = displayVal ? 'DOĞRU' : 'YANLIŞ';
                      }

                      const isError = typeof cell?.computed === 'string' && cell.computed.startsWith('#');

                      return (
                        <td
                          key={addr}
                          tabIndex={0}
                          onClick={() => handleCellClick(addr)}
                          onDoubleClick={() => handleCellDoubleClick(addr)}
                          onKeyDown={(e) => handleKeyDown(e, addr)}
                          style={{
                            backgroundColor: isSelected
                              ? undefined
                              : format.bgColor || (isStepTarget ? '#ECFDF5' : undefined),
                            color: isError ? '#DC2626' : format.textColor || undefined,
                            textAlign: format.align || (typeof cell?.computed === 'number' ? 'right' : 'left'),
                            fontWeight: format.bold ? 'bold' : 'normal',
                            fontStyle: format.italic ? 'italic' : 'normal',
                            textDecoration: format.underline ? 'underline' : 'none',
                          }}
                          className={`h-8 sm:h-6 px-2 sm:px-1.5 text-xs border-r border-neutral-200 relative truncate outline-hidden touch-manipulation cursor-pointer ${
                            isSelected
                              ? 'ring-2 ring-emerald-600 ring-inset bg-emerald-50/20 z-10'
                              : isStepTarget
                              ? 'ring-2 ring-amber-400 ring-inset animate-pulse bg-emerald-50/50'
                              : 'hover:bg-neutral-50 active:bg-neutral-100'
                          }`}
                        >
                          {isEditing ? (
                            <input
                              ref={inlineInputRef}
                              type="text"
                              value={editInputVal}
                              onChange={(e) => setEditInputVal(e.target.value)}
                              onKeyDown={(e) => handleKeyDown(e, addr)}
                              className="absolute inset-0 w-full h-full px-1.5 text-xs font-mono bg-white border-2 border-emerald-600 focus:outline-hidden z-30"
                            />
                          ) : (
                            <span className={typeof cell?.computed === 'number' ? 'tabular-nums' : ''}>
                              {displayVal}
                            </span>
                          )}

                          {/* Active cell bottom-right drag fill handle */}
                          {isSelected && !isEditing && (
                            <div
                              title="Doldurma Tutamacı"
                              className="absolute -bottom-1 -right-1 w-2.5 h-2.5 sm:w-2 sm:h-2 bg-emerald-700 border border-white cursor-crosshair z-20 rounded-xs"
                            />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Floating Jump to Target Cell Button on Mobile */}
        {targetCell && (
          <button
            onClick={() => scrollToTargetCell(targetCell)}
            className="sm:hidden absolute bottom-2 right-2 z-30 flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white rounded-full text-xs font-bold shadow-lg active:scale-95 cursor-pointer touch-manipulation"
          >
            <span>🎯 {targetCell} Hücresine Git</span>
          </button>
        )}
      </div>

      {/* 4. Bottom Sheets & Status Bar */}
      <div className="flex items-center justify-between px-3 py-1 bg-neutral-100 border-t border-neutral-200 text-xs text-neutral-600 select-none">
        {/* Sheet Tabs */}
        <div className="flex items-center gap-1">
          <div className="flex items-center px-3 py-1 bg-white border border-neutral-300 rounded font-medium text-emerald-800 shadow-2xs">
            {sheet.name || 'Sayfa1'}
          </div>
          <button
            title="Yeni Sayfa Ekle"
            className="p-1 hover:bg-neutral-200 rounded text-neutral-600 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Live Context Indicators */}
        <div className="flex items-center gap-4 text-[11px] text-neutral-500 font-mono">
          {isTarget && (
            <span className="flex items-center gap-1 text-emerald-700 font-semibold animate-pulse">
              ● Görev Hücresi: {selectedCellAddr}
            </span>
          )}
          <span>Hücre: {selectedCellAddr}</span>
          {typeof activeVal === 'number' && (
            <span className="tabular-nums">Değer: {activeVal.toLocaleString('tr-TR')}</span>
          )}
          <span className="text-neutral-400">Türkçe Excel Sözdizimi (;)</span>
        </div>
      </div>
    </div>
  );
};
