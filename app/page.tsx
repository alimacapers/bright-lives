import Nav from "./components/Nav";
import Hero from "./components/Hero";
import BadgeStrip from "./components/BadgeStrip";
import About from "./components/About";
import Services from "./components/Services";
import Schedule from "./components/Schedule";
import Gallery from "./components/Gallery";
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
        <Schedule />
        <Gallery />
        <Appointment />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
