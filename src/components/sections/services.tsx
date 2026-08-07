"use client";

import { useEffect, useRef } from "react";
import {
  Factory,
  Hammer,
  MessageSquare,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    icon: Factory,
    title: "Custom Manufacturing",
    description:
      "Bespoke fire rated doors and safety products manufactured to your exact specifications. Custom sizes, finishes, and fire ratings available.",
    features: [
      "Custom dimensions",
      "Various fire ratings",
      "Multiple finishes",
      "Bulk orders",
    ],
    gradient: "from-blue-600 to-blue-800",
  },
  {
    icon: Hammer,
    title: "Professional Installation",
    description:
      "Expert installation by trained technicians ensuring proper fitting, alignment, and compliance with fire safety regulations.",
    features: [
      "Certified technicians",
      "Proper sealing",
      "Compliance checks",
      "Clean handover",
    ],
    gradient: "from-emerald-600 to-emerald-800",
  },
  {
    icon: MessageSquare,
    title: "Safety Consultation",
    description:
      "Expert advice on fire safety planning, product selection, and regulatory compliance. We help you choose the right solutions.",
    features: [
      "Regulatory guidance",
      "Product selection",
      "Cost optimization",
      "Safety planning",
    ],
    gradient: "from-amber-500 to-orange-700",
  },
  {
    icon: ClipboardCheck,
    title: "Safety Inspection",
    description:
      "Comprehensive on-site safety audits and inspections to evaluate your existing fire protection and recommend improvements.",
    features: [
      "On-site visits",
      "Detailed reports",
      "Compliance audit",
      "Recommendations",
    ],
    gradient: "from-red-500 to-red-700",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 lg:py-28 bg-slate-900 grid-pattern animate-fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Our Services
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            End-to-End{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Safety Solutions
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            From consultation to installation, we provide comprehensive
            services to keep your premises safe and compliant.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/80 hover:border-slate-600/50 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-outfit text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 text-xs font-medium border border-slate-600/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold text-lg shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
          >
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  );
}
