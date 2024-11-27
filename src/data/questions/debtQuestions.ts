import { Question } from "@/types";

export const debtQuestions: Question[] = [
  // Nível 1: Entendendo Suas Dívidas
  {
    id: "debt-1-1",
    text: "Como você se sente em relação à sua dívida?",
    level: 1,
    options: [
      { text: "Confiante de que conseguirei administrá-la", value: "a", points: 3 },
      { text: "Às vezes, sinto-me sobrecarregado(a)", value: "b", points: 2 },
      { text: "Sinto-me preso(a) e preciso de ajuda", value: "c", points: 1 }
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
    text: "Você sabe o valor total da sua dívida?",
    level: 1,
    options: [
      { text: "Sim, acompanho regularmente", value: "a", points: 3 },
      { text: "Tenho uma ideia aproximada", value: "b", points: 2 },
      { text: "Não, evito pensar nisso", value: "c", points: 1 }
    ]
  },
  // Nível 2: Construindo Seu Arsenal
  {
    id: "debt-2-1",
    text: "O que motiva você a quitar suas dívidas?",
    level: 2,
    options: [
      { text: "Alívio do estresse financeiro", value: "a", points: 3 },
      { text: "Alcançar objetivos futuros, como viajar ou comprar uma casa", value: "b", points: 2 },
      { text: "Pressão de credores", value: "c", points: 1 }
    ]
  },
  {
    id: "debt-2-2",
    text: "Já tentou negociar melhores condições com seus credores?",
    level: 2,
    options: [
      { text: "Sim, e ajudou bastante", value: "a", points: 3 },
      { text: "Não, mas estou aberto(a) a isso", value: "b", points: 2 },
      { text: "Não sabia que era possível", value: "c", points: 1 }
    ]
  },
  {
    id: "debt-2-3",
    text: "Qual estratégia você prefere para pagar dívidas?",
    level: 2,
    options: [
      { text: "Focar nas menores primeiro", value: "a", points: 2 },
      { text: "Pagar as de maior juros", value: "b", points: 3 },
      { text: "Dividir igualmente entre todas", value: "c", points: 1 }
    ]
  },
  // Nível 3: Metas Futuras
  {
    id: "debt-3-1",
    text: "Depois de quitar suas dívidas, o que você gostaria de fazer?",
    level: 3,
    options: [
      { text: "Investir ou economizar imediatamente", value: "a", points: 3 },
      { text: "Planejar uma comemoração especial", value: "b", points: 2 },
      { text: "Ainda não pensei nisso", value: "c", points: 1 }
    ]
  },
  {
    id: "debt-3-2",
    text: "O que ajudaria você a manter a consistência nos pagamentos?",
    level: 3,
    options: [
      { text: "Um rastreador visual de progresso", value: "a", points: 3 },
      { text: "Pagamentos automáticos", value: "b", points: 2 },
      { text: "Lembretes mensais", value: "c", points: 1 }
    ]
  },
  {
    id: "debt-3-3",
    text: "Já considerou combinar o pagamento da dívida com o hábito de poupar um pouco?",
    level: 3,
    options: [
      { text: "Sim, quero tentar isso", value: "a", points: 3 },
      { text: "Não, prefiro focar totalmente na dívida primeiro", value: "b", points: 2 },
      { text: "Não sei como equilibrar os dois", value: "c", points: 1 }
    ]
  }
];