import React from 'react';
import { Heart, CheckCircle2, AlertCircle, X, Shield, Sparkles, BookOpen, Clock } from 'lucide-react';

interface ParentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ParentGuideModal: React.FC<ParentGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 bg-amber-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg leading-tight">
                Góc Phụ Huynh: Phương Pháp Giúp Con Lấy Lại Gốc Toán 11
              </h3>
              <p className="text-xs text-amber-100">
                Dành cho cha mẹ: Đồng hành thông minh, không tạo áp lực, con tự tin lấy lại kiến thức
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 p-5 sm:p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {/* Section 1: Hiểu đúng nguyên nhân mất gốc */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              1. Hiểu đúng vì sao con bị "mất gốc" Lượng Giác lớp 11
            </h4>
            <p>
              Nhiều cha mẹ lo lắng nghĩ rằng con lười học hoặc mất căn bản từ nhỏ. Thực tế <strong>không phải vậy</strong>. Lượng giác lớp 11 là một "bước ngoặt tư duy" rất lớn:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-1 text-slate-600">
              <li>Từ <strong>tam giác vuông lớp 9</strong> (góc nhọn dưới 90°, cạnh luôn dương), con đột ngột phải tiếp cận <strong>Vòng tròn đơn vị</strong> với các góc âm, góc lớn hơn 360°, và đơn vị Radian (số π).</li>
              <li>Hơn <strong>20 công thức</strong> dồn dập (công thức cộng, nhân đôi, hạ bậc, biến đổi tổng - tích) nếu chỉ học vẹt sẽ bị "loạn dấu" ngay khi vào phòng thi.</li>
              <li>Học sinh thường phản ứng né tránh và sợ hãi khi bị giao một xấp bài tập khó ngay khi chưa hiểu bản chất.</li>
            </ul>
          </div>

          {/* Section 2: Phương pháp 4 bước */}
          <div className="space-y-3 bg-indigo-50/70 p-4 rounded-xl border border-indigo-100 text-indigo-950">
            <h4 className="font-bold text-indigo-900 text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              2. Phương pháp "Bịt Lỗ Hổng 4 Bước" trước khi làm bài tập
            </h4>
            <div className="space-y-2 text-xs">
              <div className="bg-white p-2.5 rounded-lg border border-indigo-100">
                <span className="font-bold text-indigo-900">Bước 1: Trực quan hóa bản chất (10 phút):</span>
                <p className="text-slate-600 mt-0.5">Không mở sách làm bài tập ngay. Cho con mở tab <strong>"Vòng Tròn Lượng Giác"</strong> trong app này, kéo tay xem điểm chạy, nhìn thấy trục Sin đứng, Cos nằm và dấu âm dương 4 phần tư.</p>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-indigo-100">
                <span className="font-bold text-indigo-900">Bước 2: Ghi nhớ bằng Thần chú / Vè vui (5 phút):</span>
                <p className="text-slate-600 mt-0.5">Đọc thơ: <em>"Nhất Cả, Nhì Sin, Tam Tan Cot, Tứ Cos"</em> và <em>"Cos đối, Sin bù, Phụ chéo"</em>. Não bộ tiếp nhận vần điệu dễ hơn công thức khô khan gấp 5 lần.</p>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-indigo-100">
                <span className="font-bold text-indigo-900">Bước 3: Luyện phản xạ Nấc 1 (Nhận biết 1 bước):</span>
                <p className="text-slate-600 mt-0.5">Chỉ làm các câu hỏi trắc nghiệm 1 bước (ví dụ: góc 150° sin âm hay dương? Tính sin 30° + cos 60°). Cảm giác trả lời đúng ngay sẽ kích hoạt dopamine tạo sự hứng thú.</p>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-indigo-100">
                <span className="font-bold text-indigo-900">Bước 4: Nâng lên Nấc 2 (Có gợi ý từng bước):</span>
                <p className="text-slate-600 mt-0.5">Chuyển sang bài biến đổi 2 bước và giải phương trình trong tab <strong>"Luyện Phản Xạ"</strong>, tận dụng 2 cấp độ gợi ý khi gặp khó.</p>
              </div>
            </div>
          </div>

          {/* Section 3: Quy tắc 20 phút */}
          <div className="space-y-2">
            <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              3. Nguyên tắc vàng: "Đúng 20-25 phút mỗi ngày, không học dồn"
            </h4>
            <p>
              Đối với môn Toán, ép con ngồi 3 tiếng liên tục vào cuối tuần thường phản tác dụng vì não bộ mệt mỏi sẽ từ chối ghi nhận thông tin. Thay vào đó, hãy thống nhất với con:
            </p>
            <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg text-emerald-950 font-medium text-xs">
              Mỗi tối sau bữa cơm, con chỉ cần dành đúng <strong>20 phút</strong> hoàn thành 1 ngày trong <strong>Lộ trình 14 ngày</strong> của app. Sau 20 phút con được nghỉ ngơi thoải mái. Sự đều đặn này sẽ tạo ra kỳ tích sau 2 tuần!
            </div>
          </div>

          {/* Section 4: Lời hồi đáp cho câu hỏi của Phụ Huynh */}
          <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-600" />
              4. Lời hồi đáp cho câu hỏi: "Bạn có muốn hỏi lại gì không??"
            </h4>
            <p className="text-xs text-slate-600">
              Để hỗ trợ con chuẩn xác nhất, cha mẹ hãy cùng để ý 3 câu hỏi nhỏ sau (con không cần thi đỗ ngay, chỉ cần xác định đúng điểm xuất phát):
            </p>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>1. Con đang theo học bộ sách giáo khoa nào?</strong> (Cánh Diều, Kết Nối Tri Thức hay Chân Trời Sáng Tạo - app này đã bao quát toàn bộ nội dung chung của cả 3 bộ sách).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>2. Con đang sợ phần nào nhất?</strong> Cho con làm bài <em>"Test Chẩn Đoán Lỗ Hổng"</em> trong app để hệ thống tự động chỉ ra chính xác con đang hổng ở Radian, Dấu, Công Thức hay Phương Trình.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span><strong>3. Khi làm bài, con có hay bấm máy tính Casio mù quáng không?</strong> Nếu con bấm ra số thập phân lẻ mà không hiểu số đó từ đâu ra, hãy khuyến khích con tra cứu vòng tròn trước.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors cursor-pointer"
          >
            Đã hiểu & Bắt đầu cùng con
          </button>
        </div>
      </div>
    </div>
  );
};
