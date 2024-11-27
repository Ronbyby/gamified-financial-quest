import { Question } from "@/types";

export const debtQuestions: Question[] = [
  // Level 1: Entendendo Suas Dívidas
  {
    id: "debt-1-1",
    text: "Como você se sente em relação à sua situação de dívidas?",
    level: 1,
    options: [
      { text: "Confio que vou conseguir gerenciar", value: "a", points: 3 },
      { text: "Me sinto sobrecarregado às vezes", value: "b", points: 2 },
      { text: "Me sinto preso e preciso de ajuda", value: "c", points: 1 }
    ]
  },
  {
    id: "debt-1-2",
    text: "Qual é sua principal fonte de dívida?",
    level: 1,
    options: [
      { text: "Cartões de crédito", value: "a", points: 2 },
      { text: "Empréstimos pessoais", value: "b", points: 1 },
      { text: "Contas atrasadas", value: "c", points: 3 }
    ]
  },
  {
    id: "debt-1-3",
    text: "Você sabe o valor total das suas dívidas?",
    level: 1,
    options: [
      { text: "Sim, acompanho tudo", value: "a", points: 3 },
      { text: "Tenho uma ideia aproximada", value: "b", points: 2 },
      { text: "Não, evito pensar nisso", value: "c", points: 1 }
    ]
  },
  // Level 2: Construindo Seu Arsenal
  {
    id: "debt-2-1",
    text: "O que te motiva a pagar suas dívidas?",
    level: 2,
    options: [
      { text: "Liberdade do estresse financeiro", value: "a", points: 3 },
      { text: "Alcançar objetivos como viagens ou casa própria", value: "b", points: 2 },
      { text: "Pressão dos credores", value: "c", points: 1 }
    ]
  },
  {
    id: "debt-2-2",
    text: "Você já tentou negociar com credores por melhores condições?",
    level: 2,
    options: [
      { text: "Sim, e ajudou", value: "a", points: 3 },
      { text: "Não, mas estou aberto a isso", value: "b", points: 2 },
      { text: "Não sabia que podia", value: "c", points: 1 }
    ]
  },
  {
    id: "debt-2-3",
    text: "Qual estratégia parece melhor para você?",
    level: 2,
    options: [
      { text: "Focar nas menores dívidas primeiro", value: "a", points: 2 },
      { text: "Mirar nas dívidas com juros mais altos", value: "b", points: 3 },
      { text: "Pagar igualmente todas as dívidas", value: "c", points: 1 }
    ]
  },
  // Level 3: Objetivos Futuros
  {
    id: "debt-3-1",
    text: "Quando estiver livre das dívidas, como vai se recompensar?",
    level: 3,
    options: [
      { text: "Começar a poupar ou investir imediatamente", value: "a", points: 3 },
      { text: "Planejar uma celebração especial", value: "b", points: 2 },
      { text: "Ainda não pensei nisso", value: "c", points: 1 }
    ]
  },
  {
    id: "debt-3-2",
    text: "O que te ajudaria a manter os pagamentos em dia?",
    level: 3,
    options: [
      { text: "Um acompanhamento visual do progresso", value: "a", points: 3 },
      { text: "Pagamentos automáticos", value: "b", points: 2 },
      { text: "Lembretes mensais", value: "c", points: 1 }
    ]
  },
  {
    id: "debt-3-3",
    text: "Você já considerou combinar o pagamento das dívidas com o início de uma pequena poupança?",
    level: 3,
    options: [
      { text: "Sim, quero tentar isso", value: "a", points: 3 },
      { text: "Não, quero focar só nas dívidas primeiro", value: "b", points: 2 },
      { text: "Não sei como equilibrar os dois", value: "c", points: 1 }
    ]
  }
];