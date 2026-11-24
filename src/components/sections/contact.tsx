"use client";

import { useEffect, useRef, useActionState, startTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/schema";
import { submitContactForm, type FormState } from "@/app/actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const initialState: FormState = {
  success: false,
  message: "",
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      requirement: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (state.success) {
      form.reset();
    } else if (state.errors) {
      Object.entries(state.errors).forEach(([field, messages]) => {
        if (messages?.[0]) {
          form.setError(field as keyof ContactFormData, {
            type: "server",
            message: messages[0],
          });
        }
      });
    }
  }, [state, form]);

  const onSubmit = (data: ContactFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("requirement", data.requirement);

    startTransition(async () => {
      await formAction(formData);
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 lg:py-28 bg-white animate-fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Get In Touch
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Ready to Discuss Your{" "}
            <span className="gradient-text">Safety Requirements?</span>
          </h2>
          <p className="text-lg text-slate-500">
            Fill out the form below or call us directly. Our team will respond
            within 24 hours with a customized solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              {state.success ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                  <h3 className="font-outfit text-2xl font-bold text-slate-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-slate-500 mb-6">{state.message}</p>
                  <Button
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center gap-2"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {state.message && !state.success && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                        {state.message}
                      </div>
                    )}

                    {/* Name */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your full name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Phone & Email */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="10-digit mobile number"
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
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Requirement */}
                    <FormField
                      control={form.control}
                      name="requirement"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Requirement *</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={4}
                              placeholder="Describe your requirement — product type, quantity, dimensions, etc."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isPending}
                      className="w-full text-base sm:text-lg"
                    >
                      {isPending ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Inquiry
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>

          {/* Contact Info — 2 cols */}
          <div className="lg:col-span-2 space-y-8">
            {/* Call CTA */}
            <a
              href="tel:+919876543210"
              className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <div className="text-sm font-medium text-blue-100 mb-1">
                  Call Us Directly
                </div>
                <div className="text-xl font-bold">+91-98765 43210</div>
              </div>
              <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800 mb-1">
                    Email Us
                  </div>
                  <a
                    href="mailto:info@blueleafengineering.com"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    info@blueleafengineering.com
                  </a>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800 mb-1">
                    Head Office — Thane
                  </div>
                  <p className="text-sm text-slate-500">
                    Blueleaf Engineering,
                    <br />
                    Thane, Maharashtra 400601,
                    <br />
                    India
                  </p>
                </div>
              </div>

              {/* Factory Address */}
              <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800 mb-1">
                    Manufacturing Unit — Wada
                  </div>
                  <p className="text-sm text-slate-500">
                    Factory, Wada,
                    <br />
                    Palghar District, Maharashtra,
                    <br />
                    India
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800 mb-1">
                    Business Hours
                  </div>
                  <p className="text-sm text-slate-500">
                    Monday – Saturday
                    <br />
                    9:00 AM – 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
