import { Question } from "@/types";

export const investQuestions: Question[] = [
  // Nível 1: Acampamento do Iniciante
  {
    id: "invest-1-1",
    text: "O que investir significa para você?",
    level: 1,
    options: [
      { text: "Crescer meu patrimônio ao longo do tempo", value: "a", points: 3 },
      { text: "Assumir riscos calculados por retornos maiores", value: "b", points: 2 },
      { text: "Algo que desperta curiosidade, mas também medo", value: "c", points: 1 }
    ]
  },
  {
    id: "invest-1-2",
    text: "Você conhece seu perfil de risco financeiro?",
    level: 1,
    options: [
      { text: "Sim, já avaliei", value: "a", points: 3 },
      { text: "Não, mas quero aprender", value: "b", points: 2 },
      { text: "Não sei o que é isso", value: "c", points: 1 }
    ]
  },
  {
    id: "invest-1-3",
    text: "Quanto de sua renda você se sentiria confortável investindo mensalmente?",
    level: 1,
    options: [
      { text: "Menos de 10%", value: "a", points: 1 },
      { text: "Entre 10–20%", value: "b", points: 2 },
      { text: "Mais de 20%", value: "c", points: 3 }
    ]
  },
  // Nível 2: Escolhendo Seu Caminho
  {
    id: "invest-2-1",
    text: "Que tipo de investidor você é?",
    level: 2,
    options: [
      { text: "Prefiro retornos seguros e estáveis", value: "a", points: 1 },
      { text: "Gosto de um equilíbrio entre segurança e crescimento", value: "b", points: 2 },
      { text: "Estou pronto(a) para altos riscos e altas recompensas", value: "c", points: 3 }
    ]
  },
  {
    id: "invest-2-2",
    text: "Qual seria sua primeira escolha de investimento?",
    level: 2,
    options: [
      { text: "Tesouro Direto", value: "a", points: 1 },
      { text: "Fundos imobiliários (FIIs)", value: "b", points: 2 },
      { text: "Ações ou fundos de investimento", value: "c", points: 3 }
    ]
  },
  {
    id: "invest-2-3",
    text: "Por quanto tempo você planeja manter seus investimentos?",
    level: 2,
    options: [
      { text: "Menos de 5 anos", value: "a", points: 1 },
      { text: "Entre 5–10 anos", value: "b", points: 2 },
      { text: "Mais de 10 anos", value: "c", points: 3 }
    ]
  },
  // Nível 3: Visão de Longo Prazo
  {
    id: "invest-3-1",
    text: "Se seu investimento dobrasse em 10 anos, o que você faria com os retornos?",
    level: 3,
    options: [
      { text: "Reinvestiria para mais crescimento", value: "a", points: 3 },
      { text: "Usaria para uma grande conquista ou objetivo", value: "b", points: 2 },
      { text: "Guardaria para aposentadoria", value: "c", points: 1 }
    ]
  },
  {
    id: "invest-3-2",
    text: "Você tem metas financeiras vinculadas a prazos específicos?",
    level: 3,
    options: [
      { text: "Sim, e planejo meus investimentos de acordo", value: "a", points: 3 },
      { text: "Tenho metas, mas sem prazos definidos", value: "b", points: 2 },
      { text: "Ainda estou descobrindo isso", value: "c", points: 1 }
    ]
  },
  {
    id: "invest-3-3",
    text: "Qual destas melhor descreve sua jornada ideal de investimentos?",
    level: 3,
    options: [
      { text: "Estável e previsível", value: "a", points: 1 },
      { text: "Equilibrada com momentos de empolgação", value: "b", points: 2 },
      { text: "Dinâmica e focada no crescimento", value: "c", points: 3 }
    ]
  }
];