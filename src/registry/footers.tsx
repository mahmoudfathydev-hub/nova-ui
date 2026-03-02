import React from "react";
import { Github, Twitter, Linkedin, Heart } from "lucide-react";
import { ComponentVariant } from "./types";

export const footerVariants: ComponentVariant[] = [
    {
        id: "minimal-footer",
        name: "Minimal Footer",
        description: "A clean, professional footer designed for modern SaaS applications. Features a grid layout, social icons, and a polished attribution bar.",
        preview: (
            <footer className="w-full max-w-4xl p-10 rounded-[2rem] bg-white/2 border border-white/10 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-white tracking-tight">NovaUI</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            The next generation of copy-ready UI components for React and Next.js.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Links</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="hover:text-blue-400 cursor-pointer transition-colors">Components</li>
                            <li className="hover:text-blue-400 cursor-pointer transition-colors">Guides</li>
                            <li className="hover:text-blue-400 cursor-pointer transition-colors">Pricing</li>
                        </ul>
                    </div>
                    <div className="space-y-4 text-right md:text-left">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Connect</h4>
                        <div className="flex items-center gap-4 justify-end md:justify-start">
                            <Github size={18} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
                            <Twitter size={18} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
                            <Linkedin size={18} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-600">© 2026 NovaUI. All rights reserved.</p>
                    <div className="flex items-center gap-1.5 text-xs text-gray-600">
                        Built with <Heart size={12} className="text-rose-500 fill-rose-500" /> globally.
                    </div>
                </div>
            </footer>
        ),
        code: `
import { Github, Twitter, Linkedin, Heart } from "lucide-react";

export default function MinimalFooter() {
  return (
    <footer className="w-full max-w-4xl p-10 rounded-[2rem] bg-white/2 border border-white/10 shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Brand Section */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-white tracking-tight">NovaUI</h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            The next generation of copy-ready UI components for React and Next.js.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Links</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Components</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Guides</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Pricing</li>
          </ul>
        </div>

        {/* Social Connect */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Connect</h4>
          <div className="flex items-center gap-4">
            <Github size={18} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
            <Twitter size={18} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
            <Linkedin size={18} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Attribution Bar */}
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-600">© 2026 NovaUI. All rights reserved.</p>
        <div className="flex items-center gap-1.5 text-xs text-gray-600">
          Built with <Heart size={12} className="text-rose-500 fill-rose-500" /> globally.
        </div>
      </div>
    </footer>
  );
}
        `,
        usage: "1. Copy the code into your Footer.tsx component.\n2. Place it at the bottom of your layout.tsx or specific pages.\n3. Designed to work beautifully in dark mode with bg-white/2."
    }
];
