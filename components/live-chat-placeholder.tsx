import {MessageCircleMore} from 'lucide-react';
import {useTranslations} from 'next-intl';

export function LiveChatPlaceholder() {
  const t = useTranslations('LiveChat');

  return (
    <div className="fixed bottom-4 right-4 z-40 hidden items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-sm text-slate-100 shadow-2xl backdrop-blur lg:flex">
      <MessageCircleMore className="size-4 text-cyan-300" />
      <span>{t('label')}</span>
    </div>
  );
}
