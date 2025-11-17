import HeroSection from '../../components/HeroSection';
import FeatureGrid from '../../components/FeatureGrid';
import ServiceCard from '../../components/ServiceCard';
import TestimonialCard from '../../components/TestimonialCard';
import ArticlesPreview from '../../components/ArticlesPreview';
import CTAButton from '../../components/CTAButton';
import WhatsAppButton from '../../components/WhatsAppButton';
import CaseStudyShowcase from '../../components/CaseStudyShowcase';
import FaqAccordion from '../../components/FaqAccordion';
import { getDictionary } from '../../lib/dictionary';
import { Locale } from '../../i18n-config';
import { ScaleIcon, ShieldCheckIcon, DocumentTextIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';

export const revalidate = 60;

const WHATSAPP_NUMBER = '+387 61 111 222';
const WHATSAPP_E164 = '+38761111222';
const DEFAULT_WHATSAPP_MESSAGE = 'Pozdrav! Želio/željela bih da zakažem konsultaciju sa Andrić Law timom.';
const WHATSAPP_DIGITS = WHATSAPP_E164.replace('+', '');
const buildWhatsAppLink = (message?: string) => {
  const query = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${WHATSAPP_DIGITS}${query}`;
};

const heroSupportingPoints = [
  {
    title: 'Cross-border expertise',
    description: 'Tailored solutions for investors and founders operating throughout the region.',
  },
  {
    title: 'Regulatory clarity',
    description: 'We translate complex legislation into clear, actionable guidance for your team.',
  },
  {
    title: 'Dedicated partner',
    description: 'One point of contact coordinating tax, corporate, and litigation strategies.',
  },
  {
    title: '24h response window',
    description: 'Urgent matters receive a written action plan in less than one business day.',
  },
] as const;

const heroStats = [
  { value: '15+', label: 'Years in practice', helper: 'Led by senior partners' },
  { value: '250+', label: 'Corporate clients', helper: 'Ongoing advisory relationships' },
  { value: '92%', label: 'Referral rate', helper: 'Clients who recommend us' },
] as const;

const trustIndicators = [
  'Recognized by Sarajevo Bar Association',
  'ISO-aligned internal processes',
  'Chambers Europe – Rising Law Firm 2024',
] as const;

const heroContactCard = {
  badge: 'Immediate availability',
  title: 'Speak directly with a partner',
  description: 'Book a consultation or request a case assessment. We provide an actionable roadmap within 24 hours.',
  details: [
    {
      label: 'Call us',
      value: WHATSAPP_NUMBER,
      href: `tel:${WHATSAPP_E164}`,
    },
    {
      label: 'WhatsApp',
      value: WHATSAPP_NUMBER,
      href: buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE),
    },
    {
      label: 'Email',
      value: 'kontakt@andriclaw.com',
      href: 'mailto:kontakt@andriclaw.com',
    },
    {
      label: 'Office hours',
      value: 'Mon–Fri · 08:00–18:00 CET',
    },
  ],
  footer: 'Average response time during business hours: 2h',
  whatsappCTA: {
    number: WHATSAPP_NUMBER,
    label: 'WhatsApp konsultacija',
    message: DEFAULT_WHATSAPP_MESSAGE,
  },
} as const;

const services = [
  {
    title: 'Corporate Law',
    description: 'Comprehensive legal services for businesses of all sizes, from startups to established corporations.',
    icon: <ScaleIcon className="w-6 h-6" />,
  },
  {
    title: 'Intellectual Property',
    description: 'Protect your innovations, trademarks, and creative works with our expert IP legal services.',
    icon: <ShieldCheckIcon className="w-6 h-6" />,
  },
  {
    title: 'Employment Law',
    description: 'Navigate workplace legal matters with confidence, from contracts to dispute resolution.',
    icon: <DocumentTextIcon className="w-6 h-6" />,
  },
  {
    title: 'Real Estate Law',
    description: 'Expert guidance through property transactions, leases, and real estate disputes.',
    icon: <ScaleIcon className="w-6 h-6" />,
  },
  {
    title: 'Tax Law',
    description: 'Strategic tax planning and compliance services to optimize your financial position.',
    icon: <DocumentTextIcon className="w-6 h-6" />,
  },
  {
    title: 'Litigation',
    description: 'Aggressive representation in court with a track record of successful outcomes.',
    icon: <ShieldCheckIcon className="w-6 h-6" />,
  },
] as const;

const testimonials = [
  {
    quote:
      'Andrić Law provided exceptional service in our corporate restructuring. Their expertise and attention to detail were outstanding.',
    author: 'Marko Kovačević',
    role: 'CEO, TechCorp',
    rating: 5,
  },
  {
    quote: 'Professional, responsive, and highly knowledgeable. They helped us navigate complex IP issues with ease.',
    author: 'Ana Petrović',
    role: 'Founder, InnoTech',
    rating: 5,
  },
  {
    quote: 'Outstanding legal representation. Clear communication and strategic thinking throughout our case.',
    author: 'Dragan Jović',
    role: 'Managing Director, Commerce Ltd',
    rating: 5,
  },
] as const;

const caseStudies = [
  {
    title: 'Regulatory navigation for digital bank entry',
    industry: 'Fintech',
    challenge:
      'Regional fintech needed clarity to obtain a digital banking licence and synchronize compliance across Bosnia and Herzegovina and Croatia before launch.',
    approach:
      'Formed a cross-border taskforce, mapped regulatory dependencies, and created bilingual documentation for both regulators with proactive updates every 48h.',
    outcome: 'Licence granted ahead of schedule and launch accelerated by three months with zero remediation requests.',
    metrics: [
      { value: '3', label: 'jurisdictions', helper: 'coordinated filings' },
      { value: '0', label: 'compliance gaps', helper: 'after regulator audit' },
      { value: '12%', label: 'cost savings', helper: 'versus in-house plan' },
    ],
    quote:
      'Njihov tim je upravljao regulatornim zahtjevima kao da su dio naše kompanije. Bili smo spremni prije konkurencije.',
    quoteAuthor: 'Vedran Pavlović',
    quoteRole: 'COO, NovaPay',
  },
  {
    title: 'Strategic defence in cross-border IP dispute',
    industry: 'Technology',
    challenge:
      'Brzorastući SaaS scaleup suočio se sa hitnom sudskom zabranom koja je prijetila obustavom servisa i gubitkom ključnih partnera.',
    approach:
      'U roku od 72 sata pripremili smo kombinovanu strategiju: privremene mjere, forenzičko prikupljanje dokaza i pregovore za licenciranje.',
    outcome:
      'Privremena zabrana je povučena, postignut je licencni dogovor i kompanija je zadržala međunarodne partnere bez prekida usluge.',
    metrics: [
      { value: '72h', label: 'response time', helper: 'od inicijalnog poziva' },
      { value: '5', label: 'partnera', helper: 'zadržano bez penala' },
      { value: '€1.2M', label: 'value secured', helper: 'u godišnjem ARR-u' },
    ],
    quote: 'Njihova kombinacija sporazuma i procesnog znanja spasila je naše ključne ugovore.',
    quoteAuthor: 'Sara Bandić',
    quoteRole: 'General Counsel, Northwind SaaS',
  },
] as const;

const faqItems = [
  {
    question: 'Kako izgleda prvi sastanak i šta trebam pripremiti?',
    answer:
      'Na uvodnom pozivu prolazimo kroz ciljeve i očekivanja, dokumenata može biti minimalno. Nakon razgovora dobijate pisani rezime, listu potrebne dokumentacije i jasan plan narednih koraka.',
    helper: '30 minuta preko videopoziva ili uživo',
  },
  {
    question: 'Radite li na fiksnim ili varijabilnim honorarima?',
    answer:
      'Za strateške projekte nudimo kombinovane modele: fiksni iznos za pripremu i mapiranje, zatim transparentne milestone tranše ili paket sati. Sudski sporovi zadržavaju standardne tarife u skladu sa komorskim pravilima.',
  },
  {
    question: 'Koliko brzo mogu dobiti pisani savjet?',
    answer:
      'Za hitne predmete šaljemo inicijalni memorandum u roku od 24 sata. Kompleksne analize imaju definisan rok u planu projekta, uz međufazna ažuriranja kako biste mogli donositi odluke bez čekanja završnog izvještaja.',
  },
  {
    question: 'Da li sarađujete sa internim timovima i drugim kancelarijama?',
    answer:
      'Da. Često preuzimamo ulogu koordinacionog partnera i radimo rame uz rame sa internim pravnicima, finansijama ili eksternim kancelarijama kako bismo obezbijedili jedinstvenu strategiju i tok komunikacije.',
  },
] as const;

export default async function HomePage({ params }: { params: { locale: Locale } }) {
  const dictionary = await getDictionary(params.locale);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Expert Legal Services for Your Business"
        subtitle="Professional Legal Solutions"
        description="With over 15 years of experience, Andrić Law provides comprehensive legal services to businesses and individuals across Bosnia and Herzegovina. Trust, expertise, and results-driven solutions."
        eyebrow="Boutique law firm based in Sarajevo"
        supportingPoints={heroSupportingPoints}
        stats={heroStats}
        trustIndicators={trustIndicators}
        contactCard={heroContactCard}
        primaryCTA={{
          text: dictionary.hero.cta,
          href: `/${params.locale}/booking`,
        }}
        secondaryCTA={{
          text: "Learn More",
          href: `/${params.locale}/about`,
        }}
        background={
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
            <div className="absolute inset-y-0 right-0 h-full w-1/2 bg-gradient-to-bl from-secondary-100 via-transparent to-primary-50 opacity-70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(13,61,96,0.08),_transparent_55%)]" />
          </>
        }
      />

      {/* Services Overview */}
      <FeatureGrid
        title="Our Practice Areas"
        subtitle="Comprehensive Legal Services"
        columns={3}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </FeatureGrid>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {dictionary.about.heading}
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {dictionary.about.mission}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <ClockIcon className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">15+ Years Experience</h3>
                    <p className="text-slate-600">Serving clients across Bosnia and Herzegovina</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <StarIcon className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Proven Track Record</h3>
                    <p className="text-slate-600">Successful outcomes in complex legal matters</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ShieldCheckIcon className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Client-Focused Approach</h3>
                    <p className="text-slate-600">Personalized solutions tailored to your needs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Our Process</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Initial Consultation</h4>
                    <p className="text-slate-600 text-sm">We assess your goals and legal needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Strategic Planning</h4>
                    <p className="text-slate-600 text-sm">We develop a comprehensive legal strategy</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Implementation</h4>
                    <p className="text-slate-600 text-sm">We execute the plan with clear communication</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <CaseStudyShowcase
        title="Mjerljivi rezultati za regionalne lidere"
        subtitle="Case studies"
        description="Od regulatornih projekata do hitnih sudskih postupaka, gradimo planove koji štite reputaciju i otključavaju rast."
        caseStudies={caseStudies}
        highlight={
          <div>
            <p className="text-sm font-semibold text-white">92% klijenata dolazi putem preporuka</p>
            <p className="mt-2 text-slate-200">
              Svaki projekat ima jedinstveni dashboard za status, rokove i odgovorne osobe.
            </p>
          </div>
        }
      />

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary-600 mb-4">Client Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What Our Clients Say</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <ArticlesPreview locale={params.locale} />

      {/* FAQ */}
      <FaqAccordion
        title="Česta pitanja prije saradnje"
        subtitle="Transparentnost"
        items={faqItems}
      />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-secondary-200">Ready to Get Started?</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Let's Discuss Your Legal Needs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-100 leading-relaxed">
            Schedule a consultation within 24 hours and receive a comprehensive plan that combines legal security with business agility.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            <CTAButton href={`tel:${WHATSAPP_E164}`} variant="secondary" size="lg">
              Call Us Now
            </CTAButton>
            <CTAButton
              href={`mailto:kontakt@andriclaw.com`}
              variant="outline"
              size="lg"
              className="border-white/70 text-white hover:bg-white hover:text-primary-700"
            >
              Email Us
            </CTAButton>
            <WhatsAppButton
              phoneNumber={WHATSAPP_NUMBER}
              message={DEFAULT_WHATSAPP_MESSAGE}
              label="WhatsApp poruka"
              size="lg"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </section>

      <WhatsAppButton
        phoneNumber={WHATSAPP_NUMBER}
        message={DEFAULT_WHATSAPP_MESSAGE}
        label="Pišite na WhatsApp"
        floating
      />
    </div>
  );
}