"use client";

import * as React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, BookOpen, Layers, Zap, Info, Phone, MousePointer2, Navigation, LayoutPanelTop, RectangleHorizontal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ShieldCheck = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
);

const docSections = [
  {
    title: "Getting Started",
    description: "Learn how to copy and paste NovaUI components into your project.",
    icon: <BookOpen className="size-5 text-blue-400" />,
    href: "/docs/introduction",
  },
  {
    title: "Components",
    description: "Explore our library of 80+ handcrafted React components.",
    icon: <Layers className="size-5 text-purple-400" />,
    href: "/components",
  },
  {
    title: "Validation",
    description: "Built-in Zod validation for rock-solid type-safety.",
    icon: <ShieldCheck className="size-5 text-emerald-400" />,
    href: "/docs/validation",
  },
];

function Navbar() {
  const pathname = usePathname();
  const isDocs = pathname?.startsWith("/docs");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigations = [
    { name: "Home", href: "/", icon: <Zap className="size-4" /> },
    { name: "About", href: "/about", icon: <Info className="size-4" /> },
    { name: "Contact", href: "/contact", icon: <Phone className="size-4" /> },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 flex transition-all duration-500",
      isDocs ? "bg-black/40 backdrop-blur-xl border-b border-white/10" : "p-4 justify-center"
    )}>
      <div className={cn(
        "flex items-center justify-between transition-all duration-500",
        isDocs ? "w-full px-12 py-4" : "w-full max-w-7xl px-6 py-2.5 rounded-2xl border border-white/10",
        !isDocs && (scrolled ? "bg-black/60 shadow-2xl" : "bg-white/5 shadow-none")
      )}>
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/images/logo.png"
              alt="NovaUI Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400 group-hover:from-blue-400 group-hover:to-white transition-all duration-500">
            NovaUI
          </span>
        </Link>
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/5 text-gray-400 hover:text-white transition-colors")}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 text-gray-400 hover:text-white data-[state=open]:text-white transition-colors">
                  Documentation
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[200px] gap-1 p-3 bg-[#0c1015] border border-white/10 rounded-xl">
                    <ListItem href="/docs" title="Overview" icon={<BookOpen size={16} className="text-blue-400" />}>
                      Docs Home
                    </ListItem>
                    <ListItem href="/components" title="Components" icon={<Layers size={16} className="text-purple-400" />}>
                      All UI Elements
                    </ListItem>
                    <div className="h-px bg-white/5 my-1" />
                    <ListItem href="/docs/buttons" title="Buttons" icon={<MousePointer2 size={16} className="text-blue-400" />} />
                    <ListItem href="/docs/navbars" title="Navbars" icon={<Navigation size={16} className="text-purple-400" />} />
                    <ListItem href="/docs/footers" title="Footers" icon={<LayoutPanelTop size={16} className="text-emerald-400" />} />
                    <ListItem href="/docs/cards" title="Cards" icon={<RectangleHorizontal size={16} className="text-orange-400" />} />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {navigations.slice(1).map((nav) => (
                <NavigationMenuItem key={nav.name}>
                  <Link href={nav.href} legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/5 text-gray-400 hover:text-white transition-colors")}>
                      {nav.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Link
              href="/get-started"
              className="px-5 py-2 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center gap-2 group"
            >
              Get Started
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </Link>
          </div>
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <div
        className={cn(
          "fixed inset-x-4 top-24 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 transition-all duration-500 md:hidden",
          isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-10 scale-95 pointer-events-none"
        )}
      >
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] px-2">Menu</p>
            <ul className="flex flex-col gap-2">
              {navigations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xl font-semibold text-gray-300 hover:text-white transition-colors flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-blue-400 group-hover:bg-blue-400/10 transition-all">
                      {link.icon}
                    </div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] px-2">Documentation</p>
            <div className="grid grid-cols-1 gap-3">
              {docSections.map((section) => (
                <Link
                  key={section.title}
                  href={section.href}
                  className="p-4 rounded-2xl bg-white/2 border border-white/5 hover:border-blue-500/20 transition-all group"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      {section.icon}
                    </div>
                    <span className="font-bold text-white group-hover:text-blue-400 transition-colors">{section.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/get-started"
            className="w-full flex justify-center px-5 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-colors shadow-xl shadow-blue-500/20"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-500/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon && <div className="group-hover:scale-110 transition-transform">{icon}</div>}
            <div className="text-sm font-bold leading-none text-white group-hover:text-blue-400 transition-colors">{title}</div>
          </div>
          <p className="line-clamp-2 text-xs leading-snug text-gray-500 mt-1">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Navbar;

