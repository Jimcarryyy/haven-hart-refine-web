import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { services } from '@/data/services';
import { scrollToSection } from '@/lib/scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { brand, contact, developer } = siteConfig;

  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="font-playfair text-3xl font-bold mb-4">{brand.name}</div>
            <p className="text-blue-gray-300 leading-relaxed mb-6 max-w-md">
              {brand.tagline}. Discretionary advisory services for discerning investors and
              visionary developers.
            </p>
            <div className="flex space-x-4">
              <a
                href={`mailto:${contact.email}`}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Email us"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Call us"
              >
                <Phone size={18} />
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="View office location"
              >
                <MapPin size={18} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { id: 'about', label: 'About Us' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'services', label: 'Services' },
                { id: 'team', label: 'Our Team' },
                { id: 'testimonials', label: 'Testimonials' },
              ].map((link) => (
                <li key={link.id}>
                  <Link
                    to={`/#${link.id}`}
                    className="text-blue-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-gray-300">
              {services.map((service) => (
                <li key={service.id}>{service.title}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-gray-300 text-sm">
              &copy; {currentYear} {brand.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-blue-gray-300 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-blue-gray-300 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="border-t border-white/5 mt-6 pt-6 text-center">
            <p className="text-cool-gray text-xs">
              Designed &amp; built by{' '}
              <a
                href={developer.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {developer.name}
              </a>
              {' · '}
              <a
                href={developer.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
