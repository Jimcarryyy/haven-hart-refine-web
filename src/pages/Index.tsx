import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Markets from '@/components/Markets';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Insights from '@/components/Insights';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { scrollToSection } from '@/lib/scroll';

const Index = () => {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => scrollToSection(hash), 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-pearl overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-charcoal focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <About />
        <Stats />
        <Portfolio />
        <Services />
        <Process />
        <Markets />
        <Team />
        <Testimonials />
        <FAQ />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
