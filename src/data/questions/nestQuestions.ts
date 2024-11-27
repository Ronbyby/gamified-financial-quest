import { Question } from "@/types";

export const nestQuestions: Question[] = [
  // Nível 1: Hábitos Diários
  {
    id: "nest-1-1",
    text: "Seu bebê precisa de fraldas, comida e brinquedos. Como você decide o que comprar?",
    level: 1,
    options: [
      { text: "Faço uma lista e sigo à risca", value: "a", points: 3 },
      { text: "Compro conforme a necessidade e acompanho depois", value: "b", points: 2 },
      { text: "Compro sem muito planejamento e espero que dê certo!", value: "c", points: 1 }
    ]
  },
  {
    id: "nest-1-2",
    text: "Qual é sua estratégia para gerenciar os gastos mensais?",
    level: 1,
    options: [
      { text: "Tenho um orçamento definido", value: "a", points: 3 },
      { text: "Tento, mas é difícil seguir", value: "b", points: 2 },
      { text: "Ainda não planejo, mas quero começar!", value: "c", points: 1 }
    ]
  },
  {
    id: "nest-1-3",
    text: "Você monitora pequenas despesas diárias, como lanches ou transporte?",
    level: 1,
    options: [
      { text: "Sim, anoto tudo", value: "a", points: 3 },
      { text: "Só quando o valor é alto", value: "b", points: 2 },
      { text: "Não, mas gostaria de começar", value: "c", points: 1 }
    ]
  },
  // Nível 2: Pronta para Emergências
  {
    id: "nest-2-1",
    text: "Se surgisse uma conta médica inesperada para seu filho, como você lidaria?",
    level: 2,
    options: [
      { text: "Usaria a poupança que já guardei", value: "a", points: 3 },
      { text: "Pagaria com cartão de crédito", value: "b", points: 2 },
      { text: "Não sei o que faria", value: "c", points: 1 }
    ]
  },
  {
    id: "nest-2-2",
    text: "Qual é sua estratégia para lidar com períodos de menor renda, como a licença-maternidade?",
    level: 2,
    options: [
      { text: "Conto com minhas economias", value: "a", points: 3 },
      { text: "Ajusto minhas despesas", value: "b", points: 2 },
      { text: "Não planejei para isso", value: "c", points: 1 }
    ]
  },
  {
    id: "nest-2-3",
    text: "Você já considerou um seguro ou plano de saúde para o seu filho?",
    level: 2,
    options: [
      { text: "Sim, já pesquisei", value: "a", points: 3 },
      { text: "Ainda não, mas está na minha mente", value: "b", points: 2 },
      { text: "Não sei por onde começar", value: "c", points: 1 }
    ]
  },
  // Nível 3: Planejadora do Futuro
  {
    id: "nest-3-1",
    text: "Você abriria uma conta de poupança separada para o seu filho?",
    level: 3,
    options: [
      { text: "Sim, já tenho ou planejo abrir", value: "a", points: 3 },
      { text: "Talvez no futuro", value: "b", points: 2 },
      { text: "Não, prefiro gerenciar tudo em uma conta só", value: "c", points: 1 }
    ]
  },
  {
    id: "nest-3-2",
    text: "Se pudesse ensinar um hábito financeiro ao seu filho cedo, qual seria?",
    level: 3,
    options: [
      { text: "A importância de economizar", value: "a", points: 3 },
      { text: "Como fazer um orçamento", value: "b", points: 2 },
      { text: "Como o dinheiro pode crescer", value: "c", points: 1 }
    ]
  },
  {
    id: "nest-3-3",
    text: "Você preferiria um produto financeiro que economizasse automaticamente para o futuro do seu filho?",
    level: 3,
    options: [
      { text: "Sim, adoraria isso", value: "a", points: 3 },
      { text: "Talvez, se fosse flexível", value: "b", points: 2 },
      { text: "Não, prefiro controle manual", value: "c", points: 1 }
    ]
  }
];