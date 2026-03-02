import React from "react";
import DocsDemo from "@/components/Docs/DocsDemo";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ButtonDocs() {
    const buttonPreview = (
        <button className="relative group px-10 py-5 bg-blue-600 rounded-[2rem] overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/20">
            <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 blur-xl" />
            <span className="relative z-10 font-black text-white text-lg flex items-center gap-3">
                Shiny Button
                <Sparkles size={20} className="animate-pulse" />
            </span>
        </button>
    );

    const buttonCode = `
export default function ShinyButton() {
  return (
    <button className="relative group px-10 py-5 bg-blue-600 rounded-[2rem] overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-blue-500/20">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Gloss Reflection */}
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 blur-xl" />
      
      <span className="relative z-10 font-black text-white text-lg flex items-center gap-3">
        Shiny Button
        <Sparkles size={20} className="animate-pulse text-white" />
      </span>
    </button>
  );
}
  `;

    const buttonUsage = `
1. Copy the code from the "Code" tab above.
2. Create a new file \`ShinyButton.tsx\` in your components directory.
3. Paste the code and import it into your page.
4. Ensure you have \`lucide-react\` installed for the Sparkles icon.
`;

    return (
        <div className="animate-fade-in-up">
            <Link href="/docs" className="text-sm font-bold text-gray-500 hover:text-blue-400 transition-colors flex items-center gap-2 mb-8 group">
                <ArrowRight size={16} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                Back to Documentation
            </Link>
            <DocsDemo
                title="Shiny Button"
                description="A premium, interactive button with hardware-accelerated transforms, gloss reflections, and smooth gradient transitions."
                preview={buttonPreview}
                code={buttonCode}
                usage={buttonUsage}
            />
        </div>
    );
}
