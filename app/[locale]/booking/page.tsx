import AppointmentForm from '../../../components/AppointmentForm';
import GoogleMap from '../../../components/GoogleMap';
import Breadcrumb from '../../../components/Breadcrumb';
import { Locale } from '../../../i18n-config';
import { getDictionary } from '../../../lib/dictionary';

export const revalidate = 0;

export default async function BookingPage({ params }: { params: { locale: Locale } }) {
  const dictionary = await getDictionary(params.locale);

  const breadcrumbItems = [
    { label: dictionary.navigation.home, href: `/${params.locale}` },
    { label: dictionary.navigation.booking },
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-secondary-600 mb-4">Book Consultation</p>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {dictionary.booking.heading}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                {dictionary.booking.subheading}
              </p>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Contact Information</h2>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-slate-900">Address</p>
                  <p className="text-slate-600">Ulica Maršala Tita 12, 71000 Sarajevo</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Phone</p>
                  <a href="tel:+38761111222" className="text-primary-600 hover:text-primary-700 transition-colors">
                    +387 61 111 222
                  </a>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <a href="mailto:kontakt@andriclaw.com" className="text-primary-600 hover:text-primary-700 transition-colors">
                    kontakt@andriclaw.com
                  </a>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Business Hours</p>
                  <p className="text-slate-600">Monday - Friday: 09:00 - 17:00</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Our Location</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <GoogleMap />
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{dictionary.booking.formTitle}</h2>
            <p className="text-slate-600 mb-6">
              {params.locale === 'bs'
                ? 'Odgovaramo u roku od jednog radnog dana. Vaši podaci su zaštićeni i koriste se isključivo za povratni kontakt.'
                : 'We respond within one business day. Your information is confidential and used solely to follow up.'}
            </p>
            <AppointmentForm dictionary={dictionary} locale={params.locale} />
          </div>
        </div>
      </div>
    </div>
  );
}