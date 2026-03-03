import React from "react";
import { ComponentVariant } from "./types";

export const footerVariants: ComponentVariant[] = [
  {
    id: "footer-minimal",
    name: "Footer Minimal",
    description: "Clean, minimalist footer with single row layout, brand on left, centered navigation, and subtle social icons. Perfect for SaaS applications and modern interfaces.",
    preview: (
      <div className="w-full max-w-6xl mx-auto p-8 rounded-[2rem] bg-white border border-gray-200 shadow-2xl">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">Minimal</span>
          </div>
          <nav className="flex items-center gap-8">
            <span className="text-gray-600 text-sm">Product</span>
            <span className="text-gray-600 text-sm">Company</span>
            <span className="text-gray-600 text-sm">Resources</span>
            <span className="text-gray-600 text-sm">Contact</span>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-center text-gray-500 text-sm">© 2026 Minimal. All rights reserved.</p>
        </div>
      </div>
    ),
    code: `
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
        `,
    usage: "1. Copy the component code into your project.\n2. Import and use in your layout or pages.\n3. Customize brand name, links, and social URLs as needed.\n4. Perfect for minimal SaaS applications and clean interfaces."
  },
  {
    id: "footer-grid-professional",
    name: "Footer Grid Professional",
    description: "Enterprise-style footer with multi-column grid layout, structured navigation, and professional hierarchy. Ideal for corporate websites and large-scale applications.",
    preview: (
      <div className="w-full max-w-6xl mx-auto p-8 rounded-[2rem] bg-gray-50 border border-gray-200 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-gray-900">GridPro</span>
            </div>
            <p className="text-gray-600 text-sm max-w-sm">Enterprise-grade solutions for modern businesses.</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="w-4 h-4 bg-gray-400 rounded"></div>
                <span>contact@gridpro.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="w-4 h-4 bg-gray-400 rounded"></div>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider">Product</h4>
            <div className="space-y-2">
              <div className="text-gray-600 text-sm">Features</div>
              <div className="text-gray-600 text-sm">Pricing</div>
              <div className="text-gray-600 text-sm">Enterprise</div>
              <div className="text-gray-600 text-sm">API</div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider">Resources</h4>
            <div className="space-y-2">
              <div className="text-gray-600 text-sm">Documentation</div>
              <div className="text-gray-600 text-sm">Tutorials</div>
              <div className="text-gray-600 text-sm">Blog</div>
              <div className="text-gray-600 text-sm">Support</div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-gray-900 font-semibold text-sm uppercase tracking-wider">Company</h4>
            <div className="space-y-2">
              <div className="text-gray-600 text-sm">About Us</div>
              <div className="text-gray-600 text-sm">Careers</div>
              <div className="text-gray-600 text-sm">Press</div>
              <div className="text-gray-600 text-sm">Partners</div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">© 2026 GridPro. All rights reserved.</p>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              </div>
              <div className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              </div>
              <div className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `
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
        `,
    usage: "1. Copy the component code into your project.\n2. Import and use in your layout or pages.\n3. Customize brand name, links, and contact information.\n4. Perfect for enterprise applications and corporate websites."
  },
  {
    id: "footer-modern-gradient",
    name: "Footer Modern Gradient",
    description: "Premium marketing footer with gradient background, centered brand, link grid, newsletter signup, and smooth transitions. Ideal for SaaS landing pages and modern marketing sites.",
    preview: (
      <div className="w-full max-w-6xl mx-auto p-8 rounded-[2rem] bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 border border-white/10 shadow-2xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <span className="text-3xl font-bold text-white">Gradient</span>
          </div>
          <p className="text-gray-300 text-lg">Premium experiences that inspire and delight.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Product</h4>
            <div className="space-y-2">
              <div className="text-gray-300 text-sm">Features</div>
              <div className="text-gray-300 text-sm">Solutions</div>
              <div className="text-gray-300 text-sm">Pricing</div>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Company</h4>
            <div className="space-y-2">
              <div className="text-gray-300 text-sm">About</div>
              <div className="text-gray-300 text-sm">Blog</div>
              <div className="text-gray-300 text-sm">Careers</div>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Resources</h4>
            <div className="space-y-2">
              <div className="text-gray-300 text-sm">Documentation</div>
              <div className="text-gray-300 text-sm">Tutorials</div>
              <div className="text-gray-300 text-sm">Community</div>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Legal</h4>
            <div className="space-y-2">
              <div className="text-gray-300 text-sm">Privacy</div>
              <div className="text-gray-300 text-sm">Terms</div>
              <div className="text-gray-300 text-sm">Security</div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-sm mx-auto">
            <h3 className="text-white font-bold text-lg mb-2">Get Started Today</h3>
            <p className="text-gray-300 text-sm mb-4">Join thousands of teams building amazing products</p>
            <button className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    ),
    code: `
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, ArrowRight, Sparkles } from "lucide-react";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FooterGradient() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Full width section with soft gradient background */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Brand centered at top */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Sparkles size={24} className="text-white" />
            </div>
            <span className="text-3xl font-bold tracking-tight">Gradient</span>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Premium experiences that inspire and delight. Join thousands of teams 
            building the future with our platform.
          </p>
        </div>

        {/* Link grid below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Product</h4>
            <nav aria-label="Product navigation">
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Enterprise
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Company</h4>
            <nav aria-label="Company navigation">
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Press
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Resources</h4>
            <nav aria-label="Resources navigation">
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Support
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Legal</h4>
            <nav aria-label="Legal navigation">
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    Cookies
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Call to action button inside footer */}
        <div className="text-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="text-white font-bold text-xl mb-3">Get Started Today</h3>
            <p className="text-gray-300 text-sm mb-6">
              Join thousands of teams building amazing products
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-hidden focus:border-white/40 focus:bg-white/20 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/30 flex items-center justify-center gap-2"
                >
                  Start Free Trial <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-3 p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-8-8a1 1 0 011.414-1.414L8 12.586V7a1 1 0 012 0v5.586l7.293-7.293a1 1 0 001.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Welcome aboard!</p>
                  <p className="text-gray-300 text-xs">Check your email for next steps</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Social icons centered */}
        <nav className="flex items-center justify-center gap-4 mb-8" aria-label="Social media links">
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </nav>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Gradient. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
        `,
    usage: "1. Copy the component code into your project.\n2. Import and use in your layout or pages.\n3. Customize brand name, colors, and newsletter settings.\n4. Perfect for SaaS landing pages and marketing websites."
  },
  {
    id: "footer-dark-tech",
    name: "Footer Dark Tech",
    description: "Tech startup footer with dark background, bold typography, animated hover effects, and cyan accent colors. Features large brand section and scroll-to-top functionality.",
    preview: (
      <div className="w-full max-w-6xl mx-auto p-8 rounded-[2rem] bg-black border border-gray-800 shadow-2xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded"></div>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">TechVault</h1>
              <p className="text-cyan-400 text-lg font-semibold">BUILD THE FUTURE</p>
            </div>
          </div>
          <p className="text-gray-400 text-xl">Cutting-edge technology solutions for the next generation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg uppercase tracking-wider flex items-center gap-2">
              <div className="w-5 h-5 bg-cyan-400 rounded"></div>
              PRODUCTS
            </h4>
            <div className="space-y-3">
              <div className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">API Platform</div>
              <div className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">Cloud Infrastructure</div>
              <div className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">AI Solutions</div>
              <div className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">Security Suite</div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg uppercase tracking-wider">RESOURCES</h4>
            <div className="space-y-3">
              <div className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">Documentation</div>
              <div className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">Tutorials</div>
              <div className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">Tech Blog</div>
              <div className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">Community</div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg uppercase tracking-wider">COMPANY</h4>
            <div className="space-y-3">
              <div className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">About Us</div>
              <div className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">Careers</div>
              <div className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">Press Kit</div>
              <div className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">Contact</div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg uppercase tracking-wider">LEGAL</h4>
            <div className="space-y-3">
              <div className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">Privacy Policy</div>
              <div className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">Terms of Service</div>
              <div className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">Security</div>
              <div className="text-gray-400 text-sm hover:text-cyan-400 transition-colors cursor-pointer">Compliance</div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">© 2026 TechVault. All rights reserved.</p>
              <p className="text-cyan-400 text-xs font-mono">POWERED BY INNOVATION</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
              </div>
              <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
              </div>
              <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-cyan-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, ArrowUp, Zap, Code, Cpu } from "lucide-react";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function FooterTech() {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Large brand section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <Cpu size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-2">TechVault</h1>
              <p className="text-cyan-400 text-lg font-semibold">BUILD THE FUTURE</p>
            </div>
          </div>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology solutions for the next generation of digital products. 
            Powering innovation with enterprise-grade infrastructure.
          </p>
        </div>

        {/* Vertical link columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Products Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg uppercase tracking-wider flex items-center gap-2">
              <Zap size={20} className="text-cyan-400" />
              PRODUCTS
            </h4>
            <nav aria-label="Products navigation">
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="#" 
                    className={cn(
                      "text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm relative group",
                      isHovered === "products-api" && "text-cyan-400"
                    )}
                    onMouseEnter={() => setIsHovered("products-api")}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    API Platform
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300",
                      isHovered === "products-api" && "w-full"
                    )}></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className={cn(
                      "text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm relative group",
                      isHovered === "products-cloud" && "text-cyan-400"
                    )}
                    onMouseEnter={() => setIsHovered("products-cloud")}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    Cloud Infrastructure
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300",
                      isHovered === "products-cloud" && "w-full"
                    )}></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className={cn(
                      "text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm relative group",
                      isHovered === "products-ai" && "text-cyan-400"
                    )}
                    onMouseEnter={() => setIsHovered("products-ai")}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    AI Solutions
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300",
                      isHovered === "products-ai" && "w-full"
                    )}></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className={cn(
                      "text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm relative group",
                      isHovered === "products-security" && "text-cyan-400"
                    )}
                    onMouseEnter={() => setIsHovered("products-security")}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    Security Suite
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300",
                      isHovered === "products-security" && "w-full"
                    )}></span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Resources Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg uppercase tracking-wider flex items-center gap-2">
              <Code size={20} className="text-cyan-400" />
              RESOURCES
            </h4>
            <nav aria-label="Resources navigation">
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="#" 
                    className={cn(
                      "text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm relative group",
                      isHovered === "resources-docs" && "text-cyan-400"
                    )}
                    onMouseEnter={() => setIsHovered("resources-docs")}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    Documentation
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300",
                      isHovered === "resources-docs" && "w-full"
                    )}></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className={cn(
                      "text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm relative group",
                      isHovered === "resources-tutorials" && "text-cyan-400"
                    )}
                    onMouseEnter={() => setIsHovered("resources-tutorials")}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    Tutorials
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300",
                      isHovered === "resources-tutorials" && "w-full"
                    )}></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className={cn(
                      "text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm relative group",
                      isHovered === "resources-blog" && "text-cyan-400"
                    )}
                    onMouseEnter={() => setIsHovered("resources-blog")}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    Tech Blog
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300",
                      isHovered === "resources-blog" && "w-full"
                    )}></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className={cn(
                      "text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm relative group",
                      isHovered === "resources-community" && "text-cyan-400"
                    )}
                    onMouseEnter={() => setIsHovered("resources-community")}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    Community
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300",
                      isHovered === "resources-community" && "w-full"
                    )}></span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg uppercase tracking-wider">COMPANY</h4>
            <nav aria-label="Company navigation">
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="#" 
                    className={cn(
                      "text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm relative group",
                      isHovered === "company-about" && "text-cyan-400"
                    )}
                    onMouseEnter={() => setIsHovered("company-about")}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    About Us
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300",
                      isHovered === "company-about" && "w-full"
                    )}></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className={cn(
                      "text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm relative group",
                      isHovered === "company-careers" && "text-cyan-400"
                    )}
                    onMouseEnter={() => setIsHovered("company-careers")}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    Careers
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300",
                      isHovered === "company-careers" && "w-full"
                    )}></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className={cn(
                      "text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm relative group",
                      isHovered === "company-press" && "text-cyan-400"
                    )}
                    onMouseEnter={() => setIsHovered("company-press")}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    Press Kit
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300",
                      isHovered === "company-press" && "w-full"
                    )}></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className={cn(
                      "text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm relative group",
                      isHovered === "company-contact" && "text-cyan-400"
                    )}
                    onMouseEnter={() => setIsHovered("company-contact")}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    Contact
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300",
                      isHovered === "company-contact" && "w-full"
                    )}></span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Legal Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg uppercase tracking-wider">LEGAL</h4>
            <nav aria-label="Legal navigation">
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="#" 
                    className={cn(
                      "text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm relative group",
                      isHovered === "legal-privacy" && "text-cyan-400"
                    )}
                    onMouseEnter={() => setIsHovered("legal-privacy")}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    Privacy Policy
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300",
                      isHovered === "legal-privacy" && "w-full"
                    )}></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className={cn(
                      "text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm relative group",
                      isHovered === "legal-terms" && "text-cyan-400"
                    )}
                    onMouseEnter={() => setIsHovered("legal-terms")}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    Terms of Service
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300",
                      isHovered === "legal-terms" && "w-full"
                    )}></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className={cn(
                      "text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm relative group",
                      isHovered === "legal-security" && "text-cyan-400"
                    )}
                    onMouseEnter={() => setIsHovered("legal-security")}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    Security
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300",
                      isHovered === "legal-security" && "w-full"
                    )}></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="#" 
                    className={cn(
                      "text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm relative group",
                      isHovered === "legal-compliance" && "text-cyan-400"
                    )}
                    onMouseEnter={() => setIsHovered("legal-compliance")}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    Compliance
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300",
                      isHovered === "legal-compliance" && "w-full"
                    )}></span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom section with scroll to top */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <p className="text-gray-500 text-sm">
                © {currentYear} TechVault. All rights reserved.
              </p>
              <p className="text-cyan-400 text-xs font-mono">
                POWERED BY INNOVATION
              </p>
            </div>
            
            {/* Social Links */}
            <nav className="flex items-center gap-4" aria-label="Social media links">
              <a
                href="#"
                className="w-12 h-12 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              
              {/* Scroll to top button */}
              <button
                onClick={scrollToTop}
                type="button"
                className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all group"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
        `,
    usage: "1. Copy the component code into your project.\n2. Import and use in your layout or pages.\n3. Customize brand name, accent colors, and tech-focused content.\n4. Perfect for tech startups and developer-focused platforms."
  }
];