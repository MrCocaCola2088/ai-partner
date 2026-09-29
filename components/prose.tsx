import type {ContentSection} from '@/lib/content-types';

function pick(locale: string) {
  return locale === 'en' ? 'en' : 'es';
}

export function ProseParagraphs({locale, paragraphs}: {locale: string; paragraphs: Array<{es: string; en: string}>}) {
  const lang = pick(locale);
  return (
    <div className="space-y-4">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.es} className="text-base leading-8 text-slate-600 dark:text-slate-300">
          {paragraph[lang]}
        </p>
      ))}
    </div>
  );
}

export function ProseSections({locale, sections}: {locale: string; sections: ContentSection[]}) {
  const lang = pick(locale);
  return (
    <div className="mt-10 space-y-10">
      {sections.map((section) => (
        <section key={section.heading?.es ?? section.paragraphs[0]?.es}>
          {section.heading && (
            <h2 className="text-2xl font-semibold text-slate-950 dark:text-white md:text-3xl">{section.heading[lang]}</h2>
          )}
          <div className={section.heading ? 'mt-4' : ''}>
            <ProseParagraphs locale={locale} paragraphs={section.paragraphs} />
          </div>
        </section>
      ))}
    </div>
  );
}
