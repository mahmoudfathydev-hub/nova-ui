import React from "react";
import { ComponentVariant } from "./types";

export const navbarVariants: ComponentVariant[] = [
    {
        id: "responsive-navbar",
        name: "Responsive Navbar",
        description: "A slick, frosted-glass navigation bar designed for modern landing pages. Includes a centered container and responsive layout hints.",
        preview: (
            <div className="w-full h-[300px] border border-white/5 rounded-[2rem] overflow-hidden relative bg-[#05070a]">
                <div className="absolute top-0 left-0 right-0 p-4">
                    <div className="w-full flex items-center justify-between px-6 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                        <span className="font-bold text-white">NovaUI</span>
                        <div className="flex gap-4">
                            <div className="w-10 h-2 bg-white/10 rounded-full" />
                            <div className="w-10 h-2 bg-white/10 rounded-full" />
                            <div className="w-10 h-2 bg-white/10 rounded-full" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center h-full text-gray-500 text-sm italic">
                    Navbar sticky preview area
                </div>
            </div>
        ),
        code: `
export default function SimpleNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl">
        <span className="text-xl font-bold text-white">Logo</span>
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <li className="hover:text-white cursor-pointer">Products</li>
          <li className="hover:text-white cursor-pointer">Resources</li>
          <li className="hover:text-white cursor-pointer">Company</li>
        </ul>
        <button className="px-5 py-2 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-500 transition-all">
          Join Now
        </button>
      </div>
    </nav>
  );
}
        `,
        usage: "1. Copy the code into your Navbar.tsx file.\n2. Use the fixed class to make it stick to the top.\n3. Use backdrop-blur-xl for the frosted glass effect."
    }
];
