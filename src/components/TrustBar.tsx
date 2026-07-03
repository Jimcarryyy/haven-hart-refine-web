import { partners } from '@/data/partners';
import ScrollReveal from '@/components/ScrollReveal';

const TrustBar = () => {
  return (
    <section className="py-12 bg-white border-b border-blue-gray-300/20" aria-label="Featured in">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="text-center text-cool-gray text-sm uppercase tracking-widest mb-8">
            Trusted by leading institutions & publications
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {partners.map((partner) => (
              <span
                key={partner.name}
                className="font-playfair text-lg md:text-xl text-slate/60 hover:text-charcoal transition-colors"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustBar;
