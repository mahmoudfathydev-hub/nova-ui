"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MousePointer2,
  Navigation,
  LayoutPanelTop,
  RectangleHorizontal,
  BookOpen,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { cn } from "../../lib/utils";
import {
  buttonVariants,
  cardVariants,
  footerVariants,
  navbarVariants,
} from "../../registry";

type SidebarItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
  models?: { name: string; id: string }[];
};

type SidebarSection = {
  title: string;
  items: SidebarItem[];
};

const sidebarSections: SidebarSection[] = [
  {
    title: "Documentation",
    items: [
      { name: "Overview", href: "/docs", icon: <BookOpen size={18} /> },
      {
        name: "Getting Started",
        href: "/docs/getting-started",
        icon: <Layers size={18} />,
      },
      {
        name: "Validation",
        href: "/docs/validation",
        icon: <ShieldCheck size={18} />,
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        name: "Buttons",
        href: "/docs/buttons",
        icon: <MousePointer2 size={18} />,
        models: buttonVariants.map((v) => ({ name: v.name, id: v.id })),
      },
      {
        name: "Cards",
        href: "/docs/cards",
        icon: <RectangleHorizontal size={18} />,
        models: cardVariants.map((v) => ({ name: v.name, id: v.id })),
      },
      {
        name: "Footers",
        href: "/docs/footers",
        icon: <LayoutPanelTop size={18} />,
        models: footerVariants.map((v) => ({ name: v.name, id: v.id })),
      },
      {
        name: "Navbars",
        href: "/docs/navbars",
        icon: <Navigation size={18} />,
        models: navbarVariants.map((v) => ({ name: v.name, id: v.id })),
      },
    ],
  },
];

export default function DocsSidebar() {
  const pathname = usePathname();

  const scrollToModel = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <aside className="sticky top-24 w-64 h-[calc(100vh-8rem)] bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 hidden lg:block overflow-y-auto custom-scrollbar">
      <div className="space-y-10">
        {sidebarSections.map((section) => (
          <div key={section.title} className="space-y-4">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] px-2">
              {section.title}
            </p>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name} className="space-y-1">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group",
                        isActive
                          ? "bg-blue-600/10 text-blue-400 border border-blue-500/20"
                          : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent",
                      )}
                    >
                      <div
                        className={cn(
                          "flex items-center justify-center transition-all",
                          isActive
                            ? "text-blue-400"
                            : "text-gray-500 group-hover:text-blue-400",
                        )}
                      >
                        {item.icon}
                      </div>
                      <span className="text-sm font-semibold tracking-tight">
                        {item.name}
                      </span>
                      {isActive && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-pulse" />
                      )}
                    </Link>
                    {isActive && item.models && item.models.length > 0 && (
                      <ul className="ml-9 mt-2 space-y-1.5 border-l border-white/5">
                        {item.models.map((model) => (
                          <li key={model.id}>
                            <button
                              onClick={() => scrollToModel(model.id)}
                              className="w-full text-left px-4 py-1.5 text-xs text-gray-500 hover:text-white transition-colors cursor-pointer capitalize group flex items-center gap-2"
                            >
                              <div className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-blue-400 transition-colors" />
                              {model.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-20 pt-6 border-t border-white/5">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-gray-500 uppercase tracking-widest w-fit">
          Version 1.2.0
        </div>
      </div>
    </aside>
  );
}
