import type {Metadata, Viewport} from 'next';
import {businessJsonLd, homeTitle} from '@/lib/seo';
import {siteConfig} from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: homeTitle,
    template: '%s',
  },
  description:
    'Implementamos inteligencia artificial en tu empresa: agentes de IA para WhatsApp, automatización de procesos con n8n y Make, ChatGPT/Claude y capacitación. Diagnóstico gratuito. Planes desde USD 250/mes.',
  applicationName: siteConfig.name,
  authors: [{name: siteConfig.founderName, url: siteConfig.linkedinUrl}],
  creator: siteConfig.founderName,
  robots: {index: true, follow: true},
  openGraph: {
    type: 'website',
    locale: 'es_BO',
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: 'AI Partner — consultoría de IA en Santa Cruz, Bolivia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [siteConfig.ogImagePath],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B1220',
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  const jsonLd = businessJsonLd();

  return (
    <html lang="es-BO" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
      </body>
    </html>
  );
}
