"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FooterMinimal() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Single clean row */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Brand on left */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">Minimal</span>
          </div>

          {/* Navigation links centered or right aligned */}
          <nav className="flex items-center gap-8" aria-label="Footer navigation">
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Product
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Company
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Resources
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Contact
            </Link>
          </nav>

          {/* Social icons small and subtle */}
          <nav className="flex items-center gap-3" aria-label="Social media links">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-200 transition-all"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-200 transition-all"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-200 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </nav>
        </div>

        {/* Copyright bottom line */}
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Minimal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Usage Example:
// import FooterMinimal from "./components/ui/Footer/FooterMinimal";
// <FooterMinimal />

// Dependencies: lucide-react icons
