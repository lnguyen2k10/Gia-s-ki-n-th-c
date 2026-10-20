import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Activity } from 'lucide-react';

export const SineWaveUnroller: React.FC = () => {
  const [angleRad, setAngleRad] = useState<number>(Math.PI / 4); // 45 deg
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [funcType, setFuncType] = useState<'sin' | 'cos'>('sin');
  const [showEquationCut, setShowEquationCut] = useState<boolean>(true);
  const [equationVal, setEquationVal] = useState<number>(0.5); // e.g. sin x = 0.5

  useEffect(() => {
    let animId: number;
    if (isPlaying) {
      const step = () => {
        setAngleRad((prev) => {
          const next = prev + 0.025;
          return next > 4 * Math.PI ? 0 : next;
        });
        animId = requestAnimationFrame(step);
      };
      animId = requestAnimationFrame(step);
    }
    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

  const deg = Math.round((angleRad * 180) / Math.PI);
  const curSin = Math.sin(angleRad);
  const curCos = Math.cos(angleRad);
  const curVal = funcType === 'sin' ? curSin : curCos;

  // Circle dimensions
  const cRadius = 55;
  const cCenterX = 75;
  const cCenterY = 100;

  const currentCircleX = cCenterX + Math.cos(angleRad) * cRadius;
  const currentCircleY = funcType === 'sin'
    ? cCenterY - curSin * cRadius // Sin projection
    : cCenterY - curCos * cRadius; // Cos transformed for visual alignment

  // Graph dimensions
  const gStartX = 165;
  const gWidth = 430;
  const gCenterY = 100;
  // Map x radians (0 to 4pi) to pixel width
  const maxRad = 4 * Math.PI;
  const radToPixelX = (r: number) => gStartX + (r / maxRad) * gWidth;
  const valToPixelY = (v: number) => gCenterY - v * cRadius;

  const currentGraphX = radToPixelX(angleRad);
  const currentGraphY = valToPixelY(curVal);

  // Generate wave path points
  const pointsCount = 150;
  let wavePath = '';
  for (let i = 0; i <= pointsCount; i++) {
    const r = (i / pointsCount) * maxRad;
    const v = funcType === 'sin' ? Math.sin(r) : Math.cos(r);
    const px = radToPixelX(r);
    const py = valToPixelY(v);
    wavePath += (i === 0 ? `M ${px} ${py}` : ` L ${px} ${py}`);
  }

  // Generate trace path up to current angle
  let tracePath = '';
  const currentSteps = Math.floor((angleRad / maxRad) * pointsCount);
  for (let i = 0; i <= currentSteps; i++) {
    const r = (i / pointsCount) * maxRad;
    const v = funcType === 'sin' ? Math.sin(r) : Math.cos(r);
    const px = radToPixelX(r);
    const py = valToPixelY(v);
    tracePath += (i === 0 ? `M ${px} ${py}` : ` L ${px} ${py}`);
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
      <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-slate-50/50">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-indigo-600" />
            <h2 className="text-base sm:text-lg font-semibold text-slate-900">
              Trực Quan Hóa: Mở Cuộn Vòng Tròn Thành Đồ Thị Sóng {funcType.toUpperCase()}(X)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
            Xem chuyển động quay tròn tạo nên sóng hình sin và hiểu nguồn gốc chu kỳ 2π và phương trình lượng giác.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Function Switch */}
          <div className="flex items-center bg-slate-200/80 p-0.5 rounded-lg text-xs font-semibold">
            <button
              onClick={() => setFuncType('sin')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                funcType === 'sin' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hàm Sin (y = sin x)
            </button>
            <button
              onClick={() => setFuncType('cos')}
              className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                funcType === 'cos' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hàm Cos (y = cos x)
            </button>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isPlaying ? 'Tạm dừng' : 'Chạy mô phỏng'}
          </button>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-4">
        {/* The Synchronized SVG Stage */}
        <div className="w-full bg-slate-950 rounded-xl p-3 sm:p-4 overflow-x-auto shadow-inner">
          <div className="min-w-[620px]">
            <svg viewBox="0 0 620 200" className="w-full h-auto select-none">
              {/* Left Side: Unit Circle */}
              <g>
                <circle cx={cCenterX} cy={cCenterY} r={cRadius} fill="none" stroke="#475569" strokeWidth="1.5" />
                {/* Axes */}
                <line x1={cCenterX - cRadius - 15} y1={cCenterY} x2={cCenterX + cRadius + 15} y2={cCenterY} stroke="#64748b" strokeWidth="1" />
                <line x1={cCenterX} y1={cCenterY - cRadius - 15} x2={cCenterX} y2={cCenterY + cRadius + 15} stroke="#64748b" strokeWidth="1" />
                <text x={cCenterX + cRadius + 5} y={cCenterY - 5} fill="#94a3b8" fontSize="9">x</text>
                <text x={cCenterX + 5} y={cCenterY - cRadius - 5} fill="#94a3b8" fontSize="9">y</text>

                {/* Point on circle */}
                <circle cx={currentCircleX} cy={cCenterY - curSin * cRadius} r={4.5} fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />
                <line x1={cCenterX} y1={cCenterY} x2={currentCircleX} y2={cCenterY - curSin * cRadius} stroke="#f59e0b" strokeWidth="1.5" />

                {/* Projection bar */}
                <line
                  x1={funcType === 'sin' ? cCenterX : currentCircleX}
                  y1={funcType === 'sin' ? cCenterY - curSin * cRadius : cCenterY}
                  x2={currentCircleX}
                  y2={cCenterY - curSin * cRadius}
                  stroke={funcType === 'sin' ? '#ef4444' : '#3b82f6'}
                  strokeWidth="2"
                  strokeDasharray="2 2"
                />

                <text x={cCenterX - 35} y={185} fill="#94a3b8" fontSize="10" fontWeight="bold">
                  Vòng tròn quay (R=1)
                </text>
              </g>

              {/* Right Side: Unrolled Wave Graph */}
              <g>
                {/* Coordinate Grid & Axes */}
                <line x1={gStartX} y1={gCenterY} x2={gStartX + gWidth} y2={gCenterY} stroke="#64748b" strokeWidth="1" />
                <line x1={gStartX} y1={25} x2={gStartX} y2={175} stroke="#64748b" strokeWidth="1" />

                {/* Horizontal reference lines for y = 1 and y = -1 */}
                <line x1={gStartX} y1={valToPixelY(1)} x2={gStartX + gWidth} y2={valToPixelY(1)} stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                <line x1={gStartX} y1={valToPixelY(-1)} x2={gStartX + gWidth} y2={valToPixelY(-1)} stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                <text x={gStartX - 20} y={valToPixelY(1) + 3} fill="#94a3b8" fontSize="9">1</text>
                <text x={gStartX - 15} y={gCenterY + 3} fill="#94a3b8" fontSize="9">0</text>
                <text x={gStartX - 24} y={valToPixelY(-1) + 3} fill="#94a3b8" fontSize="9">-1</text>

                {/* Radian marks on axis: 0, pi, 2pi, 3pi, 4pi */}
                {[
                  { r: Math.PI / 2, label: 'π/2' },
                  { r: Math.PI, label: 'π' },
                  { r: (3 * Math.PI) / 2, label: '3π/2' },
                  { r: 2 * Math.PI, label: '2π (Chu kỳ 1)' },
                  { r: (5 * Math.PI) / 2, label: '5π/2' },
                  { r: 3 * Math.PI, label: '3π' },
                  { r: 4 * Math.PI, label: '4π (Chu kỳ 2)' }
                ].map((m, idx) => (
                  <g key={idx}>
                    <line x1={radToPixelX(m.r)} y1={gCenterY - 4} x2={radToPixelX(m.r)} y2={gCenterY + 4} stroke="#94a3b8" strokeWidth="1" />
                    <text x={radToPixelX(m.r) - 10} y={gCenterY + 16} fill="#94a3b8" fontSize="8.5">
                      {m.label}
                    </text>
                  </g>
                ))}

                {/* Base Wave background path */}
                <path d={wavePath} fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="3 3" />

                {/* Traced Wave path up to current angle */}
                <path d={tracePath} fill="none" stroke={funcType === 'sin' ? '#ef4444' : '#3b82f6'} strokeWidth="3" />

                {/* Equation line y = a */}
                {showEquationCut && (
                  <g>
                    <line
                      x1={gStartX}
                      y1={valToPixelY(equationVal)}
                      x2={gStartX + gWidth}
                      y2={valToPixelY(equationVal)}
                      stroke="#10b981"
                      strokeWidth="1.5"
                      strokeDasharray="4 2"
                    />
                    <text x={gStartX + gWidth - 95} y={valToPixelY(equationVal) - 6} fill="#34d399" fontSize="10" fontWeight="bold">
                      Đường y = {equationVal}
                    </text>
                  </g>
                )}

                {/* Connecting Laser Line from Circle Point to Wave Graph Point */}
                <line
                  x1={currentCircleX}
                  y1={currentCircleY}
                  x2={currentGraphX}
                  y2={currentGraphY}
                  stroke="#fbbf24"
                  strokeWidth="1.5"
                  strokeDasharray="2 2"
                />

                {/* Current Dot on Wave Graph */}
                <circle cx={currentGraphX} cy={currentGraphY} r={5} fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>

        {/* Controls and Educational Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="font-semibold text-slate-800">Thanh kéo góc quay:</span>
              <p className="text-slate-600 mt-1">
                Góc hiện tại: <span className="font-mono font-bold text-indigo-700">{deg}°</span> ≈ <span className="font-mono font-bold text-indigo-700">{(angleRad / Math.PI).toFixed(2)}π</span> rad
              </p>
              <input
                type="range"
                min="0"
                max={4 * Math.PI}
                step="0.05"
                value={angleRad}
                onChange={(e) => {
                  setIsPlaying(false);
                  setAngleRad(Number(e.target.value));
                }}
                className="w-full mt-2 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
            <button
              onClick={() => { setIsPlaying(false); setAngleRad(0); }}
              className="mt-2 flex items-center gap-1 text-slate-600 hover:text-slate-900 cursor-pointer text-[11px]"
            >
              <RotateCcw className="w-3 h-3" /> Đặt lại góc 0 rad
            </button>
          </div>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
            <span className="font-semibold text-slate-800">Cắt nghiệm phương trình {funcType}(x) = a:</span>
            <div className="mt-1 flex items-center gap-2">
              <input
                type="range"
                min="-1"
                max="1"
                step="0.1"
                value={equationVal}
                onChange={(e) => setEquationVal(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <span className="font-mono font-bold text-emerald-700 text-sm w-10 text-right">{equationVal}</span>
            </div>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Đường màu xanh lá <span className="font-semibold text-emerald-700">y = {equationVal}</span> cắt đồ thị tại vô số điểm lặp lại đều đặn mỗi chu kỳ 2π. Đó chính là lý do vì sao nghiệm luôn có đuôi <code className="bg-white px-1 py-0.5 rounded border border-slate-200 font-mono">+ k2π</code>!
            </p>
          </div>

          <div className="bg-indigo-50/70 p-3 rounded-xl border border-indigo-100 text-indigo-950">
            <span className="font-semibold text-indigo-900">Bản chất rút ra cho học sinh:</span>
            <ul className="mt-1.5 space-y-1 list-disc list-inside text-indigo-900/90 leading-relaxed">
              <li>Đồ thị sóng Sin/Cos không phải ngẫu nhiên mà uốn lượn; nó chính là <span className="font-semibold">hình chiếu tung độ/hoành độ</span> khi đi hết một vòng tròn.</li>
              <li>Giá trị không bao giờ vượt quá <code className="bg-white/80 px-1 rounded">[-1, 1]</code> vì bán kính vòng tròn chuẩn là 1.</li>
              <li>Sau <span className="font-semibold">2π (360°)</span>, hình dáng đồ thị lặp lại y hệt một chu kỳ mới.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
