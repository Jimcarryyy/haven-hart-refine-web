import { processSteps } from '@/data/process';
import { getIcon } from '@/lib/icons';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';

const Process = () => {
  return (
    <section id="process" className="py-20 bg-pearl">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="How We Work"
          title="Our Advisory Process"
          description="A disciplined, client-centric approach that delivers results at every stage of your real estate journey."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => {
            const Icon = getIcon(step.iconName);
            return (
              <ScrollReveal key={step.step} delay={index * 0.1}>
                <div className="glass-card rounded-xl p-8 text-center h-full relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-charcoal text-white rounded-full text-xl font-bold mb-6">
                    {step.step}
                  </div>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-gray-300/20 rounded-full mb-4">
                    <Icon size={24} className="text-charcoal" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
