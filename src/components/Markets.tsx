import { markets } from '@/data/markets';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Markets = () => {
  return (
    <section id="markets" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Global Presence"
          title="Markets We Serve"
          description="Deep local expertise across the world's most prestigious luxury real estate markets."
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {markets.map((market, index) => (
            <ScrollReveal key={market.id} delay={index * 0.1}>
              <div className="glass-card rounded-xl overflow-hidden group">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={market.image}
                    alt={`${market.city}, ${market.country}`}
                    loading="lazy"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </AspectRatio>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-playfair text-2xl font-semibold text-charcoal">
                        {market.city}
                      </h3>
                      <p className="text-blue-gray-400 text-sm">{market.country}</p>
                    </div>
                    <span className="text-sm font-medium text-charcoal bg-blue-gray-300/20 px-3 py-1 rounded-full">
                      {market.dealCount}
                    </span>
                  </div>
                  <p className="text-slate text-sm leading-relaxed">{market.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Markets;
