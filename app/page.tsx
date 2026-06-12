import Nav from "./components/Nav";
import Hero from "./components/Hero";
import BadgeStrip from "./components/BadgeStrip";
import About from "./components/About";
import Services from "./components/Services";
import Schedule from "./components/Schedule";
import CTA from "./components/CTA";
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
        <CTA />
      </main>
      <Footer />
    </>
  );
}
