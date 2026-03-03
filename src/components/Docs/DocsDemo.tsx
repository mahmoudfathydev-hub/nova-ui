"use client";

import React, { useState } from "react";

import { Copy, Check, Eye, Code, BookOpen } from "lucide-react";

import { cn } from "../../lib/utils";

interface DocsDemoProps {
  title: string;

  description: string;

  preview: React.ReactNode;

  code: string;

  usage: string;
}

export default function DocsDemo({
  title,

  description,

  preview,

  code,

  usage,
}: DocsDemoProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-10 animate-fade-in-up">
      {/* Header */}

      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-white tracking-tight">
          {title}
        </h2>

        <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>

      {/* Interactive Area */}

      <div className="bg-[#0c1015] border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl">
        {/* Tabs Bar */}

        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/2">
          <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/5">
            <button
              onClick={() => setActiveTab("preview")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all",

                activeTab === "preview"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-500 hover:text-white",
              )}
            >
              <Eye size={16} />
              Preview
            </button>

            <button
              onClick={() => setActiveTab("code")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all",

                activeTab === "code"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-500 hover:text-white",
              )}
            >
              <Code size={16} />
              Code
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all text-sm font-bold"
          >
            {copied ? (
              <Check size={16} className="text-emerald-400" />
            ) : (
              <Copy size={16} />
            )}

            {copied ? "Copied!" : "Copy Code"}
          </button>
        </div>

        {/* Content Area */}

        <div className="relative">
          {activeTab === "preview" ? (
            <div className="p-12 md:p-20 flex items-center justify-center min-h-[400px] bg-grid-white/[0.02]">
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/20 pointer-events-none" />

              <div className="relative z-10">{preview}</div>
            </div>
          ) : (
            <div className="relative p-6 md:p-8 bg-[#05070a] overflow-x-auto">
              <pre className="text-sm font-mono text-blue-300 leading-relaxed">
                <code>{code}</code>
              </pre>
            </div>
          )}
        </div>
      </div>

      {/* Readme Section */}

      <div className="pt-8 border-t border-white/5">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
            <BookOpen size={20} />
          </div>

          <h3 className="text-xl font-bold text-white">How to use</h3>
        </div>

        <div className="prose prose-invert max-w-none text-gray-400 text-lg leading-relaxed space-y-4">
          {usage.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
