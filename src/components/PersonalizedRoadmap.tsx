import React, { useState, useEffect } from 'react';
import { ROADMAP_14_DAYS } from '../data/mathData';
import {
  Calendar,
  CheckCircle,
  Clock,
  BookOpen,
  Compass,
  Sparkles,
  Award,
  ChevronRight,
  Flame,
  FileText,
  Target
} from 'lucide-react';

interface Stage {
  id: number;
  title: string;
  subtitle: string;
  daysSpan: string;
  badge: string;
  color: string;
  goals: string[];
  reviewMethod: string;
  recommendedMaterials: string[];
  pitfallsToAvoid: string;
}

const STAGES: Stage[] = [
  {
    id: 1,
    title: 'Chặng 1: Xây Lại Trực Giác & Giá Trị Lượng Giác',
    subtitle: 'Vượt qua nỗi sợ Radian & Vòng tròn đơn vị',
    daysSpan: 'Ngày 1 - Ngày 3',
    badge: 'Khởi động lấy gốc',
    color: 'blue',
    goals: [
      'Hiểu bản chất Radian: 180° = π rad (tại sao các thầy cô dùng radian thay vì độ)',
      'Thuộc quy ước trục trên vòng tròn: Sin ĐỨNG (tung độ y), Cos NẰM (hoành độ x)',
      'Thần chú 4 góc phần tư: "Nhất Cả, Nhì Sin, Tam Tan Cot, Tứ Cos"',
      'Nhớ nhanh giá trị của 5 góc đặc biệt: 0, 30° (π/6), 45° (π/4), 60° (π/3), 90° (π/2)'
    ],
    reviewMethod: 'Mở tab "Vòng Tròn Lượng Giác", kéo thanh trượt từ 0 đến 360°, đối chiếu bảng dấu. Vẽ lại vòng tròn ra 1 tờ giấy nháp kèm ghi chú trục. Mỗi ngày học đúng 20 phút.',
    recommendedMaterials: [
      'SGK Toán 11 Chuyên đề 1: Giá trị lượng giác của một góc lượng giác',
      'Công cụ Vòng Tròn Lượng Giác Tương Tác trong ứng dụng này',
      'Thẻ ghi nhớ Flashcard 5 góc cơ bản'
    ],
    pitfallsToAvoid: 'Cố bấm máy tính mọi góc mà không nhìn vị trí trên vòng tròn, dẫn đến khi gặp góc chữ (như α, x) thì hoàn toàn tắc tị.'
  },
  {
    id: 2,
    title: 'Chặng 2: Giải Mã Công Thức Lượng Giác Không Học Vẹt',
    subtitle: 'Nắm vững hệ thức cơ bản, cung liên kết & thơ công thức cộng',
    daysSpan: 'Ngày 4 - Ngày 6',
    badge: 'Xương sống kiến thức',
    color: 'indigo',
    goals: [
      'Hiểu định lý Pytago lượng giác: sin²x + cos²x = 1 (cạnh huyền = bán kính 1)',
      'Cung liên kết trực quan: Cos đối, Sin bù, Phụ chéo, Hơn kém π là Tan và Cot',
      'Học thuộc bài thơ công thức cộng: "Cos thì cos cos sin sin, Sin thì sin cos cos sin"',
      'Công thức nhân đôi và công thức hạ bậc: sin 2x = 2sin x cos x, cos 2x = 2cos²x - 1'
    ],
    reviewMethod: 'Học theo cụm liên hệ logic (tự chứng minh sin(2x) từ công thức sin(x+x)). Dùng thơ vè để tự kiểm tra trước khi ngủ. Làm mỗi dạng 2 bài biến đổi đơn giản.',
    recommendedMaterials: [
      'SGK Toán 11: Các công thức lượng giác',
      'Tab "Sổ Tay Thần Chú" trong app này (có phần giải thích bản chất vì sao)',
      'Bảng so sánh đối xứng cung liên kết'
    ],
    pitfallsToAvoid: 'Học dồn một lúc 20 công thức trong 1 đêm. Não bộ sẽ bị bão hòa và nhầm dấu trừ/cộng ngay ngày hôm sau.'
  },
  {
    id: 3,
    title: 'Chặng 3: Chinh Phục Phương Trình Lượng Giác & Chu Kỳ',
    subtitle: 'Nắm chắc nghiệm sin x = a, cos x = a và bẫy chu kỳ k2π / kπ',
    daysSpan: 'Ngày 7 - Ngày 10',
    badge: 'Kiếm điểm thi học kỳ',
    color: 'emerald',
    goals: [
      'Điều kiện có nghiệm của sin x = m và cos x = m: |m| ≤ 1 (nếu |m| > 1 thì vô nghiệm ngay)',
      'Phương trình Sin: 2 họ nghiệm bù nhau x = α + k2π hoặc x = π - α + k2π',
      'Phương trình Cos: 2 họ nghiệm đối nhau x = ±α + k2π',
      'Phương trình Tan: 1 họ nghiệm duy nhất x = α + kπ',
      'Phương trình quy về bậc 2: Đặt ẩn phụ t = sin x hoặc t = cos x (điều kiện -1 ≤ t ≤ 1)'
    ],
    reviewMethod: 'Sử dụng công cụ "Bản chất phương trình" trong app để xem đường cắt ngang/dọc tạo ra 2 giao điểm. Luôn ghi chú cẩn thận đuôi "+ k2π, k ∈ ℤ".',
    recommendedMaterials: [
      'SGK Toán 11: Phương trình lượng giác cơ bản',
      'Bộ bài tập mẫu có hướng dẫn nấc 1 và nấc 2 trong app',
      'Kỹ năng dùng phím CALC trên máy tính Casio để thử lại nghiệm'
    ],
    pitfallsToAvoid: 'Quên nghiệm thứ 2 của hàm Sin (chỉ lấy x = α mà quên họ bù π - α), hoặc nhầm chu kỳ k2π thành kπ.'
  },
  {
    id: 4,
    title: 'Chặng 4: Ứng Dụng Thực Tế & Kết Nối Toàn Bộ HK1',
    subtitle: 'Liên hệ Vật lý 11, Dãy số, Giới hạn và Hình không gian',
    daysSpan: 'Ngày 11 - Ngày 14',
    badge: 'Bứt phá điểm cao',
    color: 'amber',
    goals: [
      'Ứng dụng lượng giác trong Vật lý 11: Phương trình dao động điều hòa x = A cos(ωt + φ)',
      'Ôn tập Cấp số cộng: u_n = u_1 + (n-1)d và Cấp số nhân: u_n = u_1 · q^(n-1)',
      'Giới hạn hàm số: Nắm vững phương pháp chia bậc cao nhất và khử dạng 0/0',
      'Hình học không gian: Nắm quy tắc đường thẳng song song mặt phẳng d // a ⊂ (P)',
      'Luyện trọn vẹn 1 đề kiểm tra tổng hợp học kỳ 1 (45 phút)'
    ],
    reviewMethod: 'Mỗi ngày làm 1 đề mini 10 câu trắc nghiệm. Ghi lại các câu sai vào sổ "Bẫy cần tránh". Cha mẹ động viên và cùng con đánh dấu hoàn thành lộ trình.',
    recommendedMaterials: [
      'Đề thi thử học kỳ 1 Toán 11 bám sát chương trình GDPT 2018',
      'Bài kiểm tra chẩn đoán toàn diện trong ứng dụng',
      'Sổ tay lỗi sai cá nhân'
    ],
    pitfallsToAvoid: 'Bỏ bê các câu nhận biết dễ để lao vào bài toán vận dụng cao quá sức khi nền tảng chưa thật vững.'
  }
];

