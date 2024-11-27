import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Clock, Home } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { Persona, Answer } from "@/types";
import { addWaitlistEntry } from "@/api/waitlist";
import { useQueryClient } from "@tanstack/react-query";

interface ResultsProps {
  persona: Persona;
  answers: Answer[];
  onReset: () => void;
}

export const Results = ({ persona, answers, onReset }: ResultsProps) => {
  const [email, setEmail] = useState("");
  const queryClient = useQueryClient();

  const getPersonaTitle = () => {
    switch (persona) {
      case "nest":
        return "Construtor do Ninho Financeiro";
      case "debt":
        return "Caçador de Dívidas";
      case "invest":
        return "Explorador de Investimentos";
    }
  };

  const getActionPlan = () => {
    switch (persona) {
      case "nest":
        return [
          "Comece com uma meta de fundo de emergência de R$ 5.000",
          "Acompanhe seus gastos diários por 30 dias",
          "Configure poupança automática de 10% da sua renda",
          "Revise e otimize suas assinaturas mensais"
        ];
      case "debt":
        return [
          "Liste todas as dívidas com suas taxas de juros",
          "Configure pagamentos mínimos para todas as dívidas",
          "Aplique o método bola de neve na menor dívida",
          "Negocie com credores por melhores taxas"
        ];
      case "invest":
        return [
          "Abra uma conta de aposentadoria se ainda não tiver",
          "Pesquise sobre fundos de índice de baixo custo",
          "Comece com pequenos investimentos regulares",
          "Aprenda sobre estratégias de diversificação"
        ];
    }
  };

  const handleWaitlistSignup = async () => {
    if (!email) {
      toast.error("Por favor, insira seu endereço de e-mail");
      return;
    }

    try {
      await addWaitlistEntry({ 
        email,
        persona,
        notifyEmail: 'ronby1@gmail.com'
      });
      
      await queryClient.invalidateQueries({ queryKey: ['waitlist'] });
      
      toast.success("Obrigado por se juntar à nossa lista de espera! Entraremos em contato em breve.");
      setEmail("");
    } catch (error) {
      toast.error("Falha ao entrar na lista de espera. Por favor, tente novamente.");
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
      <div className="flex justify-end">
        <Button 
          variant="outline" 
          onClick={onReset}
          className="flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          Início
        </Button>
      </div>
      <Card className={`p-8 ${bgColor} border-none text-center`}>
        <div className="mb-6">
          <Badge className={`${badgeColor} p-3 text-white`}>
            <Trophy className="w-6 h-6" />
          </Badge>
        </div>
        <h1 className="text-3xl font-bold mb-4">
          Parabéns, <span className={accentColor}>{getPersonaTitle()}</span>!
        </h1>
        <p className="text-gray-600 mb-8">
          Você completou sua avaliação financeira. Com base em suas respostas, preparamos um plano de ação personalizado para você.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="p-4 bg-white">
            <div className="flex flex-col items-center">
              <Badge variant="outline" className={`${badgeColor} text-white p-2 mb-2`}>
                <Trophy className="w-4 h-4" />
              </Badge>
              <h3 className="font-semibold mb-2">Conquista Desbloqueada</h3>
              <p className="text-sm text-gray-600">Mestre do Autoconhecimento</p>
            </div>
          </Card>
          <Card className="p-4 bg-white">
            <div className="flex flex-col items-center">
              <Badge variant="outline" className={`${badgeColor} text-white p-2 mb-2`}>
                <Star className="w-4 h-4" />
              </Badge>
              <h3 className="font-semibold mb-2">Sua Pontuação</h3>
              <p className="text-sm text-gray-600">Explorador Financeiro Nível 1</p>
            </div>
          </Card>
          <Card className="p-4 bg-white">
            <div className="flex flex-col items-center">
              <Badge variant="outline" className={`${badgeColor} text-white p-2 mb-2`}>
                <Clock className="w-4 h-4" />
              </Badge>
              <h3 className="font-semibold mb-2">Próximos Passos</h3>
              <p className="text-sm text-gray-600">Siga Seu Plano de Ação</p>
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-white mb-8">
          <h2 className="text-xl font-bold mb-4">Seu Plano de Ação Pessoal</h2>
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
            <img 
              src="/lovable-uploads/24bb8e9f-2b26-4032-8407-918d5cbe615a.png"
              alt="Logo Moedin com um personagem de moeda sorridente usando óculos" 
              className="w-full max-w-[200px] mb-4 object-contain rounded-lg"
            />
            <h2 className="text-xl font-bold mb-2">Em Breve</h2>
            <p className="text-gray-600 mb-4">
              Entre na lista de espera para seu companheiro financeiro com IA que ajudará a simplificar sua jornada.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="max-w-xs"
              />
              <Button onClick={handleWaitlistSignup}>
                Entrar na Lista
              </Button>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
};