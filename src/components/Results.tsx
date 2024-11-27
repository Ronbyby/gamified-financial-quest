import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { Persona, Answer } from "@/types";

interface ResultsProps {
  persona: Persona;
  answers: Answer[];
}

export const Results = ({ persona, answers }: ResultsProps) => {
  const [email, setEmail] = useState("");

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

  const getActionPlan = () => {
    switch (persona) {
      case "nest":
        return [
          "Start with an emergency fund goal of $1,000",
          "Track your daily expenses for 30 days",
          "Set up automatic savings of 10% of your income",
          "Review and optimize your monthly subscriptions"
        ];
      case "debt":
        return [
          "List all debts with their interest rates",
          "Set up minimum payments for all debts",
          "Apply the snowball method to smallest debt",
          "Negotiate with creditors for better rates"
        ];
      case "invest":
        return [
          "Open a retirement account if you haven't",
          "Research low-cost index funds",
          "Start with small, regular investments",
          "Learn about diversification strategies"
        ];
    }
  };

  const handleWaitlistSignup = async () => {
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          persona,
          notifyEmail: 'ronby1@gmail.com'
        }),
      });

      if (!response.ok) throw new Error('Failed to join waitlist');
      
      toast.success("Thanks for joining our waitlist! We'll be in touch soon.");
      setEmail("");
    } catch (error) {
      toast.error("Failed to join the waitlist. Please try again.");
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

  const badgeColor = {
    nest: "bg-nest-accent",
    debt: "bg-debt-accent",
    invest: "bg-invest-accent"
  }[persona];

  return (
    <div className="space-y-8 animate-fade-in">
      <Card className={`p-8 ${bgColor} border-none text-center`}>
        <div className="mb-6">
          <Badge className={`${badgeColor} p-3 text-white`}>
            <Trophy className="w-6 h-6" />
          </Badge>
        </div>
        <h1 className="text-3xl font-bold mb-4">
          Congratulations, <span className={accentColor}>{getPersonaTitle()}</span>!
        </h1>
        <p className="text-gray-600 mb-8">
          You've completed your financial assessment. Based on your answers, we've prepared a personalized action plan for you.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="p-4 bg-white">
            <div className="flex flex-col items-center">
              <Badge className={`${badgeColor} p-2 mb-2`}>
                <Trophy className="w-4 h-4 text-white" />
              </Badge>
              <h3 className="font-semibold mb-2">Achievement Unlocked</h3>
              <p className="text-sm text-gray-600">Self-Awareness Master</p>
            </div>
          </Card>
          <Card className="p-4 bg-white">
            <div className="flex flex-col items-center">
              <Badge className={`${badgeColor} p-2 mb-2`}>
                <Star className="w-4 h-4 text-white" />
              </Badge>
              <h3 className="font-semibold mb-2">Your Score</h3>
              <p className="text-sm text-gray-600">Financial Explorer Level 1</p>
            </div>
          </Card>
          <Card className="p-4 bg-white">
            <div className="flex flex-col items-center">
              <Badge className={`${badgeColor} p-2 mb-2`}>
                <Clock className="w-4 h-4 text-white" />
              </Badge>
              <h3 className="font-semibold mb-2">Next Steps</h3>
              <p className="text-sm text-gray-600">Follow Your Action Plan</p>
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-white mb-8">
          <h2 className="text-xl font-bold mb-4">Your Personal Action Plan</h2>
          <ul className="space-y-3">
            {getActionPlan().map((step, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className={`${badgeColor} text-white w-6 h-6 rounded-full flex items-center justify-center text-sm`}>
                  {index + 1}
                </span>
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 bg-white">
          <div className="flex flex-col items-center">
            <img src="/moedi-logo.png" alt="Moedi" className="w-24 h-24 mb-4" />
            <h2 className="text-xl font-bold mb-2">Coming Soon</h2>
            <p className="text-gray-600 mb-4">
              Join the waitlist for Moedi, your AI-powered financial companion that will help simplify your journey.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="max-w-xs"
              />
              <Button onClick={handleWaitlistSignup}>
                Join Waitlist
              </Button>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
};