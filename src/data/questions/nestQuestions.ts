import { Question } from "@/types";

export const nestQuestions: Question[] = [
  // Level 1: Hábitos Diários
  {
    id: "nest-1-1",
    text: "Qual é seu maior desafio financeiro como mãe?",
    level: 1,
    options: [
      { text: "Gerenciar despesas inesperadas", value: "a", points: 3 },
      { text: "Manter um orçamento", value: "b", points: 2 },
      { text: "Economizar consistentemente", value: "c", points: 1 }
    ]
  },
  {
    id: "nest-1-2",
    text: "Você acompanha pequenas despesas diárias como lanches ou transporte?",
    level: 1,
    options: [
      { text: "Sim, anoto tudo", value: "a", points: 3 },
      { text: "Só se for um valor significativo", value: "b", points: 2 },
      { text: "Não acompanho", value: "c", points: 1 }
    ]
  },
  {
    id: "nest-1-3",
    text: "Quando compra itens para o bebê, com que frequência você compara preços?",
    level: 1,
    options: [
      { text: "Sempre, sou uma compradora esperta!", value: "a", points: 3 },
      { text: "Às vezes, quando lembro", value: "b", points: 2 },
      { text: "Raramente, vou pelo que é mais conveniente", value: "c", points: 1 }
    ]
  },
  // Level 2: Preparação para Emergências
  {
    id: "nest-2-1",
    text: "Se surgisse uma conta médica inesperada para seu filho, como você lidaria?",
    level: 2,
    options: [
      { text: "Usaria minhas economias", value: "a", points: 3 },
      { text: "Pagaria com cartão de crédito", value: "b", points: 2 },
      { text: "Não tenho certeza", value: "c", points: 1 }
    ]
  },
  {
    id: "nest-2-2",
    text: "Qual sua estratégia para lidar com períodos sem renda, como licença maternidade?",
    level: 2,
    options: [
      { text: "Confiar nas economias", value: "a", points: 3 },
      { text: "Ajustar minhas despesas", value: "b", points: 2 },
      { text: "Não planejei isso", value: "c", points: 1 }
    ]
  },
  {
    id: "nest-2-3",
    text: "Você já considerou planos de saúde ou seguros para seu filho?",
    level: 2,
    options: [
      { text: "Sim, já pesquisei sobre isso", value: "a", points: 3 },
      { text: "Ainda não, mas está nos meus planos", value: "b", points: 2 },
      { text: "Não sei por onde começar", value: "c", points: 1 }
    ]
  },
  // Level 3: Planejamento Futuro
  {
    id: "nest-3-1",
    text: "Você consideraria abrir uma conta poupança separada para seu filho?",
    level: 3,
    options: [
      { text: "Sim, já tenho uma ou planejo ter", value: "a", points: 3 },
      { text: "Talvez no futuro", value: "b", points: 2 },
      { text: "Não, vou gerenciar tudo em uma conta", value: "c", points: 1 }
    ]
  },
  {
    id: "nest-3-2",
    text: "Se pudesse ensinar um hábito financeiro cedo para seu filho, qual seria?",
    level: 3,
    options: [
      { text: "A importância de poupar", value: "a", points: 3 },
      { text: "Controlar a mesada", value: "b", points: 2 },
      { text: "Entender como o dinheiro cresce", value: "c", points: 1 }
    ]
  },
  {
    id: "nest-3-3",
    text: "Você preferiria um produto financeiro que poupe automaticamente para o futuro do seu filho?",
    level: 3,
    options: [
      { text: "Sim, adoraria isso", value: "a", points: 3 },
      { text: "Talvez, se for flexível", value: "b", points: 2 },
      { text: "Não, prefiro controle manual", value: "c", points: 1 }
    ]
  }
];