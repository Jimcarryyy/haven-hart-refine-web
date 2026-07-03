import { insights } from '@/data/insights';
import { toast } from 'sonner';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';

const Insights = () => {
  const handleArticleClick = (title: string) => {
    toast.info('Coming soon', {
      description: `"${title}" will be available in our insights library shortly.`,
    });
  };

  return (
    <section id="insights" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Market Intelligence"
          title="Insights & Perspectives"
          description="Thought leadership from our advisory team on luxury real estate trends and strategy."
        />
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {insights.map((article, index) => (
            <ScrollReveal key={article.id} delay={index * 0.1}>
              <button
                type="button"
                onClick={() => handleArticleClick(article.title)}
                className="glass-card rounded-xl overflow-hidden text-left w-full group hover:transform hover:scale-[1.02] transition-all duration-300"
              >
                <AspectRatio ratio={16 / 10}>
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </AspectRatio>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <span className="text-cool-gray text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-charcoal mb-2 group-hover:text-slate transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <p className="text-cool-gray text-xs">{article.date}</p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
