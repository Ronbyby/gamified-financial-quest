import { useState } from "react";
import { Card } from "@/components/ui/card";
import { PersonaSelection } from "@/components/PersonaSelection";
import { Quiz } from "@/components/Quiz";
import { Results } from "@/components/Results";
import type { Persona, Answer } from "@/types";

const Index = () => {
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handlePersonaSelect = (persona: Persona) => {
    setSelectedPersona(persona);
  };

  const handleQuizComplete = (finalAnswers: Answer[]) => {
    setAnswers(finalAnswers);
    setIsComplete(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F1F0FB] via-[#F6F5FF] to-[#FAFAFE] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {!selectedPersona && (
          <PersonaSelection onSelect={handlePersonaSelect} />
        )}
        {selectedPersona && !isComplete && (
          <Quiz 
            persona={selectedPersona} 
            onComplete={handleQuizComplete}
          />
        )}
        {isComplete && (
          <Results 
            persona={selectedPersona} 
            answers={answers}
          />
        )}
      </div>
    </div>
  );
};

export default Index;