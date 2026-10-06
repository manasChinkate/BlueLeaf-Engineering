"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Award, Users, Building2, Calendar } from "lucide-react";

function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
  inView,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Calendar,
      value: 6,
      suffix: "+",
      label: "Years of Excellence",
    },
    {
      icon: Building2,
      value: 100,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      icon: Users,
      value: 50,
      suffix: "+",
      label: "Clients Served",
    },
    {
      icon: Award,
      value: 15,
      suffix: "+",
      label: "Industry Awards",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 lg:py-28 bg-white animate-fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-1.webp"
                alt="Blueleaf Engineering manufacturing facility with workers assembling fire rated doors"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 right-4 px-4 py-2 rounded-lg glass-dark text-white text-sm font-semibold">
                Est. 2019
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl border-2 border-blue-200 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-gradient-to-br from-emerald-50 to-blue-50 -z-10" />
          </div>

          {/* Content Side */}
          <div>
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
              About Us
            </div>

            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Building Safer Spaces{" "}
              <span className="gradient-text">Since 2019</span>
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-800">Blueleaf Engineering</strong>{" "}
                is a rapidly growing safety solutions provider specializing in{" "}
                <strong>passive fire protection</strong> and{" "}
                <strong>road safety products</strong>. Founded in 2019, we have
                quickly established ourselves as a trusted partner for
                businesses across India.
              </p>
              <p>
                We focus on delivering{" "}
                <strong>customized, high-quality products</strong> that meet
                stringent safety standards. From fire rated doors for
                commercial complexes to road safety barriers for highways, every
                product is engineered with precision and tested rigorously.
              </p>
              <p>
                Our team of experienced professionals brings deep domain
                expertise in fire safety engineering, ensuring every project is
                delivered with the highest standards of quality and compliance.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <Icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-800 font-outfit">
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                        inView={inView}
                      />
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
