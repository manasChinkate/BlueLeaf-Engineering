"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Shield,
  Leaf,
} from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-shadow">
              <Shield className="w-5 h-5 text-white" />
              <Leaf className="w-3 h-3 text-white absolute bottom-1 right-1" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-outfit text-lg font-bold leading-tight transition-colors ${
                  scrolled ? "text-slate-800" : "text-white"
                }`}
              >
                Blueleaf
              </span>
              <span
                className={`text-[10px] font-medium tracking-widest uppercase leading-none transition-colors ${
                  scrolled ? "text-emerald-600" : "text-emerald-300"
                }`}
              >
                Engineering
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/10 ${
                  scrolled
                    ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? "text-slate-600 hover:text-blue-600" : "text-white/90 hover:text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+91-98765 43210</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-700 hover:to-blue-800 transition-all"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-xl">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-lg text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-200 text-slate-700 font-medium hover:border-blue-300 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call +91-98765 43210
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-lg"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
