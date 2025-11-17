'use client';

import { FormEvent, useState } from 'react';
import { useReCaptcha } from 'next-recaptcha-v3';
import type { AwaitedReturn } from '../types/utils';

type AppointmentFormProps = {
  dictionary: AwaitedReturn<typeof import('../lib/dictionary')['getDictionary']>;
  locale: string;
};

export default function AppointmentForm({ dictionary, locale }: AppointmentFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [consent, setConsent] = useState(false);
  const { executeRecaptcha } = useReCaptcha();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent) {
      alert(locale === 'bs' ? 'Morate prihvatiti obradu podataka.' : 'You must accept data processing.');
      return;
    }
    setStatus('loading');

    const recaptchaToken = await executeRecaptcha('appointment');

    const formData = new FormData(event.currentTarget);
    const payload = {
      ...Object.fromEntries(formData.entries()),
      recaptchaToken,
    };

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Request failed');
      setStatus('success');
      event.currentTarget.reset();
      setConsent(false);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  }

  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-slate-600" htmlFor="name">
          {dictionary.bookingForm.name}
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
            {dictionary.bookingForm.email}
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
            {dictionary.bookingForm.phone}
          </label>
          <input
            id="phone"
            name="phone"
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3"
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-slate-600" htmlFor="date">
            {dictionary.bookingForm.date}
          </label>
          <input
            id="date"
            name="date"
            type="date"
            min={today}
            required
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-600" htmlFor="time">
            {dictionary.bookingForm.time}
          </label>
          <select
            id="time"
            name="time"
            required
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3"
          >
            <option value="">Select time</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-600" htmlFor="service">
          {dictionary.bookingForm.service}
        </label>
        <select
          id="service"
          name="service"
          required
          className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3"
        >
          <option value="">
            {locale === 'bs' ? 'Odaberite vrstu usluge' : 'Select service type'}
          </option>
          <option value="business-law">
            {locale === 'bs' ? 'Poslovno pravo' : 'Business law'}
          </option>
          <option value="litigation">
            {locale === 'bs' ? 'Parnice i sporovi' : 'Litigation and disputes'}
          </option>
          <option value="startups">
            {locale === 'bs' ? 'Startupi i inovacije' : 'Startups and innovations'}
          </option>
          <option value="consultation">
            {locale === 'bs' ? 'Opšta konsultacija' : 'General consultation'}
          </option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-600" htmlFor="message">
          {dictionary.bookingForm.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-3"
        />
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mr-2"
            required
          />
          <span className="text-sm text-slate-600">
            {locale === 'bs'
              ? 'Prihvatam obradu ličnih podataka u skladu sa politikom privatnosti.'
              : 'I accept the processing of personal data in accordance with the privacy policy.'}
          </span>
        </label>
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary/90"
      >
        {status === 'loading' ? dictionary.bookingForm.sending : dictionary.bookingForm.bookAppointment}
      </button>
      {status === 'success' && <p className="text-sm text-green-600">{dictionary.bookingForm.success}</p>}
      {status === 'error' && <p className="text-sm text-red-600">{dictionary.bookingForm.error}</p>}
    </form>
  );
}