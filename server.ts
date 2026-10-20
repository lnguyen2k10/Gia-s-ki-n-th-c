import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // AI Math Tutor proxy endpoint
  app.post('/api/tutor', async (req, res) => {
    try {
      const { question, topic, gradeContext } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(200).json({
          reply: `Gia sư Toán 11 chào con! 🌟\n\nThầy/Cô ghi nhận câu hỏi của con về chủ đề **${topic || 'Toán 11'}**:\n"${question}"\n\n👉 **Lời khuyên lấy gốc nhanh:**\n1. Hãy mở tab **"Vòng tròn Lượng giác"** bên trái để nhìn vị trí của góc trên trục sin (đứng) và cos (ngang).\n2. Ghi nhớ thần chú: *Cos đối, Sin bù, Phụ chéo, Hơn kém π là Tan và Cot*.\n3. Đừng cố giải bài phức tạp ngay, hãy làm 3 câu nhận biết trong phần **Luyện phản xạ** trước nhé!`
        });
      }

      const ai = new GoogleGenAI();
      const systemInstruction = `Bạn là Thầy Minh / Cô Lan - một giáo viên dạy Toán lớp 11 tận tâm, tâm lý và thấu hiểu học sinh Việt Nam đang bị mất gốc môn Toán Học Kỳ 1 (chương trình GDPT 2018: Cánh Diều, Kết Nối Tri Thức, Chân Trời Sáng Tạo).
Trọng tâm:
- Chương 1: Hàm số lượng giác và phương trình lượng giác (Vòng tròn lượng giác, bảng dấu các cung phần tư, công thức cộng, nhân đôi, biến đổi tích thành tổng, giải phương trình sin x = a, cos x = a).
- Chương 2: Dãy số, Cấp số cộng, Cấp số nhân.
- Chương 3: Giới hạn dãy số, Giới hạn hàm số, Hàm số liên tục.
- Chương 4: Đường thẳng và mặt phẳng trong không gian, Quan hệ song song.

Nguyên tắc giải thích cho học sinh mất gốc:
1. ĐỘNG VIÊN & KHÔNG PHÁN XÉT: Luôn công nhận nỗ lực của con, nói rõ rằng lượng giác thoạt nhìn khó vì nhiều công thức nhưng thực ra chỉ xoay quanh Vòng tròn đơn vị.
2. NÓI VỀ BẢN CHẤT HÌNH HỌC: Giải thích vì sao sin lại là trục đứng, cos là trục ngang, chu kỳ k2π tại sao lại xuất hiện (vì quay đúng 1 vòng tròn 360 độ trở lại chỗ cũ).
3. TRUYỀN MẸO NHỚ THẦN CHÚ: Vè, thơ ghi nhớ dễ thuộc, dễ áp dụng.
4. TỪNG BƯỚC CỤ THỂ: Trình bày bài toán theo từng bước 1, 2, 3 rõ ràng, chỉ ra lỗi sai học sinh hay mắc.
5. Ngắn gọn, có điểm nhấn bằng Markdown, ký hiệu toán học rõ ràng.`;

      const prompt = `Chủ đề: ${topic || 'Lấy gốc Toán 11 HK1'}\nBối cảnh học tập: ${gradeContext || 'Học sinh đang mất gốc, sợ lượng giác'}\nCâu hỏi/Thắc mắc: ${question}\n\nHãy giải đáp dễ hiểu, chỉ rõ bản chất, mẹo nhớ và cách làm bài.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.6,
        }
      });

      return res.json({ reply: response.text || 'Gia sư chưa thể tạo phản hồi lúc này.' });
    } catch (err: any) {
      console.error('Lỗi khi gọi Gemini API:', err);
      return res.status(500).json({
        error: 'Có lỗi khi kết nối với Gia sư AI. Vui lòng thử lại sau.'
      });
    }
  });

  // Setup Vite dev server or static files
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true, host: '0.0.0.0' },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
