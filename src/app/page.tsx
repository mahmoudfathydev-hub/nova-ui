import Hero from "./components/Hero";
import Features from "./components/Features";
import LivePreview from "./components/LivePreview";
import PopularComponents from "./components/PopularComponents";
import Installation from "./components/Installation";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070a]">
      <Hero />
      <Features />
      <LivePreview />
      <PopularComponents />
      <Installation />

      {/* Simple Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#05070a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm italic">N</div>
            <span className="text-lg font-bold text-white">NovaUI</span>
          </div>
          <p className="text-gray-500 text-sm">© 2024 NovaUI. Built for developers by developers.</p>
          <div className="flex gap-6 text-gray-500 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
