'use client';

import {useLocale} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';
import {routing} from '@/i18n/routing';
import {cn} from '@/lib/utils';

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center rounded-full border border-white/10 bg-white/6 p-1 text-xs font-semibold text-slate-200 backdrop-blur">
      {routing.locales.map((item) => (
        <Link
          key={item}
          href={pathname}
          locale={item}
          className={cn(
            'rounded-full px-3 py-2 transition-colors',
            locale === item
              ? 'bg-white text-slate-950'
              : 'text-slate-300 hover:text-white'
          )}
        >
          {item.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
