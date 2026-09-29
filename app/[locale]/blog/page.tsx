import type {Metadata} from 'next';
import {setRequestLocale} from 'next-intl/server';
import {Badge} from '@/components/ui/badge';
import {Card, CardContent} from '@/components/ui/card';
import {Link} from '@/i18n/navigation';
import {blogPosts, readingMinutes} from '@/lib/blog-posts';
import {pageMetadata, routeSeo} from '@/lib/seo';
import {formatLongDate} from '@/lib/site';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params;
  const copy = locale === 'en' ? routeSeo.blog.en : routeSeo.blog.es;
  return pageMetadata(locale, '/blog', copy);
}

export default async function BlogIndexPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const es = locale !== 'en';
  const lang = es ? 'es' : 'en';

  return (
    <main className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="max-w-3xl">
        <Badge>Blog</Badge>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white md:text-5xl">
          {es ? 'Blog de IA para empresas en Bolivia' : 'AI blog for businesses in Bolivia'}
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
          {es
            ? 'Guías y comparativas para aplicar inteligencia artificial en PyMEs de Bolivia y Latinoamérica. Los ejemplos son escenarios ilustrativos, no resultados de clientes.'
            : 'Guides and comparisons for applying artificial intelligence in SMBs in Bolivia and Latin America. Examples are illustrative scenarios, not client results.'}
        </p>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {blogPosts.map((post) => (
          <Card key={post.slug}>
            <CardContent className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">{post.category[lang]}</p>
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
                <Link href={`/blog/${post.slug}`} className="hover:text-cyan-200">
                  {post.title[lang]}
                </Link>
              </h2>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{post.description[lang]}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                <time dateTime={post.published}>{formatLongDate(post.published, locale)}</time>
                {' · '}
                {readingMinutes(post, lang)} {es ? 'min de lectura' : 'min read'}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
