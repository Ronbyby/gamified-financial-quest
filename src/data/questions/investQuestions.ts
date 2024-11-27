import { Question } from "@/types";

export const investQuestions: Question[] = [
  // Level 1: Campo do Iniciante
  {
    id: "invest-1-1",
    text: "O que investir significa para você?",
    level: 1,
    options: [
      { text: "Fazer meu dinheiro crescer para o futuro", value: "a", points: 3 },
      { text: "Tomar riscos calculados por retornos maiores", value: "b", points: 2 },
      { text: "Algo que me deixa curioso mas nervoso", value: "c", points: 1 }
    ]
  },
  {
    id: "invest-1-2",
    text: "Você conhece seu perfil de risco financeiro?",
    level: 1,
    options: [
      { text: "Sim, já avaliei", value: "a", points: 3 },
      { text: "Ainda não, mas quero aprender", value: "b", points: 2 },
      { text: "Não sei o que é isso", value: "c", points: 1 }
    ]
  },
  {
    id: "invest-1-3",
    text: "Quanto da sua renda você se sentiria confortável investindo mensalmente?",
    level: 1,
    options: [
      { text: "Menos de 10%", value: "a", points: 1 },
      { text: "10–20%", value: "b", points: 2 },
      { text: "Mais de 20%", value: "c", points: 3 }
    ]
  },
  // Level 2: Escolhendo Seu Caminho
  {
    id: "invest-2-1",
    text: "Que tipo de investidor você é?",
    level: 2,
    options: [
      { text: "Prefiro retornos seguros e constantes", value: "a", points: 1 },
      { text: "Gosto de um mix de segurança e crescimento", value: "b", points: 2 },
      { text: "Pronto para oportunidades de alto risco e retorno", value: "c", points: 3 }
    ]
  },
  {
    id: "invest-2-2",
    text: "Qual seria sua primeira escolha de investimento?",
    level: 2,
    options: [
      { text: "Tesouro Direto", value: "a", points: 1 },
      { text: "Fundos Imobiliários (FIIs)", value: "b", points: 2 },
      { text: "Ações ou fundos de investimento", value: "c", points: 3 }
    ]
  },
  {
    id: "invest-2-3",
    text: "Por quanto tempo você planeja manter seus investimentos?",
    level: 2,
    options: [
      { text: "Menos de 5 anos", value: "a", points: 1 },
      { text: "5–10 anos", value: "b", points: 2 },
      { text: "Mais de 10 anos", value: "c", points: 3 }
    ]
  },
  // Level 3: Visão de Longo Prazo
  {
    id: "invest-3-1",
    text: "Se seu investimento dobrasse em 10 anos, o que faria com os retornos?",
    level: 3,
    options: [
      { text: "Reinvestir para mais crescimento", value: "a", points: 3 },
      { text: "Usar para uma grande compra ou objetivo", value: "b", points: 2 },
      { text: "Guardar para aposentadoria", value: "c", points: 1 }
    ]
  },
  {
    id: "invest-3-2",
    text: "Você tem objetivos financeiros ligados a prazos específicos?",
    level: 3,
    options: [
      { text: "Sim, e planejo meus investimentos de acordo", value: "a", points: 3 },
      { text: "Tenho objetivos mas sem prazos específicos", value: "b", points: 2 },
      { text: "Ainda estou definindo isso", value: "c", points: 1 }
    ]
  },
  {
    id: "invest-3-3",
    text: "Qual dessas melhor descreve sua jornada ideal de investimentos?",
    level: 3,
    options: [
      { text: "Estável e previsível", value: "a", points: 1 },
      { text: "Equilibrada com momentos de emoção", value: "b", points: 2 },
      { text: "Dinâmica e focada em crescimento", value: "c", points: 3 }
    ]
  }
];