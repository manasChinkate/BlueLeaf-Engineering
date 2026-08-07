"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    designation: "Facility Manager",
    company: "Tata Power",
    rating: 5,
    text: "Blueleaf Engineering delivered 50+ fire rated doors for our new power plant facility in record time. The quality of the GI steel doors and the professional installation exceeded our expectations. Highly recommended for industrial fire safety solutions.",
  },
  {
    name: "Priya Nair",
    designation: "Project Director",
    company: "L&T Construction",
    rating: 5,
    text: "We've partnered with Blueleaf Engineering for multiple commercial projects across Maharashtra. Their custom-sized fire doors, attention to compliance standards, and after-sales service make them our preferred supplier for passive fire protection.",
  },
  {
    name: "Amit Kulkarni",
    designation: "Operations Head",
    company: "Indian Oil Corporation",
    rating: 5,
    text: "The road safety products from Blueleaf are top-notch. The rubber speed breakers and safety barriers we installed at our depot have withstood heavy traffic and weather conditions flawlessly. Their on-site inspection service was extremely valuable.",
  },
  {
    name: "Sneha Deshmukh",
    designation: "Chief Engineer",
    company: "Mahindra Logistics",
    rating: 5,
    text: "Blueleaf provided fire rated doors for our 100,000 sq ft warehouse in Bhiwandi. From consultation to installation, the team was professional and responsive. The 120-minute rated doors give us complete peace of mind.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

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

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const navigate = (dir: "prev" | "next") => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (dir === "prev") {
      setActive(active === 0 ? testimonials.length - 1 : active - 1);
    } else {
      setActive((active + 1) % testimonials.length);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 grid-pattern animate-fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Client Testimonials
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Clients Say
            </span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-blue-500/30 mb-6" />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[active].rating }).map(
                (_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                )
              )}
            </div>

            {/* Text */}
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 min-h-[120px]">
              &ldquo;{testimonials[active].text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg font-outfit">
                {testimonials[active].name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-white">
                  {testimonials[active].name}
                </div>
                <div className="text-sm text-slate-400">
                  {testimonials[active].designation},{" "}
                  {testimonials[active].company}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:-mx-6 pointer-events-none">
              <button
                onClick={() => navigate("prev")}
                className="pointer-events-auto p-2 rounded-full bg-slate-700/50 text-white hover:bg-slate-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate("next")}
                className="pointer-events-auto p-2 rounded-full bg-slate-700/50 text-white hover:bg-slate-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-blue-500 w-8"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
