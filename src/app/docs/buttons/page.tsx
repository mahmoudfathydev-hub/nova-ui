"use client";

import DocsDemo from "../../../components/Docs/DocsDemo";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../../../registry";

export default function ButtonDocs() {
  return (
    <div className="animate-fade-in-up space-y-24">
      <header>
        <Link
          href="/docs"
          className="text-sm font-bold text-gray-500 hover:text-blue-400 transition-colors flex items-center gap-2 mb-8 group"
        >
          <ArrowRight
            size={16}
            className="rotate-180 group-hover:-translate-x-1 transition-transform"
          />
          Back to Documentation
        </Link>
        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-4">
          Buttons
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          High-performance buttons with hardware-accelerated animations,
          glassmorphism, and responsive states.
        </p>
      </header>

      <div className="space-y-32">
        {buttonVariants.map((variant) => (
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
