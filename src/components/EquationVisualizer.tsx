import React, { useState } from 'react';
import { HelpCircle, Check, ArrowRight, ShieldAlert } from 'lucide-react';

export const EquationVisualizer: React.FC = () => {
  const [eqType, setEqType] = useState<'sin' | 'cos' | 'tan'>('sin');
  const [targetValKey, setTargetValKey] = useState<string>('half');

  interface ValueOption {
    key: string;
    label: string;
    numVal: number;
    angleRadPrimary: number;
    angleStrPrimary: string;
    angleRadSecondary?: number;
    angleStrSecondary?: string;
  }

  const sinCosOptions: ValueOption[] = [
    { key: 'zero', label: '0', numVal: 0, angleRadPrimary: 0, angleStrPrimary: '0', angleRadSecondary: Math.PI, angleStrSecondary: 'π' },
    { key: 'half', label: '1/2', numVal: 0.5, angleRadPrimary: Math.PI / 6, angleStrPrimary: 'π/6 (30°)', angleRadSecondary: (5 * Math.PI) / 6, angleStrSecondary: '5π/6 (150°)' },
    { key: 'sqrt2_2', label: '√2/2', numVal: Math.SQRT2 / 2, angleRadPrimary: Math.PI / 4, angleStrPrimary: 'π/4 (45°)', angleRadSecondary: (3 * Math.PI) / 4, angleStrSecondary: '3π/4 (135°)' },
    { key: 'sqrt3_2', label: '√3/2', numVal: Math.sqrt(3) / 2, angleRadPrimary: Math.PI / 3, angleStrPrimary: 'π/3 (60°)', angleRadSecondary: (2 * Math.PI) / 3, angleStrSecondary: '2π/3 (120°)' },
    { key: 'one', label: '1 (Đặc biệt)', numVal: 1, angleRadPrimary: Math.PI / 2, angleStrPrimary: 'π/2 (90°)' },
    { key: 'neg_half', label: '-1/2', numVal: -0.5, angleRadPrimary: -Math.PI / 6, angleStrPrimary: '-π/6 (-30°)', angleRadSecondary: (7 * Math.PI) / 6, angleStrSecondary: '7π/6 (210°)' },
    { key: 'neg_one', label: '-1 (Đặc biệt)', numVal: -1, angleRadPrimary: -Math.PI / 2, angleStrPrimary: '-π/2 (270°)' },
  ];

  const tanOptions: ValueOption[] = [
    { key: 'zero', label: '0', numVal: 0, angleRadPrimary: 0, angleStrPrimary: '0' },
    { key: 'sqrt3_3', label: '√3/3', numVal: Math.sqrt(3) / 3, angleRadPrimary: Math.PI / 6, angleStrPrimary: 'π/6 (30°)' },
    { key: 'one', label: '1', numVal: 1, angleRadPrimary: Math.PI / 4, angleStrPrimary: 'π/4 (45°)' },
    { key: 'sqrt3', label: '√3', numVal: Math.sqrt(3), angleRadPrimary: Math.PI / 3, angleStrPrimary: 'π/3 (60°)' },
    { key: 'neg_one', label: '-1', numVal: -1, angleRadPrimary: -Math.PI / 4, angleStrPrimary: '-π/4 (-45°)' },
  ];

  const currentList = eqType === 'tan' ? tanOptions : sinCosOptions;
  const currentOpt = currentList.find(o => o.key === targetValKey) || currentList[1];

  // Circle dimensions
  const center = 130;
  const radius = 90;

  // Primary intersection coordinate
  let p1x = 0;
  let p1y = 0;
  let p2x = 0;
  let p2y = 0;
  let hasTwoSolutions = true;

  if (eqType === 'sin') {
    const yVal = currentOpt.numVal;
    p1y = center - yVal * radius;
    p2y = center - yVal * radius;
    const xDist = Math.sqrt(Math.max(0, 1 - yVal * yVal));
    p1x = center + xDist * radius;
    p2x = center - xDist * radius;
    if (Math.abs(yVal) === 1) hasTwoSolutions = false;
  } else if (eqType === 'cos') {
    const xVal = currentOpt.numVal;
    p1x = center + xVal * radius;
    p2x = center + xVal * radius;
    const yDist = Math.sqrt(Math.max(0, 1 - xVal * xVal));
    p1y = center - yDist * radius;
    p2y = center + yDist * radius;
    if (Math.abs(xVal) === 1) hasTwoSolutions = false;
  } else {
    // Tan
    const angle = currentOpt.angleRadPrimary;
    p1x = center + Math.cos(angle) * radius;
    p1y = center - Math.sin(angle) * radius;
    // Opposite point
    p2x = center - Math.cos(angle) * radius;
    p2y = center + Math.sin(angle) * radius;
    hasTwoSolutions = true;
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
      <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/50 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-slate-900">
            Trực Quan Hóa: Bản Chất Phương Trình Lượng Giác & Họ Nghiệm
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Nhìn hình để hiểu tại sao Sin có 2 họ bù nhau, Cos có 2 họ đối nhau và vì sao có đuôi + k2π.
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex bg-slate-200/80 p-0.5 rounded-lg text-xs font-semibold">
          {(['sin', 'cos', 'tan'] as const).map((t) => (
            <button
              key={t}
              onClick={() => {
                setEqType(t);
                setTargetValKey(t === 'tan' ? 'one' : 'half');
              }}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                eqType === t ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t}(x) = m
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Circle Diagram showing the cutting line */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-[280px] aspect-square bg-slate-900 rounded-xl p-2 relative flex items-center justify-center shadow-inner">
            <svg viewBox="0 0 260 260" className="w-full h-full select-none">
              {/* Main unit circle */}
              <circle cx={center} cy={center} r={radius} fill="none" stroke="#475569" strokeWidth="1.5" />

              {/* Axes */}
              <line x1={15} y1={center} x2={245} y2={center} stroke="#60a5fa" strokeWidth="1.5" />
              <line x1={center} y1={245} x2={center} y2={15} stroke="#f87171" strokeWidth="1.5" />
              <text x="240" y={center - 5} fill="#93c5fd" fontSize="10">Cos</text>
              <text x={center + 5} y="22" fill="#fca5a5" fontSize="10">Sin</text>

              {/* Cutting line */}
              {eqType === 'sin' && (
                <g>
                  {/* Horizontal cutting line y = m */}
                  <line x1={20} y1={p1y} x2={240} y2={p1y} stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
                  <text x={25} y={p1y - 5} fill="#34d399" fontSize="10" fontWeight="bold">
                    Đường nằm ngang y = {currentOpt.label}
                  </text>
                </g>
              )}

              {eqType === 'cos' && (
                <g>
                  {/* Vertical cutting line x = m */}
                  <line x1={p1x} y1={20} x2={p1x} y2={240} stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
                  <text x={p1x + 4} y="30" fill="#34d399" fontSize="10" fontWeight="bold">
                    Đường thẳng đứng x = {currentOpt.label}
                  </text>
                </g>
              )}

              {eqType === 'tan' && (
                <g>
                  {/* Diameter passing through origin */}
                  <line x1={p1x} y1={p1y} x2={p2x} y2={p2y} stroke="#a855f7" strokeWidth="2" strokeDasharray="3 3" />
                </g>
              )}

              {/* Ray 1 from origin */}
              <line x1={center} y1={center} x2={p1x} y2={p1y} stroke="#f59e0b" strokeWidth="2" />
              <circle cx={p1x} cy={p1y} r={5} fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />
              <text x={p1x + (p1x >= center ? 6 : -35)} y={p1y - 6} fill="#fef08a" fontSize="11" fontWeight="bold">
                Điểm M₁ (α)
              </text>

              {/* Ray 2 from origin if exists */}
              {hasTwoSolutions && (
                <g>
                  <line x1={center} y1={center} x2={p2x} y2={p2y} stroke="#ec4899" strokeWidth="2" />
                  <circle cx={p2x} cy={p2y} r={5} fill="#f472b6" stroke="#ffffff" strokeWidth="1.5" />
                  <text x={p2x + (p2x >= center ? 6 : -65)} y={p2y + (eqType === 'cos' ? 14 : -6)} fill="#fbcfe8" fontSize="11" fontWeight="bold">
                    {eqType === 'sin' ? 'M₂ (π - α)' : eqType === 'cos' ? 'M₂ (-α)' : 'M₂ (α + π)'}
                  </text>
                </g>
              )}
            </svg>
          </div>

          {/* Quick value presets */}
          <div className="mt-3 flex flex-wrap gap-1.5 justify-center">
            {currentList.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setTargetValKey(opt.key)}
                className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors cursor-pointer ${
                  targetValKey === opt.key
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                m = {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Mathematical & Pedagogical Breakdown */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="bg-indigo-50/70 border border-indigo-100 rounded-xl p-4">
              <span className="text-xs font-semibold text-indigo-900 uppercase tracking-wide">
                Đang giải phương trình:
              </span>
              <div className="text-xl sm:text-2xl font-mono font-bold text-indigo-950 mt-1">
                {eqType}(x) = {currentOpt.label}
              </div>

              {/* Step 1: Angle conversion */}
              <div className="mt-3 text-xs text-indigo-900 flex items-center gap-2">
                <ArrowRight className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>
                  Đổi số <span className="font-mono font-bold">{currentOpt.label}</span> về dạng lượng giác:{' '}
                  <span className="font-mono font-semibold text-indigo-700">
                    {currentOpt.label} = {eqType}({currentOpt.angleStrPrimary})
                  </span>
                </span>
              </div>
            </div>

            {/* Final Solution Box */}
            <div className="bg-white border-2 border-emerald-500/30 rounded-xl p-4 shadow-xs">
              <span className="text-xs font-bold uppercase text-emerald-800 tracking-wider flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" /> Kết quả tập nghiệm chuẩn:
              </span>

              <div className="mt-2.5 space-y-1.5 font-mono text-sm sm:text-base text-slate-900 bg-slate-50 p-3 rounded-lg border border-slate-200">
                {eqType === 'sin' && (
                  <>
                    <div className="text-amber-800 font-bold">
                      Họ 1: x = {currentOpt.angleStrPrimary.split(' ')[0]} + k2π
                    </div>
                    {hasTwoSolutions && (
                      <div className="text-pink-700 font-bold">
                        Họ 2: x = π - ({currentOpt.angleStrPrimary.split(' ')[0]}) + k2π = {currentOpt.angleStrSecondary?.split(' ')[0]} + k2π
                      </div>
                    )}
                    <div className="text-xs text-slate-600 font-sans mt-1">với k ∈ ℤ (k là số nguyên số vòng quay)</div>
                  </>
                )}

                {eqType === 'cos' && (
                  <>
                    <div className="text-indigo-900 font-bold">
                      x = ±({currentOpt.angleStrPrimary.split(' ')[0]}) + k2π
                    </div>
                    <div className="text-xs text-slate-600 font-sans mt-1">
                      (Tức là 2 họ đối nhau: x = {currentOpt.angleStrPrimary.split(' ')[0]} + k2π hoặc x = -{currentOpt.angleStrPrimary.split(' ')[0]} + k2π, k ∈ ℤ)
                    </div>
                  </>
                )}

                {eqType === 'tan' && (
                  <>
                    <div className="text-purple-900 font-bold">
                      x = {currentOpt.angleStrPrimary.split(' ')[0]} + kπ (k ∈ ℤ)
                    </div>
                    <div className="text-xs text-slate-600 font-sans mt-1">
                      ⭐ Lưu ý vàng: Tan chỉ cộng <span className="font-bold text-purple-700">kπ (nửa vòng)</span>, không phải k2π!
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Sư phạm giải thích vì sao */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 text-xs text-amber-950 space-y-2">
            <div className="font-semibold flex items-center gap-1.5 text-amber-900">
              <HelpCircle className="w-4 h-4 text-amber-700 shrink-0" />
              Tại sao lại có công thức nghiệm như vậy? (Giải thích trực quan)
            </div>
            {eqType === 'sin' && (
              <p className="leading-relaxed text-amber-900">
                Trên hình vẽ bên trái, đường nằm ngang màu xanh lá <code className="bg-white px-1 py-0.5 rounded font-mono">y = {currentOpt.label}</code> cắt vòng tròn tại đúng <strong>2 điểm M₁ và M₂</strong> đối xứng qua trục tung. Một điểm có góc là α, điểm kia đối xứng nên góc là <strong>π - α</strong> (sin bù!). Khi điểm quay thêm đúng 1 vòng tròn 360° (2π), 2 vòng (4π)... thì lại rơi về đúng vị trí đó, do vậy phải thêm đuôi <strong>+ k2π</strong>.
              </p>
            )}
            {eqType === 'cos' && (
              <p className="leading-relaxed text-amber-900">
                Đường thẳng đứng <code className="bg-white px-1 py-0.5 rounded font-mono">x = {currentOpt.label}</code> cắt vòng tròn tại 2 điểm M₁ và M₂ đối xứng qua trục hoành. Một điểm ở phía trên (+α) và một điểm ở phía dưới (-α) (cos đối!). Cả hai đều có cùng hoành độ cos, nên họ nghiệm là <strong>±α + k2π</strong>.
              </p>
            )}
            {eqType === 'tan' && (
              <p className="leading-relaxed text-amber-900">
                Hai điểm M₁ và M₂ thẳng hàng qua gốc tọa độ O (cách nhau đúng nửa vòng tròn π = 180°). Vì tan(x + π) = tan x, nên chỉ cần lấy 1 ngọn cung ban đầu và cộng thêm <strong>+ kπ</strong> là tự động bao trọn cả hai điểm!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
