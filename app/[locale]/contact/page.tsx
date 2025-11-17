import ContactForm from '../../../components/ContactForm';
import ContactCard from '../../../components/ContactCard';
import GoogleMap from '../../../components/GoogleMap';
import Breadcrumb from '../../../components/Breadcrumb';
import { Locale } from '../../../i18n-config';
import { getDictionary } from '../../../lib/dictionary';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export const revalidate = 0;

export default async function ContactPage({ params }: { params: { locale: Locale } }) {
  const dictionary = await getDictionary(params.locale);

  const breadcrumbItems = [
    { label: dictionary.navigation.home, href: `/${params.locale}` },
    { label: dictionary.navigation.contact },
  ];

  const contactCards = [
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Phone",
      content: "+387 61 111 222",
      href: "tel:+38761111222",
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: "Email",
      content: "kontakt@andriclaw.com",
      href: "mailto:kontakt@andriclaw.com",
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: "Address",
      content: "Ulica Maršala Tita 12, 71000 Sarajevo",
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: "Business Hours",
      content: "Monday - Friday: 09:00 - 17:00",
    },
  ];

  const faqs = [
    {
      question: "How quickly can I expect a response?",
      answer: "We respond to all inquiries within one business day.",
    },
    {
      question: "Do you offer virtual consultations?",
      answer: "Yes, we provide both in-person and virtual consultation options.",
    },
    {
      question: "What languages do you work in?",
      answer: "We provide services in both Bosnian and English.",
    },
    {
      question: "Do you handle international cases?",
      answer: "Yes, we have experience with cross-border legal matters.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Spacing for Fixed Header */}
      <div className="h-16" />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb items={breadcrumbItems} locale={params.locale} />
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-secondary-600 mb-4">Get In Touch</p>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {dictionary.contact.heading}
              </h1>
              <p className="text-lg text-slate-600">
                {dictionary.contact.subheading}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{dictionary.contact.formTitle}</h2>
              <p className="text-slate-600 mb-6">
                {params.locale === 'bs'
                  ? 'Odgovaramo u roku od jednog radnog dana. Vaši podaci su zaštićeni i koriste se isključivo za povratni kontakt.'
                  : 'We respond within one business day. Your information is confidential and used solely to follow up.'}
              </p>
              <ContactForm dictionary={dictionary} locale={params.locale} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact Information</h2>
            <p className="text-slate-600">Multiple ways to reach us</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, index) => (
              <ContactCard
                key={index}
                icon={card.icon}
                title={card.title}
                content={card.content}
                href={card.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Location</h2>
            <div className="aspect-video rounded-lg overflow-hidden">
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600">Common questions about our services</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <summary className="font-semibold text-slate-900 cursor-pointer hover:text-primary-600 transition-colors">
                    {faq.question}
                  </summary>
                  <p className="text-slate-600 mt-3 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}