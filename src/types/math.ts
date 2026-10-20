// Data types for Grade 11 Math Foundation Learning Platform

export type TopicId = 'trigonometry' | 'sequences' | 'limits' | 'geometry' | 'statistics';

export interface TopicInfo {
  id: TopicId;
  name: string;
  shortName: string;
  iconName: string;
  badge: string;
  description: string;
  rootCause: string;
  keyRule: string;
}

export interface SpecialAngle {
  deg: number;
  radStr: string;
  radVal: number;
  sinStr: string;
  sinVal: number;
  cosStr: string;
  cosVal: number;
  tanStr: string;
  tanVal: number | null;
  cotStr: string;
  cotVal: number | null;
  quadrant: 1 | 2 | 3 | 4 | 0; // 0 for axes
  tip: string;
}

export interface FormulaItem {
  id: string;
  topicId: TopicId;
  category: string;
  title: string;
  formula: string;
  mnemonic: string; // Thơ / Thần chú nhớ nhanh
  visualWhy: string; // Bản chất vì sao lại thế
  example: string; // Ví dụ 1 dòng minh họa
  trapToAvoid: string; // Lỗi sai học sinh hay mắc
}

export interface DiagnosticQuestion {
  id: number;
  topicId: TopicId;
  question: string;
  subText?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  conceptTested: string;
  remedyAction: string;
}

export interface PracticeProblem {
  id: string;
  topicId: TopicId;
  difficulty: 'foundation' | 'understanding' | 'application';
  difficultyLabel: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  hint1Formula: string; // Gợi ý cấp 1: Công thức cần dùng
  hint2FirstStep: string; // Gợi ý cấp 2: Bước đi đầu tiên
  fullSolution: string[]; // Các bước giải cặn kẽ
  keyTakeaway: string; // Điểm rút ra để lần sau không quên
}

export interface RoadmapDay {
  day: number;
  topicId: TopicId;
  title: string;
  durationMinutes: number;
  focus: string;
  whyThisDay: string;
  coreConcepts: string[];
  practiceTarget: string;
  parentTip: string;
}
