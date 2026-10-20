import {
  TopicInfo,
  SpecialAngle,
  FormulaItem,
  DiagnosticQuestion,
  PracticeProblem,
  RoadmapDay
} from '../types/math';

export const TOPICS: TopicInfo[] = [
  {
    id: 'trigonometry',
    name: 'Lượng Giác (Hàm số & Phương trình)',
    shortName: 'Lượng Giác',
    iconName: 'Compass',
    badge: 'Trọng tâm mất gốc #1',
    description: 'Nền tảng của toán 11. Giải mã Vòng tròn lượng giác, bảng dấu các cung, thần chú công thức và giải phương trình.',
    rootCause: 'Học sinh cố học vẹt 20+ công thức mà không hiểu vị trí của góc trên Vòng tròn lượng giác (trục sin đứng, cos nằm), dẫn đến sợ và rối tung.',
    keyRule: 'Luôn vẽ hoặc tưởng tượng Vòng tròn lượng giác trước khi viết công thức!'
  },
  {
    id: 'sequences',
    name: 'Dãy Số, Cấp Số Cộng & Cấp Số Nhân',
    shortName: 'Cấp Số',
    iconName: 'TrendingUp',
    badge: 'Chuyên đề 2',
    description: 'Quy luật tăng giảm của dãy số, công thức số hạng tổng quát và tổng n số hạng đầu tiên.',
    rootCause: 'Nhầm lẫn giữa công sai d (cộng dồn) và công bội q (nhân dồn), quên trừ 1 ở số mũ (u_n = u_1 * q^(n-1)).',
    keyRule: 'Cấp số cộng là phép CỘNG (u_n = u_1 + (n-1)d), Cấp số nhân là phép NHÂN (u_n = u_1 * q^(n-1)).'
  },
  {
    id: 'limits',
    name: 'Giới Hạn & Hàm Số Liên Tục',
    shortName: 'Giới Hạn',
    iconName: 'Infinity',
    badge: 'Chuyên đề 3',
    description: 'Tìm giới hạn dãy số, hàm số và xử lý dạng vô định 0/0, vô cùng trừ vô cùng.',
    rootCause: 'Thay số trực tiếp gặp dạng 0/0 thì lúng túng, không biết khi nào rút bậc cao nhất, khi nào nhân liên hợp.',
    keyRule: 'Gặp x tiến tới vô cùng: rút bậc cao nhất. Gặp dạng 0/0 có căn: nhân lượng liên hợp để triệt tiêu nhân tử chung.'
  },
  {
    id: 'geometry',
    name: 'Hình Học Không Gian (Quan Hệ Song Song)',
    shortName: 'Hình Không Gian',
    iconName: 'Box',
    badge: 'Chuyên đề 4 - Nỗi sợ hình',
    description: 'Nhìn hình không gian 3 chiều qua nét đứt nét liền, tìm giao tuyến, giao điểm và chứng minh đường thẳng song song mặt phẳng.',
    rootCause: 'Thói quen nhìn hình phẳng 2D, không phân biệt nét thấy và nét khuất, vẽ hình bị dẹt hoặc trùng các đỉnh.',
    keyRule: 'Nét thấy vẽ liền, nét khuất vẽ đứt; Muốn đường song song mặt phẳng, chỉ cần tìm 1 đường trong mặt song song với nó.'
  },
  {
    id: 'statistics',
    name: 'Thống Kê (Mẫu Số Liệu Ghép Nhóm)',
    shortName: 'Thống Kê',
    iconName: 'BarChart2',
    badge: 'Chuyên đề 5',
    description: 'Tính số trung bình, trung vị, tứ phân vị và mốt cho bảng dữ liệu ghép nhóm.',
    rootCause: 'Công thức nhiều ký hiệu phức tạp (L, C, d), dễ bấm máy tính nhầm khoảng giá trị.',
    keyRule: 'Xác định đúng nhóm chứa trung vị hoặc mốt trước, sau đó mới áp dụng công thức tỉ lệ.'
  }
];

