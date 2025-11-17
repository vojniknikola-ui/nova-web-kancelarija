import HeroSection from '../../components/HeroSection';
import FeatureGrid from '../../components/FeatureGrid';
import ServiceCard from '../../components/ServiceCard';
import TestimonialCard from '../../components/TestimonialCard';
import ArticlesPreview from '../../components/ArticlesPreview';
import CTAButton from '../../components/CTAButton';
import { getDictionary } from '../../lib/dictionary';
import { Locale } from '../../i18n-config';
import { ScaleIcon, ShieldCheckIcon, DocumentTextIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';

export const revalidate = 60;

export default async function HomePage({ params }: { params: { locale: Locale } }) {
  const dictionary = await getDictionary(params.locale);

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
  ];

  const testimonials = [
    {
      quote: "Andrić Law provided exceptional service in our corporate restructuring. Their expertise and attention to detail were outstanding.",
      author: "Marko Kovačević",
      role: "CEO, TechCorp",
      rating: 5,
    },
    {
      quote: "Professional, responsive, and highly knowledgeable. They helped us navigate complex IP issues with ease.",
      author: "Ana Petrović",
      role: "Founder, InnoTech",
      rating: 5,
    },
    {
      quote: "Outstanding legal representation. Clear communication and strategic thinking throughout our case.",
      author: "Dragan Jović",
      role: "Managing Director, Commerce Ltd",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Expert Legal Services for Your Business"
        subtitle="Professional Legal Solutions"
        description="With over 15 years of experience, Andrić Law provides comprehensive legal services to businesses and individuals across Bosnia and Herzegovina. Trust, expertise, and results-driven solutions."
        primaryCTA={{
          text: dictionary.hero.cta,
          href: `/${params.locale}/booking`,
        }}
        secondaryCTA={{
          text: "Learn More",
          href: `/${params.locale}/about`,
        }}
        background={
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary-500">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary-400 mb-4">Ready to Get Started?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Discuss Your Legal Needs
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule a consultation within 24 hours and receive a comprehensive plan that combines legal security with business agility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              href={`tel:+38761111222`}
              variant="secondary"
            >
              Call Us Now
            </CTAButton>
            <CTAButton
              href={`mailto:kontakt@andriclaw.com`}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-500"
            >
              Email Us
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}