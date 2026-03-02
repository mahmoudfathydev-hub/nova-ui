import React from "react";
import DocsDemo from "@/components/Docs/DocsDemo";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cardVariants } from "@/registry";

export default function CardDocs() {
  return (
    <div className="animate-fade-in-up space-y-24">
      <header>
        <Link href="/docs" className="text-sm font-bold text-gray-500 hover:text-blue-400 transition-colors flex items-center gap-2 mb-8 group">
          <ArrowRight size={16} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Documentation
        </Link>
        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">Cards</h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Premium glassmorphic containers with dynamic hover effects, optimized for SAAS dashboards and feature showcases.
        </p>
      </header>

      <div className="space-y-32">
        {cardVariants.map((variant) => (
          <section key={variant.id} id={variant.id}>
            <DocsDemo
              title={variant.name}
              description={variant.description}
              preview={variant.preview}
              code={variant.code}
              usage={variant.usage}
            />
          </section>
        ))}
      </div>
    </div>
  );
}
