"use client";

import { useEffect, useRef } from "react";
import { ShieldCheck, Clock, Ruler, FlaskConical } from "lucide-react";

const specs = [
  {
    rating: "30 min",
    description: "Ideal for internal partition walls and low-risk areas",
    material: "GI Steel — 0.8mm",
    filling: "Mineral Wool / Ceramic Fibre",
    standard: "IS 3614 / BS 476 Part 22",
    color: "border-emerald-500 bg-emerald-50",
    badge: "bg-emerald-500",
  },
  {
    rating: "60 min",
    description: "Standard for commercial buildings, hotels, and offices",
    material: "GI Steel — 1.0mm",
    filling: "High-density Mineral Wool",
    standard: "IS 3614 / BS 476 Part 22",
    color: "border-blue-500 bg-blue-50",
    badge: "bg-blue-500",
  },
  {
    rating: "90 min",
    description: "Enhanced protection for hospitals, data centers, and labs",
    material: "GI Steel — 1.2mm",
    filling: "Ceramic Fibre Board",
    standard: "IS 3614 / BS 476 Part 22",
    color: "border-amber-500 bg-amber-50",
    badge: "bg-amber-500",
  },
  {
    rating: "120 min",
    description:
      "Maximum protection for high-risk zones, warehouses, and industrial plants",
    material: "GI Steel — 1.6mm",
    filling: "Multi-layer Ceramic + Mineral Wool",
    standard: "IS 3614 / BS 476 Part 22",
    color: "border-red-500 bg-red-50",
    badge: "bg-red-500",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Fire Tested & Certified",
    description:
      "All doors are tested as per IS 3614 and BS 476 standards at NABL accredited labs.",
  },
  {
    icon: Clock,
    title: "30–120 min Rated",
    description:
      "Choose from a range of fire resistance ratings to meet your specific building requirements.",
  },
  {
    icon: Ruler,
    title: "Custom Dimensions",
    description:
      "Manufactured in custom sizes to fit any door opening. Single and double leaf options.",
  },
  {
    icon: FlaskConical,
    title: "GI Steel Construction",
    description:
      "Galvanized iron steel sheets ensure corrosion resistance and long-lasting durability.",
  },
];

export default function Specs() {
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
      id="specs"
      className="py-20 lg:py-28 bg-white animate-fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Technical Specifications
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Fire Resistance{" "}
            <span className="gradient-text">Ratings & Materials</span>
          </h2>
          <p className="text-lg text-slate-500">
            Our fire rated doors are engineered with precision using high-grade
            GI steel and tested at certified laboratories.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-slate-50 border border-slate-100 text-center"
              >
                <Icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-outfit font-bold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Specs Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          {/* Table Header */}
          <div className="hidden md:grid md:grid-cols-5 bg-slate-800 text-white text-sm font-semibold">
            <div className="px-6 py-4">Fire Rating</div>
            <div className="px-6 py-4">Application</div>
            <div className="px-6 py-4">Material</div>
            <div className="px-6 py-4">Filling</div>
            <div className="px-6 py-4">Standard</div>
          </div>

          {/* Table Rows */}
          {specs.map((spec) => (
            <div
              key={spec.rating}
              className={`grid md:grid-cols-5 border-b border-slate-100 last:border-b-0 ${spec.color} bg-opacity-30 hover:bg-opacity-60 transition-colors`}
            >
              <div className="px-6 py-5 flex items-center gap-3">
                <span
                  className={`${spec.badge} text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm`}
                >
                  {spec.rating}
                </span>
              </div>
              <div className="px-6 py-5">
                <span className="md:hidden text-xs font-semibold text-slate-400 uppercase">
                  Application:{" "}
                </span>
                <span className="text-sm text-slate-600">
                  {spec.description}
                </span>
              </div>
              <div className="px-6 py-5">
                <span className="md:hidden text-xs font-semibold text-slate-400 uppercase">
                  Material:{" "}
                </span>
                <span className="text-sm text-slate-700 font-medium">
                  {spec.material}
                </span>
              </div>
              <div className="px-6 py-5">
                <span className="md:hidden text-xs font-semibold text-slate-400 uppercase">
                  Filling:{" "}
                </span>
                <span className="text-sm text-slate-600">{spec.filling}</span>
              </div>
              <div className="px-6 py-5">
                <span className="md:hidden text-xs font-semibold text-slate-400 uppercase">
                  Standard:{" "}
                </span>
                <span className="text-sm text-slate-600">{spec.standard}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
