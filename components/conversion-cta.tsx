import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Link} from '@/i18n/navigation';
import {siteConfig} from '@/lib/site';

export function ConversionCta({locale}: {locale: string}) {
  const es = locale === 'es';

  return (
    <Card className="border-cyan-400/20 bg-cyan-400/10">
      <CardContent className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-slate-950 dark:text-white md:text-3xl">
            {es ? 'Contanos qué proceso querés ordenar' : 'Tell us which process you want to improve'}
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-200">
            {es
              ? 'Escribinos por WhatsApp o pedí el diagnóstico gratuito. En la primera conversación vemos si el plan Emprendedor (USD 250/mes), Profesional (USD 500/mes) o Empresarial (USD 900/mes) encaja con tu operación.'
              : 'Message us on WhatsApp or request the free assessment. On the first call we see whether the Starter (USD 250/month), Professional (USD 500/month) or Business (USD 900/month) plan fits your operation.'}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/diagnostico">{es ? 'Diagnóstico gratuito' : 'Free assessment'}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