export const SPECIAL_ANGLES: SpecialAngle[] = [
  { deg: 0, radStr: '0', radVal: 0, sinStr: '0', sinVal: 0, cosStr: '1', cosVal: 1, tanStr: '0', tanVal: 0, cotStr: 'KXĐ', cotVal: null, quadrant: 0, tip: 'Gốc xuất phát (1, 0) trên trục Cos' },
  { deg: 30, radStr: 'π/6', radVal: Math.PI / 6, sinStr: '1/2', sinVal: 0.5, cosStr: '√3/2', cosVal: Math.sqrt(3)/2, tanStr: '√3/3', tanVal: Math.sqrt(3)/3, cotStr: '√3', cotVal: Math.sqrt(3), quadrant: 1, tip: '30 độ: Sin thấp (1/2), Cos dài (√3/2)' },
  { deg: 45, radStr: 'π/4', radVal: Math.PI / 4, sinStr: '√2/2', sinVal: Math.SQRT2/2, cosStr: '√2/2', cosVal: Math.SQRT2/2, tanStr: '1', tanVal: 1, cotStr: '1', cotVal: 1, quadrant: 1, tip: '45 độ: Góc cân, Sin = Cos = √2/2, Tan = 1' },
  { deg: 60, radStr: 'π/3', radVal: Math.PI / 3, sinStr: '√3/2', sinVal: Math.sqrt(3)/2, cosStr: '1/2', cosVal: 0.5, tanStr: '√3', tanVal: Math.sqrt(3), cotStr: '√3/3', cotVal: Math.sqrt(3)/3, quadrant: 1, tip: '60 độ: Đảo ngược của 30 độ: Sin cao (√3/2), Cos ngắn (1/2)' },
  { deg: 90, radStr: 'π/2', radVal: Math.PI / 2, sinStr: '1', sinVal: 1, cosStr: '0', cosVal: 0, tanStr: 'KXĐ', tanVal: null, cotStr: '0', cotVal: 0, quadrant: 0, tip: 'Đỉnh cao nhất của Sin (trục tung), Cos = 0' },
  { deg: 120, radStr: '2π/3', radVal: (2 * Math.PI) / 3, sinStr: '√3/2', sinVal: Math.sqrt(3)/2, cosStr: '-1/2', cosVal: -0.5, tanStr: '-√3', tanVal: -Math.sqrt(3), cotStr: '-√3/3', cotVal: -Math.sqrt(3)/3, quadrant: 2, tip: 'Góc bù với 60 độ: Sin vẫn dương (+√3/2), Cos chuyển âm (-1/2)' },
  { deg: 135, radStr: '3π/4', radVal: (3 * Math.PI) / 4, sinStr: '√2/2', sinVal: Math.SQRT2/2, cosStr: '-√2/2', cosVal: -Math.SQRT2/2, tanStr: '-1', tanVal: -1, cotStr: '-1', cotVal: -1, quadrant: 2, tip: 'Góc bù với 45 độ: Sin = √2/2, Cos = -√2/2' },
  { deg: 150, radStr: '5π/6', radVal: (5 * Math.PI) / 6, sinStr: '1/2', sinVal: 0.5, cosStr: '-√3/2', cosVal: -Math.sqrt(3)/2, tanStr: '-√3/3', tanVal: -Math.sqrt(3)/3, cotStr: '-√3', cotVal: -Math.sqrt(3), quadrant: 2, tip: 'Góc bù với 30 độ: Sin = 1/2, Cos = -√3/2' },
  { deg: 180, radStr: 'π', radVal: Math.PI, sinStr: '0', sinVal: 0, cosStr: '-1', cosVal: -1, tanStr: '0', tanVal: 0, cotStr: 'KXĐ', cotVal: null, quadrant: 0, tip: 'Nửa vòng tròn: Cos = -1 cực đại âm, Sin = 0' },
  { deg: 210, radStr: '7π/6', radVal: (7 * Math.PI) / 6, sinStr: '-1/2', sinVal: -0.5, cosStr: '-√3/2', cosVal: -Math.sqrt(3)/2, tanStr: '√3/3', tanVal: Math.sqrt(3)/3, cotStr: '√3', cotVal: Math.sqrt(3), quadrant: 3, tip: 'Góc phần tư III: Cả Sin và Cos đều âm, Tan = âm/âm = DƯƠNG' },
  { deg: 225, radStr: '5π/4', radVal: (5 * Math.PI) / 4, sinStr: '-√2/2', sinVal: -Math.SQRT2/2, cosStr: '-√2/2', cosVal: -Math.SQRT2/2, tanStr: '1', tanVal: 1, cotStr: '1', cotVal: 1, quadrant: 3, tip: 'Góc phần tư III: Sin = Cos = -√2/2, Tan = +1' },
  { deg: 240, radStr: '4π/3', radVal: (4 * Math.PI) / 3, sinStr: '-√3/2', sinVal: -Math.sqrt(3)/2, cosStr: '-1/2', cosVal: -0.5, tanStr: '√3', tanVal: Math.sqrt(3), cotStr: '√3/3', cotVal: Math.sqrt(3)/3, quadrant: 3, tip: 'Góc phần tư III: Sin = -√3/2, Cos = -1/2, Tan = +√3' },
  { deg: 270, radStr: '3π/2', radVal: (3 * Math.PI) / 2, sinStr: '-1', sinVal: -1, cosStr: '0', cosVal: 0, tanStr: 'KXĐ', tanVal: null, cotStr: '0', cotVal: 0, quadrant: 0, tip: 'Điểm đáy trục tung: Sin = -1, Cos = 0' },
  { deg: 300, radStr: '5π/3', radVal: (5 * Math.PI) / 3, sinStr: '-√3/2', sinVal: -Math.sqrt(3)/2, cosStr: '1/2', cosVal: 0.5, tanStr: '-√3', tanVal: -Math.sqrt(3), cotStr: '-√3/3', cotVal: -Math.sqrt(3)/3, quadrant: 4, tip: 'Góc phần tư IV: Cos dương (+1/2), Sin âm (-√3/2)' },
  { deg: 315, radStr: '7π/4', radVal: (7 * Math.PI) / 4, sinStr: '-√2/2', sinVal: -Math.SQRT2/2, cosStr: '√2/2', cosVal: Math.SQRT2/2, tanStr: '-1', tanVal: -1, cotStr: '-1', cotVal: -1, quadrant: 4, tip: 'Góc phần tư IV: Cos = √2/2, Sin = -√2/2' },
  { deg: 330, radStr: '11π/6', radVal: (11 * Math.PI) / 6, sinStr: '-1/2', sinVal: -0.5, cosStr: '√3/2', cosVal: Math.sqrt(3)/2, tanStr: '-√3/3', tanVal: -Math.sqrt(3)/3, cotStr: '-√3', cotVal: -Math.sqrt(3), quadrant: 4, tip: 'Góc phần tư IV: Gần về đích, Cos = √3/2, Sin = -1/2' },
  { deg: 360, radStr: '2π', radVal: 2 * Math.PI, sinStr: '0', sinVal: 0, cosStr: '1', cosVal: 1, tanStr: '0', tanVal: 0, cotStr: 'KXĐ', cotVal: null, quadrant: 0, tip: 'Trọn vẹn 1 vòng quay 360° (2π), trùng lại với góc 0°' }
];

