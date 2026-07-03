import { faqItems } from '@/data/faq';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-pearl">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Common Questions"
          title="Frequently Asked Questions"
          description="Answers to the questions our clients ask most often."
        />
        <ScrollReveal className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="font-playfair text-lg text-charcoal hover:no-underline text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQ;
