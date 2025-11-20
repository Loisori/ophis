import Hero from "@/components/section/Hero";
import Header from "@/components/section/Header";
import HeroVideo from "@/components/section/HeroVideo";
import Footer from "@/components/section/Footer";
import Timeline from "@/components/section/Timeline";
import AutoCarousel from "@/components/section/AutoCarousel";
import Projects from "@/components/section/Projects";
import Testimonials from "@/components/section/Testimonials";
import Reasons from "@/components/section/Reasons";
import Team from "@/components/section/Team";
import Pricing from "@/components/section/Pricing";
import Faqs from "@/components/section/Faqs";
import Services from "@/components/section/Services";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <HeroVideo />
      {/* <AutoCarousel />
      <Timeline />
      <Projects />
      <Testimonials />
      <Services />
      <Reasons />
      <Team />
      <Pricing />
      <Faqs />
      <Footer /> */}
    </main>
  );
}
