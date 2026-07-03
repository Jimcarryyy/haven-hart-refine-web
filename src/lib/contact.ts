import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  service: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const submitContactForm = async (data: ContactFormData): Promise<void> => {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return;
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to submit form');
  }
};

export const isFormspreeConfigured = (): boolean => {
  return Boolean(import.meta.env.VITE_FORMSPREE_ENDPOINT);
};
