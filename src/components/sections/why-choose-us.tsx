"use client";

import { useEffect, useRef } from "react";
import {
  ShieldCheck,
  BadgeDollarSign,
  Truck,
  Headphones,
  Eye,
  Wrench,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Superior Quality",
    description:
      "All products undergo rigorous quality testing and comply with IS, BS, and international fire safety standards.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: BadgeDollarSign,
    title: "Value for Money",
    description:
      "Competitive pricing without compromising on quality. Get the best ROI on your safety investments.",
    gradient: "from-emerald-500 to-emerald-700",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    description:
      "Efficient manufacturing and logistics ensure your safety products are delivered as per schedule, every time.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Headphones,
    title: "After Sales Service",
    description:
      "Dedicated support team for maintenance, repairs, and product lifecycle management post-installation.",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    icon: Eye,
    title: "On-site Inspection",
    description:
      "Our engineers visit your premises to assess requirements and recommend the perfect safety solutions.",
    gradient: "from-red-500 to-red-700",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description:
      "Tailor-made products designed to fit your specific requirements, dimensions, and safety regulations.",
    gradient: "from-cyan-500 to-cyan-700",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".feature-card");
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="py-20 lg:py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Why Choose Us
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Why Businesses Trust{" "}
            <span className="gradient-text">Blueleaf Engineering</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            We combine industry expertise with a commitment to excellence,
            delivering safety solutions that protect your people and assets.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="feature-card animate-fade-up group relative p-8 rounded-2xl bg-white border border-slate-100 card-hover gradient-border"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-outfit text-xl font-bold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
