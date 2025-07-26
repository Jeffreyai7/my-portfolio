import Hero from "@/components/Hero";
import Header from "@/components/Navbar";
import StatsSection from "@/components/StatsSection";

export default function App() {
  return (
    <main className="w-full md:w-[80%] mx-auto">
      <Header />
      <Hero />
      <StatsSection />
    </main>
  );
}
