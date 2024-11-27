import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Persona, Answer } from "@/types";

interface ResultsProps {
  persona: Persona;
  answers: Answer[];
}

export const Results = ({ persona, answers }: ResultsProps) => {
  const getPersonaTitle = () => {
    switch (persona) {
      case "nest":
        return "Financial Nest Builder";
      case "debt":
        return "Debt Slayer";
      case "invest":
        return "Investment Explorer";
    }
  };

  const bgColor = {
    nest: "bg-nest-primary",
    debt: "bg-debt-primary",
    invest: "bg-invest-primary"
  }[persona];

  const accentColor = {
    nest: "text-nest-accent",
    debt: "text-debt-accent",
    invest: "text-invest-accent"
  }[persona];

  return (
    <div className="space-y-8 animate-fade-in">
      <Card className={`p-8 ${bgColor} border-none text-center`}>
        <div className="mb-6">
          <span className="text-6xl">🏆</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">
          Congratulations, <span className={accentColor}>{getPersonaTitle()}</span>!
        </h1>
        <p className="text-gray-600 mb-8">
          You've completed your financial assessment. Based on your answers, we've prepared some personalized insights for you.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-4 bg-white">
            <h3 className="font-semibold mb-2">Achievement Unlocked</h3>
            <p className="text-sm text-gray-600">Self-Awareness Master</p>
          </Card>
          <Card className="p-4 bg-white">
            <h3 className="font-semibold mb-2">Your Score</h3>
            <p className="text-sm text-gray-600">Financial Explorer Level 1</p>
          </Card>
          <Card className="p-4 bg-white">
            <h3 className="font-semibold mb-2">Next Steps</h3>
            <p className="text-sm text-gray-600">Create your action plan</p>
          </Card>
        </div>
      </Card>
    </div>
  );
};