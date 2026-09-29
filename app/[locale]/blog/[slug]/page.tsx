import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {ConversionCta} from '@/components/conversion-cta';
import {ProseSections} from '@/components/prose';
import {Link} from '@/i18n/navigation';
import {routing} from '@/i18n/routing';
import {blogPosts, getBlogPost, postPlainText, readingMinutes} from '@/lib/blog-posts';
import {articleJsonLd, pageMetadata} from '@/lib/seo';
import {formatLongDate} from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) => blogPosts.map((post) => ({locale, slug: post.slug})));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string; slug: string}>;
}): Promise<Metadata> {
  const {locale, slug} = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const lang = locale === 'en' ? 'en' : 'es';
  const title = `${post.title[lang]} | AI Partner`;
  return pageMetadata(locale, `/blog/${post.slug}`, {
    title,
    description: post.description[lang],
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  setRequestLocale(locale);
  const post = getBlogPost(slug);
  if (!post) notFound();

  const lang = locale === 'en' ? 'en' : 'es';
  const words = postPlainText(post, lang).split(' ').filter(Boolean).length;
  const others = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const jsonLd = articleJsonLd({
    locale,
    path: `/blog/${post.slug}`,
    title: post.title[lang],
    description: post.description[lang],
    datePublished: post.published,
  });

  return (
    <main className="mx-auto max-w-3xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">{post.category[lang]}</p>
      <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white md:text-5xl">{post.title[lang]}</h1>
      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
        <time dateTime={post.published}>{formatLongDate(post.published, locale)}</time>
        {' · '}
        {readingMinutes(post, lang)} {lang === 'es' ? 'min de lectura' : 'min read'}
        {' · '}
        {words} {lang === 'es' ? 'palabras' : 'words'}
      </p>
      <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">{post.description[lang]}</p>
      <ProseSections locale={locale} sections={post.sections} />
      <p className="mt-10 text-base leading-8 text-slate-600 dark:text-slate-300">
        {lang === 'es' ? (
          <>
            Los planes publicados están en <Link className="text-cyan-200 underline" href="/precios">precios</Link>, desde USD
            250 al mes. Si querés bajar esto a tu operación, pedí el{' '}
            <Link className="text-cyan-200 underline" href="/diagnostico">diagnóstico gratuito</Link>.
          </>
        ) : (
          <>
            Published plans are on <Link className="text-cyan-200 underline" href="/precios">pricing</Link>, from USD 250 per
            month. To bring this down to your operation, request the{' '}
            <Link className="text-cyan-200 underline" href="/diagnostico">free assessment</Link>.
          </>
        )}
      </p>
      <div className="mt-10">
        <ConversionCta locale={locale} />
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
          {lang === 'es' ? 'También puede servirte' : 'You may also want'}
        </h2>
        <ul className="mt-4 space-y-2 text-base leading-8">
          {others.map((item) => (
            <li key={item.slug}>
              <Link className="text-cyan-200 underline" href={`/blog/${item.slug}`}>
                {item.title[lang]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
    </main>
  );
}
