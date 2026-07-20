'use client';

import {AnimatePresence, motion} from 'framer-motion';
import {useEffect, useState} from 'react';
import {useTranslations} from 'next-intl';
import {Card, CardContent} from '@/components/ui/card';

export function TestimonialCarousel() {
  const t = useTranslations('Testimonials');
  const items = [0, 1, 2].map((index) => ({
    quote: t(`items.${index}.quote`),
    name: t(`items.${index}.name`),
    role: t(`items.${index}.role`),
  }));
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % items.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [items.length]);

  return (
    <Card>
      <CardContent className="space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{opacity: 0, y: 12}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -12}}
            transition={{duration: 0.35}}
            className="space-y-4"
          >
            <p className="text-xl leading-8 text-white md:text-2xl">“{items[active].quote}”</p>
            <div>
              <p className="font-semibold text-slate-100">{items[active].name}</p>
              <p className="text-sm text-slate-400">{items[active].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={t('slideLabel', {index: index + 1})}
              className={`h-2 w-10 rounded-full ${active === index ? 'bg-cyan-300' : 'bg-white/15'}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
