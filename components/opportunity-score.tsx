'use client';

import {useMemo, useState} from 'react';
import {useTranslations} from 'next-intl';
import {Card, CardContent} from '@/components/ui/card';

const questions = [30, 25, 20, 25];

export function OpportunityScore() {
  const t = useTranslations('OpportunityScore');
  const [answers, setAnswers] = useState([true, true, false, true]);

  const score = useMemo(
    () => answers.reduce((total, answer, index) => total + (answer ? questions[index] : 0), 0),
    [answers]
  );

  return (
    <Card>
      <CardContent className="space-y-5">
        <div>
          <h3 className="text-2xl font-semibold text-white">{t('title')}</h3>
          <p className="mt-2 text-sm text-slate-300">{t('description')}</p>
        </div>
        {answers.map((answer, index) => (
          <label key={index} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200">
            <span>{t(`questions.${index}`)}</span>
            <input
              checked={answer}
              type="checkbox"
              className="size-4 accent-cyan-400"
              onChange={(event) =>
                setAnswers((current) =>
                  current.map((value, currentIndex) =>
                    currentIndex === index ? event.target.checked : value
                  )
                )
              }
            />
          </label>
        ))}
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">{t('score')}</p>
          <p className="mt-2 text-3xl font-semibold text-white">{score}/100</p>
        </div>
      </CardContent>
    </Card>
  );
}
