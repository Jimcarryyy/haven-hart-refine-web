import { useState, useEffect } from 'react';
import { testimonials } from '@/data/testimonials';
import { Badge } from '@/components/ui/badge';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Client Voices"
          title="Client Testimonials"
          description="Discover what our clients say about their experience working with Haven & Hart's advisory team."
        />

        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="glass-card rounded-xl p-8 lg:p-12 mb-8">
              <div className="text-center">
                <div className="text-4xl text-blue-gray-300 mb-6">&ldquo;</div>
                <blockquote className="font-playfair text-2xl lg:text-3xl text-charcoal leading-relaxed mb-8 italic">
                  {current.quote}
                </blockquote>

                <div className="border-t border-blue-gray-300/30 pt-6">
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-3">
                    <span className="text-lg font-semibold text-charcoal">{current.client}</span>
                    <span className="hidden sm:inline text-blue-gray-400">&bull;</span>
                    <span className="text-slate">{current.type}</span>
                  </div>
                  <Badge variant="secondary">{current.badge}</Badge>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="flex justify-center space-x-3" role="tablist" aria-label="Testimonials">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                role="tab"
                aria-selected={index === currentTestimonial}
                aria-label={`Testimonial ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-charcoal scale-125'
                    : 'bg-blue-gray-300 hover:bg-blue-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
