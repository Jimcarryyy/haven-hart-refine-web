import { useState } from 'react';
import type { Property, PropertyCategory } from '@/types/content';
import { properties, propertyCategories } from '@/data/properties';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';
import { scrollToSection } from '@/lib/scroll';

const Portfolio = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [activeFilter, setActiveFilter] = useState<PropertyCategory | 'All'>('All');

  const filteredProperties =
    activeFilter === 'All'
      ? properties
      : properties.filter((p) => p.filterCategory === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-pearl">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Featured Properties"
          title="Curated Portfolio"
          description="Discover our meticulously selected properties and successful advisory engagements that showcase our commitment to excellence."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {propertyCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat.value
                  ? 'bg-charcoal text-white'
                  : 'bg-white text-slate hover:bg-blue-gray-300/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <ScrollReveal key={property.id} delay={index * 0.05}>
              <button
                type="button"
                className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:transform hover:scale-105 transition-all duration-500 text-left w-full"
                onClick={() => setSelectedProperty(property)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    loading="lazy"
                    width={800}
                    height={256}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-charcoal">
                    {property.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-charcoal mb-2">
                    {property.title}
                  </h3>
                  <p className="text-blue-gray-400 mb-2 font-medium text-sm">
                    {property.location} &bull; {property.type}
                  </p>
                  <p className="text-slate text-sm leading-relaxed mb-4 line-clamp-2">
                    {property.description}
                  </p>
                  <div className="text-charcoal font-semibold">{property.investment}</div>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        <Dialog open={!!selectedProperty} onOpenChange={() => setSelectedProperty(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-card">
            {selectedProperty && (
              <>
                <DialogHeader>
                  <DialogTitle className="font-playfair text-2xl text-charcoal">
                    {selectedProperty.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={selectedProperty.image}
                      alt={selectedProperty.title}
                      width={800}
                      height={256}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>

                  <div>
                    <p className="text-blue-gray-400 mb-2 font-medium">
                      {selectedProperty.location} &bull; {selectedProperty.type}
                    </p>
                    <p className="text-slate leading-relaxed mb-4">
                      {selectedProperty.description}
                    </p>
                    <div className="text-xl font-semibold text-charcoal mb-4">
                      Investment: {selectedProperty.investment}
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {selectedProperty.specs.map((spec) => (
                        <div key={spec.label} className="text-sm">
                          <span className="text-cool-gray">{spec.label}: </span>
                          <span className="text-charcoal font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 className="font-playfair text-lg font-semibold text-charcoal mb-3">
                      Property Highlights
                    </h4>
                    <ul className="space-y-2">
                      {selectedProperty.highlights.map((highlight) => (
                        <li key={highlight} className="text-slate flex items-center text-sm">
                          <div className="w-2 h-2 bg-blue-gray-300 rounded-full mr-3" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg font-semibold text-charcoal mb-3">
                      Amenities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProperty.amenities.map((amenity) => (
                        <Badge key={amenity} variant="secondary">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-blue-gray-300/10 rounded-lg">
                  <h4 className="font-semibold text-charcoal mb-2">Advisor Note</h4>
                  <p className="text-slate text-sm leading-relaxed">{selectedProperty.agentNote}</p>
                </div>

                <div className="mt-6 text-center">
                  <Button
                    onClick={() => {
                      setSelectedProperty(null);
                      scrollToSection('contact');
                    }}
                    className="bg-charcoal hover:bg-slate text-white px-8 py-3"
                  >
                    Inquire About This Property
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;
