import Hero from "./components/hero/Hero";
import EventDetails from "./components/event-details/EventDetails";
import Gallery from "./components/gallery/Gallery";
import CallToAction from "./components/cta/CallToAction";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <EventDetails />
      <Gallery />
      <CallToAction />
      <Footer />
    </main>
  );
}
