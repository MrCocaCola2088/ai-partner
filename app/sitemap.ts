import type {MetadataRoute} from 'next';
import {siteConfig} from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/pricing'];

  return siteConfig.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteConfig.siteUrl}/${locale}${route}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          es: `${siteConfig.siteUrl}/es${route}`,
          en: `${siteConfig.siteUrl}/en${route}`,
        },
      },
    }))
  );
}
