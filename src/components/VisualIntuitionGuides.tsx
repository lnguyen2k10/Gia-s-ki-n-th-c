import React, { useState } from 'react';
import { Eye, HelpCircle, Sparkles, Compass, Check, ArrowRight, BookOpen } from 'lucide-react';

interface GuideItem {
  id: string;
  title: string;
  summary: string;
  svgType: 'sin_cos_axes' | 'pythagoras_proof' | 'symmetry_angles' | 'dot_product_proof';
  fullExplanation: string[];
  mnemonicRule: string;
}

const GUIDES: GuideItem[] = [
  {
    id: 'why-axes',
    title: '1. Tại sao trục Sin lại thẳng đứng, còn Cos lại nằm ngang?',
    summary: 'Nguồn gốc xuất phát từ hệ trục tọa độ Descartes Oxy và tam giác vuông lớp 9.',
    svgType: 'sin_cos_axes',
    fullExplanation: [
      'Ở lớp 9, trong tam giác vuông: Sin = Đối / Huyền, Cos = Kề / Huyền.',
      'Lên lớp 11, các nhà toán học đặt tam giác vuông này vào vòng tròn có Bán kính R = 1 (cạnh huyền luôn bằng 1).',
      'Khi đó: Sin α = Cạnh đối / 1 = Cạnh đối (chính là chiều cao tung độ y thẳng đứng).',
      'Cos α = Cạnh kề / 1 = Cạnh kề (chính là chiều ngang hoành độ x nằm ngang).',
      'Kết luận: Trục Sin chính là trục tung Oy (thẳng đứng), trục Cos chính là trục hoành Ox (nằm ngang)!'
    ],
    mnemonicRule: 'Nhớ câu cửa miệng: "Sin ĐỨNG, Cos NẰM" (Sin đứng chào cờ, Cos nằm ngủ).'
  },
  {
    id: 'why-pythagoras',
    title: '2. Tại sao sin²α + cos²α luôn luôn bằng 1?',
    summary: 'Đây chính là định lý Pytago quen thuộc từ lớp 7 áp dụng cho vòng tròn đơn vị.',
    svgType: 'pythagoras_proof',
    fullExplanation: [
      'Xét tam giác vuông OMH vuông tại H trên vòng tròn lượng giác:',
      'Độ dài cạnh OH trên trục hoành bằng |cos α|.',
      'Độ dài cạnh HM trên trục tung bằng |sin α|.',
      'Cạnh huyền OM chính là bán kính của vòng tròn đơn vị: OM = R = 1.',
      'Theo định lý Pytago: OH² + HM² = OM² => (cos α)² + (sin α)² = 1² = 1.',
      'Vì bình phương của một số luôn dương nên dù góc α ở bất kỳ góc phần tư nào (âm hay dương), tổng sin² + cos² luôn bằng đúng 1!'
    ],
    mnemonicRule: 'Sin bình cộng Cos bình như quả trứng gà tròn xoe = 1.'
  },
  {
    id: 'why-symmetry',
    title: '3. Bản chất hình học của thần chú "Cos đối, Sin bù, Phụ chéo"',
    summary: 'Các công thức cung liên kết không phải do học vẹt, mà do tính đối xứng hình học tuyệt đẹp.',
    svgType: 'symmetry_angles',
    fullExplanation: [
      'Cos ĐỐI: Điểm góc α và góc -α đối xứng nhau qua trục hoành Ox. Vì đối xứng qua Ox nên chúng có CÙNG hoành độ (Cos bằng nhau), còn tung độ Sin bị trái dấu => cos(-α) = cos α, sin(-α) = -sin α.',
      'Sin BÙ: Điểm góc α và góc (180° - α) đối xứng nhau qua trục tung Oy. Vì đối xứng qua Oy nên chúng có CÙNG tung độ (Sin bằng nhau), còn hoành độ Cos bị trái dấu => sin(π - α) = sin α, cos(π - α) = -cos α.',
      'Phụ CHÉO: Hai góc phụ nhau (α và 90° - α) đối xứng qua đường phân giác y = x. Đối xứng qua y = x sẽ hoán đổi vai trò của x và y: Hoành độ biến thành Tung độ và ngược lại => sin(π/2 - α) = cos α, cos(π/2 - α) = sin α.',
      'Hơn kém π: Quay thêm nửa vòng tròn (180°) là phép đối xứng qua gốc tọa độ O. Cả Sin và Cos đều đổi dấu (-) => Tan = (-Sin)/(-Cos) = Sin/Cos giữ NGUYÊN DẤU!'
    ],
    mnemonicRule: 'Cos ĐỐI - Sin BÙ - Phụ CHÉO - Hơn kém π là TAN và COT.'
  },
  {
    id: 'why-addition',
    title: '4. Tại sao công thức cộng cos(a - b) = cos a cos b + sin a sin b?',
    summary: 'Bản chất xuất phát từ tích vô hướng của 2 vectơ đơn vị trên vòng tròn.',
    svgType: 'dot_product_proof',
    fullExplanation: [
      'Lấy 2 vectơ đơn vị u = (cos a, sin a) và v = (cos b, sin b) trên vòng tròn lượng giác.',
      'Độ dài |u| = 1 và |v| = 1. Góc kẹp giữa 2 vectơ u và v chính là hiệu số góc: (a - b).',
      'Cách 1 (Định nghĩa tích vô hướng hình học): u · v = |u| · |v| · cos(góc kẹp) = 1 · 1 · cos(a - b) = cos(a - b).',
      'Cách 2 (Tọa độ tích vô hướng): u · v = x_u · x_v + y_u · y_v = cos a · cos b + sin a · sin b.',
      'Đồng nhất 2 cách tính trên, ta lập tức có: cos(a - b) = cos a cos b + sin a sin b!',
      'Từ công thức này, thay b bằng -b ta suy ra cos(a + b); lấy góc phụ ta suy ra sin(a + b). Mọi thứ đều kết nối hoàn hảo.'
    ],
    mnemonicRule: 'Cos thì cos cos sin sin - Dấu trừ đi trước dấu cộng đi sau.'
  }
];

