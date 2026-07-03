import { useState } from 'react';
import { services } from '@/data/services';
import { getIcon } from '@/lib/icons';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const ActiveIcon = getIcon(services[activeService].iconName);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="What We Offer"
          title="Advisory Services"
          description="Comprehensive real estate advisory services tailored to the unique needs of sophisticated investors and developers."
        />

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {services.map((service, index) => {
              const Icon = getIcon(service.iconName);
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeService === index
                      ? 'bg-charcoal text-white shadow-lg'
                      : 'bg-pearl text-slate hover:bg-blue-gray-300/20'
                  }`}
                >
                  <Icon size={18} />
                  {service.title}
                </button>
              );
            })}
          </div>

          <ScrollReveal>
            <div className="glass-card rounded-xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-gray-300/20 rounded-full mb-4">
                    <ActiveIcon size={28} className="text-charcoal" />
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-charcoal mb-4">
                    {services[activeService].title}
                  </h3>
                  <p className="text-xl text-slate leading-relaxed mb-4">
                    {services[activeService].description}
                  </p>
                  <p className="text-charcoal font-medium mb-6 italic">
                    {services[activeService].outcome}
                  </p>

                  <ul className="space-y-3">
                    {services[activeService].features.map((feature) => (
                      <li key={feature} className="flex items-center text-slate">
                        <div className="w-2 h-2 bg-blue-gray-300 rounded-full mr-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative">
                  <div className="glass-card p-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-charcoal/5 rounded-full mb-4">
                      <ActiveIcon size={40} className="text-charcoal" />
                    </div>
                    <h4 className="font-playfair text-xl font-semibold text-charcoal mb-2">
                      Expert Guidance
                    </h4>
                    <p className="text-slate">
                      Leveraging decades of experience to deliver exceptional results for our
                      discerning clientele.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Services;
