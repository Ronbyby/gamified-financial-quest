import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Persona } from "@/types";
import confetti from "canvas-confetti";
import { useEffect } from "react";

interface LevelTransitionProps {
  level: number;
  persona: Persona;
  onContinue: () => void;
}

export const LevelTransition = ({ level, persona, onContinue }: LevelTransitionProps) => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  const getLevelTitle = () => {
    switch (persona) {
      case "nest":
        return level === 1 ? "Emergency Ready" : "Future Planner";
      case "debt":
        return level === 1 ? "Building Your Arsenal" : "Future Goals";
      case "invest":
        return level === 1 ? "Picking Your Path" : "Long-Term Vision";
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
    <div className="animate-fade-in">
      <Card className={`p-8 ${bgColor} border-none text-center`}>
        <div className="mb-6">
          <span className="text-6xl">🎉</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">
          Level {level} Complete!
        </h1>
        <p className="text-xl mb-6">
          Get ready for <span className={accentColor}>{getLevelTitle()}</span>
        </p>
        <Button 
          onClick={onContinue}
          className="animate-pulse hover:animate-none"
        >
          Continue Your Journey
        </Button>
      </Card>
    </div>
  );
};