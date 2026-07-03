import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { siteConfig } from '@/data/site';
import { navItems } from '@/data/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';
import { scrollToSection } from '@/lib/scroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = navItems.map((item) => item.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileOpen(false);
  };

  const navLinkClass = (id: string) =>
    `transition-colors font-medium ${
      activeSection === id
        ? 'text-charcoal border-b-2 border-charcoal pb-0.5'
        : 'text-slate hover:text-charcoal'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card shadow-xl backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-playfair text-2xl font-bold text-charcoal"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {siteConfig.brand.name}
          </Link>

          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={navLinkClass(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button
            onClick={() => handleNavClick('contact')}
            className="hidden md:block bg-charcoal hover:bg-slate text-white px-6 py-2 rounded-lg transition-colors"
          >
            Request Consultation
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden p-2 text-charcoal hover:text-slate transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-pearl border-blue-gray-300/30 w-80">
              <SheetHeader>
                <SheetTitle className="font-playfair text-2xl text-charcoal text-left">
                  {siteConfig.brand.name}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left text-lg py-2 ${navLinkClass(item.id)}`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => handleNavClick('contact')}
                  className="bg-charcoal hover:bg-slate text-white mt-4"
                >
                  Request Consultation
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
