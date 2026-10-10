import {ArrowRight, Boxes, FileSpreadsheet, Mail, MapPin, MessageCircle, Package, Phone, Receipt, Repeat} from 'lucide-react';
import type {Metadata} from 'next';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {FaqList} from '@/components/faq-list';
import {PricingTable} from '@/components/pricing-table';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Link} from '@/i18n/navigation';
import {blogPosts} from '@/lib/blog-posts';
import {pageMetadata, routeSeo} from '@/lib/seo';
import {siteConfig, whatsappHref} from '@/lib/site';

const startMessage = {
  es: 'Hola, quiero mi agente de WhatsApp.',
  en: 'Hi, I want my WhatsApp agent.',
};

const problemIcons = [MessageCircle, Repeat, FileSpreadsheet, Phone, Receipt];
const agentIcons = [MessageCircle, FileSpreadsheet, Repeat, Receipt, Package, Boxes];

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const copy = locale === 'en' ? routeSeo.home.en : routeSeo.home.es;
  return pageMetadata(locale, '/', copy);
}

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale});
  const lang = locale === 'en' ? 'en' : 'es';
  const faqItems = [0, 1, 2, 3, 4, 5, 6].map((index) => ({
    question: t(`Faq.items.${index}.question`),
    answer: t(`Faq.items.${index}.answer`),
  }));
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <main>
      {locale !== 'en' && (
        <>
          <link rel="canonical" href="https://ai-partner.website/" />
          <meta property="og:url" content="https://ai-partner.website/" />
        </>
      )}
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge>{t('Hero.badge')}</Badge>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-balance text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              {t('Hero.title')}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{t('Hero.description')}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href={whatsappHref(startMessage[lang])} target="_blank" rel="noreferrer">
                  {t('Hero.primaryCta')} <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/precios">{t('Hero.secondaryCta')}</Link>
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[0, 1, 2, 3].map((index) => (
                <div key={index} className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur dark:bg-white/6">
                  <p className="text-sm font-medium text-slate-950 dark:text-white">{t(`Hero.seals.${index}`)}</p>
                </div>
              ))}
            </div>
          </div>
          <Card className="relative overflow-hidden border-cyan-400/20 bg-slate-950 text-white">
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">{t('Hero.panel.eyebrow')}</p>
                <p className="mt-2 text-lg font-semibold">{t('Hero.panel.title')}</p>
              </div>
              <div className="space-y-3">
                {[0, 1, 2, 3].map((index) => (
                  <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">{t(`Hero.panel.messages.${index}.from`)}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">{t(`Hero.panel.messages.${index}.text`)}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-cyan-100">{t('Hero.panel.footer')}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" id="problema">
        <div className="max-w-3xl">
          <Badge>{t('Problem.eyebrow')}</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('Problem.title')}</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{t('Problem.description')}</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {problemIcons.map((Icon, index) => (
            <Card key={index}>
              <CardContent className="space-y-4">
                <Icon className="size-6 text-cyan-300" />
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{t(`Problem.items.${index}.title`)}</h3>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{t(`Problem.items.${index}.description`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-lg text-slate-700 dark:text-slate-200">{t('Problem.close')}</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" id="proceso">
        <div className="max-w-3xl">
          <Badge>{t('Process.eyebrow')}</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('Process.title')}</h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {[0, 1, 2].map((index) => (
            <Card key={index}>
              <CardContent>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">{t(`Process.items.${index}.title`)}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{t(`Process.items.${index}.description`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" id="agentes">
        <div className="max-w-3xl">
          <Badge>{t('Agents.eyebrow')}</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('Agents.title')}</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {agentIcons.map((Icon, index) => (
            <Card key={index}>
              <CardContent className="space-y-4">
                <Icon className="size-6 text-cyan-300" />
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{t(`Agents.items.${index}.title`)}</h3>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{t(`Agents.items.${index}.description`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-base leading-7 text-slate-600 dark:text-slate-300">{t('Agents.audience')}</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" id="planes">
        <div className="max-w-3xl">
          <Badge>{t('Pricing.eyebrow')}</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('Pricing.title')}</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{t('Pricing.description')}</p>
        </div>
        <div className="mt-10">
          <PricingTable locale={locale} />
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">{t('Pricing.note')}</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" id="nosotros">
        <div className="max-w-3xl">
          <Badge>{t('Why.eyebrow')}</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('Why.title')}</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[0, 1, 2, 3].map((index) => (
            <Card key={index}>
              <CardContent className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{t(`Why.items.${index}.title`)}</h3>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{t(`Why.items.${index}.description`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="mt-4">
          <CardContent className="space-y-3">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">{t('Why.founderEyebrow')}</p>
            <p className="text-base leading-8 text-slate-600 dark:text-slate-300">{t('Why.founder')}</p>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" id="preguntas">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge>{t('Faq.eyebrow')}</Badge>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('Faq.title')}</h2>
          </div>
          <FaqList items={faqItems} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" id="blog">
        <div className="max-w-3xl">
          <Badge>{t('Blog.eyebrow')}</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('Blog.title')}</h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <Card key={post.slug}>
              <CardContent className="space-y-4">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">{post.category[lang]}</p>
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                  <Link href={`/blog/${post.slug}`} className="hover:text-cyan-200">
                    {post.title[lang]}
                  </Link>
                </h3>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{post.description[lang]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" id="contacto">
        <Card className="border-cyan-400/20 bg-cyan-400/10">
          <CardContent className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <Badge>{t('Contact.eyebrow')}</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('FinalCta.title')}</h2>
              <p className="mt-4 text-lg text-slate-700 dark:text-slate-200">{t('FinalCta.description')}</p>
              <div className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                <p className="flex items-center gap-2">
                  <MapPin className="size-4 text-cyan-700 dark:text-cyan-200" /> {siteConfig.city}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="size-4 text-cyan-700 dark:text-cyan-200" />
                  <a className="hover:underline" href={whatsappHref(startMessage[lang])}>
                    {siteConfig.phoneDisplay}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="size-4 text-cyan-700 dark:text-cyan-200" />
                  <a className="hover:underline" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href={whatsappHref(startMessage[lang])} target="_blank" rel="noreferrer">
                  {t('FinalCta.primaryCta')} → {siteConfig.phoneDisplay}
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/precios">{t('FinalCta.secondaryCta')}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
