import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { siteConfig } from '@/data/site';
import { services } from '@/data/services';
import {
  contactFormSchema,
  submitContactForm,
  isFormspreeConfigured,
  type ContactFormData,
} from '@/lib/contact';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      preferredTime: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await submitContactForm(data);

      if (isFormspreeConfigured()) {
        toast.success('Consultation request sent', {
          description: "We'll contact you within 24 hours to schedule your consultation.",
        });
      } else {
        toast.success('Consultation request received', {
          description:
            'Demo mode: configure VITE_FORMSPREE_ENDPOINT to enable live submissions.',
        });
      }

      form.reset();
    } catch {
      toast.error('Submission failed', {
        description: 'Please try again or contact us directly via email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const { contact } = siteConfig;

  return (
    <section id="contact" className="py-20 bg-pearl">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Get Started"
          title="Request Consultation"
          description="Ready to explore your next luxury real estate opportunity? Connect with our expert advisors for a confidential consultation."
        />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="glass-card rounded-xl p-8">
              <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-6">
                Schedule Your Consultation
              </h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your full name"
                              className="glass-button border-blue-gray-300/30"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              className="glass-button border-blue-gray-300/30"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+1 (555) 123-4567"
                              className="glass-button border-blue-gray-300/30"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interest</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="glass-button border-blue-gray-300/30">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white border-blue-gray-300/30">
                              {services.map((service) => (
                                <SelectItem key={service.id} value={service.id}>
                                  {service.title}
                                </SelectItem>
                              ))}
                              <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="preferredTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Meeting Time</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="glass-button border-blue-gray-300/30">
                              <SelectValue placeholder="Select preferred time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white border-blue-gray-300/30">
                            <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                            <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your real estate goals and how we can assist you..."
                            rows={4}
                            className="glass-button border-blue-gray-300/30 resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-charcoal hover:bg-slate text-white py-3 text-lg font-medium rounded-lg transition-colors"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Consultation Request'}
                  </Button>
                </form>
              </Form>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-card rounded-xl p-8 mb-8">
              <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-gray-300/20 rounded-lg flex items-center justify-center">
                    <Mail className="text-charcoal" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Email</h4>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-slate hover:text-charcoal transition-colors"
                    >
                      {contact.email}
                    </a>
                    <p className="text-cool-gray text-sm">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-gray-300/20 rounded-lg flex items-center justify-center">
                    <Phone className="text-charcoal" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Phone</h4>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-slate hover:text-charcoal transition-colors"
                    >
                      {contact.phoneDisplay}
                    </a>
                    <p className="text-cool-gray text-sm">Monday - Friday, 9 AM - 6 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-gray-300/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-charcoal" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Office</h4>
                    <p className="text-slate">{contact.address.line1}</p>
                    <p className="text-slate">{contact.address.line2}</p>
                    <p className="text-cool-gray text-sm">{contact.address.note}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-8">
              <h4 className="font-playfair text-xl font-semibold text-charcoal mb-4">
                Office Hours
              </h4>
              <div className="space-y-2 text-slate">
                {contact.officeHours.map((row) => (
                  <div key={row.day} className="flex justify-between">
                    <span>{row.day}</span>
                    <span>{row.hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-cool-gray text-sm mt-4">{contact.officeHoursNote}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
