import {faqJsonLd} from '@/lib/seo';

export function FaqList({
  items,
}: {
  items: Array<{question: string; answer: string}>;
}) {
  const jsonLd = faqJsonLd(items);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="rounded-3xl border border-white/10 bg-white/8 p-6 backdrop-blur dark:bg-white/6"
        >
          <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950 dark:text-white">
            {item.question}
          </summary>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.answer}</p>
        </details>
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
    </div>
  );
}
