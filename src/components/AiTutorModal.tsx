import React, { useState } from 'react';
import { Send, Bot, User, Sparkles, Loader2, X, MessageSquareQuote } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AiTutorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SAMPLE_PROMPTS = [
  'Tại sao sin(150°) = 1/2 mà không phải là số âm?',
  'Phân biệt khi nào nghiệm phương trình có đuôi + k2π và khi nào là + kπ?',
  'Mẹo nhớ công thức cộng cos(a+b) và sin(a+b) không bị nhầm dấu?',
  'Làm sao để biết một dãy số là Cấp số cộng hay Cấp số nhân?',
  'Cách tìm giao tuyến của 2 mặt phẳng trong hình không gian lớp 11?'
];

export const AiTutorModal: React.FC<AiTutorModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Thầy/Cô chào con! 🌟\n\nCon đang gặp khó khăn ở bài toán lượng giác nào, hay chưa hiểu vì sao một công thức lại như vậy? Đừng ngại ngần, hãy gõ câu hỏi hoặc bấm vào câu hỏi gợi ý bên dưới. Thầy/Cô sẽ giải thích cặn kẽ từ gốc rễ, kèm ví dụ cực kỳ dễ hiểu nhé!`
    }
  ]);
  const [inputVal, setInputVal] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const question = textToSend || inputVal.trim();
    if (!question || isLoading) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: question }];
    setMessages(newMessages);
    if (!textToSend) setInputVal('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question,
          topic: 'Toán 11 Học Kỳ 1 - Lượng Giác & Mất Gốc',
          gradeContext: 'Học sinh lớp 11 đang lấy lại gốc kiến thức'
        })
      });

      const data = await res.json();
      if (data.reply) {
        setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages([
          ...newMessages,
          {
            role: 'assistant',
            content:
              'Thầy/Cô đã ghi nhận câu hỏi. Hãy kết nối GEMINI_API_KEY để nhận phản hồi trực tiếp từ Gia sư AI, hoặc tra cứu tab "Vòng Tròn Lượng Giác" và "Sổ Tay Thần Chú" để xem ngay lời giải thích mẫu!'
          }
        ]);
      }
    } catch {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content:
            'Gia sư AI đang tạm bận. Con hãy mở tab **Vòng Tròn Lượng Giác** hoặc **Sổ Tay Thần Chú** trong ứng dụng để xem mô phỏng hình ảnh trực quan nhé!'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl w-full max-w-2xl h-[620px] max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="p-4 border-b border-slate-100 bg-indigo-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base leading-tight">
                Gia Sư Sư Phạm Toán 11 (Tâm Lý & Kiên Nhẫn)
              </h3>
              <p className="text-[11px] text-indigo-100">
                Chuyên giải đáp thắc mắc gốc rễ · Không phán xét · Giải thích bằng hình ảnh
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

        {/* Quick prompt suggestions */}
        <div className="p-2.5 bg-slate-50 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto text-[11px]">
          <span className="font-semibold text-slate-500 shrink-0 px-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" /> Gợi ý hỏi:
          </span>
          {SAMPLE_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="px-2.5 py-1 bg-white border border-slate-200 rounded-full text-slate-700 hover:text-indigo-600 hover:border-indigo-300 whitespace-nowrap transition-colors cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Chat message history */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs sm:text-sm">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'assistant' && (
                <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed whitespace-pre-wrap ${
                  m.role === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-xs'
                    : 'bg-slate-100 text-slate-800 rounded-bl-xs'
                }`}
              >
                {m.content}
              </div>

              {m.role === 'user' && (
                <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-slate-100 text-slate-600 rounded-2xl rounded-bl-xs p-3.5 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
                <span className="text-xs">Thầy/Cô đang suy nghĩ câu trả lời dễ hiểu nhất...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input box */}
        <div className="p-3 border-t border-slate-100 bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Nhập thắc mắc của con về Lượng giác hoặc Toán 11..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-indigo-600 text-slate-900 bg-slate-50/50"
            />
            <button
              type="submit"
              disabled={isLoading || !inputVal.trim()}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 text-xs sm:text-sm font-semibold"
            >
              <span>Gửi</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