export const FORMULA_HANDBOOK: FormulaItem[] = [
  {
    id: 'trig-sign-quadrant',
    topicId: 'trigonometry',
    category: 'Vòng tròn lượng giác & Dấu',
    title: 'Thần chú xét dấu 4 góc phần tư',
    formula: 'Phần tư I (+,+), II (-,+), III (-,-), IV (+,-)',
    mnemonic: 'Nhất CẢ (tất cả dương) - Nhì SIN (chỉ Sin dương) - Tam TAN (Tan & Cot dương) - Tứ COS (chỉ Cos dương)',
    visualWhy: 'Góc I: x>0, y>0. Góc II: x<0 (Cos âm), y>0 (Sin dương). Góc III: x<0, y<0. Góc IV: x>0 (Cos dương), y<0 (Sin âm).',
    example: 'Góc 120° ở phần tư II -> Sin(120°) > 0, Cos(120°) < 0.',
    trapToAvoid: 'Nhầm lẫn trục Sin là nằm ngang và Cos là thẳng đứng. Nhớ: "Sin ĐỨNG, Cos NẰM"!'
  },
  {
    id: 'trig-pythagoras',
    topicId: 'trigonometry',
    category: 'Hệ thức cơ bản',
    title: 'Hệ thức Pytago lượng giác',
    formula: 'sin²(x) + cos²(x) = 1 | 1 + tan²(x) = 1/cos²(x) | 1 + cot²(x) = 1/sin²(x)',
    mnemonic: 'Sin bình cộng Cos bình luôn bằng Một quả trứng tròn vo',
    visualWhy: 'Tam giác vuông OMH có 2 cạnh góc vuông là |cos x| và |sin x|, cạnh huyền là bán kính R = 1. Theo Pytago: OM² = OH² + HM² => 1 = cos² + sin².',
    example: 'Biết sin x = 3/5 và x thuộc phần tư I: cos² x = 1 - (3/5)² = 16/25 => cos x = +4/5 (vì góc I cos dương).',
    trapToAvoid: 'Quên xét dấu của góc phần tư khi khai căn (chỉ lấy dấu dương là sai nếu góc ở phần tư II hoặc III).'
  },
  {
    id: 'trig-related-angles',
    topicId: 'trigonometry',
    category: 'Cung liên kết',
    title: 'Thần chú Cung liên kết kinh điển',
    formula: 'Cos(-x) = Cos(x) | Sin(π - x) = Sin(x) | Sin(π/2 - x) = Cos(x) | Tan(x + π) = Tan(x)',
    mnemonic: 'Cos ĐỐI - Sin BÙ - Phụ CHÉO - Hơn kém π là TAN / COT',
    visualWhy: 'Góc đối (-x): cùng hoành độ Cos. Góc bù (π - x): cùng tung độ Sin. Góc phụ (π/2 - x): hoán đổi trục x và y. Hơn kém π: quay nửa vòng, sin và cos đổi dấu cả hai nên tan = sin/cos giữ nguyên dấu.',
    example: 'sin(150°) = sin(180° - 30°) = sin(30°) = 1/2. cos(120°) = cos(180° - 60°) = -cos(60°) = -1/2.',
    trapToAvoid: 'Nhầm "Sin bù" thành sin(π - x) = -sin(x). Nhớ: Sin bù thì Sin BẰNG NHAU (cùng dấu dương)!'
  },
  {
    id: 'trig-addition',
    topicId: 'trigonometry',
    category: 'Công thức cộng',
    title: 'Thơ nhớ Công thức cộng',
    formula: 'cos(a ± b) = cos a cos b ∓ sin a sin b | sin(a ± b) = sin a cos b ± cos a sin b',
    mnemonic: 'Cos thì cos cos sin sin, Dấu trừ đi trước dấu cộng đi sau. Sin thì sin cos cos sin, Dấu cùng đi tới ai nhìn cũng mê.',
    visualWhy: 'Hàm Cos khó tính, "tráo trở" đổi dấu (trong ngoặc + ngoài ngoặc -). Hàm Sin ngoan ngoãn giữ nguyên dấu (trong ngoặc + ngoài ngoặc +).',
    example: 'cos(x + π/3) = cos x cos(π/3) - sin x sin(π/3) = 1/2 cos x - √3/2 sin x.',
    trapToAvoid: 'Viết cos(a + b) = cos a cos b + sin a sin b (sai dấu! Với cos phải là TRỪ).'
  },
  {
    id: 'trig-double-angle',
    topicId: 'trigonometry',
    category: 'Công thức nhân đôi & Hạ bậc',
    title: 'Công thức nhân đôi & Hạ bậc',
    formula: 'sin(2x) = 2 sin x cos x | cos(2x) = cos²x - sin²x = 2cos²x - 1 = 1 - 2sin²x | cos²x = (1 + cos 2x)/2 | sin²x = (1 - cos 2x)/2',
    mnemonic: 'Hạ bậc: Cos CỘNG, Sin TRỪ (chia đôi cho đều)',
    visualWhy: 'Xuất phát từ công thức cộng khi thay b = a. sin(a + a) = sin a cos a + cos a sin a = 2 sin a cos a.',
    example: 'Hạ bậc sin²(x) = (1 - cos 2x) / 2; Hạ bậc cos²(x) = (1 + cos 2x) / 2.',
    trapToAvoid: 'Nhầm lẫn cos(2x) = 2 cos x (hoàn toàn sai! Phải là 2cos²x - 1).'
  },
  {
    id: 'trig-equations',
    topicId: 'trigonometry',
    category: 'Phương trình lượng giác cơ bản',
    title: 'Phương trình sin x = a và cos x = a',
    formula: 'sin x = sin α <=> x = α + k2π hoặc x = π - α + k2π | cos x = cos α <=> x = ±α + k2π (k ∈ Z)',
    mnemonic: 'Sin thì Chính nó hoặc BÙ (π - α); Cos thì Đối dấu (±α). Đều cộng thêm cả vòng k2π!',
    visualWhy: 'Trên vòng tròn lượng giác, đường thẳng nằm ngang y = a cắt vòng tròn tại 2 điểm có tung độ bằng nhau: 1 điểm góc α và 1 điểm đối xứng qua trục tung là π - α. Quay hết 1 vòng (2π) lại trở về điểm đó, nên có +k2π.',
    example: 'sin x = 1/2 <=> sin x = sin(π/6) <=> x = π/6 + k2π hoặc x = 5π/6 + k2π.',
    trapToAvoid: 'Quên nghiệm thứ hai (nghiệm bù với sin, nghiệm âm với cos) hoặc nhầm k2π thành kπ.'
  },
  {
    id: 'seq-arithmetic',
    topicId: 'sequences',
    category: 'Cấp số cộng',
    title: 'Cấp số cộng (u_n và S_n)',
    formula: 'u_n = u_1 + (n - 1)d | S_n = n(u_1 + u_n)/2 = n[2u_1 + (n - 1)d]/2',
    mnemonic: 'Cộng dồn công sai d. Bước đi n - 1 bước!',
    visualWhy: 'Từ u_1 đến u_n có đúng n - 1 khoảng cách d. Tổng S_n là ghép cặp đầu đuôi giống phương pháp của thần đồng Gauss.',
    example: 'Cấp số cộng có u_1 = 3, d = 4. Tìm u_10: u_10 = 3 + (10 - 1)*4 = 3 + 36 = 39.',
    trapToAvoid: 'Dùng nhầm u_n = u_1 + nd (quên trừ 1, vì số hạng thứ 1 chưa cộng d nào cả).'
  },
  {
    id: 'seq-geometric',
    topicId: 'sequences',
    category: 'Cấp số nhân',
    title: 'Cấp số nhân (u_n và S_n)',
    formula: 'u_n = u_1 * q^(n - 1) | S_n = u_1 * (1 - q^n)/(1 - q) (q ≠ 1)',
    mnemonic: 'Nhân dồn công bội q. Mũ giảm 1 đơn vị!',
    visualWhy: 'Mỗi bước nhân thêm q. Từ số thứ 1 sang số thứ n nhân liên tiếp n - 1 lần q.',
    example: 'u_1 = 2, q = 3. Số hạng u_5 = 2 * 3^(5 - 1) = 2 * 3^4 = 2 * 81 = 162.',
    trapToAvoid: 'Tính nhầm u_n = u_1 * q^n (thừa 1 lần nhân q).'
  },
  {
    id: 'limits-basics',
    topicId: 'limits',
    category: 'Giới hạn hàm số',
    title: 'Khử dạng vô định 0/0 và vô cùng',
    formula: 'lim (x->x0) f(x)/g(x) [dạng 0/0] => Phân tích thành nhân tử (x - x0) hoặc Nhân liên hợp (√A - B)',
    mnemonic: '0/0 có căn thì Nhân Liên Hợp. Đa thức thì Tách Nghiệm (x - x0). Vô cùng thì Rút Bậc Cao.',
    visualWhy: 'Dạng 0/0 xảy ra vì cả tử và mẫu đều chứa thừa số (x - x0). Triệt tiêu thừa số này sẽ hết vô định.',
    example: 'lim(x->1) (x² - 1)/(x - 1) = lim(x->1) [(x-1)(x+1)]/(x-1) = lim(x->1) (x+1) = 2.',
    trapToAvoid: 'Thay số trực tiếp ra 0/0 rồi kết luận giới hạn bằng 0 hoặc không tồn tại.'
  },
  {
    id: 'geo-parallel',
    topicId: 'geometry',
    category: 'Hình học không gian',
    title: 'Đường thẳng song song mặt phẳng',
    formula: 'd // (P) <=> d không nằm trong (P) và d // a với a ⊂ (P)',
    mnemonic: 'Muốn song song với Cả Nhà (mặt phẳng), chỉ cần song song với Một Người trong nhà!',
    visualWhy: 'Nếu d song song với một đường thẳng a nằm trên mặt phẳng (P), và d không cắt (P), thì d sẽ không bao giờ chạm tới (P).',
    example: 'Trong hình chóp S.ABCD đáy hình bình hành, AB // CD mà CD nằm trong (SCD) => AB // (SCD).',
    trapToAvoid: 'Quên kiểm tra điều kiện đường thẳng d không được nằm sẵn trong mặt phẳng (P).'
  }
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 1,
    topicId: 'trigonometry',
    question: 'Đổi góc 150° sang đơn vị radian, kết quả đúng là:',
    options: ['5π/6', '3π/4', '2π/3', '7π/6'],
    correctIndex: 0,
    explanation: 'Quy tắc đổi: α(rad) = a° * (π / 180°). Với a = 150°: 150 * (π / 180) = 5π/6 rad.',
    conceptTested: 'Chuyển đổi Độ <-> Radian',
    remedyAction: 'Nhớ mốc cơ bản: 180° = π rad. 30° = π/6, do đó 150° = 5 * 30° = 5π/6.'
  },
  {
    id: 2,
    topicId: 'trigonometry',
    question: 'Cho góc x thỏa mãn π/2 < x < π (góc phần tư thứ II). Dấu của sin x và cos x là:',
    options: [
      'sin x > 0 và cos x > 0',
      'sin x > 0 và cos x < 0',
      'sin x < 0 và cos x < 0',
      'sin x < 0 và cos x > 0'
    ],
    correctIndex: 1,
    explanation: 'Ở góc phần tư thứ II (từ 90° đến 180°): tung độ y dương nên sin x > 0, hoành độ x âm nên cos x < 0. Thần chú: "Nhì Sin" (ở góc II chỉ có Sin dương).',
    conceptTested: 'Bản chất dấu trên Vòng tròn Lượng giác',
    remedyAction: 'Vào tab "Vòng tròn Lượng giác" kéo góc sang phần tư II để nhìn trực quan thanh Cos âm màu xanh bên trái!'
  },
  {
    id: 3,
    topicId: 'trigonometry',
    question: 'Giá trị chính xác của biểu thức sin(150°) là:',
    options: ['1/2', '-1/2', '√3/2', '-√3/2'],
    correctIndex: 0,
    explanation: 'Dùng công thức sin bù: 150° và 30° bù nhau (tổng bằng 180°). "Sin bù" => sin(150°) = sin(180° - 30°) = sin(30°) = 1/2.',
    conceptTested: 'Cung liên kết (Sin bù)',
    remedyAction: 'Ghi nhớ thần chú "Cos đối, Sin bù". Hai góc cộng lại bằng 180° thì Sin bằng nhau!'
  },
  {
    id: 4,
    topicId: 'trigonometry',
    question: 'Tập nghiệm của phương trình lượng giác cơ bản sin x = 1/2 là:',
    options: [
      'x = π/6 + k2π (k ∈ Z)',
      'x = π/6 + k2π hoặc x = 5π/6 + k2π (k ∈ Z)',
      'x = π/6 + kπ hoặc x = -π/6 + kπ (k ∈ Z)',
      'x = ±π/3 + k2π (k ∈ Z)'
    ],
    correctIndex: 1,
    explanation: 'sin x = 1/2 = sin(π/6). Nghiệm thứ nhất là x = π/6 + k2π. Nghiệm thứ hai bù với nó là x = π - π/6 + k2π = 5π/6 + k2π.',
    conceptTested: 'Cấu trúc 2 họ nghiệm của phương trình sin',
    remedyAction: 'Nhớ câu vè: "Sin thì chính nó hoặc bù, nhớ cộng k2π cả vòng tròn".'
  },
  {
    id: 5,
    topicId: 'trigonometry',
    question: 'Biểu thức nào sau đây ĐÚNG với mọi góc x?',
    options: [
      'sin(2x) = 2 sin x',
      'cos(2x) = 2 cos x - 1',
      'sin²x + cos²x = 1',
      'tan x = cos x / sin x'
    ],
    correctIndex: 2,
    explanation: 'Theo định lý Pytago trên vòng tròn đơn vị bán kính R = 1: sin²x + cos²x = 1 luôn đúng với mọi góc x.',
    conceptTested: 'Hệ thức cơ bản',
    remedyAction: 'Tuyệt đối không rút số 2 ra ngoài thành sin(2x) = 2 sin x. Công thức đúng là sin(2x) = 2 sin x cos x!'
  },
  {
    id: 6,
    topicId: 'sequences',
    question: 'Cho cấp số cộng (u_n) có số hạng đầu u_1 = 2 và công sai d = 5. Số hạng thứ 4 là:',
    options: ['u_4 = 17', 'u_4 = 22', 'u_4 = 20', 'u_4 = 12'],
    correctIndex: 0,
    explanation: 'Công thức u_n = u_1 + (n - 1)d. Thay n = 4: u_4 = 2 + (4 - 1)*5 = 2 + 15 = 17.',
    conceptTested: 'Số hạng tổng quát cấp số cộng',
    remedyAction: 'Chú ý: n - 1 khoảng cách, từ số 1 lên số 4 chỉ có 3 khoảng cách d.'
  },
  {
    id: 7,
    topicId: 'limits',
    question: 'Kết quả của giới hạn lim (x->2) (x² - 4)/(x - 2) là:',
    options: ['0', 'Không xác định', '4', '2'],
    correctIndex: 2,
    explanation: 'Thay x = 2 vào tử và mẫu đều bằng 0 (dạng 0/0). Tách hằng đẳng thức tử: x² - 4 = (x - 2)(x + 2). Rút gọn thừa số (x - 2), ta được lim (x->2) (x + 2) = 2 + 2 = 4.',
    conceptTested: 'Khử dạng vô định 0/0 bằng phân tích nhân tử',
    remedyAction: 'Khi gặp dạng 0/0, đừng dừng lại, hãy tìm nhân tử chung triệt tiêu mẫu!'
  },
  {
    id: 8,
    topicId: 'geometry',
    question: 'Trong không gian, để chứng minh đường thẳng d song song với mặt phẳng (P), ta cần chứng minh:',
    options: [
      'd song song với 2 đường thẳng cắt nhau trong (P)',
      'd không nằm trong (P) và d song song với một đường thẳng a nằm trong (P)',
      'd vuông góc với mặt phẳng (P)',
      'd cắt một đường thẳng trong (P)'
    ],
    correctIndex: 1,
    explanation: 'Định lý cơ bản: Đường thẳng d // (P) khi d không thuộc (P) và d song song với một đường thẳng bất kỳ nằm trong (P).',
    conceptTested: 'Định lý chứng minh đường song song mặt phẳng',
    remedyAction: 'Nhớ thần chú: "Muốn song song cả mặt, chỉ cần song song với 1 người trong mặt".'
  }
];

