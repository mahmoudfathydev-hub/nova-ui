"use client";

import { useState } from "react";
import { Copy, Check, Terminal, ChevronRight, Package, BookOpen, Github } from "lucide-react";

export default function Installation() {
    const [copied, setCopied] = useState(false);
    const command = "npm install @novaui/react zod lucide-react";

    const copyCommand = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const steps = [
        {
            title: "Install Dependencies",
            desc: "Install the core library along with peer dependencies for icons and validation.",
            icon: <Package size={18} />,
        },
        {
            title: "Configure Theme",
            desc: "Add our preset to your tailwind.config.js to enable the NovaUI design system.",
            icon: <ChevronRight size={18} />,
        },
        {
            title: "Start Building",
            desc: "Import components and start building type-safe UIs with zero boilerplate.",
            icon: <Check size={18} />,
        },
    ];

    return (
        <section className="py-24 bg-[#05070a] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text & Steps */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-blue-500 font-semibold tracking-wider text-sm uppercase">Quick Start</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-white">Get Running in Seconds</h3>
                            <p className="text-lg text-gray-400">
                                NovaUI is designed to be incrementally adoptable. Start with a single component or go all-in on our type-safe ecosystem.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {steps.map((step, idx) => (
                                <div key={idx} className="flex gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/10 transition-colors">
                                        {step.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-white font-bold">{step.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all">
                                <BookOpen size={18} />
                                Read Full Docs
                            </button>
                            <button className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                                <Github size={18} />
                                Star on GitHub
                            </button>
                        </div>
                    </div>

                    {/* Right: Terminal */}
                    <div className="relative">
                        {/* Background glow */}
                        <div className="absolute -inset-4 bg-blue-600/20 rounded-[2rem] blur-3xl -z-10 animate-pulse"></div>

                        <div className="bg-[#0c1015] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="flex items-center justify-between px-4 py-3 bg-[#0f141a] border-b border-white/5">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-white/10"></div>
                                    <div className="w-3 h-3 rounded-full bg-white/10"></div>
                                    <div className="w-3 h-3 rounded-full bg-white/10"></div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 text-[10px] font-mono">
                                    <Terminal size={12} />
                                    bash
                                </div>
                            </div>
                            <div className="p-4 md:p-8 space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-blue-500 font-mono mt-1">$</span>
                                    <code className="text-gray-300 font-mono text-sm leading-relaxed block overflow-x-auto whitespace-pre">
                                        {command}
                                    </code>
                                </div>
                                <button
                                    onClick={copyCommand}
                                    className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition-all duration-300 ${copied ? "bg-emerald-600/20 text-emerald-400 border border-emerald-600/30" : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"}`}
                                >
                                    {copied ? <Check size={16} /> : <Copy size={16} />}
                                    {copied ? "Command Copied!" : "Copy Installation Command"}
                                </button>
                            </div>
                        </div>

                        {/* Floating floating "success" badge */}
                        <div className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-[#0c1015]/80 backdrop-blur-xl border border-emerald-500/20 shadow-2xl animate-in slide-in-from-bottom duration-1000">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                                    <Check size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-white">Success!</p>
                                    <p className="text-[10px] text-gray-500">All tests passed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
