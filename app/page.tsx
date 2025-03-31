import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col w-full max-w-7xl">
      <Hero />
      <Services />
      <Skills />
    </main>
  );
}