export const PRACTICE_PROBLEMS: PracticeProblem[] = [
  {
    id: 'pr-1',
    topicId: 'trigonometry',
    difficulty: 'foundation',
    difficultyLabel: 'Nấc 1: Nhận biết phản xạ',
    question: 'Tính giá trị của biểu thức P = cos(60°) + sin(30°).',
    options: ['1/2', '1', '√3', '√3/2'],
    correctAnswer: '1',
    hint1Formula: 'Gợi ý nấc 1: Tra bảng góc đặc biệt: cos(60°) = 1/2 và sin(30°) = 1/2.',
    hint2FirstStep: 'Gợi ý nấc 2: Thay số vào biểu thức: P = 1/2 + 1/2.',
    fullSolution: [
      'Bước 1: Nhớ lại giá trị lượng giác của 2 góc phụ nhau 30° và 60° (tổng bằng 90°: Phụ chéo => sin góc này bằng cos góc kia).',
      'Bước 2: cos(60°) = 1/2 và sin(30°) = 1/2.',
      'Bước 3: Cộng hai giá trị lại: P = 1/2 + 1/2 = 1.'
    ],
    keyTakeaway: 'Hai góc phụ nhau có Sin góc này bằng Cos góc kia (sin 30° = cos 60° = 1/2).'
  },
  {
    id: 'pr-2',
    topicId: 'trigonometry',
    difficulty: 'foundation',
    difficultyLabel: 'Nấc 1: Xét dấu vòng tròn',
    question: 'Cho góc α thuộc khoảng (π, 3π/2). Khẳng định nào sau đây là ĐÚNG?',
    options: ['sin α > 0, cos α > 0', 'sin α < 0, cos α > 0', 'sin α < 0, cos α < 0, tan α > 0', 'tan α < 0'],
    correctAnswer: 'sin α < 0, cos α < 0, tan α > 0',
    hint1Formula: 'Gợi ý nấc 1: Khoảng (π, 3π/2) tương ứng với 180° đến 270°, tức là Góc phần tư thứ III.',
    hint2FirstStep: 'Gợi ý nấc 2: Dùng thần chú: "Nhất Cả, Nhì Sin, Tam Tan Cot, Tứ Cos".',
    fullSolution: [
      'Bước 1: Xác định vị trí góc: π < α < 3π/2 là góc phần tư thứ III trên vòng tròn lượng giác.',
      'Bước 2: Chiếu điểm M xuống trục Cos (nằm ngang) nằm ở phần âm (trái trục tung) => cos α < 0.',
      'Bước 3: Chiếu điểm M sang trục Sin (thẳng đứng) nằm ở phần âm (dưới trục hoành) => sin α < 0.',
      'Bước 4: Tính tan α = sin α / cos α = (số âm) / (số âm) = SỐ DƯƠNG (tan α > 0). Đúng thần chú "Tam Tan Cot"!'
    ],
    keyTakeaway: 'Góc phần tư III thì cả Sin và Cos đều âm, nhưng thương số Tan và Cot lại dương.'
  },
  {
    id: 'pr-3',
    topicId: 'trigonometry',
    difficulty: 'understanding',
    difficultyLabel: 'Nấc 2: Biến đổi 2 bước',
    question: 'Cho sin x = 4/5 với 0 < x < π/2. Hãy tính giá trị của cos x và sin(2x).',
    options: [
      'cos x = 3/5, sin(2x) = 24/25',
      'cos x = -3/5, sin(2x) = -24/25',
      'cos x = 3/5, sin(2x) = 8/5',
      'cos x = 1/5, sin(2x) = 12/25'
    ],
    correctAnswer: 'cos x = 3/5, sin(2x) = 24/25',
    hint1Formula: 'Gợi ý nấc 1: Dùng Pytago: cos²x = 1 - sin²x. Và công thức nhân đôi: sin(2x) = 2 sin x cos x.',
    hint2FirstStep: 'Gợi ý nấc 2: Vì 0 < x < π/2 (góc phần tư I) nên cos x > 0. Khai căn lấy giá trị dương!',
    fullSolution: [
      'Bước 1: Tính cos²x = 1 - sin²x = 1 - (4/5)² = 1 - 16/25 = 9/25.',
      'Bước 2: Vì góc x thuộc góc phần tư thứ I (0 < x < π/2) nên cos x > 0 => cos x = √(9/25) = 3/5.',
      'Bước 3: Áp dụng công thức nhân đôi: sin(2x) = 2 * sin x * cos x = 2 * (4/5) * (3/5) = 24/25.'
    ],
    keyTakeaway: 'Khi tính cos từ sin, LUÔN kiểm tra góc phần tư để chọn dấu cộng hay trừ trước khi khai căn.'
  },
  {
    id: 'pr-4',
    topicId: 'trigonometry',
    difficulty: 'understanding',
    difficultyLabel: 'Nấc 2: Giải phương trình',
    question: 'Giải phương trình: 2 sin x - √3 = 0.',
    options: [
      'x = π/3 + k2π hoặc x = 2π/3 + k2π (k ∈ Z)',
      'x = π/6 + k2π hoặc x = 5π/6 + k2π (k ∈ Z)',
      'x = ±π/3 + k2π (k ∈ Z)',
      'x = π/3 + kπ (k ∈ Z)'
    ],
    correctAnswer: 'x = π/3 + k2π hoặc x = 2π/3 + k2π (k ∈ Z)',
    hint1Formula: 'Gợi ý nấc 1: Chuyển vế: sin x = √3/2. Nhớ lại góc nào có sin bằng √3/2 (đó là π/3 = 60°).',
    hint2FirstStep: 'Gợi ý nấc 2: Áp dụng công thức nghiệm phương trình sin: x = α + k2π hoặc x = π - α + k2π.',
    fullSolution: [
      'Bước 1: Biến đổi phương trình về dạng cơ bản: 2 sin x = √3 <=> sin x = √3/2.',
      'Bước 2: Đưa số √3/2 về giá trị sin của góc đặc biệt: √3/2 = sin(π/3).',
      'Bước 3: Phương trình trở thành sin x = sin(π/3).',
      'Bước 4: Áp dụng 2 họ nghiệm: Họ 1: x = π/3 + k2π; Họ 2: x = π - π/3 + k2π = 2π/3 + k2π (k ∈ Z).'
    ],
    keyTakeaway: 'Phương trình sin x = sin α luôn có 2 họ nghiệm: một họ là α, họ kia là góc bù π - α.'
  },
  {
    id: 'pr-5',
    topicId: 'sequences',
    difficulty: 'understanding',
    difficultyLabel: 'Nấc 2: Cấp số cộng',
    question: 'Cho cấp số cộng (u_n) có u_1 = -3 và công sai d = 4. Tìm số hạng thứ bao nhiêu của cấp số cộng có giá trị bằng 33?',
    options: ['n = 8', 'n = 10', 'n = 9', 'n = 11'],
    correctAnswer: 'n = 10',
    hint1Formula: 'Gợi ý nấc 1: Dùng công thức số hạng tổng quát: u_n = u_1 + (n - 1)d.',
    hint2FirstStep: 'Gợi ý nấc 2: Thay u_n = 33, u_1 = -3, d = 4 vào phương trình và giải tìm n.',
    fullSolution: [
      'Bước 1: Ta có công thức u_n = u_1 + (n - 1)d.',
      'Bước 2: Thay số vào: 33 = -3 + (n - 1)*4.',
      'Bước 3: Chuyển vế: 33 + 3 = 4(n - 1) <=> 36 = 4(n - 1).',
      'Bước 4: Chia hai vế cho 4: n - 1 = 9 <=> n = 10. Vậy 33 là số hạng thứ 10.'
    ],
    keyTakeaway: 'Tìm vị trí số hạng chính là bài toán giải phương trình bậc nhất ẩn n từ công thức u_n = u_1 + (n-1)d.'
  },
  {
    id: 'pr-6',
    topicId: 'limits',
    difficulty: 'understanding',
    difficultyLabel: 'Nấc 2: Khử dạng vô định',
    question: 'Tính giới hạn: lim(x -> 3) (x² - 9) / (x - 3).',
    options: ['0', '3', '6', 'Vô cùng'],
    correctAnswer: '6',
    hint1Formula: 'Gợi ý nấc 1: Khi thay x = 3, tử = 3² - 9 = 0 và mẫu = 3 - 3 = 0 (dạng 0/0). Dùng hằng đẳng thức a² - b².',
    hint2FirstStep: 'Gợi ý nấc 2: Tách x² - 9 = (x - 3)(x + 3) để triệt tiêu nhân tử (x - 3) dưới mẫu.',
    fullSolution: [
      'Bước 1: Nhận dạng: Thay x = 3 vào tử và mẫu được 0/0 (dạng vô định).',
      'Bước 2: Phân tích tử thức thành nhân tử: x² - 9 = x² - 3² = (x - 3)(x + 3).',
      'Bước 3: Rút gọn thừa số (x - 3) ở cả tử và mẫu: Biểu thức = x + 3 (khi x tiến tới 3 chứ không bằng 3).',
      'Bước 4: Thay x = 3 vào biểu thức đã rút gọn: lim(x -> 3) (x + 3) = 3 + 3 = 6.'
    ],
    keyTakeaway: 'Dạng 0/0 không có nghĩa là bằng 0 hay không tính được; chỉ cần triệt tiêu nhân tử làm mẫu bằng 0 là ra đáp án đẹp.'
  },
  {
    id: 'pr-7',
    topicId: 'sequences',
    difficulty: 'understanding',
    difficultyLabel: 'Nấc 2: Cấp số nhân',
    question: 'Cho cấp số nhân (u_n) có số hạng đầu u_1 = 3 và công bội q = 2. Hãy tính số hạng thứ 6 (u_6) và tổng 6 số hạng đầu (S_6).',
    options: [
      'u_6 = 96, S_6 = 189',
      'u_6 = 192, S_6 = 381',
      'u_6 = 96, S_6 = 192',
      'u_6 = 48, S_6 = 93'
    ],
    correctAnswer: 'u_6 = 96, S_6 = 189',
    hint1Formula: 'Gợi ý nấc 1: Dùng công thức u_n = u_1 · q^(n-1) và S_n = u_1 · (1 - q^n) / (1 - q).',
    hint2FirstStep: 'Gợi ý nấc 2: Thay n = 6, u_1 = 3, q = 2: u_6 = 3 · 2^(6 - 1) = 3 · 2^5.',
    fullSolution: [
      'Bước 1: Tính số hạng thứ 6: u_6 = u_1 · q^(6 - 1) = 3 · 2^5 = 3 · 32 = 96.',
      'Bước 2: Tính tổng 6 số hạng đầu: S_6 = u_1 · (1 - q^6) / (1 - q) = 3 · (1 - 2^6) / (1 - 2).',
      'Bước 3: Vì 2^6 = 64 nên: S_6 = 3 · (1 - 64) / (-1) = 3 · (-63) / (-1) = 3 · 63 = 189.'
    ],
    keyTakeaway: 'Lưu ý số mũ ở số hạng tổng quát là n - 1 (bậc 5), còn ở công thức tổng S_n là q^n (bậc 6).'
  },
  {
    id: 'pr-8',
    topicId: 'limits',
    difficulty: 'understanding',
    difficultyLabel: 'Nấc 2: Nhân lượng liên hợp',
    question: 'Tính giới hạn: lim(x -> 1) (√(x + 3) - 2) / (x - 1).',
    options: ['1/4', '1/2', '0', '2'],
    correctAnswer: '1/4',
    hint1Formula: 'Gợi ý nấc 1: Thay x = 1 được dạng 0/0. Khi có căn bậc hai dạng √A - B, hãy nhân cả tử và mẫu với lượng liên hợp (√A + B).',
    hint2FirstStep: 'Gợi ý nấc 2: Tử thức trở thành (x + 3) - 2² = x + 3 - 4 = x - 1, triệt tiêu được mẫu số (x - 1).',
    fullSolution: [
      'Bước 1: Nhận dạng: Thay x = 1 vào thì tử = √(1+3) - 2 = 0, mẫu = 1 - 1 = 0 (dạng vô định 0/0).',
      'Bước 2: Nhân cả tử và mẫu với lượng liên hợp (√(x + 3) + 2):',
      'Tử = (√(x + 3) - 2)(√(x + 3) + 2) = (x + 3) - 4 = x - 1.',
      'Mẫu = (x - 1)(√(x + 3) + 2).',
      'Bước 3: Rút gọn thừa số (x - 1): Biểu thức = 1 / (√(x + 3) + 2).',
      'Bước 4: Thay x = 1: lim = 1 / (√(1 + 3) + 2) = 1 / (2 + 2) = 1/4.'
    ],
    keyTakeaway: 'Gặp dạng 0/0 có căn bậc 2: "Trừ thì nhân Cộng, Cộng thì nhân Trừ" để dùng hằng đẳng thức a² - b² bay căn.'
  },
  {
    id: 'pr-9',
    topicId: 'geometry',
    difficulty: 'foundation',
    difficultyLabel: 'Nấc 1: Giao tuyến mặt phẳng',
    question: 'Cho hình chóp S.ABCD có đáy ABCD là hình bình hành tâm O. Giao tuyến của hai mặt phẳng (SAC) và (SBD) là đường thẳng nào?',
    options: ['Đường thẳng SO', 'Đường thẳng SA', 'Đường thẳng SC', 'Đường thẳng AB'],
    correctAnswer: 'Đường thẳng SO',
    hint1Formula: 'Gợi ý nấc 1: Để tìm giao tuyến của 2 mặt phẳng, ta cần tìm 2 điểm chung phân biệt của chúng.',
    hint2FirstStep: 'Gợi ý nấc 2: Điểm S là đỉnh chung thứ nhất. Trong mặt phẳng đáy (ABCD), đường chéo AC cắt BD tại tâm O, vậy O là điểm chung thứ hai.',
    fullSolution: [
      'Bước 1: Tìm điểm chung thứ nhất: Dễ thấy đỉnh S thuộc cả (SAC) và (SBD) => S là điểm chung thứ 1.',
      'Bước 2: Tìm điểm chung thứ hai: Xét mặt phẳng đáy (ABCD), gọi O = AC ∩ BD. Vì O thuộc AC nên O thuộc (SAC); vì O thuộc BD nên O thuộc (SBD) => O là điểm chung thứ 2.',
      'Bước 3: Kết luận: Giao tuyến của hai mặt phẳng (SAC) và (SBD) chính là đường thẳng nối 2 điểm chung: SO.'
    ],
    keyTakeaway: 'Tìm giao tuyến của 2 mặt phẳng = Tìm 2 điểm chung. Luôn tìm 1 điểm chung dễ thấy (đỉnh chóp) và 1 điểm chung từ giao điểm của 2 đường thẳng cùng nằm trong mặt phẳng đáy.'
  },
  {
    id: 'pr-10',
    topicId: 'geometry',
    difficulty: 'understanding',
    difficultyLabel: 'Nấc 2: Song song không gian',
    question: 'Cho hình chóp S.ABCD có đáy ABCD là hình bình hành. Gọi M, N lần lượt là trung điểm của SA và SB. Khẳng định nào sau đây ĐÚNG?',
    options: [
      'MN // (ABCD)',
      'MN cắt mặt phẳng (ABCD)',
      'MN nằm trong (ABCD)',
      'MN vuông góc với (ABCD)'
    ],
    correctAnswer: 'MN // (ABCD)',
    hint1Formula: 'Gợi ý nấc 1: Áp dụng định lý: Đường thẳng d không nằm trong (P) và d song song với một đường thẳng a nằm trong (P) thì d // (P).',
    hint2FirstStep: 'Gợi ý nấc 2: Trong tam giác SAB, MN là đường trung bình nên MN // AB. Mà AB nằm trong mặt phẳng đáy (ABCD).',
    fullSolution: [
      'Bước 1: Xét tam giác SAB có M là trung điểm SA, N là trung điểm SB => MN là đường trung bình của tam giác SAB.',
      'Bước 2: Theo tính chất đường trung bình: MN // AB.',
      'Bước 3: Ta có: MN không nằm trong (ABCD); AB ⊂ (ABCD); MN // AB.',
      'Bước 4: Suy ra MN // (ABCD).'
    ],
    keyTakeaway: 'Cách chứng minh đường song song mặt: Đường trung bình tam giác hoặc hình bình hành luôn là chiếc chìa khóa vạn năng.'
  },
  {
    id: 'pr-11',
    topicId: 'statistics',
    difficulty: 'foundation',
    difficultyLabel: 'Nấc 1: Mẫu ghép nhóm',
    question: 'Khi tính trung vị của mẫu số liệu ghép nhóm có cỡ mẫu n = 40, nhóm chứa trung vị là nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng giá trị nào?',
    options: ['n/2 = 20', 'n/4 = 10', '3n/4 = 30', 'n = 40'],
    correctAnswer: 'n/2 = 20',
    hint1Formula: 'Gợi ý nấc 1: Trung vị (Median) là giá trị nằm chính giữa dãy số liệu chia mẫu thành 2 phần bằng nhau.',
    hint2FirstStep: 'Gợi ý nấc 2: Với cỡ mẫu n, vị trí trung vị tương ứng với mốc n/2.',
    fullSolution: [
      'Bước 1: Cỡ mẫu là n = 40.',
      'Bước 2: Trung vị là giá trị chia đôi dữ liệu, do đó mốc xác định là n/2 = 40/2 = 20.',
      'Bước 3: Nhóm chứa trung vị là nhóm có tần số tích lũy cf_k ≥ 20 đầu tiên.'
    ],
    keyTakeaway: 'Nhớ mốc cơ bản trong thống kê ghép nhóm: Trung vị chia đôi (n/2), Tứ phân vị thứ nhất chia tư (n/4), Tứ phân vị thứ ba (3n/4).'
  }
];

