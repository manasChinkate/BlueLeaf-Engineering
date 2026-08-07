"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    src: "/images/hero-bg.png",
    alt: "Fire rated door installation in commercial building",
    caption: "Commercial Building Installation",
  },
  {
    src: "/images/fire-door.png",
    alt: "Premium fire rated single leaf steel door",
    caption: "Single Leaf Fire Door",
  },
  {
    src: "/images/gallery-install.png",
    alt: "Professional fire door installation by Blueleaf Engineering team",
    caption: "Professional Installation",
  },
  {
    src: "/images/road-safety.png",
    alt: "Road safety products including speed breakers and barriers",
    caption: "Road Safety Products",
  },
  {
    src: "/images/gallery-warehouse.png",
    alt: "Multiple fire rated doors installed in a warehouse corridor",
    caption: "Warehouse Fire Door Setup",
  },
  {
    src: "/images/accessories.png",
    alt: "Fire door accessories and hardware components",
    caption: "Door Accessories & Hardware",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
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

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightbox === null) return;
    if (direction === "prev") {
      setLightbox(lightbox === 0 ? galleryItems.length - 1 : lightbox - 1);
    } else {
      setLightbox(lightbox === galleryItems.length - 1 ? 0 : lightbox + 1);
    }
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="gallery"
        className="py-20 lg:py-28 bg-slate-50 animate-fade-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
              Our Projects
            </div>
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Project{" "}
              <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-lg text-slate-500">
              Explore our recent installations and product range across various
              industries and applications.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <button
                key={item.caption}
                onClick={() => setLightbox(index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-semibold text-sm">
                    {item.caption}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
            className="absolute left-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-4xl w-full aspect-[4/3] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryItems[lightbox].src}
              alt={galleryItems[lightbox].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
            className="absolute right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Caption */}
          <div className="absolute bottom-6 text-center text-white">
            <p className="font-semibold">{galleryItems[lightbox].caption}</p>
            <p className="text-sm text-white/60 mt-1">
              {lightbox + 1} / {galleryItems.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
