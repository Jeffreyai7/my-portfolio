import About from "@/components/About";
import Hero from "@/components/Hero";
import MySkills from "@/components/MySkills";
import StatsSection from "@/components/StatsSection";
import { FadeSection } from "@/components/FadeInprovider";
import Projects from "@/components/Projects";
import ContactSection from "@/components/Contact";

export default function App() {
  return (
    <main>
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
      <FadeSection delay={0.8}>
        <Projects />
      </FadeSection>
      <FadeSection delay={0.8}>
        <ContactSection />
      </FadeSection>
    </main>
  );
}
