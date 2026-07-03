import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/data/site';

const Privacy = () => {
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

        <h1 className="font-playfair text-4xl font-bold text-charcoal mb-8">Privacy Policy</h1>
        <p className="text-cool-gray text-sm mb-8">Last updated: March 2025</p>

        <div className="prose prose-slate max-w-none space-y-6 text-slate leading-relaxed">
          <section>
            <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">
              1. Information We Collect
            </h2>
            <p>
              {siteConfig.brand.name} collects information you provide directly, including name,
              email address, phone number, and message content when you submit a consultation
              request through our website.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information collected to respond to your inquiries, schedule
              consultations, and provide our advisory services. We do not sell or share your
              personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">
              3. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, alteration, disclosure, or
              destruction.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-charcoal mb-3">
              4. Contact Us
            </h2>
            <p>
              For privacy-related inquiries, contact us at{' '}
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

export default Privacy;
