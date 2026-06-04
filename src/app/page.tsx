import About from "@/components/About";
import Hero from "@/components/Hero";
import MySkills from "@/components/MySkills";
import StatsSection from "@/components/StatsSection";
import Projects from "@/components/Projects";
import ContactSection from "@/components/Contact";

export default function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsSection />
      <About />
      <MySkills />
      <Projects />
      <ContactSection />
    </main>
  );
}