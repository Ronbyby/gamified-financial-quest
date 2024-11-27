import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { nestQuestions, debtQuestions, investQuestions } from "@/data/questions";
import type { Persona, Answer } from "@/types";

interface QuizProps {
  persona: Persona;
  onComplete: (answers: Answer[]) => void;
}

export const Quiz = ({ persona, onComplete }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const questions = {
    nest: nestQuestions,
    debt: debtQuestions,
    invest: investQuestions
  }[persona];

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (selectedOption: string) => {
    const newAnswers = [...answers, {
      questionId: currentQuestion.id,
      selectedOption
    }];
    setAnswers(newAnswers);

    if (currentQuestionIndex === questions.length - 1) {
      onComplete(newAnswers);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const bgColor = {
    nest: "bg-nest-primary",
    debt: "bg-debt-primary",
    invest: "bg-invest-primary"
  }[persona];

  const accentColor = {
    nest: "bg-nest-accent",
    debt: "bg-debt-accent",
    invest: "bg-invest-accent"
  }[persona];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div 
          className={`h-full ${accentColor} rounded-full transition-all duration-500`}
          style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      <Card className={`p-8 ${bgColor} border-none`}>
        <h2 className="text-2xl font-semibold mb-6">{currentQuestion.text}</h2>
        <div className="space-y-4">
          {currentQuestion.options.map((option) => (
            <Button
              key={option.value}
              variant="outline"
              className="w-full text-left justify-start h-auto py-4 hover:bg-white/50"
              onClick={() => handleAnswer(option.value)}
            >
              {option.text}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};