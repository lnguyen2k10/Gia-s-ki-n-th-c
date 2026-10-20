import React, { useState } from 'react';
import { PRACTICE_PROBLEMS } from '../data/mathData';
import { PracticeProblem } from '../types/math';
import {
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Award,
  Sparkles,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

export const StepPractice: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'foundation' | 'understanding'>('all');
  const [revealedHints, setRevealedHints] = useState<Record<string, { hint1: boolean; hint2: boolean; solution: boolean }>>({});
  const [selectedOption, setSelectedOption] = useState<Record<string, string>>({});

  const filtered = PRACTICE_PROBLEMS.filter(
    (p) => selectedDifficulty === 'all' || p.difficulty === selectedDifficulty
  );

  const toggleHint1 = (id: string) => {
    setRevealedHints((prev) => ({
      ...prev,
      [id]: { ...prev[id], hint1: !prev[id]?.hint1 }
    }));
  };

  const toggleHint2 = (id: string) => {
    setRevealedHints((prev) => ({
      ...prev,
      [id]: { ...prev[id], hint2: !prev[id]?.hint2 }
    }));
  };

  const toggleSolution = (id: string) => {
    setRevealedHints((prev) => ({
      ...prev,
      [id]: { ...prev[id], solution: !prev[id]?.solution }
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Luyện Tập Phản Xạ 3 Nấc (Có Gợi Ý Từng Bước)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Không bao giờ để con bị bế tắc! Nếu chưa nghĩ ra, con có thể mở gợi ý cấp 1 (nhắc công thức) rồi gợi ý cấp 2 (bước biến đổi đầu).
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center bg-slate-100 p-1 rounded-lg text-xs font-semibold">
          <button
            onClick={() => setSelectedDifficulty('all')}
            className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
              selectedDifficulty === 'all' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tất cả bài tập
          </button>
          <button
            onClick={() => setSelectedDifficulty('foundation')}
            className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
              selectedDifficulty === 'foundation' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Nấc 1: Nhận biết (1 bước)
          </button>
          <button
            onClick={() => setSelectedDifficulty('understanding')}
            className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
              selectedDifficulty === 'understanding' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Nấc 2: Biến đổi (2 bước)
          </button>
        </div>
      </div>

      {/* Problems List */}
      <div className="space-y-4">
        {filtered.map((prob) => {
          const hints = revealedHints[prob.id] || { hint1: false, hint2: false, solution: false };
          const userChoice = selectedOption[prob.id];

          return (
            <div
              key={prob.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition-all p-5 space-y-4"
            >
              {/* Question header */}
              <div className="flex items-center justify-between">
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                  prob.difficulty === 'foundation'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-indigo-100 text-indigo-800'
                }`}>
                  {prob.difficultyLabel}
                </span>

                <span className="text-xs text-slate-600">
                  Toán 11 Học Kỳ 1
                </span>
              </div>

              {/* Question content */}
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                {prob.question}
              </h3>

              {/* Options */}
              {prob.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {prob.options.map((opt, oIdx) => {
                    const isSelected = userChoice === opt;
                    const isAnswerCorrect = opt === prob.correctAnswer;
                    let btnStyle = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800';
                    if (hints.solution) {
                      if (isAnswerCorrect) {
                        btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                      } else if (isSelected) {
                        btnStyle = 'border-rose-400 bg-rose-50 text-rose-950';
                      }
                    } else if (isSelected) {
                      btnStyle = 'border-indigo-500 bg-indigo-50 text-indigo-950 font-semibold ring-1 ring-indigo-500';
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => setSelectedOption((prev) => ({ ...prev, [prob.id]: opt }))}
                        className={`p-2.5 rounded-lg border text-left text-xs transition-colors flex items-center justify-between cursor-pointer ${btnStyle}`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-[11px] shrink-0">
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {hints.solution && isAnswerCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Progressive Hint Buttons */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2">
                <button
                  onClick={() => toggleHint1(prob.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border flex items-center gap-1.5 transition-colors cursor-pointer ${
                    hints.hint1
                      ? 'bg-amber-100 text-amber-900 border-amber-300'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                  {hints.hint1 ? 'Ẩn Gợi ý Cấp 1 (Công thức)' : 'Mở Gợi ý Cấp 1 (Công thức)'}
                </button>

                <button
                  onClick={() => toggleHint2(prob.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border flex items-center gap-1.5 transition-colors cursor-pointer ${
                    hints.hint2
                      ? 'bg-blue-100 text-blue-900 border-blue-300'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                  {hints.hint2 ? 'Ẩn Gợi ý Cấp 2 (Bước biến đổi)' : 'Mở Gợi ý Cấp 2 (Bước biến đổi)'}
                </button>

                <button
                  onClick={() => toggleSolution(prob.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border flex items-center gap-1.5 transition-colors cursor-pointer ml-auto ${
                    hints.solution
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                  }`}
                >
                  {hints.solution ? 'Thu gọn lời giải' : 'Xem lời giải cặn kẽ'}
                </button>
              </div>

              {/* Hint 1 Content */}
              {hints.hint1 && (
                <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-lg text-xs text-amber-950 animate-fadeIn">
                  <span className="font-semibold text-amber-900">💡 Gợi ý Cấp 1:</span> {prob.hint1Formula}
                </div>
              )}

              {/* Hint 2 Content */}
              {hints.hint2 && (
                <div className="p-3 bg-blue-50/80 border border-blue-200 rounded-lg text-xs text-blue-950 animate-fadeIn">
                  <span className="font-semibold text-blue-900">🔍 Gợi ý Cấp 2:</span> {prob.hint2FirstStep}
                </div>
              )}

              {/* Full Solution Content */}
              {hints.solution && (
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3 animate-fadeIn">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900 border-b border-slate-200 pb-2">
                    <span className="flex items-center gap-1.5 text-emerald-700">
                      <CheckCircle2 className="w-4 h-4" /> Lời giải chi tiết từng bước:
                    </span>
                    <span className="font-mono text-emerald-800">
                      Đáp án đúng: {prob.correctAnswer}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-800">
                    {prob.fullSolution.map((s, idx) => (
                      <p key={idx} className="leading-relaxed bg-white p-2 rounded border border-slate-100 font-mono text-slate-800">
                        {s}
                      </p>
                    ))}
                  </div>

                  {/* Key takeaway */}
                  <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-lg text-xs text-emerald-950 flex items-start gap-2">
                    <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-emerald-900">Điểm cốt lõi rút ra:</span>
                      <p className="mt-0.5 text-slate-700">{prob.keyTakeaway}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
