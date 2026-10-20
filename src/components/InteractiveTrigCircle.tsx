import React, { useState } from 'react';
import { SPECIAL_ANGLES } from '../data/mathData';
import { Compass, RotateCcw, Eye, Info, CheckCircle2 } from 'lucide-react';

export const InteractiveTrigCircle: React.FC = () => {
  const [angleDeg, setAngleDeg] = useState<number>(30);
  const [showSpecialPoints, setShowSpecialPoints] = useState<boolean>(true);
  const [showPythagoras, setShowPythagoras] = useState<boolean>(true);
  const [showTangentLines, setShowTangentLines] = useState<boolean>(false);
  const [activeRelation, setActiveRelation] = useState<'none' | 'opposite' | 'supplementary' | 'complementary' | 'morePi'>('none');

  // Convert to radians
  const angleRad = (angleDeg * Math.PI) / 180;
  const cosVal = Math.cos(angleRad);
  const sinVal = Math.sin(angleRad);
  const tanVal = Math.abs(cosVal) > 0.0001 ? Math.tan(angleRad) : null;
  const cotVal = Math.abs(sinVal) > 0.0001 ? 1 / Math.tan(angleRad) : null;

  // Circle dimensions in SVG
  const center = 170;
  const radius = 120;

  // Coordinates of point M(cos, sin)
  const mx = center + cosVal * radius;
  const my = center - sinVal * radius; // SVG y is inverted

  // Determine quadrant
  let quadrant = 1;
  const normDeg = ((angleDeg % 360) + 360) % 360;
  if (normDeg > 0 && normDeg < 90) quadrant = 1;
  else if (normDeg > 90 && normDeg < 180) quadrant = 2;
  else if (normDeg > 180 && normDeg < 270) quadrant = 3;
  else if (normDeg > 270 && normDeg < 360) quadrant = 4;
  else quadrant = 0; // On axis

  // Secondary angle for related angles feature
  let relatedDeg: number | null = null;
  let relationLabel = '';
  if (activeRelation === 'opposite') {
    relatedDeg = -angleDeg;
    relationLabel = 'Góc đối: -α (Cùng Cos, Sin đối dấu)';
  } else if (activeRelation === 'supplementary') {
    relatedDeg = 180 - angleDeg;
    relationLabel = 'Góc bù: 180° - α (Cùng Sin, Cos đối dấu)';
  } else if (activeRelation === 'complementary') {
    relatedDeg = 90 - angleDeg;
    relationLabel = 'Góc phụ: 90° - α (Đổi chéo: Sin thành Cos, Cos thành Sin)';
  } else if (activeRelation === 'morePi') {
    relatedDeg = angleDeg + 180;
    relationLabel = 'Hơn kém π: α + 180° (Cùng Tan & Cot, Sin và Cos đều đổi dấu)';
  }

  const relRad = relatedDeg !== null ? (relatedDeg * Math.PI) / 180 : 0;
  const relMx = relatedDeg !== null ? center + Math.cos(relRad) * radius : 0;
  const relMy = relatedDeg !== null ? center - Math.sin(relRad) * radius : 0;

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
      {/* Header */}
      <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-slate-50/50">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-indigo-600" />
            <h2 className="text-base sm:text-lg font-semibold text-slate-900">
              Mô Phỏng Trực Quan Vòng Tròn Lượng Giác Đơn Vị
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Kéo góc hoặc click mốc đặc biệt để quan sát trực tiếp trục Sin (đứng), Cos (nằm) và dấu 4 góc phần tư.
          </p>
        </div>

        {/* Quick Reset */}
        <button
          onClick={() => { setAngleDeg(30); setActiveRelation('none'); }}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Về góc mẫu (30°)
        </button>
      </div>

      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* SVG Circle visualizer */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="relative w-full max-w-[380px] aspect-square bg-slate-900 rounded-xl p-3 shadow-inner select-none flex items-center justify-center">
            <svg viewBox="0 0 340 340" className="w-full h-full">
              {/* Quadrant background tints */}
              <rect x={center} y={center - radius} width={radius} height={radius} fill="rgba(59, 130, 246, 0.08)" />
              <text x={center + radius * 0.55} y={center - radius * 0.55} fill="rgba(255,255,255,0.25)" fontSize="11" fontWeight="bold">Góc I (+, +)</text>

              <rect x={center - radius} y={center - radius} width={radius} height={radius} fill="rgba(239, 68, 68, 0.08)" />
              <text x={center - radius * 0.85} y={center - radius * 0.55} fill="rgba(255,255,255,0.25)" fontSize="11" fontWeight="bold">Góc II (-, +)</text>

              <rect x={center - radius} y={center} width={radius} height={radius} fill="rgba(245, 158, 11, 0.08)" />
              <text x={center - radius * 0.85} y={center + radius * 0.65} fill="rgba(255,255,255,0.25)" fontSize="11" fontWeight="bold">Góc III (-, -)</text>

              <rect x={center} y={center} width={radius} height={radius} fill="rgba(16, 185, 129, 0.08)" />
              <text x={center + radius * 0.55} y={center + radius * 0.65} fill="rgba(255,255,255,0.25)" fontSize="11" fontWeight="bold">Góc IV (+, -)</text>

              {/* Main unit circle */}
              <circle cx={center} cy={center} r={radius} fill="none" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx={center} cy={center} r={radius} fill="none" stroke="#64748b" strokeWidth="1.5" />

              {/* Axes Ox (Cos) and Oy (Sin) */}
              <line x1={20} y1={center} x2={320} y2={center} stroke="#60a5fa" strokeWidth="2" />
              <line x1={center} y1={320} x2={center} y2={20} stroke="#f87171" strokeWidth="2" />

              {/* Axis Arrowheads */}
              <polygon points="325,170 315,166 315,174" fill="#60a5fa" />
              <polygon points="170,15 166,25 174,25" fill="#f87171" />

              {/* Axis Labels */}
              <text x="325" y="165" fill="#93c5fd" fontSize="12" fontWeight="bold">Trục Cos (+x)</text>
              <text x="178" y="24" fill="#fca5a5" fontSize="12" fontWeight="bold">Trục Sin (+y)</text>
              <text x="156" y="184" fill="#94a3b8" fontSize="11">O(0,0)</text>

              {/* Key numbers on axes: -1, 0, 1 */}
              <text x={center + radius - 4} y={center + 15} fill="#cbd5e1" fontSize="10">1</text>
              <text x={center - radius - 8} y={center + 15} fill="#cbd5e1" fontSize="10">-1</text>
              <text x={center - 15} y={center - radius + 5} fill="#cbd5e1" fontSize="10">1</text>
              <text x={center - 18} y={center + radius + 10} fill="#cbd5e1" fontSize="10">-1</text>

              {/* Special Angles Marks */}
              {showSpecialPoints && SPECIAL_ANGLES.map((pt, idx) => {
                const px = center + Math.cos(pt.radVal) * radius;
                const py = center - Math.sin(pt.radVal) * radius;
                const isCurrent = Math.abs(normDeg - pt.deg) < 2;
                return (
                  <g key={idx} onClick={() => setAngleDeg(pt.deg)} className="cursor-pointer">
                    <circle
                      cx={px}
                      cy={py}
                      r={isCurrent ? 5 : 2.5}
                      fill={isCurrent ? '#fbbf24' : '#94a3b8'}
                      stroke={isCurrent ? '#ffffff' : 'none'}
                      strokeWidth={isCurrent ? 2 : 0}
                    />
                  </g>
                );
              })}

              {/* Angle Arc */}
              <path
                d={`M ${center + 28} ${center} A 28 28 0 ${normDeg > 180 ? 1 : 0} 0 ${center + 28 * Math.cos(angleRad)} ${center - 28 * Math.sin(angleRad)}`}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
              />

              {/* Pythagoras Triangle (OHM) */}
              {showPythagoras && (
                <polygon
                  points={`${center},${center} ${mx},${center} ${mx},${my}`}
                  fill="rgba(245, 158, 11, 0.15)"
                  stroke="rgba(245, 158, 11, 0.5)"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
              )}

              {/* Projection onto Cos Axis (Horizontal blue bar) */}
              <line x1={center} y1={center} x2={mx} y2={center} stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />

              {/* Projection onto Sin Axis (Vertical red bar) */}
              <line x1={center} y1={center} x2={center} y2={my} stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />

              {/* Dotted lines from point M to axes */}
              <line x1={mx} y1={my} x2={mx} y2={center} stroke="#f87171" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1={mx} y1={my} x2={center} y2={my} stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Radius Vector OM */}
              <line x1={center} y1={center} x2={mx} y2={my} stroke="#f59e0b" strokeWidth="2.5" />

              {/* Tangent line illustration if enabled */}
              {showTangentLines && (
                <>
                  {/* Tangent axis at x = 1 */}
                  <line x1={center + radius} y1={20} x2={center + radius} y2={320} stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" />
                  <text x={center + radius + 4} y="35" fill="#34d399" fontSize="10" fontWeight="bold">Trục Tan (x=1)</text>
                  {/* Cotangent axis at y = 1 */}
                  <line x1={20} y1={center - radius} x2={320} y2={center - radius} stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 4" />
                  <text x="25" y={center - radius - 5} fill="#c084fc" fontSize="10" fontWeight="bold">Trục Cot (y=1)</text>
                </>
              )}

              {/* Secondary Related Angle point if active */}
              {relatedDeg !== null && (
                <g>
                  <line x1={center} y1={center} x2={relMx} y2={relMy} stroke="#a855f7" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx={relMx} cy={relMy} r={5} fill="#c084fc" stroke="#ffffff" strokeWidth="1.5" />
                  <text x={relMx + (relMx > center ? 6 : -36)} y={relMy + (relMy > center ? 15 : -8)} fill="#e9d5ff" fontSize="11" fontWeight="bold">
                    M'({relatedDeg}°)
                  </text>
                  <line x1={mx} y1={my} x2={relMx} y2={relMy} stroke="#e879f9" strokeWidth="1" strokeDasharray="2 2" />
                </g>
              )}

              {/* Point M(cos, sin) */}
              <circle cx={mx} cy={my} r={6.5} fill="#fbbf24" stroke="#ffffff" strokeWidth="2" />
              <text x={mx + (cosVal >= 0 ? 8 : -65)} y={my + (sinVal >= 0 ? -8 : 16)} fill="#fef08a" fontSize="12" fontWeight="bold">
                M(cos, sin)
              </text>
            </svg>
          </div>

          {/* Quick interactive angle selector slider */}
          <div className="w-full mt-4 space-y-2">
            <div className="flex justify-between items-center text-xs text-slate-600 font-medium">
              <span>Điều chỉnh góc α:</span>
              <span className="font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-md">
                {angleDeg}° · {((angleDeg * Math.PI) / 180).toFixed(2)} rad ({normDeg % 30 === 0 || normDeg % 45 === 0 ? SPECIAL_ANGLES.find(a => a.deg === normDeg)?.radStr || '' : ''})
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={angleDeg}
              onChange={(e) => setAngleDeg(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between text-[11px] text-slate-600 px-1">
              <span>0° (0 rad)</span>
              <span>90° (π/2)</span>
              <span>180° (π)</span>
              <span>270° (3π/2)</span>
              <span>360° (2π)</span>
            </div>
          </div>

          {/* Quick angle buttons */}
          <div className="w-full mt-3 flex flex-wrap gap-1.5 justify-center">
            {[0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330].map((d) => (
              <button
                key={d}
                onClick={() => setAngleDeg(d)}
                className={`px-2 py-1 text-xs rounded-md font-medium transition-colors cursor-pointer ${
                  angleDeg === d
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {d}°
              </button>
            ))}
          </div>
        </div>

        {/* Real-time Math Output & Pedagogical Breakdown */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {/* Real-time values table */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-xs uppercase font-semibold tracking-wider text-slate-500">Giá trị lượng giác tại góc α = {angleDeg}°</span>
              <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                quadrant === 1 ? 'bg-blue-100 text-blue-800' :
                quadrant === 2 ? 'bg-red-100 text-red-800' :
                quadrant === 3 ? 'bg-amber-100 text-amber-800' :
                quadrant === 4 ? 'bg-emerald-100 text-emerald-800' :
                'bg-slate-200 text-slate-700'
              }`}>
                {quadrant === 0 ? 'Nằm trên trục tọa độ' : `Góc phần tư thứ ${quadrant}`}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-white p-2.5 rounded-lg border border-red-100 flex flex-col">
                <span className="text-xs font-semibold text-red-600 flex items-center justify-between">
                  <span>Trục SIN (Tung độ y)</span>
                  <span className="text-[10px] text-slate-600">Đoạn đứng đỏ</span>
                </span>
                <span className="text-lg font-mono font-bold text-slate-900 mt-1">
                  sin({angleDeg}°) = {sinVal.toFixed(4)}
                </span>
                <span className="text-xs text-slate-600">
                  {SPECIAL_ANGLES.find(a => a.deg === normDeg)?.sinStr ? `Dạng chuẩn: ${SPECIAL_ANGLES.find(a => a.deg === normDeg)?.sinStr}` : ''}
                </span>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-blue-100 flex flex-col">
                <span className="text-xs font-semibold text-blue-600 flex items-center justify-between">
                  <span>Trục COS (Hoành độ x)</span>
                  <span className="text-[10px] text-slate-600">Đoạn ngang xanh</span>
                </span>
                <span className="text-lg font-mono font-bold text-slate-900 mt-1">
                  cos({angleDeg}°) = {cosVal.toFixed(4)}
                </span>
                <span className="text-xs text-slate-600">
                  {SPECIAL_ANGLES.find(a => a.deg === normDeg)?.cosStr ? `Dạng chuẩn: ${SPECIAL_ANGLES.find(a => a.deg === normDeg)?.cosStr}` : ''}
                </span>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex flex-col">
                <span className="text-xs font-semibold text-emerald-700">
                  tan({angleDeg}°) = sin/cos
                </span>
                <span className="text-base font-mono font-bold text-slate-800 mt-1">
                  {tanVal !== null ? tanVal.toFixed(4) : 'Không xác định (cos=0)'}
                </span>
                <span className="text-xs text-slate-600">
                  {SPECIAL_ANGLES.find(a => a.deg === normDeg)?.tanStr ? `Dạng: ${SPECIAL_ANGLES.find(a => a.deg === normDeg)?.tanStr}` : ''}
                </span>
              </div>

              <div className="bg-white p-2.5 rounded-lg border border-slate-200 flex flex-col">
                <span className="text-xs font-semibold text-purple-700">
                  cot({angleDeg}°) = cos/sin
                </span>
                <span className="text-base font-mono font-bold text-slate-800 mt-1">
                  {cotVal !== null ? cotVal.toFixed(4) : 'Không xác định (sin=0)'}
                </span>
                <span className="text-xs text-slate-600">
                  {SPECIAL_ANGLES.find(a => a.deg === normDeg)?.cotStr ? `Dạng: ${SPECIAL_ANGLES.find(a => a.deg === normDeg)?.cotStr}` : ''}
                </span>
              </div>
            </div>

            {/* Pythagoras Check */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-2.5 flex items-start gap-2 text-xs text-amber-900">
              <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Kiểm chứng định lý Pytago trực quan:</span>
                <p className="mt-0.5 font-mono text-[11px]">
                  sin²({angleDeg}°) + cos²({angleDeg}°) = ({sinVal.toFixed(3)})² + ({cosVal.toFixed(3)})² = {(sinVal * sinVal + cosVal * cosVal).toFixed(3)} ≈ 1.000
                </p>
                <p className="text-[11px] text-amber-800 mt-0.5">
                  Dù góc bao nhiêu đi nữa, cạnh huyền tam giác vuông luôn là bán kính R = 1.
                </p>
              </div>
            </div>
          </div>

          {/* Cung Liên Kết Visualizer Controls */}
          <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-purple-600" />
                So sánh Cung Liên Kết (Mối quan hệ hình học):
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => setActiveRelation(activeRelation === 'opposite' ? 'none' : 'opposite')}
                className={`px-2.5 py-1.5 text-xs rounded-lg text-left font-medium transition-colors cursor-pointer ${
                  activeRelation === 'opposite'
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Cos đối (-α)
              </button>
              <button
                onClick={() => setActiveRelation(activeRelation === 'supplementary' ? 'none' : 'supplementary')}
                className={`px-2.5 py-1.5 text-xs rounded-lg text-left font-medium transition-colors cursor-pointer ${
                  activeRelation === 'supplementary'
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Sin bù (180° - α)
              </button>
              <button
                onClick={() => setActiveRelation(activeRelation === 'complementary' ? 'none' : 'complementary')}
                className={`px-2.5 py-1.5 text-xs rounded-lg text-left font-medium transition-colors cursor-pointer ${
                  activeRelation === 'complementary'
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Phụ chéo (90° - α)
              </button>
              <button
                onClick={() => setActiveRelation(activeRelation === 'morePi' ? 'none' : 'morePi')}
                className={`px-2.5 py-1.5 text-xs rounded-lg text-left font-medium transition-colors cursor-pointer ${
                  activeRelation === 'morePi'
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Khác π (α + 180°)
              </button>
            </div>

            {activeRelation !== 'none' && (
              <div className="p-2.5 bg-purple-50 border border-purple-100 rounded-lg text-xs text-purple-900 mt-2">
                <span className="font-semibold">{relationLabel}</span>
                <p className="mt-1 text-slate-700">
                  Quan sát điểm tím M' trên hình: đối xứng hình học cho con thấy lý do tại sao công thức lại như vậy mà không cần học vẹt!
                </p>
              </div>
            )}
          </div>

          {/* Toggle Switches */}
          <div className="flex items-center justify-between text-xs text-slate-600 px-1">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={showPythagoras}
                onChange={(e) => setShowPythagoras(e.target.checked)}
                className="rounded text-indigo-600"
              />
              <span>Tam giác vuông OHM</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={showTangentLines}
                onChange={(e) => setShowTangentLines(e.target.checked)}
                className="rounded text-indigo-600"
              />
              <span>Trục Tan/Cot</span>
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={showSpecialPoints}
                onChange={(e) => setShowSpecialPoints(e.target.checked)}
                className="rounded text-indigo-600"
              />
              <span>Điểm đặc biệt</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