interface PersonalizedRoadmapProps {
  onNavigateTab?: (tab: any) => void;
}

export const PersonalizedRoadmap: React.FC<PersonalizedRoadmapProps> = ({ onNavigateTab }) => {
  const [completedDays, setCompletedDays] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('toan11_completed_days');
      return saved ? JSON.parse(saved) : [1];
    } catch {
      return [1];
    }
  });

  const [activeStageId, setActiveStageId] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'stages' | 'days'>('stages');

  useEffect(() => {
    localStorage.setItem('toan11_completed_days', JSON.stringify(completedDays));
  }, [completedDays]);

  const toggleDay = (day: number) => {
    setCompletedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const progressPercent = Math.round((completedDays.length / 14) * 100);

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-850 to-slate-900 text-white rounded-2xl p-5 sm:p-7 shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Lộ Trình Cá Nhân Hóa Dành Riêng Cho Học Sinh Mất Gốc Toán 11
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Chiến Lược 14 Ngày Lấy Lại Gốc & Tự Tin Toán Học Kỳ 1
            </h2>
            <p className="text-sm text-indigo-100/90 leading-relaxed">
              Thiết kế theo triết lý sư phạm tiến bộ: <strong>"Mỗi ngày đúng 20 phút - Đi từ hình ảnh trực quan đến công thức - Luyện phản xạ từ nấc 1 đến nấc 2"</strong>. Con không phải bơi trong biển bài tập khó, mà sẽ từng bước xây chắc móng nhà trước khi xây tầng!
            </p>
          </div>

          {/* Progress Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-4 sm:p-5 flex flex-col justify-between min-w-[240px]">
            <div className="flex items-center justify-between">
              <span className="text-xs text-indigo-200">Tiến độ 14 ngày:</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                <Flame className="w-3 h-3 text-amber-400" /> {completedDays.length}/14 Ngày
              </span>
            </div>

            <div className="my-3">
              <div className="flex items-baseline justify-between text-2xl font-bold">
                <span>{progressPercent}%</span>
                <span className="text-xs font-normal text-indigo-200">
                  {completedDays.length >= 14 ? 'Đã hoàn thành xuất sắc!' : 'Đang tiến bước'}
                </span>
              </div>
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mt-1.5">
                <div
                  className="bg-emerald-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <p className="text-[11px] text-indigo-200">
              💡 Lời khuyên: Đừng cố học dồn; duy trì 20 phút mỗi ngày tạo ra phản xạ bền vững hơn 3 tiếng học vẹt cuối tuần.
            </p>
          </div>
        </div>

        {/* Navigation Selector */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center bg-black/30 p-1 rounded-xl text-xs font-medium">
            <button
              onClick={() => setViewMode('stages')}
              className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'stages' ? 'bg-indigo-600 text-white shadow-xs' : 'text-indigo-200 hover:text-white'
              }`}
            >
              4 Chặng Phát Triển Năng Lực (Từ Gốc đến Nâng Cao)
            </button>
            <button
              onClick={() => setViewMode('days')}
              className={`px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'days' ? 'bg-indigo-600 text-white shadow-xs' : 'text-indigo-200 hover:text-white'
              }`}
            >
              Checklist Chi Tiết 14 Ngày (Đánh dấu mỗi ngày)
            </button>
          </div>

          <div className="text-xs text-indigo-200 flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" /> Thời lượng khuyến nghị: 20-25 phút / buổi
          </div>
        </div>
      </div>

      {/* Quick Start 3 Steps for student & parent */}
      {onNavigateTab && (
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Khuyến nghị cho con: Bắt đầu lấy lại gốc trong 3 bước đơn giản
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 text-xs">
            <button
              onClick={() => onNavigateTab('diagnostic')}
              className="p-3 rounded-lg border border-indigo-100 bg-indigo-50/50 hover:bg-indigo-100/70 text-left transition-colors cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="font-bold text-indigo-700">Bước 1: Test chẩn đoán (5 phút)</span>
                <p className="text-slate-600 mt-1">Làm 8 câu trắc nghiệm để hệ thống phát hiện chính xác con đang hổng ở chỗ nào.</p>
              </div>
              <span className="text-indigo-600 font-semibold mt-2 flex items-center gap-1">Làm bài test ngay →</span>
            </button>

            <button
              onClick={() => onNavigateTab('circle')}
              className="p-3 rounded-lg border border-blue-100 bg-blue-50/50 hover:bg-blue-100/70 text-left transition-colors cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="font-bold text-blue-700">Bước 2: Xem Vòng tròn lượng giác</span>
                <p className="text-slate-600 mt-1">Kéo tay xem điểm chạy, nhìn thấy trục Sin đứng, Cos nằm và dấu 4 góc phần tư.</p>
              </div>
              <span className="text-blue-600 font-semibold mt-2 flex items-center gap-1">Mở mô phỏng ngay →</span>
            </button>

            <button
              onClick={() => onNavigateTab('handbook')}
              className="p-3 rounded-lg border border-amber-100 bg-amber-50/50 hover:bg-amber-100/70 text-left transition-colors cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="font-bold text-amber-800">Bước 3: Thuộc Thần chú nhớ nhanh</span>
                <p className="text-slate-600 mt-1">Đọc vè vui: "Cos đối, Sin bù", "Cos thì cos cos sin sin" và kiểm tra bằng Thẻ Lật.</p>
              </div>
              <span className="text-amber-700 font-semibold mt-2 flex items-center gap-1">Xem sổ tay thần chú →</span>
            </button>
          </div>
        </div>
      )}

      {/* MODE 1: 4 CHẶNG NĂNG LỰC */}
      {viewMode === 'stages' && (
        <div className="space-y-5">
          {/* Stage Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {STAGES.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveStageId(s.id)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  activeStageId === s.id
                    ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500/20 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-500">{s.daysSpan}</span>
                    <span className={`text-[11px] px-2 py-0.5 rounded font-medium ${
                      s.id === 1 ? 'bg-blue-100 text-blue-800' :
                      s.id === 2 ? 'bg-indigo-100 text-indigo-800' :
                      s.id === 3 ? 'bg-emerald-100 text-emerald-800' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {s.badge}
                    </span>
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm mt-2 line-clamp-1">
                    {s.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                    {s.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center text-xs font-semibold text-indigo-600">
                  <span>Chi tiết chặng</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </button>
            ))}
          </div>

          {/* Detailed Active Stage Content */}
          {(() => {
            const currentStage = STAGES.find((s) => s.id === activeStageId) || STAGES[0];
            return (
              <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 space-y-6 shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                      {currentStage.daysSpan} · {currentStage.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                      {currentStage.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {currentStage.subtitle}
                    </p>
                  </div>
                </div>

                {/* 3 Main Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Goals */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                      <Target className="w-4 h-4 text-indigo-600" />
                      <span>Mục tiêu cốt lõi cần đạt</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {currentStage.goals.map((g, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          <CheckCircle className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Review Method */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                      <BookOpen className="w-4 h-4 text-emerald-600" />
                      <span>Phương pháp ôn tập trực quan</span>
                    </div>
                    <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-3.5 text-xs text-emerald-950 space-y-2 leading-relaxed">
                      <p>{currentStage.reviewMethod}</p>
                      <div className="pt-2 border-t border-emerald-200/50 text-[11px] text-emerald-800">
                        ⚡ <strong>Mẹo sư phạm:</strong> Hãy để con tự giải thích lại cho cha mẹ nghe (kỹ thuật Feynman). Khi con dạy lại được cho người khác, con đã thực sự hiểu bài.
                      </div>
                    </div>

                    <div className="bg-rose-50 border border-rose-100 rounded-xl p-3 text-xs text-rose-950">
                      <span className="font-semibold text-rose-800">⚠️ Sai lầm kinh điển cần tránh:</span>
                      <p className="mt-1 text-slate-700 leading-relaxed">{currentStage.pitfallsToAvoid}</p>
                    </div>
                  </div>

                  {/* Recommended Materials & Quick Links */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                      <FileText className="w-4 h-4 text-amber-600" />
                      <span>Tài liệu & Công cụ thực hành</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      {currentStage.recommendedMaterials.map((m, idx) => (
                        <div key={idx} className="p-2.5 bg-amber-50/60 border border-amber-100 rounded-lg text-slate-800 flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 p-3 bg-indigo-50/60 rounded-xl border border-indigo-100 text-xs text-indigo-900">
                      <span className="font-semibold">Đánh giá sau chặng:</span>
                      <p className="mt-1 text-slate-600">
                        Sau khi hoàn thành chặng này, hãy cho con làm bài test tương ứng trong tab <strong>"Luyện Phản Xạ"</strong> để kiểm chứng.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* MODE 2: CHECKLIST 14 NGÀY */}
      {viewMode === 'days' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ROADMAP_14_DAYS.map((item) => {
            const isDone = completedDays.includes(item.day);
            return (
              <div
                key={item.day}
                className={`p-4 rounded-xl border transition-all ${
                  isDone
                    ? 'bg-slate-50/80 border-slate-200 opacity-90'
                    : 'bg-white border-slate-200 hover:border-indigo-300 shadow-xs'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => toggleDay(item.day)}
                      className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors cursor-pointer mt-0.5 shrink-0 ${
                        isDone
                          ? 'bg-emerald-600 text-white'
                          : 'border-2 border-slate-300 hover:border-indigo-600 bg-white'
                      }`}
                    >
                      {isDone && <CheckCircle className="w-4 h-4" />}
                    </button>

                    <div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-bold text-indigo-700">Ngày {item.day}</span>
                        <span className="text-slate-600 font-medium">({item.durationMinutes} phút)</span>
                      </div>
                      <h4 className={`text-sm font-semibold mt-0.5 ${isDone ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1">
                        <strong>Trọng tâm:</strong> {item.focus}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 text-xs space-y-2">
                  <div className="bg-indigo-50/50 p-2.5 rounded-lg border border-indigo-100/60">
                    <span className="font-semibold text-indigo-900">Mục tiêu thực hành hôm nay:</span>
                    <p className="text-slate-700 mt-0.5">{item.practiceTarget}</p>
                  </div>

                  <div className="text-[11px] text-slate-600 flex items-start gap-1.5 bg-slate-100/70 p-2 rounded-md">
                    <span className="font-semibold text-slate-800 shrink-0">Lời khuyên cho phụ huynh:</span>
                    <span>{item.parentTip}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
