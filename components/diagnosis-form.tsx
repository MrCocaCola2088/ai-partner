'use client';

import {FormEvent, useState} from 'react';
import {Button} from '@/components/ui/button';
import {siteConfig} from '@/lib/site';

const copy = {
  es: {
    name: 'Nombre',
    company: 'Empresa',
    phone: 'Celular',
    email: 'Correo',
    process: 'Qué necesitás que haga el agente',
    submit: 'Enviar por WhatsApp',
    note: 'El formulario abre WhatsApp con tu mensaje. También podés escribir a',
    success: 'Se abrió WhatsApp con tu consulta. Si no lo ves, revisá el bloqueador de ventanas.',
  },
  en: {
    name: 'Name',
    company: 'Company',
    phone: 'Mobile',
    email: 'Email',
    process: 'What you need the agent to do',
    submit: 'Send via WhatsApp',
    note: 'The form opens WhatsApp with your message. You can also email',
    success: 'WhatsApp opened with your inquiry. If you do not see it, check the pop-up blocker.',
  },
} as const;

export function DiagnosisForm({locale}: {locale: string}) {
  const t = locale === 'en' ? copy.en : copy.es;
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      locale === 'en' ? 'Hi, I want my WhatsApp agent.' : 'Hola, quiero mi agente de WhatsApp.',
      `${t.name}: ${String(data.get('name') ?? '')}`,
      `${t.company}: ${String(data.get('company') ?? '')}`,
      `${t.phone}: ${String(data.get('phone') ?? '')}`,
      `${t.email}: ${String(data.get('email') ?? '')}`,
      `${t.process}: ${String(data.get('process') ?? '')}`,
    ];
    const href = `${siteConfig.whatsappUrl}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(href, '_blank', 'noopener,noreferrer');
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-sm text-slate-200">
          {t.name}
          <input
            required
            name="name"
            autoComplete="name"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300"
          />
        </label>
        <label className="block text-sm text-slate-200">
          {t.company}
          <input
            required
            name="company"
            autoComplete="organization"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300"
          />
        </label>
        <label className="block text-sm text-slate-200">
          {t.phone}
          <input
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300"
          />
        </label>
        <label className="block text-sm text-slate-200">
          {t.email}
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300"
          />
        </label>
      </div>
      <label className="block text-sm text-slate-200">
        {t.process}
        <textarea
          required
          name="process"
          rows={5}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan-300"
        />
      </label>
      <Button type="submit">{t.submit}</Button>
      <p className="text-sm leading-7 text-slate-300">
        {t.note}{' '}
        <a className="text-cyan-200 underline" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>
        .
      </p>
      {sent && <p className="text-sm text-cyan-100">{t.success}</p>}
    </form>
  );
}
