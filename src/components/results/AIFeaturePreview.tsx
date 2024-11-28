import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import type { Persona } from "@/types";

interface AIFeaturePreviewProps {
  persona: Persona;
  badgeColor: string;
}

export const AIFeaturePreview = ({ persona, badgeColor }: AIFeaturePreviewProps) => {
  const getPreviewContent = () => {
    switch (persona) {
      case "nest":
        return {
          title: "Imagine uma ferramenta que ajuda você a economizar sem esforço",
          description: "E se o Moedin pudesse tirar as dúvidas e simplificar o planejamento para o sucesso do seu bebê?"
        };
      case "debt":
        return {
          title: "E se você pudesse pagar suas dívidas mais rápido",
          description: "Deixe o Moedin guiá-lo(a) rumo a um novo começo!"
        };
      case "invest":
        return {
          title: "E se investir não fosse intimidador?",
          description: "Imagine uma solução inteligente, alimentada por IA, que ajuda você a começar pequeno, aprender enquanto cresce e alcançar seus sonhos financeiros. Isso é o Moedin!"
        };
    }
  };

  const content = getPreviewContent();

  return (
    <Card className="p-8 bg-white mb-8 text-center">
      <div className="max-w-2xl mx-auto">
        <Badge variant="outline" className={`${badgeColor} text-white p-2 mb-4 inline-flex`}>
          <Sparkles className="w-4 h-4" />
        </Badge>
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          {content.title}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {content.description}
        </p>
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-purple-300 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-pink-300 animate-pulse delay-100"></div>
          <div className="w-2 h-2 rounded-full bg-purple-300 animate-pulse delay-200"></div>
        </div>
      </div>
    </Card>
  );
};