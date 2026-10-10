import {whatsappHref} from '@/lib/site';

export type PlanLang = 'es' | 'en';

export type SubscriptionPlan = {
  id: 'basico' | 'crecimiento' | 'pro';
  priceUsd: 250 | 500 | 900;
  name: Record<PlanLang, string>;
  cta: Record<PlanLang, string>;
  message: Record<PlanLang, string>;
  agents: Record<PlanLang, string>;
  whatsapp: boolean;
  quotes: boolean;
  report: boolean;
  billing: boolean;
  integration: boolean;
  support: Record<PlanLang, string>;
};

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'basico',
    priceUsd: 250,
    name: {es: 'Básico', en: 'Basic'},
    cta: {es: 'Empezar con Básico', en: 'Start with Basic'},
    message: {
      es: 'Hola, quiero empezar con el plan Básico.',
      en: 'Hi, I want to start with the Basic plan.',
    },
    agents: {es: '1 agente', en: '1 agent'},
    whatsapp: true,
    quotes: false,
    report: false,
    billing: false,
    integration: false,
    support: {es: 'Por WhatsApp', en: 'On WhatsApp'},
  },
  {
    id: 'crecimiento',
    priceUsd: 500,
    name: {es: 'Crecimiento', en: 'Growth'},
    cta: {es: 'Empezar con Crecimiento', en: 'Start with Growth'},
    message: {
      es: 'Hola, quiero empezar con el plan Crecimiento.',
      en: 'Hi, I want to start with the Growth plan.',
    },
    agents: {es: '2 agentes', en: '2 agents'},
    whatsapp: true,
    quotes: true,
    report: true,
    billing: false,
    integration: false,
    support: {es: 'Por WhatsApp', en: 'On WhatsApp'},
  },
  {
    id: 'pro',
    priceUsd: 900,
    name: {es: 'Pro', en: 'Pro'},
    cta: {es: 'Hablar sobre Pro', en: 'Talk about Pro'},
    message: {
      es: 'Hola, quiero hablar sobre el plan Pro.',
      en: 'Hi, I want to talk about the Pro plan.',
    },
    agents: {es: 'Hasta 4 agentes', en: 'Up to 4 agents'},
    whatsapp: true,
    quotes: true,
    report: true,
    billing: true,
    integration: true,
    support: {es: 'Prioritario', en: 'Priority'},
  },
];

export function planWhatsappHref(plan: SubscriptionPlan, lang: PlanLang) {
  return whatsappHref(plan.message[lang]);
}
