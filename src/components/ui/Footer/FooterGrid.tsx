"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FooterGrid() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Multi-column grid (3–5 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-gray-900">GridPro</span>
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Enterprise-grade solutions for modern businesses. 
              Trusted by thousands of companies worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <Mail size={16} />
                <span>contact@gridpro.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Product links */}
          <div className="space-y-6">
            <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider">Product</h4>
            <nav aria-label="Product navigation">
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    API
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider">Resources</h4>
            <nav aria-label="Resources navigation">
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Support
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider">Company</h4>
            <nav aria-label="Company navigation">
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Partners
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider">Legal</h4>
            <nav aria-label="Legal navigation">
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Compliance
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar separated by border */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              © {currentYear} GridPro. All rights reserved.
            </p>
            
            {/* Social Links */}
            <nav className="flex items-center gap-3" aria-label="Social media links">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-200 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-200 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-200 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Usage Example:
// import FooterGrid from "./components/ui/Footer/FooterGrid";
// <FooterGrid />

// Dependencies: lucide-react icons
