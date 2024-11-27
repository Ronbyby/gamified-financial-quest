import { Card } from "@/components/ui/card";
import type { Persona } from "@/types";

interface PersonaSelectionProps {
  onSelect: (persona: Persona) => void;
}

export const PersonaSelection = ({ onSelect }: PersonaSelectionProps) => {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text animate-fade-in">
          Begin Your Financial Adventure!
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Ready to level up your financial game? Choose your path and embark on an exciting journey to financial success! 🚀
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 px-4">
        <Card 
          className="group p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-nest-accent transform hover:-translate-y-2 animate-fade-in"
          onClick={() => onSelect("nest")}
          style={{ animationDelay: "0.3s" }}
        >
          <div className="space-y-6">
            <div className="h-40 bg-nest-primary rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1623104884-16c736554e5d?auto=format&fit=crop&w=800&q=80"
                alt="Mother playing with kids while managing finances"
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              Financial Nest Builder
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Create a secure and cozy financial future for your growing family. Perfect for long-term planners! 
            </p>
          </div>
        </Card>

        <Card 
          className="group p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-debt-accent transform hover:-translate-y-2 animate-fade-in"
          onClick={() => onSelect("debt")}
          style={{ animationDelay: "0.4s" }}
        >
          <div className="space-y-6">
            <div className="h-40 bg-debt-primary rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1494599948593-3dafe8338d71?auto=format&fit=crop&w=800&q=80"
                alt="Person working on financial planning"
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
              Debt Slayer Adventure
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Battle your debts head-on and emerge victorious! Perfect for those ready to break free from financial burdens.
            </p>
          </div>
        </Card>

        <Card 
          className="group p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-invest-accent transform hover:-translate-y-2 animate-fade-in"
          onClick={() => onSelect("invest")}
          style={{ animationDelay: "0.5s" }}
        >
          <div className="space-y-6">
            <div className="h-40 bg-invest-primary rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Modern investment and growth concept"
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
              Investor's Journey
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Master the art of growing wealth through smart investments. Perfect for aspiring investors!
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};