import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Persona } from "@/types";

interface PersonaSelectionProps {
  onSelect: (persona: Persona) => void;
}

export const PersonaSelection = ({ onSelect }: PersonaSelectionProps) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Choose Your Financial Journey</h1>
        <p className="text-gray-600">Select the path that best matches your current situation</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card 
          className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-nest-accent"
          onClick={() => onSelect("nest")}
        >
          <div className="space-y-4">
            <div className="h-32 bg-nest-primary rounded-lg flex items-center justify-center">
              <span className="text-4xl">🏠</span>
            </div>
            <h2 className="text-xl font-semibold">Financial Nest Builder</h2>
            <p className="text-gray-600">Create a secure financial future for your growing family</p>
          </div>
        </Card>

        <Card 
          className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-debt-accent"
          onClick={() => onSelect("debt")}
        >
          <div className="space-y-4">
            <div className="h-32 bg-debt-primary rounded-lg flex items-center justify-center">
              <span className="text-4xl">⚔️</span>
            </div>
            <h2 className="text-xl font-semibold">Debt Slayer Adventure</h2>
            <p className="text-gray-600">Conquer your debts and achieve financial freedom</p>
          </div>
        </Card>

        <Card 
          className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-invest-accent"
          onClick={() => onSelect("invest")}
        >
          <div className="space-y-4">
            <div className="h-32 bg-invest-primary rounded-lg flex items-center justify-center">
              <span className="text-4xl">📈</span>
            </div>
            <h2 className="text-xl font-semibold">Investor's Journey</h2>
            <p className="text-gray-600">Start your path to growing wealth through investments</p>
          </div>
        </Card>
      </div>
    </div>
  );
};