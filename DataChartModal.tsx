import React, { useState } from 'react';
import { X, BarChart3, TrendingUp, PieChart as PieIcon, Download } from 'lucide-react';
import { Sheet } from '../../types/excel';
import { colIndexToLetter, formatAddress } from '../../engine/formulaEngine';

interface DataChartModalProps {
  sheet: Sheet;
  isOpen: boolean;
  onClose: () => void;
}

export const DataChartModal: React.FC<DataChartModalProps> = ({ sheet, isOpen, onClose }) => {
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');

  if (!isOpen) return null;

  // Extract labels from Column A (rows 2..10) and values from Column B, C, or D
  const dataPoints: { label: string; value: number }[] = [];
  for (let r = 1; r < 12; r++) {
    const labelAddr = `A${r + 1}`;
    const label = sheet.cells[labelAddr]?.computed;

    // Search for first numeric column in row
    let val: number | null = null;
    for (let c = 1; c < 6; c++) {
      const colLetter = colIndexToLetter(c);
      const valAddr = `${colLetter}${r + 1}`;
      const cellVal = sheet.cells[valAddr]?.computed;
      if (typeof cellVal === 'number' && cellVal > 0) {
        val = cellVal;
        break;
      }
    }

    if (label && val !== null) {
      dataPoints.push({ label: String(label), value: val });
    }
  }

  // Fallback if sheet is sparse
  const chartData =
    dataPoints.length > 0
      ? dataPoints
      : [
          { label: 'Ocak', value: 45000 },
          { label: 'Şubat', value: 62000 },
          { label: 'Mart', value: 89000 },
          { label: 'Nisan', value: 52000 },
        ];

  const maxVal = Math.max(...chartData.map((d) => d.value), 1);
  const totalVal = chartData.reduce((acc, d) => acc + d.value, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 select-none">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden border border-neutral-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50/70">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-emerald-600" />
            <div>
              <h3 className="text-sm font-bold text-neutral-900">
                Excel Grafik Sihirbazı — {sheet.name || 'Tablo Verisi'}
              </h3>
              <p className="text-xs text-neutral-500">Hücre aralığından anlık görselleştirme</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chart Type Selector */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-neutral-200 bg-white">
          <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-lg">
            <button
              onClick={() => setChartType('bar')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                chartType === 'bar' ? 'bg-white text-emerald-800 shadow-2xs' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              Sütun Grafik
            </button>
            <button
              onClick={() => setChartType('line')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                chartType === 'line' ? 'bg-white text-emerald-800 shadow-2xs' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              Çizgi Trend
            </button>
            <button
              onClick={() => setChartType('pie')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                chartType === 'pie' ? 'bg-white text-emerald-800 shadow-2xs' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <PieIcon className="w-3.5 h-3.5" />
              Pasta Dağılım
            </button>
          </div>

          <div className="text-xs text-neutral-500 font-mono">
            {chartData.length} Veri Noktası
          </div>
        </div>

        {/* Chart Canvas Area */}
        <div className="flex-1 p-6 flex items-center justify-center bg-neutral-50/50">
          {chartType === 'bar' && (
            <div className="w-full h-64 flex items-end justify-around gap-4 pt-8 px-4 bg-white rounded-lg border border-neutral-200 shadow-2xs">
              {chartData.map((d, i) => {
                const heightPercent = Math.max(8, (d.value / maxVal) * 85);
                return (
                  <div key={i} className="flex-1 flex flex-col items-center h-full justify-end group">
                    <span className="text-[10px] font-mono font-bold text-neutral-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {d.value.toLocaleString('tr-TR')} ₺
                    </span>
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="w-full max-w-[50px] bg-emerald-600 hover:bg-emerald-700 rounded-t-md transition-all relative shadow-xs"
                    />
                    <span className="text-[11px] font-medium text-neutral-700 mt-2 truncate max-w-[80px] text-center">
                      {d.label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {chartType === 'line' && (
            <div className="w-full h-64 bg-white rounded-lg border border-neutral-200 p-4 flex flex-col justify-between shadow-2xs">
              <svg className="w-full h-44 overflow-visible" viewBox="0 0 400 150">
                {/* Horizontal grid lines */}
                <line x1="0" y1="30" x2="400" y2="30" stroke="#f1f5f9" strokeDasharray="4" />
                <line x1="0" y1="75" x2="400" y2="75" stroke="#f1f5f9" strokeDasharray="4" />
                <line x1="0" y1="120" x2="400" y2="120" stroke="#f1f5f9" strokeDasharray="4" />

                {/* Polyline */}
                {(() => {
                  const points = chartData
                    .map((d, i) => {
                      const x = 30 + (i / Math.max(1, chartData.length - 1)) * 340;
                      const y = 130 - (d.value / maxVal) * 100;
                      return `${x},${y}`;
                    })
                    .join(' ');
                  return (
                    <>
                      <polyline fill="none" stroke="#047857" strokeWidth="3" points={points} />
                      {chartData.map((d, i) => {
                        const x = 30 + (i / Math.max(1, chartData.length - 1)) * 340;
                        const y = 130 - (d.value / maxVal) * 100;
                        return (
                          <circle
                            key={i}
                            cx={x}
                            cy={y}
                            r="5"
                            fill="#FFFFFF"
                            stroke="#047857"
                            strokeWidth="2.5"
                          />
                        );
                      })}
                    </>
                  );
                })()}
              </svg>

              <div className="flex justify-between px-4 text-[11px] text-neutral-600 font-medium">
                {chartData.map((d, i) => (
                  <span key={i} className="truncate max-w-[80px] text-center">
                    {d.label}
                  </span>
                ))}
              </div>
            </div>
          )}

          {chartType === 'pie' && (
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full p-4 bg-white rounded-lg border border-neutral-200 shadow-2xs">
              {/* Circular distribution indicator */}
              <div className="relative w-40 h-40 rounded-full border-8 border-emerald-600 flex items-center justify-center shadow-xs">
                <div className="text-center">
                  <span className="text-[10px] text-neutral-400 uppercase font-semibold">Toplam</span>
                  <div className="text-sm font-bold text-neutral-900 font-mono">
                    {totalVal.toLocaleString('tr-TR')} ₺
                  </div>
                </div>
              </div>

              {/* Legend with percentages */}
              <div className="space-y-2">
                {chartData.slice(0, 5).map((d, i) => {
                  const pct = totalVal > 0 ? ((d.value / totalVal) * 100).toFixed(1) : 0;
                  const colors = ['#047857', '#059669', '#10B981', '#34D399', '#6EE7B7'];
                  return (
                    <div key={i} className="flex items-center gap-3 text-xs">
                      <div
                        className="w-3 h-3 rounded-xs shrink-0"
                        style={{ backgroundColor: colors[i % colors.length] }}
                      />
                      <span className="text-neutral-700 font-medium w-28 truncate">{d.label}</span>
                      <span className="font-mono font-bold text-neutral-900">%{pct}</span>
                      <span className="text-neutral-400 tabular-nums">
                        ({d.value.toLocaleString('tr-TR')} ₺)
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-neutral-200 bg-neutral-50/70">
          <p className="text-xs text-neutral-500">
            Grafik verileri çalışma alanındaki aktif sütunlardan anlık çekilir.
          </p>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-neutral-700 bg-white border border-neutral-300 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
