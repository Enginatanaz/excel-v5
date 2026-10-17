import React, { useState } from 'react';
import { BookOpen, Table, BarChart3, CheckCircle2, Play, Menu, X } from 'lucide-react';

export type ActiveTab = 'dashboard' | 'workspace' | 'sandbox' | 'analytics';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  currentLessonTitle?: string;
  completedCount: number;
  totalLessons: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  currentLessonTitle,
  completedCount,
  totalLessons,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-40 select-none">
      <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3">
        {/* Zone 1: Wordmark */}
        <div 
          onClick={() => handleNavClick('dashboard')} 
          className="flex items-center gap-2.5 cursor-pointer shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-base shadow-xs">
            X
          </div>
          <div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 whitespace-nowrap block leading-tight">
              Excel Akademi AI
            </span>
            <span className="text-[10px] text-neutral-500 hidden sm:block">
              Yapay Zekâ Destekli Uygulamalı Eğitim
            </span>
          </div>
        </div>

        {/* Zone 2: Desktop 4 clean single-line nav tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-100 p-1 rounded-lg">
          <button
            onClick={() => handleNavClick('dashboard')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'dashboard'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Müfredat Portalı
          </button>

          <button
            onClick={() => handleNavClick('workspace')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'workspace'
                ? 'bg-white text-emerald-800 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <Table className="w-3.5 h-3.5 text-emerald-600" />
            Ders Çalışma Alanı
          </button>

          <button
            onClick={() => handleNavClick('sandbox')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'sandbox'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <Play className="w-3.5 h-3.5 text-blue-600" />
            Serbest Excel Masası
          </button>

          <button
            onClick={() => handleNavClick('analytics')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'analytics'
                ? 'bg-white text-neutral-900 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-amber-600" />
            Gelişim & Analiz
          </button>
        </nav>

        {/* Zone 3: Primary action + Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden xl:flex items-center gap-2 text-xs text-neutral-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="tabular-nums font-medium text-neutral-700">{completedCount} / {totalLessons}</span>
            <span>Ders</span>
          </div>

          <button
            onClick={() => handleNavClick('workspace')}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Table className="w-3.5 h-3.5" />
            {activeTab === 'workspace' ? 'Ders Deski' : 'Derse Başla'}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 cursor-pointer"
            aria-label="Menüyü Aç/Kapat"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-neutral-50 px-4 py-3 space-y-1">
          <button
            onClick={() => handleNavClick('dashboard')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-xs font-medium rounded-lg text-left transition-colors ${
              activeTab === 'dashboard'
                ? 'bg-emerald-50 text-emerald-900 font-semibold border border-emerald-200'
                : 'text-neutral-700 hover:bg-neutral-100'
            }`}
          >
            <BookOpen className="w-4 h-4 text-emerald-600" />
            <span>Müfredat Portalı (30 Bölüm, 348 Ders)</span>
          </button>

          <button
            onClick={() => handleNavClick('workspace')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-xs font-medium rounded-lg text-left transition-colors ${
              activeTab === 'workspace'
                ? 'bg-emerald-50 text-emerald-900 font-semibold border border-emerald-200'
                : 'text-neutral-700 hover:bg-neutral-100'
            }`}
          >
            <Table className="w-4 h-4 text-emerald-600" />
            <span>Ders Çalışma Alanı & AI Öğretmen</span>
          </button>

          <button
            onClick={() => handleNavClick('sandbox')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-xs font-medium rounded-lg text-left transition-colors ${
              activeTab === 'sandbox'
                ? 'bg-emerald-50 text-emerald-900 font-semibold border border-emerald-200'
                : 'text-neutral-700 hover:bg-neutral-100'
            }`}
          >
            <Play className="w-4 h-4 text-blue-600" />
            <span>Serbest Excel Masası (Sandbox)</span>
          </button>

          <button
            onClick={() => handleNavClick('analytics')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-xs font-medium rounded-lg text-left transition-colors ${
              activeTab === 'analytics'
                ? 'bg-emerald-50 text-emerald-900 font-semibold border border-emerald-200'
                : 'text-neutral-700 hover:bg-neutral-100'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-amber-600" />
            <span>Gelişim Karnesi & Sertifika Durumu</span>
          </button>

          <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500 px-2">
            <span>Tamamlanan: {completedCount} / {totalLessons} Ders</span>
            <span className="font-semibold text-emerald-700">%{Math.round((completedCount / (totalLessons || 1)) * 100)} İlerleme</span>
          </div>
        </div>
      )}
    </header>
  );
};
