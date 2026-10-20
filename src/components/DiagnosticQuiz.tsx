import React, { useState } from 'react';
import { DIAGNOSTIC_QUESTIONS } from '../data/mathData';
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  ArrowRight,
  HelpCircle,
  Lightbulb,
  Sparkles
} from 'lucide-react';

interface DiagnosticQuizProps {
  onGoToRoadmap?: () => void;
  onGoToCircle?: () => void;
}

export const DiagnosticQuiz: React.FC<DiagnosticQuizProps> = ({ onGoToRoadmap, onGoToCircle }) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const currentQ = DIAGNOSTIC_QUESTIONS[currentIdx];
  const selectedOption = userAnswers[currentQ.id];
  const hasAnswered = selectedOption !== undefined;
  const isCorrect = hasAnswered && selectedOption === currentQ.correctIndex;

  const handleSelect = (idx: number) => {
    if (hasAnswered) return;
    setUserAnswers((prev) => ({ ...prev, [currentQ.id]: idx }));
  };

  const handleNext = () => {
    if (currentIdx < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setCurrentIdx(0);
    setIsFinished(false);
  };

  // Calculate score
  const correctCount = DIAGNOSTIC_QUESTIONS.filter(
    (q) => userAnswers[q.id] === q.correctIndex
  ).length;
  const scoreOutOf10 = ((correctCount / DIAGNOSTIC_QUESTIONS.length) * 10).toFixed(1);

  if (isFinished) {
    let levelTitle = '';
    let levelDesc = '';
    let levelAction = '';
    let levelColor = '';

    if (correctCount >= 7) {
      levelTitle = 'Nền Tảng Rất Tốt! (Mức Khá - Giỏi)';
      levelDesc = 'Con đã nắm vững các khái niệm then chốt của Lượng giác và Học kỳ 1. Bây giờ chỉ cần duy trì làm bài tập tốc độ và rèn kỹ năng tự luận.';
      levelAction = 'Tiếp tục luyện các bài nấc 2 và thử sức với đề tổng hợp 14 ngày.';
      levelColor = 'emerald';
    } else if (correctCount >= 4) {
      levelTitle = 'Bị Hổng Một Vài Mảng Lượng Giác & Công Thức';
      levelDesc = 'Con đã hiểu sơ bộ nhưng hay bị nhầm dấu âm/dương ở các góc phần tư, quên nghiệm thứ 2 của hàm Sin hoặc nhầm công thức cộng.';
      levelAction = 'Hãy vào tab "Vòng Tròn Lượng Giác" và làm theo Lộ trình từ Chặng 2 (Ngày 4 - Ngày 7) để bịt ngay các lỗ hổng này.';
      levelColor = 'amber';
    } else {
      levelTitle = 'Đang Bị Mất Gốc Lượng Giác Nền Tảng';
      levelDesc = 'Đừng lo lắng! Việc mất gốc ở lớp 11 rất phổ biến do chuyển từ tam giác phẳng sang vòng tròn đơn vị và radian. Con hoàn toàn có thể lấy lại gốc nếu bắt đầu từ trực quan hình học.';
      levelAction = 'Bắt đầu ngay từ Chặng 1 của Lộ trình 14 ngày: 20 phút mỗi ngày cùng Vòng tròn đơn vị.';
      levelColor = 'rose';
    }

    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 max-w-2xl mx-auto shadow-sm space-y-6">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <Award className="w-8 h-8" />
          </div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Kết quả bài kiểm tra chẩn đoán năng lực Toán 11
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {correctCount} / {DIAGNOSTIC_QUESTIONS.length} Câu Đúng ({scoreOutOf10} điểm)
          </h2>
        </div>

        {/* Diagnosis Card */}
        <div className={`p-5 rounded-xl border ${
          levelColor === 'emerald' ? 'bg-emerald-50 border-emerald-200 text-emerald-950' :
          levelColor === 'amber' ? 'bg-amber-50 border-amber-200 text-amber-950' :
          'bg-rose-50 border-rose-200 text-rose-950'
        }`}>
          <h3 className="font-bold text-base sm:text-lg flex items-center gap-2">
            <Sparkles className="w-5 h-5 shrink-0" />
            {levelTitle}
          </h3>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-700">
            {levelDesc}
          </p>
          <div className="mt-3 pt-3 border-t border-slate-200/60 font-semibold text-xs flex items-center gap-1.5">
            <span>👉 Lời khuyên hành động:</span>
            <span>{levelAction}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" /> Làm lại bài test
          </button>
          {onGoToCircle && (
            <button
              onClick={onGoToCircle}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              Xem Vòng Tròn Lượng Giác Trực Quan <ArrowRight className="w-4 h-4" />
            </button>
          )}
          {onGoToRoadmap && (
            <button
              onClick={onGoToRoadmap}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              Mở Lộ Trình 14 Ngày Lấy Gốc <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs max-w-3xl mx-auto">
      {/* Top progress */}
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
            Bài Test Chẩn Đoán Lỗ Hổng Kiến Thức
          </span>
          <div className="text-sm font-bold text-slate-900 mt-0.5">
            Câu {currentIdx + 1} / {DIAGNOSTIC_QUESTIONS.length}
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {DIAGNOSTIC_QUESTIONS.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === currentIdx
                  ? 'bg-indigo-600 ring-2 ring-indigo-200'
                  : userAnswers[DIAGNOSTIC_QUESTIONS[i].id] !== undefined
                  ? 'bg-emerald-500'
                  : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-5 sm:p-7 space-y-6">
        {/* Question Title */}
        <div className="space-y-1">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
            Kiểm tra: {currentQ.conceptTested}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2 leading-snug">
            {currentQ.question}
          </h3>
        </div>

        {/* Options */}
        <div className="space-y-2.5">
          {currentQ.options.map((opt, idx) => {
            let optStyle = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800';
            if (hasAnswered) {
              if (idx === currentQ.correctIndex) {
                optStyle = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-semibold ring-1 ring-emerald-500';
              } else if (idx === selectedOption) {
                optStyle = 'border-rose-400 bg-rose-50 text-rose-950 font-semibold';
              } else {
                optStyle = 'border-slate-200 bg-slate-50 text-slate-400';
              }
            }

            return (
              <button
                key={idx}
                disabled={hasAnswered}
                onClick={() => handleSelect(idx)}
                className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${optStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{opt}</span>
                </div>

                {hasAnswered && idx === currentQ.correctIndex && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {hasAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Explanation upon selection */}
        {hasAnswered && (
          <div className="space-y-3 pt-2 animate-fadeIn">
            <div className={`p-4 rounded-xl border ${
              isCorrect ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950' : 'bg-rose-50/70 border-rose-200 text-rose-950'
            }`}>
              <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Chính xác! Con nắm rất chắc khái niệm này.</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>Chưa đúng rồi! Đừng lo, hãy xem lời giải thích chi tiết dưới đây:</span>
                  </>
                )}
              </div>
              <p className="mt-2 text-xs text-slate-700 leading-relaxed">
                {currentQ.explanation}
              </p>
              <div className="mt-2.5 pt-2 border-t border-slate-200/50 text-[11px] font-semibold text-indigo-900 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                <span>Mẹo khắc phục: {currentQ.remedyAction}</span>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>{currentIdx < DIAGNOSTIC_QUESTIONS.length - 1 ? 'Tiếp tục câu tiếp theo' : 'Xem báo cáo chẩn đoán'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
