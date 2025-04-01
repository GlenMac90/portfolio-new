import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col w-full max-w-7xl">
      <Hero />
      <Services />
      <Skills />
      <Experience />
      <Testimonials />
      <Footer />
    </main>
  );
}
