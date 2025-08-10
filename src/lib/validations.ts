import { z } from "zod";

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required").max(100, "Company name must be less than 100 characters"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(500, "Message must be less than 500 characters"),
  service: z.enum(["general", "ai-agents", "dalgpt", "consultation"]),
  budget: z.enum(["not-specified", "under-10k", "10k-50k", "50k-100k", "100k+"]),
});

// CTA form validation schema
export const ctaFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required").max(100, "Company name must be less than 100 characters"),
  industry: z.enum(["technology", "finance", "healthcare", "retail", "manufacturing", "other"]),
});

// Newsletter signup validation schema
export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type CTAFormData = z.infer<typeof ctaFormSchema>;
export type NewsletterData = z.infer<typeof newsletterSchema>;