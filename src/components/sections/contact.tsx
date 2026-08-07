"use client";

import { useEffect, useRef, useActionState } from "react";
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

const initialState: FormState = {
  success: false,
  message: "",
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  const {
    register,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
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
      reset();
    }
  }, [state.success, reset]);

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
                  <button
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form ref={formRef} action={formAction} className="space-y-6">
                  {state.message && !state.success && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                      {state.message}
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      {...register("name")}
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    {(errors.name || state.errors?.name) && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name?.message || state.errors?.name?.[0]}
                      </p>
                    )}
                  </div>

                  {/* Phone & Email */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        {...register("phone")}
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="10-digit mobile number"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                      {(errors.phone || state.errors?.phone) && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.phone?.message || state.errors?.phone?.[0]}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        {...register("email")}
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                      {(errors.email || state.errors?.email) && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.email?.message || state.errors?.email?.[0]}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Requirement */}
                  <div>
                    <label
                      htmlFor="contact-requirement"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Your Requirement *
                    </label>
                    <textarea
                      {...register("requirement")}
                      id="contact-requirement"
                      name="requirement"
                      rows={4}
                      placeholder="Describe your requirement — product type, quantity, dimensions, etc."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                    {(errors.requirement || state.errors?.requirement) && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.requirement?.message ||
                          state.errors?.requirement?.[0]}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  </button>
                </form>
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
