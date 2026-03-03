"use client";

import {
  Sparkles,
  Loader2,
  Plus,
  Trash2,
  CheckCircle2,
  Search,
  ArrowRight,
  ExternalLink,
  Zap,
  MousePointer2,
  Layers,
  Cpu,
  Shield,
  Send,
  Bell,
  Star,
} from "lucide-react";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import { ComponentVariant } from "./types";

export const buttonVariants: ComponentVariant[] = [
  {
    id: "primary",

    name: "Primary Button",

    description:
      "The main call-to-action button, designed to grab maximum attention with a vibrant gradient and shadow.",

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

    usage:
      "1. Use for the main CTA.\n2. **To Change Color**: Replace `bg-blue-600` with `bg-purple-600` and update the gradient overlay `from-purple-400 to-pink-500`.\n3. **To Change Shadow**: Update `shadow-blue-500/20` to match your new base color.",
  },

  {
    id: "secondary",

    name: "Secondary Button",

    description:
      "A subtle yet premium alternative for secondary actions, using a glassmorphic background.",

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

    usage:
      "1. Ideal for secondary actions.\n2. **To Change Color**: Update `bg-white/10` to `bg-blue-500/10` for a tinted look.\n3. **To Change Border**: Update `border-white/10` to `border-blue-500/20`.",
  },

  {
    id: "outline",

    name: "Outline Button",

    description:
      "Clean, hollow design with a border that highlights on hover. Great for secondary actions on dark backgrounds.",

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

    usage:
      "1. Best for hollow designs.\n2. **To Change Color**: Replace `hover:border-blue-500` and `hover:text-blue-400` with your desired brand colors (e.g., `hover:border-emerald-500`).",
  },

  {
    id: "ghost",

    name: "Ghost Button",

    description:
      "Transparent background that appears on hover. Perfect for toolbars and less assertive actions.",

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

    usage:
      "1. Minimalist design for toolbars.\n2. **To Change Color**: Update `hover:bg-white/5` and `text-slate-400` to match your interface's text palette.",
  },

  {
    id: "destructive",

    name: "Destructive Button",

    description:
      "Urgent red variant for dangerous actions like deleting or removing content.",

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

    usage:
      "1. High-risk actions.\n2. **To Change Color**: Replace `bg-rose-500/10`, `hover:bg-rose-500`, and `text-rose-400` with `red` or `orange` utilities for different warning levels.",
  },

  {
    id: "success",

    name: "Success Button",

    description:
      "A positive action button using a vibrant emerald green theme.",

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

    usage:
      "1. Positive confirmations.\n2. **To Change Color**: Switch `emerald-500` to `green-500` or `teal-500` depending on your design system's success color.",
  },

  {
    id: "loading",

    name: "Loading Button",

    description:
      "A button that indicates processing state with a spinning icon and disabled interaction.",

    preview: (
      <button
        disabled
        className="flex items-center gap-2 px-8 py-3 bg-blue-600/50 text-white/50 font-bold rounded-xl cursor-not-allowed border border-blue-500/20"
      >
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

    usage:
      "1. Processing states.\n2. **To Change Color**: Update `bg-blue-600/50` and `border-blue-500/20` to reflect the color of the action being performed (e.g., `bg-emerald-600/50` for success paths).",
  },

  {
    id: "icon",

    name: "Icon Button",

    description:
      "Compact, square button for utility actions like search or navigation.",

    preview: (
      <button
        className="p-3 bg-white/5 border border-white/10 text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 rounded-xl active:scale-90 focus:outline-hidden focus:ring-2 focus:ring-blue-500/50"
        aria-label="Search"
      >
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

    usage:
      "1. Compact utility actions.\n2. **To Change Color**: Replace `hover:bg-blue-600` with any utility like `hover:bg-purple-600`.",
  },

  {
    id: "link",

    name: "Link Button",

    description:
      "Minimalist text-based button that behaves like an anchor but maintains button functionality.",

    preview: (
      <button className="flex items-center gap-1.5 text-blue-400 font-bold hover:text-blue-300 transition-colors group focus:underline focus:outline-hidden">
        View Project Details{" "}
        <ExternalLink
          size={14}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
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

    usage:
      "1. Subtle navigation.\n2. **To Change Color**: Replace `text-blue-400` and `hover:text-blue-300` with your primary brand text utilities.",
  },

  {
    id: "fab",

    name: "Floating Action Button (FAB)",

    description:
      "High-priority circular action button that usually floats in the corner of a layout.",

    preview: (
      <button
        className="w-16 h-16 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 transition-all duration-300 hover:rotate-90 active:scale-90 focus:outline-hidden focus:ring-4 focus:ring-blue-500/30"
        aria-label="Add new item"
      >
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

    usage:
      "1. High-priority floating action.\n2. **To Change Color**: Update `bg-blue-600` and `shadow-blue-500/40` to any vibrant color to make it pop against your page content.",
  },

  {
    id: "shimmer",

    name: "Shimmer Button",

    description:
      "Premium button with a continuous light streak effect, perfect for primary AI or Pro features.",

    preview: (
      <button className="relative px-8 py-3 bg-[#111827] text-white font-black rounded-xl overflow-hidden group border border-white/10 shadow-2xl active:scale-95 transition-transform">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />

        <span className="relative z-10 flex items-center gap-2">
          Unlock Pro <Sparkles size={18} className="text-[#6366F1]" />
        </span>
      </button>
    ),

    code: `

export default function ShimmerButton() {

  return (

    <button className="relative px-8 py-3 bg-[#111827] text-white font-black rounded-xl overflow-hidden group border border-white/10 shadow-2xl active:scale-95 transition-transform">

      {/* Shimmer Effect */}

      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />

      

      <span className="relative z-10 flex items-center gap-2">

        Unlock Pro <Sparkles size={18} className="text-[#6366F1]" />

      </span>

    </button>

  );

}

    `,

    usage:
      "High-end CTA. Ensure you have the 'shimmer' keyframe defined in your tailwind config or global CSS.",
  },

  {
    id: "magnetic",

    name: "Magnetic Button",

    description:
      "Ultra-interactive button that tracks the cursor, creating a 'magnetic' pull effect.",

    preview: (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-10 py-4 bg-[#6366F1] text-white font-black rounded-2xl shadow-xl shadow-[#6366F1]/40 flex items-center gap-2"
      >
        <MousePointer2 size={20} /> Magnetic Pull
      </motion.button>
    ),

    code: `

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { MousePointer2 } from "lucide-react";

import React, { useRef } from "react";



export default function MagneticButton() {

  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);

  const y = useMotionValue(0);



  const springConfig = { damping: 15, stiffness: 150 };

  const dx = useSpring(x, springConfig);

  const dy = useSpring(y, springConfig);



  const handleMouseMove = (e: React.MouseEvent) => {

    if (!ref.current) return;

    const { clientX, clientY } = e;

    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const centerX = left + width / 2;

    const centerY = top + height / 2;

    x.set(clientX - centerX);

    y.set(clientY - centerY);

  };



  const handleMouseLeave = () => {

    x.set(0);

    y.set(0);

  };



  return (

    <motion.button

      ref={ref}

      onMouseMove={handleMouseMove}

      onMouseLeave={handleMouseLeave}

      style={{ x: dx, y: dy }}

      whileTap={{ scale: 0.95 }}

      className="px-10 py-4 bg-[#6366F1] text-white font-black rounded-2xl shadow-xl shadow-[#6366F1]/40 flex items-center gap-2"

    >

      <MousePointer2 size={20} /> Magnetic Pull

    </motion.button>

  );

}

    `,

    usage:
      "Use for high-conversion CTAs. The magnetic effect works best on larger screen sizes.",
  },

  {
    id: "three-d-press",

    name: "3D Press Button",

    description:
      "Tactile, physical-feeling button that depresses in 3D space when clicked.",

    preview: (
      <button className="relative px-8 py-3 bg-[#6366F1] text-white font-black rounded-xl shadow-[0_8px_0_0_#4338ca] active:shadow-none active:translate-y-2 transition-all">
        Push Me
      </button>
    ),

    code: `

export default function ThreeDPressButton() {

  return (

    <button className="relative px-8 py-3 bg-[#6366F1] text-white font-black rounded-xl shadow-[0_8px_0_0_#4338ca] hover:shadow-[0_6px_0_0_#4338ca] active:shadow-none active:translate-y-2 transition-all">

      Push Me

    </button>

  );

}

    `,

    usage:
      "Great for gamified UIs or 'Big Red' action buttons. Uses CSS shadows for the 3D depth.",
  },

  {
    id: "shiny-gradient",

    name: "Shiny Gradient Button",

    description:
      "Dynamic button with a rotating or shifting gradient background for a high-tech vibe.",

    preview: (
      <button className="relative group px-10 py-4 rounded-2xl overflow-hidden bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:200%_auto] hover:bg-right transition-all duration-700 font-black text-white shadow-2xl">
        AI Pipeline
      </button>
    ),

    code: `

export default function ShinyGradientButton() {

  return (

    <button className="relative group px-10 py-4 rounded-2xl overflow-hidden bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:200%_auto] hover:bg-right transition-all duration-700 font-black text-white shadow-2xl active:scale-95">

      AI Pipeline

    </button>

  );

}

    `,

    usage:
      "Best for AI features or premium SaaS tiers. The `bg-[length:200%_auto]` allows for smooth gradient shifts.",
  },

  {
    id: "animated-border",

    name: "Animated Border Button",

    description:
      "Button with a light orbiting around its border, creating a high-energy focus point.",

    preview: (
      <div className="w-40 relative p-[1px] rounded-xl bg-slate-800 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-transparent to-pink-500 animate-spin opacity-50 group-hover:opacity-100 transition-opacity" />

        <button className="relative px-8 py-3 bg-[#111827] text-white font-bold rounded-xl z-10 w-full hover:bg-[#111827]/80 transition-colors">
          Cyber Sync
        </button>
      </div>
    ),

    code: `

export default function AnimatedBorderButton() {

  return (

    <div className="w-40 relative p-[2px] rounded-xl bg-slate-800 overflow-hidden group">

      {/* The rotating border light */}

      <div className="absolute inset-0 bg-linear-to-r from-[#6366F1] via-transparent to-[#EC4899] animate-[spin_3s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity" />

      

      <button className="relative px-8 py-3 bg-[#111827] text-white font-bold rounded-[10px] z-10 w-full active:scale-98 transition-transform">

        Cyber Sync

      </button>

    </div>

  );

}

    `,

    usage:
      "Use for primary actions that need to stand out from a dark background. Ensure `spin` animation is available.",
  },

  {
    id: "glass",

    name: "Premium Glass Button",

    description:
      "Exquisite frosted glass effect with high-fidelity blurs and vibrant stroke highlights.",

    preview: (
      <button className="px-8 py-3 bg-white/5 backdrop-blur-2xl border border-white/10 text-white font-black rounded-xl hover:bg-white/10 transition-all shadow-xl shadow-black/20 active:scale-95">
        Glass Morph
      </button>
    ),

    code: `

export default function GlassButton() {

  return (

    <button className="px-8 py-3 bg-white/5 backdrop-blur-2xl border border-white/10 text-white font-black rounded-xl hover:bg-white/11 hover:border-white/20 transition-all shadow-xl shadow-black/20 active:scale-95 focus:ring-2 focus:ring-white/20 outline-none">

      Glass Morph

    </button>

  );

}

    `,

    usage:
      "Perfect for secondary actions on vibrant or complex backgrounds. Uses `backdrop-blur-2xl` for peak clarity.",
  },

  {
    id: "icon-reveal",

    name: "Icon Reveal Button",

    description:
      "Clean text button that elegantly slides an icon into view upon interaction.",

    preview: (
      <button className="group flex items-center gap-0 px-8 py-3 bg-[#6366F1] text-white font-black rounded-xl overflow-hidden transition-all hover:gap-3">
        <span className="shrink-0">Submit Case</span>

        <ArrowRight
          size={20}
          className="-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
        />
      </button>
    ),

    code: `

import { ArrowRight } from "lucide-react";



export default function IconRevealButton() {

  return (

    <button className="group flex items-center gap-0 px-8 py-3 bg-[#6366F1] text-white font-black rounded-xl overflow-hidden transition-all hover:gap-3 active:scale-95">

      <span className="shrink-0">Submit Case</span>

      <ArrowRight size={20} className="-translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />

    </button>

  );

}

    `,

    usage:
      "Use to reduce visual clutter for navigation or form submission triggers.",
  },

  {
    id: "glow-pulse",

    name: "Glow Pulse Button",

    description:
      "Button that features a breathing neon glow, ideal for live status or urgent alerts.",

    preview: (
      <button className="relative px-8 py-3 bg-[#6366F1] text-white font-black rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.4)] animate-pulse hover:animate-none">
        Live Status
      </button>
    ),

    code: `

export default function GlowPulseButton() {

  return (

    <button className="relative px-8 py-3 bg-[#6366F1] text-white font-black rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.5)] active:scale-95 transition-transform group">

      {/* Outer Glow Ring */}

      <div className="absolute inset-0 rounded-xl bg-[#6366F1] blur-xl opacity-40 group-hover:opacity-60 animate-pulse" />

      

      <span className="relative z-10">Live Status</span>

    </button>

  );

}

    `,

    usage:
      "Ideal for dashboard notifications or urgent CTA actions. The pulse animation provides high visual priority.",
  },
];
