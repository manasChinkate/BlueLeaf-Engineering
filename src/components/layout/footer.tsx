import {
  Shield,
  Leaf,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";

const footerLinks = {
  products: [
    { label: "Fire Rated Doors", href: "#products" },
    { label: "Door Accessories", href: "#products" },
    { label: "Road Safety Products", href: "#products" },
    { label: "Rubber Speed Breakers", href: "#products" },
    { label: "Intumescent Seals", href: "#products" },
  ],
  services: [
    { label: "Custom Manufacturing", href: "#services" },
    { label: "Professional Installation", href: "#services" },
    { label: "Safety Consultation", href: "#services" },
    { label: "Safety Inspection", href: "#services" },
    { label: "After Sales Service", href: "#why-us" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Our Projects", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact Us", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 grid-pattern">
      {/* Gradient Divider */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
                <Leaf className="w-3 h-3 text-white absolute" style={{ marginTop: '10px', marginLeft: '10px' }} />
              </div>
              <div>
                <span className="font-outfit text-lg font-bold text-white">
                  Blueleaf
                </span>
                <span className="block text-[10px] text-emerald-400 font-medium tracking-widest uppercase leading-none">
                  Engineering
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              India&apos;s trusted supplier of fire rated doors, road safety
              products, and industrial rubber products. Delivering superior
              quality safety solutions since 2019.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91-98765 43210
              </a>
              <a
                href="mailto:info@blueleafengineering.com"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@blueleafengineering.com
              </a>
              <div className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Thane, Maharashtra 400601, India
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-outfit font-bold text-white mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-outfit font-bold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-outfit font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Blueleaf Engineering. All rights
            reserved.
          </p>

          <a
            href="#hero"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-400 text-sm hover:text-white hover:bg-slate-700 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
