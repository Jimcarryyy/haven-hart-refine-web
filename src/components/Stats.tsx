import { stats } from '@/data/stats';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';

const Stats = () => {
  return (
    <section id="stats" className="py-20 bg-pearl" aria-label="Key statistics">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="By the Numbers"
          title="A Track Record of Excellence"
          description="Measurable results that reflect our commitment to exceptional advisory."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="glass-card rounded-xl p-8 text-center">
                <div className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-2">
                  {stat.prefix}
                  {stat.value}
                  {stat.suffix}
                </div>
                <p className="text-slate">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
