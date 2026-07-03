import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/data/site';
import { scrollToSection } from '@/lib/scroll';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${siteConfig.hero.backgroundImage}')` }}
        role="img"
        aria-label="Luxury real estate skyline"
      />
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-charcoal mb-6 leading-[1.2] overflow-visible">
          {siteConfig.hero.headline}
          <span className="block text-gradient mt-1">{siteConfig.hero.headlineAccent}</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate mb-4 font-light max-w-2xl mx-auto leading-relaxed">
          {siteConfig.hero.subheadline}
        </p>

        <p className="text-sm md:text-base text-cool-gray mb-8 tracking-wide">
          {siteConfig.hero.statLine}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-charcoal hover:bg-slate text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Request Consultation
          </Button>
          <Button
            onClick={() => scrollToSection('portfolio')}
            variant="outline"
            size="lg"
            className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-300"
          >
            Explore Portfolio
          </Button>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <button
          onClick={() => scrollToSection('about')}
          className="text-charcoal hover:text-slate transition-colors"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
