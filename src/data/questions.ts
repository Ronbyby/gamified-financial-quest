import { Question } from "@/types";

export const nestQuestions: Question[] = [
  // Level 1: Daily Habits
  {
    id: "nest-1-1",
    text: "What's your biggest financial challenge as a new mom?",
    level: 1,
    options: [
      { text: "Managing unexpected expenses", value: "a", points: 3 },
      { text: "Sticking to a budget", value: "b", points: 2 },
      { text: "Saving consistently", value: "c", points: 1 }
    ]
  },
  {
    id: "nest-1-2",
    text: "Do you keep track of small daily expenses like snacks or transportation?",
    level: 1,
    options: [
      { text: "Yes, I note everything", value: "a", points: 3 },
      { text: "Only if it feels like a big amount", value: "b", points: 2 },
      { text: "Not at all", value: "c", points: 1 }
    ]
  },
  {
    id: "nest-1-3",
    text: "When it comes to shopping for your baby, how often do you compare prices?",
    level: 1,
    options: [
      { text: "Always, I'm a savvy shopper!", value: "a", points: 3 },
      { text: "Sometimes, when I remember", value: "b", points: 2 },
      { text: "Rarely, I just go with what's convenient", value: "c", points: 1 }
    ]
  },
  // Level 2: Emergency Ready
  {
    id: "nest-2-1",
    text: "If you had an unexpected medical bill for your child, how would you handle it?",
    level: 2,
    options: [
      { text: "Use savings I've set aside", value: "a", points: 3 },
      { text: "Pay with a credit card", value: "b", points: 2 },
      { text: "I'm not sure", value: "c", points: 1 }
    ]
  },
  {
    id: "nest-2-2",
    text: "What's your strategy for managing income gaps, like during maternity leave?",
    level: 2,
    options: [
      { text: "Rely on savings", value: "a", points: 3 },
      { text: "Adjust my expenses", value: "b", points: 2 },
      { text: "I didn't plan for this", value: "c", points: 1 }
    ]
  },
  {
    id: "nest-2-3",
    text: "Have you considered insurance or health plans for your child?",
    level: 2,
    options: [
      { text: "Yes, I've looked into it", value: "a", points: 3 },
      { text: "Not yet, but it's on my mind", value: "b", points: 2 },
      { text: "I don't know where to start", value: "c", points: 1 }
    ]
  },
  // Level 3: Future Planner
  {
    id: "nest-3-1",
    text: "Would you consider opening a separate savings account for your child?",
    level: 3,
    options: [
      { text: "Yes, I already have one or plan to", value: "a", points: 3 },
      { text: "Maybe in the future", value: "b", points: 2 },
      { text: "No, I'll manage everything in one account", value: "c", points: 1 }
    ]
  },
  {
    id: "nest-3-2",
    text: "If you could teach your child one money habit early, what would it be?",
    level: 3,
    options: [
      { text: "The importance of saving", value: "a", points: 3 },
      { text: "Budgeting their allowance", value: "b", points: 2 },
      { text: "Understanding how money grows", value: "c", points: 1 }
    ]
  },
  {
    id: "nest-3-3",
    text: "Would you prefer a financial product that automatically saves for your child's future?",
    level: 3,
    options: [
      { text: "Yes, I'd love that", value: "a", points: 3 },
      { text: "Maybe, if it's flexible", value: "b", points: 2 },
      { text: "No, I prefer manual control", value: "c", points: 1 }
    ]
  }
];

