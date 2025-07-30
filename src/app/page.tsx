import About from "@/components/About";
import Hero from "@/components/Hero";
import MySkills from "@/components/MySkills";
import Header from "@/components/Navbar";
import StatsSection from "@/components/StatsSection";
import { FadeSection } from "@/components/FadeInprovider";
import Projects from "@/components/Projects";

export default function App() {
  return (
    <main className="w-full md:w-[80%] mx-auto">
      <FadeSection>
        <Header />
      </FadeSection>
      <FadeSection delay={0.2}>
        <Hero />
      </FadeSection>
      <FadeSection delay={0.4}>
        <StatsSection />
      </FadeSection>
      <FadeSection delay={0.6}>
        <About />
      </FadeSection>
      <FadeSection delay={0.8}>
        <MySkills />
      </FadeSection>
      <FadeSection delay={1.0}>
        <Projects />
      </FadeSection>
    </main>
  );
}
