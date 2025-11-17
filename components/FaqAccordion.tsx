'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FaqItem {
  question: string;
  answer: string;
  helper?: string;
}

interface FaqAccordionProps {
  title: string;
  subtitle?: string;
  items: FaqItem[];
}

export default function FaqAccordion({ title, subtitle, items }: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleItem = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary-600">{subtitle}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Odgovaramo na ključna pitanja koja dobijamo od klijenata prije potpisivanja ugovora.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-slate-600">
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                <p className="font-semibold text-slate-900">Simetričan prikaz informacija</p>
                <p className="mt-1">
                  Najtraženije teme su grupisane i lako dostupne i na mobilnim uređajima i na desktopu.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/70 p-4">
                <p className="font-semibold text-slate-900">Brzi odziv</p>
                <p className="mt-1">Prosječno vrijeme prvog odgovora: 2h u toku radnog vremena.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white shadow-xl">
              {items.map((item, index) => {
                const isActive = index === activeIndex;
                const panelId = `faq-panel-${index}`;
                const buttonId = `faq-button-${index}`;

                return (
                  <div key={item.question}>
                    <button
                      type="button"
                      id={buttonId}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={isActive}
                      onClick={() => toggleItem(index)}
                    >
                      <div>
                        <p className="text-lg font-semibold text-slate-900">{item.question}</p>
                        {item.helper && <p className="text-sm text-slate-500">{item.helper}</p>}
                      </div>
                      <ChevronDownIcon
                        className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${
                          isActive ? 'rotate-180 text-primary-500' : ''
                        }`}
                      />
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`grid overflow-hidden px-6 transition-[grid-template-rows] duration-200 ease-in-out ${
                        isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden pb-6 text-slate-600">
                        <p className="leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
