'use client';

import {motion, useInView} from 'framer-motion';
import {useEffect, useMemo, useRef, useState} from 'react';
import {useTranslations} from 'next-intl';
import {Card, CardContent} from '@/components/ui/card';

const COUNT_UP_DURATION_MS = 900;
const COUNT_UP_INTERVAL_MS = 16;

function StatCard({
  target,
  suffix,
  label,
  delay,
}: {
  target: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {once: true, margin: '-80px'});
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (COUNT_UP_DURATION_MS / COUNT_UP_INTERVAL_MS);
    const timer = window.setInterval(() => {
      start += increment;
      if (start >= target) {
        setValue(target);
        window.clearInterval(timer);
      } else {
        setValue(Math.round(start));
      }
    }, COUNT_UP_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [inView, target]);

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{delay}}
    >
      <Card>
        <CardContent className="space-y-2">
          <div ref={ref} className="text-4xl font-semibold text-white">
            {value}
            {suffix}
          </div>
          <p className="text-sm text-slate-300">{label}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function AnimatedStats() {
  const t = useTranslations('Stats');
  const items = useMemo(
    () => [
      {value: 120, suffix: '+', label: t('hours')},
      {value: 38, suffix: '%', label: t('efficiency')},
      {value: 3, suffix: 'x', label: t('roi')},
    ],
    [t]
  );

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <StatCard
          key={item.label}
          target={item.value}
          suffix={item.suffix}
          label={item.label}
          delay={index * 0.08}
        />
      ))}
    </div>
  );
}
