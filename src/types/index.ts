export type Persona = "nest" | "debt" | "invest";

export type Question = {
  id: string;
  text: string;
  level: number;
  image?: string;
  options: {
    text: string;
    value: string;
    points: number;
    image?: string;
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