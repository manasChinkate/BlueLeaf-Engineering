import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blueleafengineering.com"),
  title: "Fire Rated Doors & Road Safety Products | Blueleaf Engineering",
  description:
    "Blueleaf Engineering — India's trusted supplier of fire rated doors, fire safety doors, road safety products, and industrial rubber products. Custom manufacturing, installation & consultation. Based in Thane, Maharashtra.",
  keywords: [
    "fire rated doors India",
    "fire safety doors supplier",
    "road safety products supplier",
    "industrial rubber products India",
    "fire rated doors manufacturer",
    "passive fire protection India",
    "fire door supplier Thane",
    "speed breakers supplier India",
    "fire resistant doors",
    "industrial safety products",
    "Blueleaf Engineering",
  ],
  authors: [{ name: "Blueleaf Engineering" }],
  creator: "Blueleaf Engineering",
  publisher: "Blueleaf Engineering",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://blueleafengineering.com",
    siteName: "Blueleaf Engineering",
    title: "Fire Rated Doors & Road Safety Products | Blueleaf Engineering",
    description:
      "India's trusted supplier of fire rated doors, road safety products, and industrial rubber products. Custom manufacturing & installation services.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blueleaf Engineering — Fire Rated Doors & Road Safety Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fire Rated Doors & Road Safety Products | Blueleaf Engineering",
    description:
      "India's trusted supplier of fire rated doors, road safety products & industrial rubber products.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://blueleafengineering.com",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://blueleafengineering.com/#business",
      name: "Blueleaf Engineering",
      description:
        "Passive Fire Protection and Road Safety Products manufacturer and supplier in India.",
      url: "https://blueleafengineering.com",
      telephone: "+91-9876543210",
      email: "info@blueleafengineering.com",
      foundingDate: "2019",
      image: "https://blueleafengineering.com/images/og-image.png",
      priceRange: "$$",
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: "Thane Office",
          addressLocality: "Thane",
          addressRegion: "Maharashtra",
          postalCode: "400601",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          streetAddress: "Factory, Wada",
          addressLocality: "Wada",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
      ],
      geo: {
        "@type": "GeoCoordinates",
        latitude: "19.1864",
        longitude: "72.9745",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      sameAs: [],
    },
    {
      "@type": "Organization",
      "@id": "https://blueleafengineering.com/#organization",
      name: "Blueleaf Engineering",
      url: "https://blueleafengineering.com",
      logo: "https://blueleafengineering.com/images/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9876543210",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://blueleafengineering.com/#website",
      url: "https://blueleafengineering.com",
      name: "Blueleaf Engineering",
      publisher: {
        "@id": "https://blueleafengineering.com/#organization",
      },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
