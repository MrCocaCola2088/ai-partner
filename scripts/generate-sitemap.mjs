import {readFileSync, writeFileSync} from 'node:fs';

const site = 'https://ai-partner.website';
const lastmod = '2026-09-29';

function slugs(file) {
  const text = readFileSync(new URL(file, import.meta.url), 'utf8');
  return [...text.matchAll(/slug: '([^']+)'/g)].map((match) => match[1]);
}

const blogSlugs = [
  ...slugs('../lib/blog-posts-a.ts'),
  ...slugs('../lib/blog-posts-b.ts'),
  ...slugs('../lib/blog-posts-c.ts'),
];
const landingSlugs = slugs('../lib/landings.ts');

const esPages = [
  ['/', '1.0'],
  ['/precios', '0.9'],
  ['/diagnostico', '0.9'],
  ...landingSlugs.map((slug) => [`/${slug}`, '0.8']),
  ['/blog', '0.7'],
  ['/tecnologias', '0.6'],
  ...blogSlugs.map((slug) => [`/blog/${slug}`, '0.6']),
];

function publicPath(path) {
  if (path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

const urls = esPages.flatMap(([path, priority]) => {
  const english = path === '/' ? '/en/' : `/en${publicPath(path)}`;
  return [
    {loc: `${site}${publicPath(path)}`, priority},
    {loc: `${site}${english}`, priority: '0.4'},
  ];
});

const body = urls
  .map(
    (url) =>
      `  <url><loc>${url.loc}</loc><lastmod>${lastmod}</lastmod><priority>${url.priority}</priority></url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);

const known = {
  pages: esPages.map(([path]) => path).filter((path) => path !== '/' && !path.startsWith('/blog/')),
  blogSlugs,
};
writeFileSync(new URL('../lib/known-paths.json', import.meta.url), JSON.stringify(known, null, 2) + '\n');
console.log(`Wrote ${urls.length} sitemap URLs (${blogSlugs.length} articles, ${landingSlugs.length} landing pages).`);
