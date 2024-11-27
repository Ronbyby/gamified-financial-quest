import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { nestQuestions, debtQuestions, investQuestions } from "@/data/questions";
import { LevelTransition } from "@/components/LevelTransition";
import type { Persona, Answer } from "@/types";
import { toast } from "sonner";

// In-memory storage for quiz results (replace with database in production)
const quizResults: { persona: string; answers: Answer[]; timestamp: string }[] = [];

interface QuizProps {
  persona: Persona;
  onComplete: (answers: Answer[]) => void;
}

export const Quiz = ({ persona, onComplete }: QuizProps) => {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showLevelTransition, setShowLevelTransition] = useState(false);

  const allQuestions = {
    nest: nestQuestions,
    debt: debtQuestions,
    invest: investQuestions
  }[persona];

  const currentLevelQuestions = allQuestions.filter(q => q.level === currentLevel);
  const currentQuestion = currentLevelQuestions[currentQuestionIndex];

  const encouragements = [
    "You're doing great! Keep going!",
    "That's the spirit! Every answer brings you closer to your goals.",
    "Excellent choice! You're building strong financial habits.",
    "Keep up the momentum! You're making great progress."
  ];

  const handleAnswer = (selectedOption: string) => {
    const newAnswers = [...answers, {
      questionId: currentQuestion.id,
      selectedOption
    }];
    setAnswers(newAnswers);

    if (currentQuestionIndex < currentLevelQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      if (Math.random() > 0.5) { // Show encouragement randomly
        toast.success(encouragements[Math.floor(Math.random() * encouragements.length)]);
      }
    } else if (currentLevel < 3) {
      setShowLevelTransition(true);
    } else {
      // Store quiz results when completed
      const result = {
        persona,
        answers: newAnswers,
        timestamp: new Date().toISOString()
      };
      quizResults.push(result);
      onComplete(newAnswers);
    }
  };

  const handleContinueToNextLevel = () => {
    setCurrentLevel(prev => prev + 1);
    setCurrentQuestionIndex(0);
    setShowLevelTransition(false);
  };

  const getLevelTitle = () => {
    switch (persona) {
      case "nest":
        return currentLevel === 1 ? "Daily Habits" : currentLevel === 2 ? "Emergency Ready" : "Future Planner";
      case "debt":
        return currentLevel === 1 ? "Understanding Your Debt" : currentLevel === 2 ? "Building Your Arsenal" : "Future Goals";
      case "invest":
        return currentLevel === 1 ? "Beginner's Camp" : currentLevel === 2 ? "Picking Your Path" : "Long-Term Vision";
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

  if (showLevelTransition) {
    return (
      <LevelTransition
        level={currentLevel}
        persona={persona}
        onContinue={handleContinueToNextLevel}
      />
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Level {currentLevel}: {getLevelTitle()}</h2>
        <p className="text-gray-600">Question {currentQuestionIndex + 1} of {currentLevelQuestions.length}</p>
      </div>

      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div 
          className={`h-full ${accentColor} rounded-full transition-all duration-500`}
          style={{ width: `${((currentQuestionIndex + 1) / currentLevelQuestions.length) * 100}%` }}
        />
      </div>

      <Card className={`p-8 ${bgColor} border-none`}>
        <h2 className="text-2xl font-semibold mb-6">{currentQuestion.text}</h2>
        {currentQuestion.image && (
          <img 
            src={currentQuestion.image} 
            alt="Question illustration" 
            className="w-full max-w-md mx-auto mb-6 rounded-lg shadow-lg"
          />
        )}
        <div className="space-y-4">
          {currentQuestion.options.map((option) => (
            <Button
              key={option.value}
              variant="outline"
              className="w-full text-left justify-start h-auto py-4 hover:bg-white/50"
              onClick={() => handleAnswer(option.value)}
            >
              {option.text}
              {option.image && (
                <img 
                  src={option.image} 
                  alt="Option illustration" 
                  className="w-16 h-16 ml-4 rounded"
                />
              )}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};
