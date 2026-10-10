import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {ConversionCta} from '@/components/conversion-cta';
import {FaqList} from '@/components/faq-list';
import {PlanCards} from '@/components/plan-cards';
import {ProseParagraphs, ProseSections} from '@/components/prose';
import {Badge} from '@/components/ui/badge';
import {routing} from '@/i18n/routing';
import {getLanding, landingPages} from '@/lib/landings';
import {pageMetadata} from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => landingPages.map((page) => ({locale, slug: page.slug})));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string; slug: string}>;
}): Promise<Metadata> {
  const {locale, slug} = await params;
  const page = getLanding(slug);
  if (!page) return {};
  const lang = locale === 'en' ? 'en' : 'es';
  return pageMetadata(locale, `/${page.slug}`, {
    title: page.metaTitle[lang],
    description: page.metaDescription[lang],
  });
}

export default async function LandingRoute({
  params,
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  setRequestLocale(locale);
  const page = getLanding(slug);
  if (!page) notFound();

  const lang = locale === 'en' ? 'en' : 'es';

  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="max-w-3xl">
        <Badge>AI Partner</Badge>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white md:text-5xl">{page.h1[lang]}</h1>
        <div className="mt-6">
          <ProseParagraphs locale={locale} paragraphs={page.intro} />
        </div>
      </div>
      <ProseSections locale={locale} sections={page.sections} />
      <section className="mt-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-slate-950 dark:text-white md:text-3xl">{page.exampleHeading[lang]}</h2>
        <div className="mt-4">
          <ProseParagraphs locale={locale} paragraphs={page.example} />
        </div>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-slate-950 dark:text-white md:text-3xl">
          {lang === 'es' ? 'Precios publicados' : 'Published prices'}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
          {lang === 'es'
            ? 'Emprendedor USD 250 al mes, Profesional USD 500 y Empresarial USD 900. El diagnóstico gratuito elige el plan; no hay contrato largo.'
            : 'Starter is USD 250 per month, Professional USD 500 and Business USD 900. The free assessment chooses the plan; there is no long contract.'}
        </p>
        <div className="mt-6">
          <PlanCards locale={locale} linked />
        </div>
      </section>
      <section className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="text-2xl font-semibold text-slate-950 dark:text-white md:text-3xl">
          {lang === 'es' ? 'Preguntas frecuentes' : 'Frequently asked questions'}
        </h2>
        <FaqList
          items={page.faqs.map((item) => ({
            question: item.question[lang],
            answer: item.answer[lang],
          }))}
        />
      </section>
      <div className="mt-12">
        <ConversionCta locale={locale} />
      </div>
    </main>
  );
}
