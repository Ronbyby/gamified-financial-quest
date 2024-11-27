export type Persona = "nest" | "debt" | "invest";

export type Question = {
  id: string;
  text: string;
  level: number;
  options: {
    text: string;
    value: string;
    points: number;
  }[];
};

export type Answer = {
  questionId: string;
  selectedOption: string;
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: string;
};