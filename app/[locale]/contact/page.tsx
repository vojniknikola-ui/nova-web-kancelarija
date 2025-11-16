import ContactForm from '../../../components/ContactForm';
import GoogleMap from '../../../components/GoogleMap';
import { Locale } from '../../../i18n-config';
import { getDictionary } from '../../../lib/dictionary';

export const revalidate = 0;

export default async function ContactPage({ params }: { params: { locale: Locale } }) {
  const dictionary = await getDictionary(params.locale);
  return (
    <div className="bg-gradient-to-b from-white to-slate-50 py-16">
      <div className="container mx-auto grid gap-12 px-4 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-secondary">Kontakt</p>
          <h1 className="mt-4 text-4xl font-serif text-primary">{dictionary.contact.heading}</h1>
          <p className="mt-4 text-slate-600">{dictionary.contact.subheading}</p>
          <div className="mt-8 space-y-4 text-sm text-slate-600">
            <p>
              <strong>{dictionary.contact.detailsTitle}</strong>
              <br /> Ulica Maršala Tita 12, 71000 Sarajevo
            </p>
            <p>
              Telefon: <a href="tel:+38761111222" className="text-secondary">+387 61 111 222</a>
              <br /> Email: <a href="mailto:kontakt@andriclaw.com" className="text-secondary">kontakt@andriclaw.com</a>
            </p>
            <p>{dictionary.contact.workingHours}</p>
          </div>
          <div className="mt-6">
            <GoogleMap />
          </div>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h2 className="text-2xl font-serif text-primary">{dictionary.contact.formTitle}</h2>
          <p className="mt-2 text-sm text-slate-500">
            {params.locale === 'bs'
              ? 'Odgovaramo u roku od jednog radnog dana. Vaši podaci su zaštićeni i koriste se isključivo za povratni kontakt.'
              : 'We respond within one business day. Your information is confidential and used solely to follow up.'}
          </p>
          <div className="mt-6">
            <ContactForm dictionary={dictionary} />
          </div>
        </div>
      </div>
    </div>
  );
}
