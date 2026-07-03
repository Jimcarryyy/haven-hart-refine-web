import { aboutContent, milestones, values } from '@/data/about';
import { getIcon } from '@/lib/icons';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <SectionHeading
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.title}
            description={aboutContent.mission}
          />
          <blockquote className="text-2xl font-playfair italic text-charcoal border-l-4 border-blue-gray-300 pl-6 max-w-2xl mx-auto text-center mb-16">
            &ldquo;{aboutContent.quote}&rdquo;
          </blockquote>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = getIcon(value.iconName);
            return (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="glass-card p-8 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-gray-300/20 rounded-full mb-6">
                    <Icon size={32} className="text-charcoal" />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-4">
                    {value.title}
                  </h3>
                  <p className="text-slate leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="max-w-3xl mx-auto mb-20">
          <h3 className="font-playfair text-3xl font-bold text-charcoal text-center mb-8">
            Our Approach
          </h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {aboutContent.approach.map((item) => (
              <li key={item} className="flex items-start text-slate">
                <div className="w-2 h-2 bg-blue-gray-300 rounded-full mr-3 mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto">
          <h3 className="font-playfair text-3xl font-bold text-charcoal text-center mb-12">
            Our Journey
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <ScrollReveal key={milestone.year} delay={index * 0.05}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-charcoal text-white rounded-full text-xl font-bold mb-4">
                    {milestone.year.slice(-2)}
                  </div>
                  <h4 className="font-playfair text-xl font-semibold text-charcoal mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-slate text-sm leading-relaxed">{milestone.description}</p>
                  <p className="text-cool-gray text-xs mt-2">{milestone.year}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
