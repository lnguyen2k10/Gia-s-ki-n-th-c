import React, { useState } from 'react';
import { FORMULA_HANDBOOK, TOPICS } from '../data/mathData';
import { TopicId, FormulaItem } from '../types/math';
import {
  BookMarked,
  Sparkles,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  Search,
  FlipHorizontal,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const VisualFormulaHandbook: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<TopicId>('trigonometry');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFlashcardMode, setIsFlashcardMode] = useState<boolean>(false);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const filteredFormulas = FORMULA_HANDBOOK.filter((item) => {
    const matchTopic = item.topicId === selectedTopic;
    const matchQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.mnemonic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchTopic && matchQuery;
  });

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-5">
      {/* Header and Controls */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-indigo-600" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Sổ Tay Công Thức & Thần Chú Trực Quan
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Không học vẹt! Mỗi công thức đều đi kèm bản chất hình ảnh, thơ ghi nhớ và cạm bẫy học sinh hay mắc.
          </p>
        </div>

        {/* Action Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsFlashcardMode(!isFlashcardMode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
              isFlashcardMode
                ? 'bg-amber-500 text-white border-amber-600 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <FlipHorizontal className="w-3.5 h-3.5" />
            {isFlashcardMode ? 'Thoát chế độ Thẻ Lật' : 'Bật chế độ Thẻ Lật (Flashcard)'}
          </button>
        </div>
      </div>

      {/* Topic Filter & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Topic tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
          {TOPICS.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTopic(t.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedTopic === t.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900'
              }`}
            >
              {t.shortName}
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Tìm theo tên hoặc câu thơ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-indigo-500 text-slate-800"
          />
        </div>
      </div>

      {/* Formulas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredFormulas.map((item) => {
          const isFlipped = isFlashcardMode && flippedCards[item.id];
          const isExpanded = expandedCard === item.id;

          if (isFlashcardMode) {
            // Flashcard Mode rendering
            return (
              <div
                key={item.id}
                onClick={() => toggleFlip(item.id)}
                className="bg-white rounded-xl border border-slate-200 p-5 min-h-[220px] flex flex-col justify-between shadow-xs hover:border-amber-400 transition-all cursor-pointer relative select-none"
              >
                {!isFlipped ? (
                  // Front of Flashcard: Challenge
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600 font-medium">{item.category}</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-medium">
                        Click để lật xem đáp án
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mt-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600">
                      Thử nhớ lại: Công thức này được phát biểu như thế nào và có bài thơ hay mẹo nhớ gì?
                    </p>
                  </div>
                ) : (
                  // Back of Flashcard: Answer
                  <div className="space-y-3 animate-fadeIn">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-emerald-700 font-semibold">Đáp án & Thần chú:</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        Click để lật lại
                      </span>
                    </div>
                    <div className="bg-slate-900 text-amber-300 font-mono text-sm p-3 rounded-lg">
                      {item.formula}
                    </div>
                    <div className="bg-indigo-50 p-2.5 rounded-lg border border-indigo-100 text-xs text-indigo-950 font-medium">
                      🎵 Thơ nhớ: {item.mnemonic}
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                  <span>Chế độ kiểm tra trí nhớ</span>
                  <span className="font-semibold text-amber-600">Lật thẻ ↻</span>
                </div>
              </div>
            );
          }

          // Standard Detailed View
          return (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:border-indigo-200 transition-all flex flex-col justify-between"
            >
              <div className="p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-600 uppercase tracking-wide">
                    {item.category}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-medium">
                    Toán 11 HK1
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>

                {/* Mathematical Formula Box */}
                <div className="bg-slate-900 text-amber-300 font-mono text-xs sm:text-sm p-3 rounded-lg border border-slate-800 overflow-x-auto">
                  {item.formula}
                </div>

                {/* Mnemonic / Thơ nhớ nhanh */}
                <div className="bg-amber-50/70 border border-amber-200/80 rounded-lg p-2.5 flex items-start gap-2 text-xs text-amber-950">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-900">Thần chú nhớ nhanh:</span>
                    <p className="mt-0.5 font-medium leading-relaxed">{item.mnemonic}</p>
                  </div>
                </div>

                {/* Visual Why & Example (Collapsible / Expandable) */}
                {isExpanded && (
                  <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs animate-fadeIn">
                    {/* Visual Why */}
                    <div className="bg-blue-50/60 border border-blue-100 rounded-lg p-2.5 text-blue-950">
                      <div className="font-semibold text-blue-900 flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                        Bản chất hình ảnh trực quan:
                      </div>
                      <p className="mt-1 text-slate-700 leading-relaxed">{item.visualWhy}</p>
                    </div>

                    {/* Example */}
                    <div className="bg-emerald-50/60 border border-emerald-100 rounded-lg p-2.5 text-emerald-950">
                      <div className="font-semibold text-emerald-900 flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 text-emerald-600" />
                        Ví dụ áp dụng 1 dòng:
                      </div>
                      <p className="mt-1 font-mono text-slate-800">{item.example}</p>
                    </div>

                    {/* Trap to avoid */}
                    <div className="bg-rose-50/70 border border-rose-100 rounded-lg p-2.5 text-rose-950">
                      <div className="font-semibold text-rose-800 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                        Cạm bẫy học sinh hay mắc:
                      </div>
                      <p className="mt-1 text-slate-700 leading-relaxed">{item.trapToAvoid}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Expand Toggle */}
              <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                <button
                  onClick={() => setExpandedCard(isExpanded ? null : item.id)}
                  className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
                >
                  {isExpanded ? (
                    <>
                      <span>Thu gọn bản chất</span>
                      <ChevronUp className="w-3.5 h-3.5" />
                    </>
                  ) : (
                    <>
                      <span>Xem bản chất trực quan & ví dụ</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredFormulas.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
          <BookMarked className="w-8 h-8 text-slate-400 mx-auto mb-2" />
          <p className="text-sm text-slate-600">Không tìm thấy công thức nào khớp với từ khóa.</p>
        </div>
      )}
    </div>
  );
};