export const ROADMAP_14_DAYS: RoadmapDay[] = [
  {
    day: 1,
    topicId: 'trigonometry',
    title: 'Giải mã Vòng Tròn Đơn Vị & Độ - Radian',
    durationMinutes: 20,
    focus: 'Hiểu tại sao dùng Radian và nhìn thấy trục Sin (đứng), Cos (nằm)',
    whyThisDay: 'Gốc rễ lớn nhất khiến con sợ lượng giác là nhìn thấy số π và không biết góc đang ở đâu.',
    coreConcepts: [
      'Công thức đổi: 180° tương đương π radian. 1 rad xấp xỉ 57.3°',
      'Góc quay ngược chiều kim đồng hồ là chiều DƯƠNG',
      'Điểm M(x, y) trên vòng tròn thì x chính là cos α, y chính là sin α'
    ],
    practiceTarget: 'Đổi thành thạo 5 góc quen thuộc: 30°, 45°, 60°, 90°, 120° sang radian không cần bấm máy.',
    parentTip: 'Hôm nay phụ huynh hãy cùng con kéo thanh trượt trên tab Vòng Tròn Lượng Giác, hỏi con "trục đứng là sin hay cos" để con tự tin trả lời.'
  },
  {
    day: 2,
    topicId: 'trigonometry',
    title: 'Thần Chú Xét Dấu 4 Góc Phần Tư',
    durationMinutes: 20,
    focus: 'Thuộc làu câu vè: "Nhất Cả, Nhì Sin, Tam Tan Cot, Tứ Cos"',
    whyThisDay: 'Học sinh làm bài tập hay bị trừ điểm oan vì nhầm dấu âm/dương khi khai căn.',
    coreConcepts: [
      'Phần tư I (0 đến 90°): Tất cả đều dương',
      'Phần tư II (90° đến 180°): Chỉ có Sin dương, Cos âm',
      'Phần tư III (180° đến 270°): Sin âm, Cos âm -> Tan và Cot dương',
      'Phần tư IV (270° đến 360°): Cos dương, Sin âm'
    ],
    practiceTarget: 'Nhìn bất kỳ góc nào (ví dụ 135°, 210°, 300°) nói ngay dấu của sin và cos trong 3 giây.',
    parentTip: 'Đố vui con vài góc khi đang ăn cơm hoặc giải lao: "Góc 120 độ Sin âm hay dương?". Khen ngợi ngay khi con đọc đúng thần chú!'
  },
  {
    day: 3,
    topicId: 'trigonometry',
    title: 'Hệ Thức Pytago Lượng Giác Cơ Bản',
    durationMinutes: 20,
    focus: 'Nắm vững sin²x + cos²x = 1 và cách tính một hàm khi biết hàm kia',
    whyThisDay: 'Đây là viên gạch nền tảng để giải mọi bài toán rút gọn biểu thức lớp 11.',
    coreConcepts: [
      'Bản chất Pytago trong tam giác vuông cạnh huyền = 1',
      'Biết sin x -> tính cos x = ±√(1 - sin²x) (chọn dấu theo góc phần tư)',
      '1 + tan²x = 1 / cos²x'
    ],
    practiceTarget: 'Làm 3 bài tính cos khi biết sin kèm điều kiện góc phần tư.',
    parentTip: 'Nhắc con chú ý bước "chọn dấu cộng hay trừ", vì đây là bẫy 80% học sinh rơi vào.'
  },
  {
    day: 4,
    topicId: 'trigonometry',
    title: 'Bí Kíp Cung Liên Kết: Cos Đối, Sin Bù',
    durationMinutes: 20,
    focus: 'Thần chú: "Cos đối, Sin bù, Phụ chéo, Khác pi tan cot"',
    whyThisDay: 'Giúp đưa mọi góc lớn về góc nhọn quen thuộc (30°, 45°, 60°) mà không cần nhớ vẹt bảng dài dằng dặc.',
    coreConcepts: [
      'Góc bù (tổng bằng 180°): sin(180° - x) = sin x, còn cos đổi dấu',
      'Góc phụ (tổng bằng 90°): sin(90° - x) = cos x, phụ chéo hoán đổi hàm',
      'Góc đối: cos(-x) = cos x'
    ],
    practiceTarget: 'Tính nhẩm sin(120°), cos(150°), tan(135°) bằng cách đưa về góc bù.',
    parentTip: 'Cho con xem hình minh họa đối xứng qua trục tung của 2 góc bù nhau để con thấy tận mắt.'
  },
  {
    day: 5,
    topicId: 'trigonometry',
    title: 'Công Thức Cộng & Nhân Đôi Dễ Nhớ Bằng Thơ',
    durationMinutes: 25,
    focus: 'Học bài thơ nhớ công thức cộng và hạ bậc',
    whyThisDay: 'Học sinh hay bị loạn dấu giữa cos(a+b) và sin(a+b).',
    coreConcepts: [
      'Thơ Cos: "Cos thì cos cos sin sin, dấu trừ đi trước dấu cộng đi sau"',
      'Thơ Sin: "Sin thì sin cos cos sin, dấu cùng đi tới ai nhìn cũng mê"',
      'Nhân đôi: sin(2x) = 2 sin x cos x; cos(2x) = 2cos²x - 1'
    ],
    practiceTarget: 'Khai triển sin(x + π/4) và cos(x - π/3) chuẩn xác 100%.',
    parentTip: 'Cùng con đọc nhẩm bài thơ 3 lần, con sẽ thấy môn toán rất thú vị chứ không hề khô khan.'
  },
  {
    day: 6,
    topicId: 'trigonometry',
    title: 'Giải Mã Phương Trình Lượng Giác sin x = a',
    durationMinutes: 25,
    focus: 'Tại sao có 2 họ nghiệm α và π - α, ý nghĩa của +k2π',
    whyThisDay: 'Bài kiểm tra học kỳ 1 chắc chắn có câu giải phương trình lượng giác.',
    coreConcepts: [
      'Điều kiện có nghiệm: -1 <= a <= 1',
      'Đưa số a về sin(α)',
      'Viết 2 họ nghiệm: x = α + k2π hoặc x = π - α + k2π (k ∈ Z)'
    ],
    practiceTarget: 'Giải chuẩn xác 3 phương trình: sin x = 1/2, sin x = -√3/2, sin(2x) = 1.',
    parentTip: 'Nhắc con nhớ viết đuôi "(k thuộc Z)", một lỗi hình thức rất hay bị trừ 0.25 điểm.'
  },
  {
    day: 7,
    topicId: 'trigonometry',
    title: 'Phương Trình cos x = a và Ôn Tập Lượng Giác',
    durationMinutes: 25,
    focus: 'Phương trình cos x = cos α <=> x = ±α + k2π và tổng kết 1 tuần',
    whyThisDay: 'Khép lại trọn vẹn chương Lượng giác - con đã chính thức lấy lại gốc phần quan trọng nhất!',
    coreConcepts: [
      'Cos có tính chất đối dấu nên nghiệm là x = ±α + k2π',
      'Phân biệt khi nào là k2π (sin, cos) và kπ (tan, cot hoặc sin x = 0)'
    ],
    practiceTarget: 'Làm bài kiểm tra mini 5 câu Lượng giác trong app để đo mức độ tiến bộ.',
    parentTip: 'Hãy dành cho con một lời khen chân thành vì con đã vượt qua 7 ngày cam go nhất của môn Toán 11!'
  },
  {
    day: 8,
    topicId: 'sequences',
    title: 'Nhận Diện Dãy Số & Cấp Số Cộng',
    durationMinutes: 20,
    focus: 'Bản chất số hạng tổng quát u_n = u_1 + (n - 1)d',
    whyThisDay: 'Chương Dãy số là phần gỡ điểm rất tốt trong đề thi nếu nắm vững công thức.',
    coreConcepts: [
      'Quy luật: Mỗi số sau bằng số trước cộng thêm công sai d cố định',
      'Số hạng thứ n: u_n = u_1 + (n - 1)d (n - 1 bước nhảy)',
      'Tổng n số hạng đầu: S_n = n(u_1 + u_n) / 2'
    ],
    practiceTarget: 'Cho u_1 = 3, d = 4: Tính u_10 và tổng 10 số hạng đầu S_10.',
    parentTip: 'So sánh cấp số cộng giống như con leo cầu thang mỗi bậc cao đúng d cm.'
  },
  {
    day: 9,
    topicId: 'sequences',
    title: 'Cấp Số Nhân: Phép Nhân Bùng Nổ',
    durationMinutes: 20,
    focus: 'Số hạng u_n = u_1 * q^(n - 1) và tổng S_n',
    whyThisDay: 'Học sinh hay nhầm phép nhân dồn với phép cộng dồn.',
    coreConcepts: [
      'Quy luật: Mỗi số sau bằng số trước NHÂN với công bội q',
      'u_n = u_1 * q^(n - 1)',
      'S_n = u_1 * (1 - q^n) / (1 - q)'
    ],
    practiceTarget: 'Phân biệt nhanh một dãy số cho trước là cấp số cộng hay cấp số nhân.',
    parentTip: 'Lấy ví dụ vi khuẩn phân đôi sau mỗi giờ để con thấy sự tăng trưởng của cấp số nhân.'
  },
  {
    day: 10,
    topicId: 'limits',
    title: 'Giới Hạn Dãy Số & Quy Tắc Bậc Tử - Bậc Mẫu',
    durationMinutes: 20,
    focus: 'Cách tính nhanh giới hạn khi n tiến tới vô cùng',
    whyThisDay: 'Dạng bài này xuất hiện nhiều trong trắc nghiệm và có mẹo nhìn hệ số làm trong 5 giây.',
    coreConcepts: [
      'lim (1/n) = 0 khi n -> vô cùng',
      'Bậc tử = Bậc mẫu: Kết quả bằng tỉ số 2 hệ số bậc cao nhất',
      'Bậc tử < Bậc mẫu: Kết quả luôn bằng 0',
      'Bậc tử > Bậc mẫu: Kết quả ra vô cùng'
    ],
    practiceTarget: 'Nhẩm nhanh 4 giới hạn phân thức đa thức trong 2 phút.',
    parentTip: 'Chỉ con mẹo "so sánh bậc" để con làm trắc nghiệm nhanh gấp 3 lần.'
  },
  {
    day: 11,
    topicId: 'limits',
    title: 'Giới Hạn Hàm Số: Khử Dạng Vô Định 0/0',
    durationMinutes: 25,
    focus: 'Kỹ thuật tách nhân tử (x - x0) và nhân lượng liên hợp',
    whyThisDay: 'Dạng 0/0 là trọng tâm phần tự luận thi học kỳ 1.',
    coreConcepts: [
      'Thay số trực tiếp: nếu ra số cụ thể thì đó là đáp án',
      'Nếu ra 0/0 dạng đa thức: phân tích thành nhân tử để triệt tiêu (x - x0)',
      'Nếu ra 0/0 có căn: nhân lượng liên hợp (√A - B)(√A + B) = A - B²'
    ],
    practiceTarget: 'Giải 2 bài khử dạng 0/0 cơ bản.',
    parentTip: 'Động viên con kiên nhẫn khi rút gọn biểu thức liên hợp.'
  },
  {
    day: 12,
    topicId: 'geometry',
    title: 'Vẽ Hình Không Gian Đúng Chuẩn & Nét Đứt - Nét Liền',
    durationMinutes: 25,
    focus: 'Kỹ năng vẽ hình chóp, hình tứ diện và cách nhìn giao tuyến',
    whyThisDay: 'Học sinh sợ hình không gian 90% là do vẽ hình xấu, các nét đè lên nhau không nhìn ra.',
    coreConcepts: [
      'Nét nhìn thấy vẽ nét LIỀN, nét bị che khuất vẽ nét ĐỨT',
      'Hai mặt phẳng phân biệt có điểm chung thì giao tuyến là đường thẳng đi qua điểm chung đó',
      'Cách tìm giao tuyến: Tìm 2 điểm chung của 2 mặt phẳng'
    ],
    practiceTarget: 'Vẽ chuẩn hình chóp S.ABCD và tìm giao tuyến của (SAC) và (SBD).',
    parentTip: 'Sắm cho con một cây thước kẻ tốt và một cây bút chì để vẽ hình chuẩn xác.'
  },
  {
    day: 13,
    topicId: 'geometry',
    title: 'Chứng Minh Đường Thẳng Song Song Mặt Phẳng',
    durationMinutes: 25,
    focus: 'Quy tắc "Tìm một người bạn trong nhà để song song"',
    whyThisDay: 'Câu chứng minh song song là câu kiếm điểm chắc chắn trong đề thi HK1.',
    coreConcepts: [
      'Định lý: d // a mà a nằm trong (P) thì d // (P)',
      'Thường dùng tính chất đường trung bình trong tam giác hoặc hình bình hành để chỉ ra d // a'
    ],
    practiceTarget: 'Giải 1 bài chứng minh đường thẳng song song mặt phẳng mẫu trong hình chóp.',
    parentTip: 'Nhắc con trình bày đủ 3 ý: d // a, a nằm trong (P), d không nằm trong (P).'
  },
  {
    day: 14,
    topicId: 'trigonometry',
    title: 'Tổng Ôn Chiến Lược Thi Học Kỳ 1 & Tự Tin Lấy Điểm',
    durationMinutes: 30,
    focus: 'Rà soát toàn bộ bí kíp, làm đề mô phỏng và chiến thuật phân bổ thời gian',
    whyThisDay: 'Củng cố tâm lý vững vàng, biến kiến thức vừa học thành điểm số thực tế.',
    coreConcepts: [
      'Chiến thuật làm bài: Câu nhận biết làm trong 30 giây, không sa đà vào câu khó trước',
      'Kiểm tra lại đáp án lượng giác bằng phím CALC trên máy tính cầm tay',
      'Tâm lý tự tin: Con đã nắm vững bản chất!'
    ],
    practiceTarget: 'Làm trọn vẹn 1 đề kiểm tra tổng hợp 10 câu trong app đạt từ 8 điểm trở lên.',
    parentTip: 'Gửi tới con lời động viên ấm áp. Sự đồng hành và tin tưởng của cha mẹ là liều thuốc tinh thần lớn nhất!'
  }
];