export const VisualIntuitionGuides: React.FC = () => {
  const [activeGuideId, setActiveGuideId] = useState<string>('why-axes');

  const activeGuide = GUIDES.find((g) => g.id === activeGuideId) || GUIDES[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-indigo-600" />
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Giải Mã Bản Chất Hình Ảnh Trực Quan Lượng Giác
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Tìm hiểu nguyên nhân sâu xa của các định lý để con hiểu sâu, nhớ lâu và không bao giờ bị phụ thuộc vào học vẹt.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 border-r border-slate-100 p-3 sm:p-4 space-y-1.5 bg-slate-50/30">
          <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider px-2">
            Danh mục bản chất:
          </span>
          {GUIDES.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveGuideId(g.id)}
              className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer text-xs sm:text-sm font-semibold flex flex-col gap-1 ${
                activeGuideId === g.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span className="line-clamp-2">{g.title}</span>
              <span className={`text-[11px] font-normal line-clamp-1 ${
                activeGuideId === g.id ? 'text-indigo-200' : 'text-slate-600'
              }`}>
                {g.summary}
              </span>
            </button>
          ))}
        </div>

        {/* Detailed Visual Explainer Stage */}
        <div className="lg:col-span-8 p-5 sm:p-7 space-y-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {activeGuide.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {activeGuide.summary}
            </p>
          </div>

          {/* Graphic Diagram */}
          <div className="w-full bg-slate-900 rounded-xl p-4 flex items-center justify-center shadow-inner">
            <div className="w-full max-w-[340px] aspect-[4/3]">
              {activeGuide.svgType === 'sin_cos_axes' && (
                <svg viewBox="0 0 320 240" className="w-full h-full select-none">
                  {/* Axes */}
                  <line x1={20} y1={180} x2={300} y2={180} stroke="#60a5fa" strokeWidth="2" />
                  <line x1={80} y1={220} x2={80} y2={20} stroke="#f87171" strokeWidth="2" />
                  <text x="250" y="172" fill="#93c5fd" fontSize="12" fontWeight="bold">Trục Cos (Ox)</text>
                  <text x="88" y="32" fill="#fca5a5" fontSize="12" fontWeight="bold">Trục Sin (Oy)</text>

                  {/* Arc and Triangle */}
                  <path d="M 80 180 A 130 130 0 0 1 200 80" fill="none" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
                  {/* Triangle */}
                  <polygon points="80,180 180,180 180,95" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth="1.5" />
                  <line x1={80} y1={180} x2={180} y2={95} stroke="#fbbf24" strokeWidth="2.5" />
                  <text x="110" y="130" fill="#fef08a" fontSize="11" fontWeight="bold">R = 1</text>

                  {/* Horizontal Cos */}
                  <line x1={80} y1={180} x2={180} y2={180} stroke="#3b82f6" strokeWidth="4" />
                  <text x="110" y="200" fill="#60a5fa" fontSize="11" fontWeight="bold">Cạnh kề = Cos α</text>

                  {/* Vertical Sin */}
                  <line x1={180} y1={180} x2={180} y2={95} stroke="#ef4444" strokeWidth="4" />
                  <text x="188" y="145" fill="#f87171" fontSize="11" fontWeight="bold">Cạnh đối = Sin α</text>

                  {/* Right Angle marker */}
                  <polyline points="170,180 170,170 180,170" fill="none" stroke="#f59e0b" strokeWidth="1" />
                  <text x="95" y="172" fill="#f59e0b" fontSize="10">α</text>
                </svg>
              )}

              {activeGuide.svgType === 'pythagoras_proof' && (
                <svg viewBox="0 0 320 240" className="w-full h-full select-none">
                  <circle cx="160" cy="120" r="95" fill="none" stroke="#475569" strokeWidth="1.5" />
                  <line x1="40" y1="120" x2="280" y2="120" stroke="#60a5fa" strokeWidth="1.5" />
                  <line x1="160" y1="220" x2="160" y2="20" stroke="#f87171" strokeWidth="1.5" />

                  {/* Right Triangle */}
                  <polygon points="160,120 225,120 225,50" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="1.5" />
                  <line x1="160" y1="120" x2="225" y2="50" stroke="#fbbf24" strokeWidth="2.5" />
                  <circle cx="225" cy="50" r="5" fill="#fbbf24" />

                  <text x="175" y="80" fill="#fef08a" fontSize="11" fontWeight="bold">Cạnh huyền c = 1</text>
                  <text x="170" y="135" fill="#60a5fa" fontSize="10">a = |cos α|</text>
                  <text x="232" y="90" fill="#f87171" fontSize="10">b = |sin α|</text>

                  <rect x="70" y="185" width="180" height="30" rx="6" fill="#1e293b" stroke="#334155" />
                  <text x="85" y="205" fill="#34d399" fontSize="11" fontWeight="bold" fontFamily="monospace">
                    a² + b² = c² =&gt; cos² + sin² = 1
                  </text>
                </svg>
              )}

              {activeGuide.svgType === 'symmetry_angles' && (
                <svg viewBox="0 0 320 240" className="w-full h-full select-none">
                  <circle cx="160" cy="120" r="85" fill="none" stroke="#475569" strokeWidth="1.5" />
                  <line x1="50" y1="120" x2="270" y2="120" stroke="#60a5fa" strokeWidth="1.5" />
                  <line x1="160" y1="215" x2="160" y2="25" stroke="#f87171" strokeWidth="1.5" />

                  {/* Angle alpha */}
                  <line x1="160" y1="120" x2="225" y2="65" stroke="#fbbf24" strokeWidth="2" />
                  <circle cx="225" cy="65" r="4.5" fill="#fbbf24" />
                  <text x="230" y="60" fill="#fef08a" fontSize="10" fontWeight="bold">M (α)</text>

                  {/* Angle -alpha (Opposite Cos) */}
                  <line x1="160" y1="120" x2="225" y2="175" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="225" cy="175" r="4.5" fill="#f472b6" />
                  <text x="230" y="185" fill="#fbcfe8" fontSize="10" fontWeight="bold">M' (-α)</text>

                  {/* Vertical symmetry connector */}
                  <line x1="225" y1="65" x2="225" y2="175" stroke="#a855f7" strokeWidth="1.5" />
                  <text x="228" y="125" fill="#c084fc" fontSize="9">Cùng Cos x</text>

                  {/* Angle pi - alpha (Supplementary Sin) */}
                  <line x1="160" y1="120" x2="95" y2="65" stroke="#34d399" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="95" cy="65" r="4.5" fill="#34d399" />
                  <text x="35" y="60" fill="#a7f3d0" fontSize="10" fontWeight="bold">M'' (π - α)</text>

                  {/* Horizontal symmetry connector */}
                  <line x1="95" y1="65" x2="225" y2="65" stroke="#34d399" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="140" y="55" fill="#6ee7b7" fontSize="9">Cùng Sin y</text>
                </svg>
              )}

              {activeGuide.svgType === 'dot_product_proof' && (
                <svg viewBox="0 0 320 240" className="w-full h-full select-none">
                  <circle cx="160" cy="120" r="85" fill="none" stroke="#475569" strokeWidth="1.5" />
                  <line x1="50" y1="120" x2="270" y2="120" stroke="#60a5fa" strokeWidth="1" />
                  <line x1="160" y1="215" x2="160" y2="25" stroke="#f87171" strokeWidth="1" />

                  {/* Vector u */}
                  <line x1="160" y1="120" x2="220" y2="60" stroke="#fbbf24" strokeWidth="2.5" />
                  <circle cx="220" cy="60" r="4" fill="#fbbf24" />
                  <text x="225" y="55" fill="#fef08a" fontSize="10" fontWeight="bold">u(cos a, sin a)</text>

                  {/* Vector v */}
                  <line x1="160" y1="120" x2="235" y2="110" stroke="#38bdf8" strokeWidth="2.5" />
                  <circle cx="235" cy="110" r="4" fill="#38bdf8" />
                  <text x="240" y="115" fill="#bae6fd" fontSize="10" fontWeight="bold">v(cos b, sin b)</text>

                  {/* Angle arc between u and v */}
                  <text x="185" y="95" fill="#f43f5e" fontSize="10" fontWeight="bold">(a - b)</text>

                  <rect x="40" y="185" width="240" height="28" rx="6" fill="#1e293b" stroke="#334155" />
                  <text x="50" y="203" fill="#e2e8f0" fontSize="10" fontFamily="monospace">
                    u·v = |u||v|cos(a-b) = cos a cos b + sin a sin b
                  </text>
                </svg>
              )}
            </div>
          </div>

          {/* Step-by-step breakdown */}
          <div className="space-y-2.5">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              Các bước suy luận logic:
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              {activeGuide.fullExplanation.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mnemonic banner */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-amber-950">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-900">Mẹo nhớ nhanh trong phòng thi:</span>
              <p className="mt-0.5 font-medium">{activeGuide.mnemonicRule}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
