"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Flame, DoorOpen, HardHat } from "lucide-react";

const categories = [
  { id: "fire-doors", label: "Fire Rated Doors", icon: Flame },
  { id: "accessories", label: "Door Accessories", icon: DoorOpen },
  { id: "road-safety", label: "Road Safety & Rubber", icon: HardHat },
];

const products = {
  "fire-doors": [
    {
      title: "Single Leaf Fire Doors",
      image: "/images/fire-door.png",
      description:
        "Galvanized steel fire rated doors with 30–120 minutes fire resistance. Ideal for hotels, warehouses, and commercial buildings.",
      useCases: ["Hotels & Resorts", "Warehouses", "Commercial Buildings"],
      rating: "30–120 min fire rated",
    },
    {
      title: "Double Leaf Fire Doors",
      image: "/images/fire-door.png",
      description:
        "Wide-span fire rated double doors for large openings in industrial and commercial applications. Custom sizes available.",
      useCases: ["Industrial Plants", "Hospitals", "Data Centers"],
      rating: "60–120 min fire rated",
    },
    {
      title: "Fire Rated Glazed Doors",
      image: "/images/fire-door.png",
      description:
        "Fire resistant doors with vision panels for visibility and safety. Wired or ceramic glass options available.",
      useCases: ["Office Buildings", "Stairwell Access", "Corridors"],
      rating: "30–90 min fire rated",
    },
  ],
  accessories: [
    {
      title: "Door Hardware",
      image: "/images/accessories.png",
      description:
        "Fire rated door closers, panic bars, electromagnetic holders, and mortice locks. All IS/BS certified.",
      useCases: ["Closers", "Panic Bars", "Electromagnetic Holders"],
      rating: "IS/BS Certified",
    },
    {
      title: "Fire Rated Glass",
      image: "/images/accessories.png",
      description:
        "Wired glass and ceramic glass panels for fire doors. Maintains integrity during fire while allowing visibility.",
      useCases: ["Vision Panels", "Fixed Glazing", "Partitions"],
      rating: "Up to 120 min rated",
    },
    {
      title: "Intumescent Seals",
      image: "/images/accessories.png",
      description:
        "Fire and smoke seals that expand when exposed to heat, sealing gaps between door and frame to prevent fire spread.",
      useCases: ["Door Edges", "Frame Sealing", "Smoke Control"],
      rating: "Tested to BS 476",
    },
  ],
  "road-safety": [
    {
      title: "Rubber Speed Breakers",
      image: "/images/road-safety.png",
      description:
        "Heavy-duty rubber speed breakers for highways, parking areas, and industrial zones. UV resistant and long-lasting.",
      useCases: ["Highways", "Parking Lots", "Industrial Zones"],
      rating: "Heavy Duty",
    },
    {
      title: "Rubber Sheets & Mats",
      image: "/images/road-safety.png",
      description:
        "Industrial grade rubber sheets for flooring, anti-vibration pads, and electrical insulation applications.",
      useCases: ["Factory Flooring", "Anti-Vibration", "Electrical Insulation"],
      rating: "Industrial Grade",
    },
    {
      title: "Safety Barriers & Bollards",
      image: "/images/road-safety.png",
      description:
        "Reflective road safety barriers, traffic bollards, and delineators for highway and parking safety.",
      useCases: ["Highways", "Toll Plazas", "Parking Areas"],
      rating: "Reflective Coating",
    },
  ],
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("fire-doors");
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
      id="products"
      className="py-20 lg:py-28 bg-white animate-fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Our Products
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Comprehensive Range of{" "}
            <span className="gradient-text">Safety Products</span>
          </h2>
          <p className="text-lg text-slate-500">
            From fire rated doors to road safety equipment — everything you need
            to protect your people and property.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products[activeCategory as keyof typeof products].map((product) => (
            <div
              key={product.title}
              className="group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm card-hover"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-500 text-white text-xs font-bold shadow-lg">
                  {product.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-outfit text-xl font-bold text-slate-800 mb-3">
                  {product.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Use Cases */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.useCases.map((uc) => (
                    <span
                      key={uc}
                      className="px-3 py-1 rounded-full bg-slate-50 text-slate-600 text-xs font-medium border border-slate-100"
                    >
                      {uc}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 group/link"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
