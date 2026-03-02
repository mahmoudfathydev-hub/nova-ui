import React from "react";
import DocsDemo from "@/components/Docs/DocsDemo";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { navbarVariants } from "@/registry";

export default function NavbarDocs() {
  return (
    <div className="animate-fade-in-up space-y-24">
      <header>
        <Link href="/docs" className="text-sm font-bold text-gray-500 hover:text-blue-400 transition-colors flex items-center gap-2 mb-8 group">
          <ArrowRight size={16} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Documentation
        </Link>
        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">Navbars</h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Sophisticated navigation components with frosted-glass effects, responsive dropdowns, and sticky positioning.
        </p>
      </header>

      <div className="space-y-32">
        {navbarVariants.map((variant) => (
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
