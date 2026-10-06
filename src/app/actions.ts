"use server";

import { contactFormSchema, type ContactFormData } from "@/lib/schema";
import { sendContactEmail } from "@/lib/mail";

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

  const data: ContactFormData = validationResult.data;

  console.log("New inquiry received:", {
    name: data.name,
    phone: data.phone,
    email: data.email,
    requirement: data.requirement,
    timestamp: new Date().toISOString(),
  });

  try {
    await sendContactEmail(data);
    return {
      success: true,
      message:
        "Thank you for your inquiry! Our team has received your message and will contact you within 24 hours.",
    };
  } catch (error: any) {
    console.error("Failed to send contact email:", error);
    return {
      success: false,
      message:
        error?.message ||
        "An unexpected error occurred while sending your message. Please try again later or call us directly.",
    };
  }
}
