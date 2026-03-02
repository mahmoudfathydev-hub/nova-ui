import React from "react";
import { Sparkles, Loader2, Plus, Trash2, CheckCircle2, Search, ArrowRight, ExternalLink } from "lucide-react";
import { ComponentVariant } from "./types";

export const buttonVariants: ComponentVariant[] = [
  {
    id: "primary",
    name: "Primary Button",
    description: "The main call-to-action button, designed to grab maximum attention with a vibrant gradient and shadow.",
    preview: (
      <button className="relative group px-8 py-3 bg-blue-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-hidden focus:ring-4 focus:ring-blue-500/30 shadow-lg shadow-blue-500/20">
        <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <span className="relative z-10 flex items-center gap-2">
          Get Started <ArrowRight size={18} />
        </span>
      </button>
    ),
    code: `
export default function PrimaryButton() {
  return (
    <button 
      className="relative group px-8 py-3 bg-blue-600 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-hidden focus:ring-4 focus:ring-blue-500/30 shadow-lg shadow-blue-500/20"
      aria-label="Get Started"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <span className="relative z-10 flex items-center gap-2">
        Get Started <ArrowRight size={18} />
      </span>
    </button>
  );
}
        `,
    usage: "1. Use for the main CTA.\n2. **To Change Color**: Replace `bg-blue-600` with `bg-purple-600` and update the gradient overlay `from-purple-400 to-pink-500`.\n3. **To Change Shadow**: Update `shadow-blue-500/20` to match your new base color."
  },
  {
    id: "secondary",
    name: "Secondary Button",
    description: "A subtle yet premium alternative for secondary actions, using a glassmorphic background.",
    preview: (
      <button className="px-8 py-3 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold rounded-xl transition-all duration-300 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-white/10">
        Learn More
      </button>
    ),
    code: `
export default function SecondaryButton() {
  return (
    <button className="px-8 py-3 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold rounded-xl transition-all duration-300 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-white/10">
      Learn More
    </button>
  );
}
        `,
    usage: "1. Ideal for secondary actions.\n2. **To Change Color**: Update `bg-white/10` to `bg-blue-500/10` for a tinted look.\n3. **To Change Border**: Update `border-white/10` to `border-blue-500/20`."
  },
  {
    id: "outline",
    name: "Outline Button",
    description: "Clean, hollow design with a border that highlights on hover. Great for secondary actions on dark backgrounds.",
    preview: (
      <button className="px-8 py-3 bg-transparent border-2 border-slate-700 hover:border-blue-500 hover:text-blue-400 text-slate-300 font-bold rounded-xl transition-all duration-300 active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-blue-500/50">
        View Project
      </button>
    ),
    code: `
export default function OutlineButton() {
  return (
    <button className="px-8 py-3 bg-transparent border-2 border-slate-700 hover:border-blue-500 hover:text-blue-400 text-slate-300 font-bold rounded-xl transition-all duration-300 active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-blue-500/50">
      View Project
    </button>
  );
}
        `,
    usage: "1. Best for hollow designs.\n2. **To Change Color**: Replace `hover:border-blue-500` and `hover:text-blue-400` with your desired brand colors (e.g., `hover:border-emerald-500`)."
  },
  {
    id: "ghost",
    name: "Ghost Button",
    description: "Transparent background that appears on hover. Perfect for toolbars and less assertive actions.",
    preview: (
      <button className="px-6 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg font-semibold transition-all duration-200 active:bg-white/10 focus:outline-hidden focus:ring-2 focus:ring-white/5">
        Settings
      </button>
    ),
    code: `
export default function GhostButton() {
  return (
    <button className="px-6 py-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg font-semibold transition-all duration-200 active:bg-white/10 focus:outline-hidden focus:ring-2 focus:ring-white/5">
      Settings
    </button>
  );
}
        `,
    usage: "1. Minimalist design for toolbars.\n2. **To Change Color**: Update `hover:bg-white/5` and `text-slate-400` to match your interface's text palette."
  },
  {
    id: "destructive",
    name: "Destructive Button",
    description: "Urgent red variant for dangerous actions like deleting or removing content.",
    preview: (
      <button className="flex items-center gap-2 px-8 py-3 bg-rose-500/10 hover:bg-rose-500 border border-rose-500/30 text-rose-400 hover:text-white font-bold rounded-xl transition-all duration-300 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-rose-500/20">
        <Trash2 size={18} /> Delete Account
      </button>
    ),
    code: `
import { Trash2 } from "lucide-react";

export default function DestructiveButton() {
  return (
    <button 
      className="flex items-center gap-2 px-8 py-3 bg-rose-500/10 hover:bg-rose-500 border border-rose-500/30 text-rose-400 hover:text-white font-bold rounded-xl transition-all duration-300 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-rose-500/20"
      aria-label="Delete permanent account"
    >
      <Trash2 size={18} /> Delete Account
    </button>
  );
}
        `,
    usage: "1. High-risk actions.\n2. **To Change Color**: Replace `bg-rose-500/10`, `hover:bg-rose-500`, and `text-rose-400` with `red` or `orange` utilities for different warning levels."
  },
  {
    id: "success",
    name: "Success Button",
    description: "A positive action button using a vibrant emerald green theme.",
    preview: (
      <button className="flex items-center gap-2 px-8 py-3 bg-emerald-500/10 hover:bg-emerald-500 border border-emerald-500/30 text-emerald-400 hover:text-white font-bold rounded-xl transition-all duration-300 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-emerald-500/20">
        <CheckCircle2 size={18} /> Confirm Order
      </button>
    ),
    code: `
import { CheckCircle2 } from "lucide-react";

export default function SuccessButton() {
  return (
    <button className="flex items-center gap-2 px-8 py-3 bg-emerald-500/10 hover:bg-emerald-500 border border-emerald-500/30 text-emerald-400 hover:text-white font-bold rounded-xl transition-all duration-300 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-emerald-500/20">
      <CheckCircle2 size={18} /> Confirm Order
    </button>
  );
}
        `,
    usage: "1. Positive confirmations.\n2. **To Change Color**: Switch `emerald-500` to `green-500` or `teal-500` depending on your design system's success color."
  },
  {
    id: "loading",
    name: "Loading Button",
    description: "A button that indicates processing state with a spinning icon and disabled interaction.",
    preview: (
      <button disabled className="flex items-center gap-2 px-8 py-3 bg-blue-600/50 text-white/50 font-bold rounded-xl cursor-not-allowed border border-blue-500/20">
        <Loader2 size={18} className="animate-spin" /> Processing...
      </button>
    ),
    code: `
import { Loader2 } from "lucide-react";

export default function LoadingButton({ isLoading = true }) {
  return (
    <button 
      disabled={isLoading}
      className="flex items-center gap-2 px-8 py-3 bg-blue-600/50 text-white/50 font-bold rounded-xl cursor-not-allowed border border-blue-500/20"
      aria-busy={isLoading}
    >
      <Loader2 size={18} className="animate-spin" />
      {isLoading ? "Processing..." : "Submit"}
    </button>
  );
}
        `,
    usage: "1. Processing states.\n2. **To Change Color**: Update `bg-blue-600/50` and `border-blue-500/20` to reflect the color of the action being performed (e.g., `bg-emerald-600/50` for success paths)."
  },
  {
    id: "icon",
    name: "Icon Button",
    description: "Compact, square button for utility actions like search or navigation.",
    preview: (
      <button className="p-3 bg-white/5 border border-white/10 text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 rounded-xl active:scale-90 focus:outline-hidden focus:ring-2 focus:ring-blue-500/50" aria-label="Search">
        <Search size={20} />
      </button>
    ),
    code: `
import { Search } from "lucide-react";

export default function IconButton() {
  return (
    <button 
      className="p-3 bg-white/5 border border-white/10 text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 rounded-xl active:scale-90 focus:outline-hidden focus:ring-2 focus:ring-blue-500/50"
      aria-label="Search site"
    >
      <Search size={20} />
    </button>
  );
}
        `,
    usage: "1. Compact utility actions.\n2. **To Change Color**: Replace `hover:bg-blue-600` with any utility like `hover:bg-purple-600`."
  },
  {
    id: "link",
    name: "Link Button",
    description: "Minimalist text-based button that behaves like an anchor but maintains button functionality.",
    preview: (
      <button className="flex items-center gap-1.5 text-blue-400 font-bold hover:text-blue-300 transition-colors group focus:underline focus:outline-hidden">
        View Project Details <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    ),
    code: `
import { ExternalLink } from "lucide-react";

export default function LinkButton() {
  return (
    <button className="flex items-center gap-1.5 text-blue-400 font-bold hover:text-blue-300 transition-colors group focus:underline focus:outline-hidden">
      View Project Details 
      <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}
        `,
    usage: "1. Subtle navigation.\n2. **To Change Color**: Replace `text-blue-400` and `hover:text-blue-300` with your primary brand text utilities."
  },
  {
    id: "fab",
    name: "Floating Action Button (FAB)",
    description: "High-priority circular action button that usually floats in the corner of a layout.",
    preview: (
      <button className="w-16 h-16 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 transition-all duration-300 hover:rotate-90 active:scale-90 focus:outline-hidden focus:ring-4 focus:ring-blue-500/30" aria-label="Add new item">
        <Plus size={32} />
      </button>
    ),
    code: `
import { Plus } from "lucide-react";

export default function FAB() {
  return (
    <button 
      className="fixed bottom-10 right-10 w-16 h-16 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 transition-all duration-300 hover:rotate-90 active:scale-90 focus:outline-hidden focus:ring-4 focus:ring-blue-500/30"
      aria-label="Create new content"
    >
      <Plus size={32} />
    </button>
  );
}
        `,
    usage: "1. High-priority floating action.\n2. **To Change Color**: Update `bg-blue-600` and `shadow-blue-500/40` to any vibrant color to make it pop against your page content."
  }
];
