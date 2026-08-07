"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Phone, ChevronDown } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const overlay = el.querySelector(".hero-parallax") as HTMLElement;
      if (overlay) {
        overlay.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="hero-parallax absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Industrial fire rated door installation in a commercial warehouse"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-300 text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Passive Fire Protection & Road Safety
          </div>

          {/* Headline */}
          <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
            Fire Rated Doors &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Road Safety Solutions
            </span>{" "}
            You Can Trust
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
            Custom-engineered safety solutions for industrial, commercial &
            warehouse applications. Trusted by 100+ businesses across India for
            superior quality and on-time delivery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+919876543210"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { value: "6+", label: "Years Experience" },
              { value: "100+", label: "Projects Delivered" },
              { value: "50+", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white font-outfit">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-xs font-medium tracking-wider uppercase">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
