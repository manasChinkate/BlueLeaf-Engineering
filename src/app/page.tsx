import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import TrustBar from "@/components/sections/trust-bar";
import About from "@/components/sections/about";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Products from "@/components/sections/products";
import Services from "@/components/sections/services";
import Specs from "@/components/sections/specs";
import Gallery from "@/components/sections/gallery";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import StickyCTA from "@/components/layout/sticky-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <WhyChooseUs />
        <Products />
        <Services />
        <Specs />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
