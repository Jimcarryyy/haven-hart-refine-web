import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/data/site';

const Terms = () => {
  return (
    <div className="min-h-screen bg-pearl">
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate hover:text-charcoal transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <h1 className="font-playfair text-4xl font-bold text-charcoal mb-8">Terms of Service</h1>
        <p className="text-cool-gray text-sm mb-8">Last updated: March 2025</p>

        <div className="prose prose-slate max-w-none space-y-6 text-slate leading-relaxed">
          <section>
            <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the {siteConfig.brand.name} website, you accept and agree to
              be bound by these Terms of Service. If you do not agree, please do not use our
              website.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">
              2. Advisory Services
            </h2>
            <p>
              Information on this website is for general informational purposes only and does not
              constitute financial, legal, or investment advice. A formal advisory relationship is
              established only through a signed engagement agreement.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">
              3. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, images, logos, and design elements, is
              the property of {siteConfig.brand.name} and is protected by applicable intellectual
              property laws.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">
              4. Limitation of Liability
            </h2>
            <p>
              {siteConfig.brand.name} shall not be liable for any indirect, incidental, or
              consequential damages arising from your use of this website or reliance on its
              content.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">
              5. Contact
            </h2>
            <p>
              Questions about these terms may be directed to{' '}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-charcoal hover:underline"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
