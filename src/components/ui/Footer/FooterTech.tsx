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

// Usage Example:
// import FooterTech from "./components/ui/Footer/FooterTech";
// <FooterTech />

// Dependencies: lucide-react icons
