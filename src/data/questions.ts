import { Question } from "@/types";

export const nestQuestions: Question[] = [
  {
    id: "nest-1",
    text: "What's your biggest financial challenge as a new mom?",
    options: [
      { text: "Managing unexpected expenses", value: "a", points: 3 },
      { text: "Sticking to a budget", value: "b", points: 2 },
      { text: "Saving consistently", value: "c", points: 1 }
    ]
  },
  {
    id: "nest-2",
    text: "Do you keep track of small daily expenses like snacks or transportation?",
    options: [
      { text: "Yes, I note everything", value: "a", points: 3 },
      { text: "Only if it feels like a big amount", value: "b", points: 2 },
      { text: "Not at all", value: "c", points: 1 }
    ]
  }
];

export const debtQuestions: Question[] = [
  {
    id: "debt-1",
    text: "How do you feel about your debt situation?",
    options: [
      { text: "I'm confident I'll manage it", value: "a", points: 3 },
      { text: "It feels overwhelming at times", value: "b", points: 2 },
      { text: "I feel stuck and need help", value: "c", points: 1 }
    ]
  },
  {
    id: "debt-2",
    text: "What's your primary source of debt?",
    options: [
      { text: "Credit cards", value: "a", points: 2 },
      { text: "Personal or payday loans", value: "b", points: 1 },
      { text: "Overdue bills", value: "c", points: 3 }
    ]
  }
];

export const investQuestions: Question[] = [
  {
    id: "invest-1",
    text: "What does investing mean to you?",
    options: [
      { text: "Growing my wealth for the future", value: "a", points: 3 },
      { text: "Taking calculated risks for higher returns", value: "b", points: 2 },
      { text: "Something I'm curious but nervous about", value: "c", points: 1 }
    ]
  },
  {
    id: "invest-2",
    text: "Do you know your financial risk profile?",
    options: [
      { text: "Yes, I've assessed it", value: "a", points: 3 },
      { text: "Not yet, but I want to learn", value: "b", points: 2 },
      { text: "I'm unsure what that is", value: "c", points: 1 }
    ]
  }
];