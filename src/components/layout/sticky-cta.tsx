"use client";

import { useState, useEffect } from "react";
import { Phone, ArrowRight } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past the hero
      setVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky-cta lg:hidden ${visible ? "visible" : ""}`}
    >
      <div className="flex bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <a
          href="tel:+919876543210"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-blue-600 font-semibold text-sm border-r border-slate-100"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-sm"
        >
          Get Quote
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
