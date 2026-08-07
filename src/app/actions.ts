"use server";

import { contactFormSchema, type ContactFormData } from "@/lib/schema";

export type FormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawData = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    requirement: formData.get("requirement") as string,
  };

  const validationResult = contactFormSchema.safeParse(rawData);

  if (!validationResult.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: validationResult.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  // In production, integrate with:
  // - AWS SES for email notifications
  // - A CRM (HubSpot, Salesforce) for lead tracking
  // - A database for storing inquiries
  const data: ContactFormData = validationResult.data;

  console.log("New inquiry received:", {
    name: data.name,
    phone: data.phone,
    email: data.email,
    requirement: data.requirement,
    timestamp: new Date().toISOString(),
  });

  // Simulate a slight delay for UX
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: true,
    message:
      "Thank you for your inquiry! Our team will contact you within 24 hours.",
  };
}
