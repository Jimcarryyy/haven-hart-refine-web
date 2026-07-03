import { useState } from 'react';
import type { TeamMember } from '@/types/content';
import { teamMembers } from '@/data/team';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Linkedin } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="py-20 bg-pearl">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Leadership"
          title="Our Distinguished Team"
          description="Meet the experienced professionals who deliver exceptional results through expertise, integrity, and unwavering commitment to excellence."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.id} delay={index * 0.05}>
              <button
                type="button"
                className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:transform hover:scale-105 transition-all duration-500 text-left w-full"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={1000}
                    className="w-full h-80 object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">View Profile</p>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="font-playfair text-xl font-semibold text-charcoal mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-gray-400 text-sm mb-2 font-medium">{member.title}</p>
                  <p className="text-slate text-sm mb-3">{member.experience} Experience</p>
                  <p className="text-xs text-cool-gray">{member.expertise}</p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto glass-card">
            {selectedMember && (
              <>
                <DialogHeader>
                  <DialogTitle className="font-playfair text-2xl text-charcoal">
                    {selectedMember.name}
                  </DialogTitle>
                </DialogHeader>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      width={800}
                      height={1000}
                      decoding="async"
                      className="w-full h-80 object-cover object-center rounded-lg"
                    />
                    {selectedMember.linkedIn && (
                      <a
                        href={selectedMember.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate hover:text-charcoal mt-4 text-sm transition-colors"
                      >
                        <Linkedin size={16} />
                        LinkedIn Profile
                      </a>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <h4 className="text-blue-gray-400 font-medium mb-1">{selectedMember.title}</h4>
                    <p className="text-sm text-slate mb-3">{selectedMember.experience} Experience</p>
                    <p className="text-slate leading-relaxed mb-4">{selectedMember.bio}</p>

                    <div className="mb-4">
                      <h5 className="font-semibold text-charcoal mb-2">Credentials</h5>
                      <ul className="space-y-1">
                        {selectedMember.credentials.map((cred) => (
                          <li key={cred} className="text-sm text-slate flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-gray-300 rounded-full mr-2" />
                            {cred}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-charcoal mb-2">Specialties</h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.specialties.map((spec) => (
                          <span
                            key={spec}
                            className="text-xs bg-blue-gray-300/20 text-slate px-2 py-1 rounded-full"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-charcoal mb-2">Awards & Recognition</h5>
                      <ul className="space-y-1">
                        {selectedMember.awards.map((award) => (
                          <li key={award} className="text-sm text-slate flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-gray-300 rounded-full mr-2" />
                            {award}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Team;
