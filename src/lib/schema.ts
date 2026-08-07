import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  requirement: z
    .string()
    .min(10, "Please describe your requirement in at least 10 characters")
    .max(1000, "Requirement must be under 1000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
