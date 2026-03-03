import Hero from "./components/Hero";
import Features from "./components/Features";
import LivePreview from "./components/LivePreview";
import PopularComponents from "./components/PopularComponents";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070a] overflow-x-hidden" role="main">
      <Hero />
      <Features />
      <LivePreview />
      <PopularComponents />
    </main>
  );
}