export const debtQuestions: Question[] = [
  // Level 1: Understanding Your Debt
  {
    id: "debt-1-1",
    text: "How do you feel about your debt situation?",
    level: 1,
    options: [
      { text: "I'm confident I'll manage it", value: "a", points: 3 },
      { text: "It feels overwhelming at times", value: "b", points: 2 },
      { text: "I feel stuck and need help", value: "c", points: 1 }
    ]
  },
  {
    id: "debt-1-2",
    text: "What's your primary source of debt?",
    level: 1,
    options: [
      { text: "Credit cards", value: "a", points: 2 },
      { text: "Personal or payday loans", value: "b", points: 1 },
      { text: "Overdue bills", value: "c", points: 3 }
    ]
  },
  {
    id: "debt-1-3",
    text: "Do you know how much total debt you owe?",
    level: 1,
    options: [
      { text: "Yes, I track it", value: "a", points: 3 },
      { text: "I have a rough idea", value: "b", points: 2 },
      { text: "No, I avoid thinking about it", value: "c", points: 1 }
    ]
  },
  // Level 2: Building Your Arsenal
  {
    id: "debt-2-1",
    text: "What motivates you to pay off your debt?",
    level: 2,
    options: [
      { text: "Freedom from financial stress", value: "a", points: 3 },
      { text: "Achieving future goals like travel or buying a home", value: "b", points: 2 },
      { text: "Pressure from creditors", value: "c", points: 1 }
    ]
  },
  {
    id: "debt-2-2",
    text: "Have you tried negotiating with creditors for better terms?",
    level: 2,
    options: [
      { text: "Yes, and it helped", value: "a", points: 3 },
      { text: "No, but I'm open to it", value: "b", points: 2 },
      { text: "I didn't know I could", value: "c", points: 1 }
    ]
  },
  {
    id: "debt-2-3",
    text: "Which strategy sounds better for you?",
    level: 2,
    options: [
      { text: "Focusing on the smallest debts first", value: "a", points: 2 },
      { text: "Targeting debts with the highest interest", value: "b", points: 3 },
      { text: "Paying evenly across all debts", value: "c", points: 1 }
    ]
  },
  // Level 3: Future Goals
  {
    id: "debt-3-1",
    text: "Once you're debt-free, how will you reward yourself?",
    level: 3,
    options: [
      { text: "Save or invest immediately", value: "a", points: 3 },
      { text: "Plan a special celebration", value: "b", points: 2 },
      { text: "I haven't thought about it", value: "c", points: 1 }
    ]
  },
  {
    id: "debt-3-2",
    text: "What would help you stay consistent with repayments?",
    level: 3,
    options: [
      { text: "A visual tracker of my progress", value: "a", points: 3 },
      { text: "Automatic payments", value: "b", points: 2 },
      { text: "Monthly reminders", value: "c", points: 1 }
    ]
  },
  {
    id: "debt-3-3",
    text: "Have you considered combining debt repayment with starting a small savings habit?",
    level: 3,
    options: [
      { text: "Yes, I want to try that", value: "a", points: 3 },
      { text: "No, I want to focus fully on debt first", value: "b", points: 2 },
      { text: "I don't know how to balance both", value: "c", points: 1 }
    ]
  }
];

export const investQuestions: Question[] = [
  // Level 1: Beginner's Camp
  {
    id: "invest-1-1",
    text: "What does investing mean to you?",
    level: 1,
    options: [
      { text: "Growing my wealth for the future", value: "a", points: 3 },
      { text: "Taking calculated risks for higher returns", value: "b", points: 2 },
      { text: "Something I'm curious but nervous about", value: "c", points: 1 }
    ]
  },
  {
    id: "invest-1-2",
    text: "Do you know your financial risk profile?",
    level: 1,
    options: [
      { text: "Yes, I've assessed it", value: "a", points: 3 },
      { text: "Not yet, but I want to learn", value: "b", points: 2 },
      { text: "I'm unsure what that is", value: "c", points: 1 }
    ]
  },
  {
    id: "invest-1-3",
    text: "How much of your income would you be comfortable investing monthly?",
    level: 1,
    options: [
      { text: "Less than 10%", value: "a", points: 1 },
      { text: "10–20%", value: "b", points: 2 },
      { text: "More than 20%", value: "c", points: 3 }
    ]
  },
  // Level 2: Picking Your Path
  {
    id: "invest-2-1",
    text: "What type of investor are you?",
    level: 2,
    options: [
      { text: "I prefer safe, steady returns", value: "a", points: 1 },
      { text: "I like a mix of safety and growth", value: "b", points: 2 },
      { text: "I'm ready for high-risk, high-reward opportunities", value: "c", points: 3 }
    ]
  },
  {
    id: "invest-2-2",
    text: "What's your first investment choice?",
    level: 2,
    options: [
      { text: "Tesouro Direto (safe bonds)", value: "a", points: 1 },
      { text: "Real estate funds (FIIs)", value: "b", points: 2 },
      { text: "Stocks or mutual funds", value: "c", points: 3 }
    ]
  },
  {
    id: "invest-2-3",
    text: "How long do you plan to keep your investments?",
    level: 2,
    options: [
      { text: "Less than 5 years", value: "a", points: 1 },
      { text: "5–10 years", value: "b", points: 2 },
      { text: "More than 10 years", value: "c", points: 3 }
    ]
  },
  // Level 3: Long-Term Vision
  {
    id: "invest-3-1",
    text: "If your investment doubled in 10 years, what would you do with the returns?",
    level: 3,
    options: [
      { text: "Reinvest for more growth", value: "a", points: 3 },
      { text: "Use it for a big purchase or goal", value: "b", points: 2 },
      { text: "Save it for retirement", value: "c", points: 1 }
    ]
  },
  {
    id: "invest-3-2",
    text: "Do you have financial goals linked to specific timelines?",
    level: 3,
    options: [
      { text: "Yes, and I plan my investments accordingly", value: "a", points: 3 },
      { text: "I have goals but no specific timelines", value: "b", points: 2 },
      { text: "I'm still figuring that out", value: "c", points: 1 }
    ]
  },
  {
    id: "invest-3-3",
    text: "Which of these best describes your ideal investment journey?",
    level: 3,
    options: [
      { text: "Stable and predictable", value: "a", points: 1 },
      { text: "Balanced with occasional excitement", value: "b", points: 2 },
      { text: "Dynamic and growth-focused", value: "c", points: 3 }
    ]
  }
];