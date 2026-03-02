import React from "react";
import DocsDemo from "@/components/Docs/DocsDemo";
import { Zap, ArrowRight, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";

export default function CardDocs() {
  const cardPreview = (
    <div className="group relative w-full max-w-sm p-8 rounded-[2rem] bg-white/2 border border-white/10 hover:border-blue-500/30 transition-all duration-500 overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500">
          <Cpu size={28} />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
            Next-Gen Architecture
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Experience lightning-fast build times and seamless integration with our modular architecture.
          </p>
        </div>
        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-widest">
            <ShieldCheck size={14} />
            Verified
          </div>
          <div className="w-1 h-1 rounded-full bg-white/10" />
          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            v1.2.0
          </div>
        </div>
      </div>
    </div>
  );

  const cardCode = `
import { Cpu, ShieldCheck } from "lucide-react";

export default function FeatureCard() {
  return (
    <div className="group relative w-full max-w-sm p-8 rounded-[2rem] bg-white/2 border border-white/10 hover:border-blue-500/30 transition-all duration-500 overflow-hidden shadow-2xl">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 space-y-6">
        {/* Icon Container */}
        <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500">
          <Cpu size={28} />
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
            Next-Gen Architecture
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Experience lightning-fast build times and seamless integration with our modular architecture.
          </p>
        </div>

        {/* Footer Meta */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-widest">
            <ShieldCheck size={14} />
            Verified
          </div>
          <div className="w-1 h-1 rounded-full bg-white/10" />
          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            v1.2.0
          </div>
        </div>
      </div>
    </div>
  );
}
  `;

  const cardUsage = `
1. Copy the code into your \`FeatureCard.tsx\` file.
2. Use it inside a grid (\`grid grid-cols-1 md:grid-cols-3\`) to showcase features.
3. Requires \`lucide-react\` for icons.
4. Glassmorphism is achieved using \`bg-white/2\` and \`border-white/10\`.
`;

  return (
    <div className="animate-fade-in-up">
      <Link href="/docs" className="text-sm font-bold text-gray-500 hover:text-blue-400 transition-colors flex items-center gap-2 mb-8 group">
        <ArrowRight size={16} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
        Back to Documentation
      </Link>
      <DocsDemo
        title="Feature Card"
        description="A premium glassmorphic card designed for high-end SaaS dashboards and feature showcases. Includes smooth hover states and a polished typography system."
        preview={cardPreview}
        code={cardCode}
        usage={cardUsage}
      />
    </div>
  );
}
