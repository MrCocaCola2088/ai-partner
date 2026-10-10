import type {Metadata} from 'next';
import {absoluteUrl, siteConfig} from '@/lib/site';

export const homeTitle =
  'Consultoría de IA y Automatización en Santa Cruz, Bolivia | AI Partner';

export const routeSeo = {
  home: {
    es: {
      title: homeTitle,
      description:
        'Implementamos IA en tu empresa: agentes para WhatsApp, automatización y capacitación. Diagnóstico gratuito. Desde USD 250/mes.',
      ogTitle: 'AI Partner | Consultoría de IA en Santa Cruz, Bolivia',
      ogDescription:
        'Agentes de IA para WhatsApp, automatización de procesos y capacitación. Resultados en 2–4 semanas. Diagnóstico gratuito.',
      twitterTitle: 'AI Partner | Consultoría de IA en Santa Cruz, Bolivia',
      twitterDescription: 'Agentes de IA para WhatsApp, automatización y capacitación. Diagnóstico gratuito.',
    },
    en: {
      title: 'AI Consulting and Automation in Santa Cruz, Bolivia | AI Partner',
      description:
        'We implement AI in your company: WhatsApp agents, automation and training. Free assessment. Plans from USD 250/month.',
      ogTitle: 'AI Partner | AI Consulting in Santa Cruz, Bolivia',
      ogDescription:
        'AI agents for WhatsApp, process automation and training. Free assessment. Plans from USD 250/month.',
      twitterTitle: 'AI Partner | AI Consulting in Santa Cruz, Bolivia',
      twitterDescription: 'WhatsApp AI agents, automation and training. Free assessment.',
    },
  },
  precios: {
    es: {
      title: 'Precios de Consultoría en IA: desde USD 250/mes | AI Partner',
      description:
        'Planes Emprendedor, Profesional y Empresarial. Sin contratos largos. Implementación de flujos de IA, capacitación y soporte.',
    },
    en: {
      title: 'AI Consulting Prices: from USD 250/month | AI Partner',
      description:
        'Starter, Professional and Business plans. No long contracts. AI workflows, training and support.',
    },
  },
  tecnologias: {
    es: {
      title: 'Herramientas de IA que implementamos: ChatGPT, Claude, n8n | AI Partner',
      description:
        'OpenAI, Claude, Gemini, Copilot, n8n, Make, Zapier, Power BI y más, integrados a tus sistemas actuales.',
    },
    en: {
      title: 'AI Tools We Implement: ChatGPT, Claude, n8n | AI Partner',
      description:
        'OpenAI, Claude, Gemini, Copilot, n8n, Make, Zapier, Power BI and more, connected to the systems you already use.',
    },
  },
  blog: {
    es: {
      title: 'Blog de IA para Empresas en Bolivia | AI Partner',
      description:
        'Guías, casos y comparativas para aplicar inteligencia artificial en PyMEs de Bolivia y Latinoamérica.',
    },
    en: {
      title: 'AI Blog for Businesses in Bolivia | AI Partner',
      description:
        'Guides and comparisons for applying artificial intelligence in SMBs across Bolivia and Latin America.',
    },
  },
  diagnostico: {
    es: {
      title: 'Diagnóstico Gratuito de IA para tu Empresa | AI Partner',
      description:
        'En 20 minutos identificamos qué procesos de tu empresa se pueden automatizar con IA y cuánto podrías ahorrar.',
    },
    en: {
      title: 'Free AI Assessment for Your Company | AI Partner',
      description:
        'In 20 minutes we identify which processes can be automated with AI and where time is being lost.',
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
      images: [{url: image, width: 1200, height: 630, alt: 'AI Partner — consultoría de IA en Santa Cruz, Bolivia'}],
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
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.siteUrl}/#business`,
    name: 'AI Partner',
    description:
      'Consultoría e implementación de inteligencia artificial para empresas: agentes de IA, automatización de procesos, configuración de ChatGPT/Claude, capacitación y QA de sistemas de IA.',
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
    areaServed: {'@type': 'Country', name: 'Bolivia'},
    founder: {
      '@type': 'Person',
      name: siteConfig.founderName,
      sameAs: siteConfig.linkedinUrl,
    },
    sameAs: [siteConfig.linkedinUrl, siteConfig.instagramUrl],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Planes de implementación de IA',
      itemListElement: [
        {'@type': 'Offer', name: 'Emprendedor', price: '250', priceCurrency: 'USD'},
        {'@type': 'Offer', name: 'Profesional', price: '500', priceCurrency: 'USD'},
        {'@type': 'Offer', name: 'Empresarial', price: '900', priceCurrency: 'USD'},
      ],
    },
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
