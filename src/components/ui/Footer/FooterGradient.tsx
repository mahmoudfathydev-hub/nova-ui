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

// Usage Example:
// import FooterGradient from "./components/ui/Footer/FooterGradient";
// <FooterGradient />

// Dependencies: lucide-react icons
