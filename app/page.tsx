import Nav from "./components/Nav";
import Hero from "./components/Hero";
import BadgeStrip from "./components/BadgeStrip";
import About from "./components/About";
import Services from "./components/Services";
import Eligibility from "./components/Eligibility";
import Schedule from "./components/Schedule";
import Appointment from "./components/Appointment";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BadgeStrip />
        <About />
        <Services />
        <Eligibility />
        <Schedule />
        <Appointment />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
