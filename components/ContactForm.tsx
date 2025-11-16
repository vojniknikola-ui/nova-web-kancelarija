'use client';

import { FormEvent, useState } from 'react';
import type { AwaitedReturn } from '../types/utils';

type ContactFormProps = {
  dictionary: AwaitedReturn<typeof import('../lib/dictionary')['getDictionary']>;
};

export default function ContactForm({ dictionary }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Request failed');
      setStatus('success');
      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-slate-600" htmlFor="name">
          {dictionary.contactForm.name}
        </label>
        <input
          id="name"
          name="name"
          required
          className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-slate-600" htmlFor="email">
            {dictionary.contactForm.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-600" htmlFor="phone">
            {dictionary.contactForm.phone}
          </label>
          <input id="phone" name="phone" className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-600" htmlFor="message">
          {dictionary.contactForm.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary/90"
      >
        {status === 'loading' ? dictionary.contactForm.sending : dictionary.contactForm.sendMessage}
      </button>
      {status === 'success' && <p className="text-sm text-green-600">{dictionary.contactForm.success}</p>}
      {status === 'error' && <p className="text-sm text-red-600">{dictionary.contactForm.error}</p>}
    </form>
  );
}
