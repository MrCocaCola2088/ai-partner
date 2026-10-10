import type {Metadata} from 'next';
import {subscriptionPlans} from '@/lib/plans';
import {absoluteUrl, siteConfig} from '@/lib/site';

export const homeTitle =
  'AI Partner | Agentes de IA para pymes en Santa Cruz — software por suscripción';

export const routeSeo = {
  home: {
    es: {
      title: homeTitle,
      description:
        'Agentes de IA que atienden tu WhatsApp, cotizan, agendan y hacen seguimiento por vos. Suscripción mensual desde USD 250, implementación incluida. Para pymes de Santa Cruz.',
      ogTitle: 'AI Partner | Agentes de IA para pymes en Santa Cruz — software por suscripción',
      ogDescription:
        'Una suscripción mensual. Implementación incluida. Agentes de WhatsApp para pymes de Santa Cruz, desde USD 250.',
      twitterTitle: 'AI Partner | Agentes de IA para pymes en Santa Cruz',
      twitterDescription:
        'Software de agentes de IA por suscripción mensual, con implementación incluida. Desde USD 250.',
    },
    en: {
      title: 'AI Partner | AI agents for small businesses in Santa Cruz — subscription software',
      description:
        'AI agents that answer your WhatsApp, send quotes, book appointments and follow up on sales. Monthly subscription from USD 250, implementation included. For small businesses in Santa Cruz.',
      ogTitle: 'AI Partner | AI agents for small businesses in Santa Cruz — subscription software',
      ogDescription:
        'One monthly subscription. Implementation included. WhatsApp agents for small businesses in Santa Cruz, from USD 250.',
      twitterTitle: 'AI Partner | AI agents for small businesses in Santa Cruz',
      twitterDescription: 'Subscription software for AI agents, with implementation included. From USD 250.',
    },
  },
  precios: {
    es: {
      title: 'Planes y precios: USD 250, 500 y 900 al mes | AI Partner',
      description:
        'Básico, Crecimiento y Pro. Suscripción mensual con implementación incluida. Se factura en bolivianos al tipo de cambio del día.',
    },
    en: {
      title: 'Plans and prices: USD 250, 500 and 900 per month | AI Partner',
      description:
        'Basic, Growth and Pro. Monthly subscription with implementation included. Billed in bolivianos at the day’s exchange rate.',
    },
  },
  tecnologias: {
    es: {
      title: 'Funciona sobre WhatsApp Business | AI Partner',
      description:
        'Los agentes de AI Partner atienden por WhatsApp Business. En el plan Pro se conectan con el sistema que ya usás.',
    },
    en: {
      title: 'Runs on WhatsApp Business | AI Partner',
      description:
        'AI Partner agents work on WhatsApp Business. The Pro plan connects them to the system you already use.',
    },
  },
  blog: {
    es: {
      title: 'Blog de agentes de IA para pymes | AI Partner',
      description:
        'Notas para pymes de Santa Cruz que quieren un agente de WhatsApp por suscripción, con implementación incluida.',
    },
    en: {
      title: 'Blog: AI agents for small businesses | AI Partner',
      description:
        'Notes for small businesses in Santa Cruz that want a WhatsApp agent on a monthly subscription, with implementation included.',
    },
  },
  diagnostico: {
    es: {
      title: 'Quiero mi agente de WhatsApp | AI Partner',
      description:
        'Escribinos y te mostramos cómo funcionaría un agente de IA en tu negocio. Suscripción mensual, implementación incluida.',
    },
    en: {
      title: 'I want my WhatsApp agent | AI Partner',
      description:
        'Message us and we will show you how an AI agent would work in your business. Monthly subscription, implementation included.',
    },
  },
} as const;

type SeoCopy = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
};

export function pageMetadata(locale: string, path: string, copy: SeoCopy): Metadata {
  const url = absoluteUrl(locale, path);
  const image = `${siteConfig.siteUrl}${siteConfig.ogImagePath}`;
  const ogTitle = copy.ogTitle ?? copy.title;
  const ogDescription = copy.ogDescription ?? copy.description;
  // Next's metadata renderer drops the trailing slash on the site root.
  // The homepage emits that canonical and og:url tag directly instead.
  const manualRootUrl = path === '/' && locale !== 'en';

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      ...(manualRootUrl ? {} : {canonical: url}),
      languages: {
        'es-BO': absoluteUrl('es', path),
        en: absoluteUrl('en', path),
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_BO' : 'en_US',
      ...(manualRootUrl ? {} : {url}),
      siteName: siteConfig.name,
      title: ogTitle,
      description: ogDescription,
      images: [{url: image, width: 1200, height: 630, alt: 'AI Partner — software de agentes de IA para pymes en Santa Cruz'}],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.twitterTitle ?? ogTitle,
      description: copy.twitterDescription ?? ogDescription,
      images: [image],
    },
    robots: {index: true, follow: true},
  };
}

export function businessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${siteConfig.siteUrl}/#business`,
    name: 'AI Partner',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'Software de agentes de IA para pymes. Suscripción mensual con implementación incluida: atención por WhatsApp, cotizaciones, seguimiento, facturación e inventario.',
    url: `${siteConfig.siteUrl}/`,
    image: `${siteConfig.siteUrl}${siteConfig.ogImagePath}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: 'USD 250–900/mes',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santa Cruz de la Sierra',
      addressRegion: 'Santa Cruz',
      addressCountry: 'BO',
    },
    areaServed: {'@type': 'City', name: 'Santa Cruz de la Sierra'},
    founder: {
      '@type': 'Person',
      name: siteConfig.founderName,
      sameAs: siteConfig.linkedinUrl,
    },
    sameAs: [siteConfig.linkedinUrl, siteConfig.instagramUrl],
    offers: subscriptionPlans.map((plan) => ({
      '@type': 'Offer',
      name: plan.name.es,
      price: String(plan.priceUsd),
      priceCurrency: 'USD',
    })),
  };
}

export function faqJsonLd(items: Array<{question: string; answer: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function articleJsonLd(input: {
  locale: string;
  path: string;
  title: string;
  description: string;
  datePublished: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    inLanguage: input.locale === 'es' ? 'es-BO' : 'en',
    mainEntityOfPage: absoluteUrl(input.locale, input.path),
    image: `${siteConfig.siteUrl}${siteConfig.ogImagePath}`,
    author: {
      '@type': 'Person',
      name: siteConfig.founderName,
      url: siteConfig.linkedinUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
  };
}
