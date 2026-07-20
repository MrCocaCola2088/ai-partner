import {ArrowRight, Bot, BrainCircuit, BriefcaseBusiness, ChartColumnIncreasing, CheckCircle2, ChevronRight, CircleGauge, Clock3, GraduationCap, LayoutDashboard, Mail, MapPin, NotebookTabs, Sparkles, Workflow} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import {AnimatedStats} from '@/components/animated-stats';
import {OpportunityScore} from '@/components/opportunity-score';
import {RoiCalculator} from '@/components/roi-calculator';
import {TestimonialCarousel} from '@/components/testimonial-carousel';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {siteConfig} from '@/lib/site';

const problemIcons = [Clock3, Mail, NotebookTabs, Workflow, BriefcaseBusiness, LayoutDashboard];
const solutionIcons = [BrainCircuit, Workflow, GraduationCap, Bot, Sparkles, CircleGauge];
const whyIcons = [ChartColumnIncreasing, Workflow, CheckCircle2, GraduationCap, Bot, Sparkles];
const servicesIcons = [BrainCircuit, Bot, GraduationCap, Workflow, Sparkles, LayoutDashboard, CircleGauge, NotebookTabs, BriefcaseBusiness];
const portalIcons = [LayoutDashboard, NotebookTabs, Sparkles, Workflow, CheckCircle2, Mail];

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale});
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'AI Partner',
    description: t('Metadata.description'),
    areaServed: ['Santa Cruz de la Sierra', 'LatAm', 'United States'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santa Cruz de la Sierra',
      addressCountry: 'BO',
    },
    sameAs: [siteConfig.bookingUrl, siteConfig.assessmentUrl],
  };

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge>{t('Hero.badge')}</Badge>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-balance text-slate-950 dark:text-white sm:text-5xl lg:text-7xl">
              {t('Hero.title')}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {t('Hero.description')}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href={siteConfig.assessmentUrl} target="_blank" rel="noreferrer">
                  {t('Hero.primaryCta')} <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="#process">{t('Hero.secondaryCta')}</a>
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur dark:bg-white/6">
                <p className="text-sm text-slate-500 dark:text-slate-400">{t('Hero.stats.consulting')}</p>
                <p className="mt-1 text-xl font-semibold text-slate-950 dark:text-white">{t('Hero.stats.consultingValue')}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur dark:bg-white/6">
                <p className="text-sm text-slate-500 dark:text-slate-400">{t('Hero.stats.implementation')}</p>
                <p className="mt-1 text-xl font-semibold text-slate-950 dark:text-white">{t('Hero.stats.implementationValue')}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur dark:bg-white/6">
                <p className="text-sm text-slate-500 dark:text-slate-400">{t('Hero.stats.support')}</p>
                <p className="mt-1 text-xl font-semibold text-slate-950 dark:text-white">{t('Hero.stats.supportValue')}</p>
              </div>
            </div>
          </div>
          <Card className="relative overflow-hidden border-cyan-400/20 bg-slate-950 text-white">
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                <div>
                  <p className="text-sm text-slate-400">{t('Hero.panel.title')}</p>
                  <p className="text-lg font-semibold">{t('Hero.panel.subtitle')}</p>
                </div>
                <Sparkles className="size-5 text-cyan-300" />
              </div>
              <div className="space-y-4">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span>{t(`Hero.panel.items.${index}.title`)}</span>
                      <span>{t(`Hero.panel.items.${index}.metric`)}</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
                        style={{width: `${72 + index * 8}%`}}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                <p className="text-sm text-cyan-100">{t('Hero.panel.footer')}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <p className="text-center text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
          {t('TrustedBy.title')}
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="rounded-2xl border border-white/10 bg-white/8 px-5 py-4 text-center text-sm font-medium text-slate-600 backdrop-blur dark:bg-white/6 dark:text-slate-300">
              {t(`TrustedBy.items.${index}`)}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" id="services">
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
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge>{t('Solution.eyebrow')}</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('Solution.title')}</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{t('Solution.description')}</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {solutionIcons.map((Icon, index) => (
            <Card key={index}>
              <CardContent className="space-y-4">
                <Icon className="size-6 text-cyan-300" />
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{t(`Solution.items.${index}.title`)}</h3>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{t(`Solution.items.${index}.description`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" id="process">
        <div className="max-w-3xl">
          <Badge>{t('Methodology.eyebrow')}</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('Methodology.title')}</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {[0, 1, 2, 3, 4].map((index) => (
            <Card key={index} className="relative">
              <CardContent>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">{t(`Methodology.items.${index}.title`)}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{t(`Methodology.items.${index}.description`)}</p>
                {index < 4 && <ChevronRight className="mt-5 hidden size-5 text-cyan-300 md:block" />}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge>{t('AOA.eyebrow')}</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('AOA.title')}</h2>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {[0, 1, 2].map((index) => (
            <Card key={index}>
              <CardContent className="space-y-4">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">{t(`AOA.items.${index}.name`)}</p>
                <p className="text-lg font-medium leading-8 text-slate-700 dark:text-slate-200">{t(`AOA.items.${index}.description`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <Badge>{t('Services.eyebrow')}</Badge>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('Services.title')}</h2>
          </div>
          <Button variant="secondary" asChild>
            <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">
              {t('Services.cta')}
            </a>
          </Button>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {servicesIcons.map((Icon, index) => (
            <Card key={index}>
              <CardContent className="space-y-4">
                <Icon className="size-6 text-cyan-300" />
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{t(`Services.items.${index}.title`)}</h3>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{t(`Services.items.${index}.description`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <Card className="border-cyan-400/20 bg-cyan-400/10">
          <CardContent className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <Badge>{t('PricingTeaser.eyebrow')}</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('PricingTeaser.title')}</h2>
              <p className="mt-4 text-lg text-slate-700 dark:text-slate-200">{t('PricingTeaser.description')}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href={siteConfig.assessmentUrl} target="_blank" rel="noreferrer">{t('PricingTeaser.primaryCta')}</a>
              </Button>
              <Button variant="secondary" asChild>
                <a href={`/${locale}/pricing`}>{t('PricingTeaser.secondaryCta')}</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge>{t('WhyChooseUs.eyebrow')}</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('WhyChooseUs.title')}</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {whyIcons.map((Icon, index) => (
            <Card key={index}>
              <CardContent className="space-y-4">
                <Icon className="size-6 text-cyan-300" />
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{t(`WhyChooseUs.items.${index}.title`)}</h3>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{t(`WhyChooseUs.items.${index}.description`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" id="cases">
        <div className="grid gap-6 lg:grid-cols-2">
          <AnimatedStats />
          <div className="space-y-6">
            <RoiCalculator />
            <OpportunityScore />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge>{t('Portal.eyebrow')}</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('Portal.title')}</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{t('Portal.description')}</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {portalIcons.map((Icon, index) => (
            <Card key={index}>
              <CardContent className="space-y-4">
                <Icon className="size-6 text-cyan-300" />
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{t(`Portal.items.${index}.title`)}</h3>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{t(`Portal.items.${index}.description`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge>{t('Assessment.eyebrow')}</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('Assessment.title')}</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{t('Assessment.description')}</p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <CardContent className="space-y-4">
              {[0, 1, 2].map((index) => (
                <div key={index} className="rounded-2xl border border-white/10 bg-black/15 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">{t(`Assessment.steps.${index}.step`)}</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{t(`Assessment.steps.${index}.title`)}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{t(`Assessment.steps.${index}.description`)}</p>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="border-cyan-400/20 bg-slate-950 text-white">
            <CardContent className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">{t('Assessment.formTitle')}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                  <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
                    {t(`Assessment.fields.${index}`)}
                  </div>
                ))}
              </div>
              <p className="text-sm leading-7 text-slate-300">{t('Assessment.note')}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <a href={siteConfig.assessmentUrl} target="_blank" rel="noreferrer">
                    {t('Assessment.primaryCta')}
                  </a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">
                    {t('Assessment.secondaryCta')}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge>{t('Testimonials.eyebrow')}</Badge>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('Testimonials.title')}</h2>
        </div>
        <div className="mt-10">
          <TestimonialCarousel />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Badge>{t('Faq.eyebrow')}</Badge>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('Faq.title')}</h2>
          </div>
          <div className="space-y-4">
            {[0, 1, 2, 3].map((index) => (
              <details key={index} className="rounded-3xl border border-white/10 bg-white/8 p-6 backdrop-blur dark:bg-white/6">
                <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950 dark:text-white">
                  {t(`Faq.items.${index}.question`)}
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{t(`Faq.items.${index}.answer`)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" id="blog">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <Badge>{t('Blog.eyebrow')}</Badge>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('Blog.title')}</h2>
          </div>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <span key={index} className="rounded-full border border-white/10 px-3 py-2">
                {t(`Blog.categories.${index}`)}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {[0, 1, 2].map((index) => (
            <Card key={index}>
              <CardContent className="space-y-4">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">{t(`Blog.posts.${index}.category`)}</p>
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{t(`Blog.posts.${index}.title`)}</h3>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{t(`Blog.posts.${index}.excerpt`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" id="about">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Card>
            <CardContent className="space-y-4">
              <Badge>{t('About.eyebrow')}</Badge>
              <h2 className="text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('About.title')}</h2>
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">{t('About.description')}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-4">
              {[0, 1, 2].map((index) => (
                <div key={index} className="rounded-2xl border border-white/10 bg-black/15 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">{t(`About.values.${index}.title`)}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{t(`About.values.${index}.description`)}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8" id="contact">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <CardContent className="space-y-5">
              <Badge>{t('Contact.eyebrow')}</Badge>
              <h2 className="text-3xl font-semibold text-slate-950 dark:text-white md:text-4xl">{t('Contact.title')}</h2>
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">{t('Contact.description')}</p>
              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <p className="flex items-center gap-2"><MapPin className="size-4 text-cyan-300" /> {siteConfig.city}</p>
                <p className="flex items-center gap-2"><Mail className="size-4 text-cyan-300" /> {t('Contact.emailPlaceholder')}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <a href={siteConfig.assessmentUrl} target="_blank" rel="noreferrer">{t('Contact.primaryCta')}</a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">{t('Contact.secondaryCta')}</a>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-4">
              <div className="rounded-3xl border border-dashed border-white/20 bg-black/20 p-10 text-center text-slate-300">
                {t('Contact.mapPlaceholder')}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4 text-sm text-slate-300">GA4: {t('Contact.analytics')}</div>
                <div className="rounded-2xl border border-white/10 bg-white/6 p-4 text-sm text-slate-300">Meta Pixel: {t('Contact.pixel')}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />
    </main>
  );
}
