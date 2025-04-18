import Footer from "@/components/elements/Footer";
import Header from "@/components/elements/Header";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import LogoTicker from "@/components/sections/LogoTicker";
import Proposal from "@/components/sections/Proposal";
import Service from "@/components/sections/Service";
import Study from "@/components/sections/Study";
import Team from "@/components/sections/Team";
import Testimonial from "@/components/sections/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Service />
      <Proposal />
      <Study />
      <Faq />
      <Team />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
