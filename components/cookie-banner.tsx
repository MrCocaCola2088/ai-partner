'use client';

import {useEffect, useState} from 'react';
import {useTranslations} from 'next-intl';
import {Button} from '@/components/ui/button';

const STORAGE_KEY = 'ai-partner-cookie-consent';

export function CookieBanner() {
  const t = useTranslations('CookieBanner');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!window.localStorage.getItem(STORAGE_KEY));
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-3xl border border-white/10 bg-slate-950/90 p-4 text-sm text-slate-200 shadow-2xl backdrop-blur-xl dark:bg-slate-950/90 sm:flex sm:items-center sm:justify-between sm:gap-4">
      <p>{t('description')}</p>
      <Button
        className="mt-3 sm:mt-0"
        onClick={() => {
          window.localStorage.setItem(STORAGE_KEY, 'accepted');
          setVisible(false);
        }}
        type="button"
      >
        {t('accept')}
      </Button>
    </div>
  );
}
