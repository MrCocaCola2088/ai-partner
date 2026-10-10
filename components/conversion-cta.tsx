import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Link} from '@/i18n/navigation';
import {siteConfig, whatsappHref} from '@/lib/site';

export function ConversionCta({locale}: {locale: string}) {
  const es = locale === 'es';
  const message = es ? 'Hola, quiero mi agente de WhatsApp.' : 'Hi, I want my WhatsApp agent.';

  return (
    <Card className="border-cyan-400/20 bg-cyan-400/10">
      <CardContent className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white md:text-3xl">
            {es
              ? 'Dejá que un agente de IA atienda tu WhatsApp desde este mes.'
              : 'Let an AI agent answer your WhatsApp starting this month.'}
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-200">
            {es
              ? 'Escribinos y te mostramos cómo funcionaría en tu negocio, sin compromiso. Los planes son Básico (USD 250/mes), Crecimiento (USD 500/mes) y Pro (USD 900/mes), con implementación incluida.'
              : 'Message us and we will show you how it would work in your business, with no obligation. Plans are Basic (USD 250/month), Growth (USD 500/month) and Pro (USD 900/month), with implementation included.'}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href={whatsappHref(message)} target="_blank" rel="noreferrer">
              WhatsApp {siteConfig.phoneDisplay}
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/precios">{es ? 'Ver planes' : 'See plans'}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
