/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Compass,
  Calendar,
  BookMarked,
  Activity,
  HelpCircle,
  Award,
  Sparkles,
  Bot,
  Heart,
  Eye,
  CheckCircle2,
  BookOpen
} from 'lucide-react';

import { InteractiveTrigCircle } from './components/InteractiveTrigCircle';
import { SineWaveUnroller } from './components/SineWaveUnroller';
import { EquationVisualizer } from './components/EquationVisualizer';
import { PersonalizedRoadmap } from './components/PersonalizedRoadmap';
import { VisualFormulaHandbook } from './components/VisualFormulaHandbook';
import { VisualIntuitionGuides } from './components/VisualIntuitionGuides';
import { DiagnosticQuiz } from './components/DiagnosticQuiz';
import { StepPractice } from './components/StepPractice';
import { AiTutorModal } from './components/AiTutorModal';
import { ParentGuideModal } from './components/ParentGuideModal';

type TabType =
  | 'roadmap'
  | 'circle'
  | 'wave'
  | 'equations'
  | 'proofs'
  | 'handbook'
  | 'practice'
  | 'diagnostic';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('roadmap');
  const [isAiTutorOpen, setIsAiTutorOpen] = useState<boolean>(false);
  const [isParentGuideOpen, setIsParentGuideOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-100/60 text-slate-800 font-sans flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo & App Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white flex items-center justify-center shadow-xs">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-none">
                  Toán 11 · Lấy Lại Gốc Kiến Thức
                </h1>
                <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 hidden sm:inline-block">
                  Trọng Tâm Lượng Giác HK1
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5 hidden md:block">
                Phương pháp 4 bước trực quan: Hiểu bản chất trước khi làm bài tập
              </p>
            </div>
          </div>

          {/* Quick Support Modals Trigger */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsParentGuideOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors cursor-pointer"
            >
              <Heart className="w-4 h-4 text-amber-600" />
              <span className="hidden sm:inline">Góc Phụ Huynh</span>
              <span className="sm:hidden">Phụ Huynh</span>
            </button>

            <button
              onClick={() => setIsAiTutorOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              <Bot className="w-4 h-4 text-white" />
              <span>Gia Sư AI</span>
            </button>
          </div>
        </div>

        {/* Primary Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-x-auto border-t border-slate-100 scrollbar-none">
          <nav className="flex items-center gap-1 py-1 text-xs font-semibold whitespace-nowrap">
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'roadmap'
                  ? 'bg-indigo-50 text-indigo-700 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>1. Lộ Trình 14 Ngày Lấy Gốc</span>
            </button>

            <button
              onClick={() => setActiveTab('circle')}
              className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'circle'
                  ? 'bg-indigo-50 text-indigo-700 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>2. Vòng Tròn Lượng Giác</span>
            </button>

            <button
              onClick={() => setActiveTab('wave')}
              className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'wave'
                  ? 'bg-indigo-50 text-indigo-700 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>3. Mở Cuộn Đồ Thị Sóng</span>
            </button>

            <button
              onClick={() => setActiveTab('equations')}
              className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'equations'
                  ? 'bg-indigo-50 text-indigo-700 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>4. Phương Trình Lượng Giác</span>
            </button>

            <button
              onClick={() => setActiveTab('proofs')}
              className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'proofs'
                  ? 'bg-indigo-50 text-indigo-700 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>5. Giải Mã Bản Chất Hình Ảnh</span>
            </button>

            <button
              onClick={() => setActiveTab('handbook')}
              className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'handbook'
                  ? 'bg-indigo-50 text-indigo-700 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <BookMarked className="w-4 h-4" />
              <span>6. Sổ Tay Thần Chú & Flashcard</span>
            </button>

            <button
              onClick={() => setActiveTab('practice')}
              className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'practice'
                  ? 'bg-indigo-50 text-indigo-700 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>7. Luyện Phản Xạ 3 Nấc</span>
            </button>

            <button
              onClick={() => setActiveTab('diagnostic')}
              className={`px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'diagnostic'
                  ? 'bg-indigo-50 text-indigo-700 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>8. Test Chẩn Đoán Lỗ Hổng</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 md:p-8">
        {/* TAB 1: ROADMAP */}
        {activeTab === 'roadmap' && <PersonalizedRoadmap onNavigateTab={setActiveTab} />}

        {/* TAB 2: INTERACTIVE CIRCLE */}
        {activeTab === 'circle' && <InteractiveTrigCircle />}

        {/* TAB 3: WAVE UNROLLER */}
        {activeTab === 'wave' && <SineWaveUnroller />}

        {/* TAB 4: EQUATIONS */}
        {activeTab === 'equations' && <EquationVisualizer />}

        {/* TAB 5: VISUAL PROOFS */}
        {activeTab === 'proofs' && <VisualIntuitionGuides />}

        {/* TAB 6: HANDBOOK */}
        {activeTab === 'handbook' && <VisualFormulaHandbook />}

        {/* TAB 7: PRACTICE */}
        {activeTab === 'practice' && <StepPractice />}

        {/* TAB 8: DIAGNOSTIC QUIZ */}
        {activeTab === 'diagnostic' && (
          <DiagnosticQuiz
            onGoToCircle={() => setActiveTab('circle')}
            onGoToRoadmap={() => setActiveTab('roadmap')}
          />
        )}
      </main>

      {/* Pedagogical Sticky Bottom Bar for Quick Motivation */}
      <footer className="bg-white border-t border-slate-200 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Nguyên tắc vàng:</span>
            <span>Hiểu bản chất hình ảnh trước · Nhớ thần chú vần điệu · Luyện câu 1 bước trước khi làm câu khó.</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsParentGuideOpen(true)}
              className="text-amber-700 hover:underline font-medium cursor-pointer"
            >
              Dành cho phụ huynh
            </button>
            <span>·</span>
            <button
              onClick={() => setIsAiTutorOpen(true)}
              className="text-indigo-600 hover:underline font-medium cursor-pointer"
            >
              Hỏi Gia Sư AI
            </button>
          </div>
        </div>
      </footer>

      {/* Floating AI Tutor Quick Button */}
      <button
        onClick={() => setIsAiTutorOpen(true)}
        className="fixed bottom-5 right-5 z-40 bg-indigo-600 hover:bg-indigo-700 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer group"
        title="Hỏi Gia Sư AI Toán 11"
      >
        <Bot className="w-5 h-5" />
        <span className="text-xs font-semibold pr-1 hidden group-hover:inline-block transition-all">
          Gia Sư AI Toán 11
        </span>
      </button>

      {/* Modals */}
      <AiTutorModal isOpen={isAiTutorOpen} onClose={() => setIsAiTutorOpen(false)} />
      <ParentGuideModal isOpen={isParentGuideOpen} onClose={() => setIsParentGuideOpen(false)} />
    </div>
  );
}
