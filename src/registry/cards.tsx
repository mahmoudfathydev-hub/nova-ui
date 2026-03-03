"use client";

import {
  Zap,
  ArrowRight,
  ShieldCheck,
  Cpu,
  TrendingUp,
  Users,
  Bell,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  CreditCard,
  Mail,
  MoreVertical,
  Star,
  Clock,
  ExternalLink,
  ChevronDown,
  Info,
  Maximize2,
  Send,
} from "lucide-react";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import { ComponentVariant } from "./types";

export const cardVariants: ComponentVariant[] = [
  {
    id: "basic-card",

    name: "Basic Card",

    description:
      "A clean, foundational container for any type of content. Perfect for simple text blocks or mixed media.",

    preview: (
      <div className="w-full max-w-sm p-6 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
          Fundamental Storage
        </h3>

        <p className="text-[#9CA3AF] leading-relaxed text-sm">
          A simple yet robust container designed for clean data presentation and
          effortless scalability.
        </p>

        <button className="mt-4 text-[#6366F1] font-semibold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform group">
          Read more{" "}
          <ArrowRight
            size={14}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </button>
      </div>
    ),

    code: `

export default function BasicCard() {

  return (

    <div className="w-full max-w-sm p-6 bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-[20px] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Fundamental Storage</h3>

      <p className="text-[#9CA3AF] leading-relaxed text-sm">

        A simple yet robust container designed for clean data presentation and effortless scalability.

      </p>

      <button className="mt-4 text-[#6366F1] font-semibold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform group">

        Read more <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />

      </button>

    </div>

  );

}

        `,

    usage:
      "Professional base card. Use `backdrop-blur-xl` and `border-white/10` for a glassmorphic depth effect.",
  },

  {
    id: "feature-card",

    name: "Feature Card",

    description:
      "High-visibility showcase with prominent indigo highlights and smooth hover transformations.",

    preview: (
      <div className="group relative w-full max-w-sm p-6 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg hover:shadow-2xl hover:border-[#6366F1]/30 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] group-hover:bg-[#6366F1] group-hover:text-white transition-all duration-500 shadow-inner">
            <Zap size={24} />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white group-hover:text-[#6366F1] transition-colors tracking-tight">
              Turbo Integration
            </h3>

            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Streamline your workflow with millisecond precision and automated
              pipeline management.
            </p>
          </div>
        </div>
      </div>
    ),

    code: `

import { Zap } from "lucide-react";



export default function FeatureCard() {

  return (

    <div className="group relative w-full max-w-sm p-6 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg hover:shadow-2xl hover:border-[#6366F1]/30 hover:-translate-y-1 transition-all duration-500 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 space-y-4">

        <div className="w-12 h-12 rounded-xl bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] group-hover:bg-[#6366F1] group-hover:text-white transition-all duration-500">

          <Zap size={24} />

        </div>

        <div className="space-y-2">

          <h3 className="text-xl font-bold text-white group-hover:text-[#6366F1] transition-colors tracking-tight">Turbo Integration</h3>

          <p className="text-[#9CA3AF] text-sm leading-relaxed">

            Streamline your workflow with millisecond precision and automated pipeline management.

          </p>

        </div>

      </div>

    </div>

  );

}

        `,

    usage:
      "High-end feature card. Uses `group-hover` for internal state synchronization.",
  },

  {
    id: "pricing-card",

    name: "Pricing Card",

    description:
      "Tiered pricing selector with feature lists, ideally suited for conversion-focused landing pages.",

    preview: (
      <div className="w-full max-w-sm p-8 bg-[#111827]/90 backdrop-blur-2xl border-2 border-[#6366F1]/40 rounded-[20px] shadow-2xl relative hover:-translate-y-2 transition-transform duration-500">
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1 bg-gradient-to-r from-[#6366F1] to-indigo-400 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-[#6366F1]/40">
          Popular
        </div>

        <div className="mb-10">
          <h4 className="text-[#6366F1] font-black text-xs uppercase tracking-widest mb-3 opacity-90">
            Pro Plan
          </h4>

          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-black text-white">$49</span>

            <span className="text-[#9CA3AF] font-medium text-sm">/mo</span>
          </div>
        </div>

        <ul className="space-y-5 mb-10">
          {[1, 2, 3].map((i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-sm text-white/90"
            >
              <div className="w-5 h-5 rounded-full bg-[#16A34A]/20 flex items-center justify-center shrink-0">
                <CheckCircle2 size={14} className="text-[#16A34A]" />
              </div>

              <span className="leading-tight">Unlimited cloud instances</span>
            </li>
          ))}
        </ul>

        <button className="w-full py-4 bg-[#6366F1] hover:bg-white hover:text-[#111827] text-white font-black text-sm rounded-xl transition-all duration-300 shadow-xl shadow-[#6366F1]/20 active:scale-95">
          Select Plan
        </button>
      </div>
    ),

    code: `

import { CheckCircle2 } from "lucide-react";



export default function PricingCard() {

  return (

    <div className="w-full max-w-sm p-8 bg-[#111827]/90 backdrop-blur-2xl border-2 border-[#6366F1]/40 rounded-[20px] shadow-2xl relative hover:-translate-y-2 transition-transform duration-500">

      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1 bg-gradient-to-r from-[#6366F1] to-indigo-400 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-[#6366F1]/40">

        Popular

      </div>

      <div className="mb-10">

        <h4 className="text-[#6366F1] font-black text-xs uppercase tracking-widest mb-3">Pro Plan</h4>

        <div className="flex items-baseline gap-1">

          <span className="text-5xl font-black text-white">$49</span>

          <span className="text-[#9CA3AF] font-medium text-sm">/mo</span>

        </div>

      </div>

      <ul className="space-y-5 mb-10">

        <li className="flex items-center gap-3 text-sm text-white/90">

          <div className="w-5 h-5 rounded-full bg-[#16A34A]/20 flex items-center justify-center shrink-0">

            <CheckCircle2 size={14} className="text-[#16A34A]" />

          </div>

          <span className="leading-tight">Unlimited cloud instances</span>

        </li>

      </ul>

      <button className="w-full py-4 bg-[#6366F1] hover:bg-white hover:text-[#111827] text-white font-black rounded-xl transition-all duration-300 shadow-xl">

        Select Plan

      </button>

    </div>

  );

}

      `,

    usage:
      "Conversion-optimized pricing variant. Uses `backdrop-blur-2xl` for peak professional aesthetics.",
  },

  {
    id: "product-card",

    name: "Product Card",

    description:
      "E-commerce container with image space, price point, and direct action triggers.",

    preview: (
      <div className="group w-full max-w-sm p-5 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <div className="aspect-square bg-linear-to-b from-[#1F2937] to-[#111827] rounded-xl mb-5 relative overflow-hidden flex items-center justify-center text-white/5 group-hover:scale-[1.02] transition-transform duration-500 shadow-inner">
          <CreditCard
            size={80}
            strokeWidth={1}
            className="opacity-20 translate-y-2"
          />

          <div className="absolute top-3 right-3 p-2.5 bg-black/50 backdrop-blur-xl rounded-full text-white/50 cursor-pointer hover:text-white hover:scale-110 transition-all border border-white/10">
            <Star size={18} className="fill-current" />
          </div>
        </div>

        <div className="flex justify-between items-start mb-5">
          <div>
            <h3 className="font-bold text-white text-lg tracking-tight">
              Nova Shield X1
            </h3>

            <p className="text-[10px] text-[#6366F1] uppercase tracking-[0.2em] font-black opacity-80 mt-1">
              Enterprise Hardware
            </p>
          </div>

          <div className="text-right">
            <span className="text-xl font-black text-white">$299</span>

            <p className="text-[9px] text-[#9CA3AF] font-medium leading-none">
              VAT Incl.
            </p>
          </div>
        </div>

        <button className="w-full py-3.5 bg-white text-[#111827] font-black text-sm rounded-xl transition-all flex items-center justify-center gap-2 hover:bg-[#6366F1] hover:text-white shadow-xl shadow-black/20 active:scale-95">
          Add to Cart
        </button>
      </div>
    ),

    code: `

import { CreditCard, Star } from "lucide-react";



export default function ProductCard() {

  return (

    <div className="group w-full max-w-sm p-5 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">

      <div className="aspect-square bg-linear-to-b from-[#1F2937] to-[#111827] rounded-xl mb-5 relative overflow-hidden flex items-center justify-center text-white/5 group-hover:scale-[1.02] transition-transform shadow-inner">

        <CreditCard size={80} strokeWidth={1} className="opacity-20" />

        <div className="absolute top-3 right-3 p-2.5 bg-black/50 backdrop-blur-xl rounded-full text-white/50 cursor-pointer hover:text-white hover:scale-110 transition-all border border-white/10">

          <Star size={18} className="fill-current" />

        </div>

      </div>

      <div className="flex justify-between items-start mb-5">

        <div>

          <h3 className="font-bold text-white text-lg tracking-tight">Nova Shield X1</h3>

          <p className="text-[10px] text-[#6366F1] uppercase tracking-[0.2em] font-black opacity-80">Enterprise</p>

        </div>

        <span className="text-xl font-black text-white">$299</span>

      </div>

      <button className="w-full py-3.5 bg-white text-[#111827] font-black rounded-xl transition-all hover:bg-[#6366F1] hover:text-white shadow-xl">

        Add to Cart

      </button>

    </div>

  );

}

      `,

    usage:
      "Sleek e-commerce variant. Uses a white-to-indigo color shift on the primary action button.",
  },

  {
    id: "analytics-card",

    name: "Analytics Card",

    description:
      "Data-driven component featuring visual placeholders and trend overlays.",

    preview: (
      <div className="w-full max-w-sm p-6 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-white font-bold tracking-tight">
            Traffic Source
          </h3>

          <div className="p-1.5 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
            <MoreVertical size={18} className="text-[#9CA3AF]" />
          </div>
        </div>

        <div className="h-40 bg-gradient-to-t from-[#6366F1]/10 to-transparent rounded-2xl flex items-end p-5 border border-white/5 shadow-inner">
          <div className="w-full flex justify-between items-end gap-3 h-full">
            {[40, 70, 45, 90, 60].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 bg-[#6366F1] rounded-t-lg opacity-80 hover:opacity-100 hover:scale-[1.05] transition-all cursor-crosshair shadow-lg shadow-[#6366F1]/20"
              />
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-between px-2">
          <div className="space-y-1">
            <p className="text-[10px] text-[#9CA3AF] uppercase font-black tracking-widest">
              Direct
            </p>

            <p className="text-xl font-black text-white">45.2%</p>
          </div>

          <div className="space-y-1 text-right">
            <p className="text-[10px] text-[#9CA3AF] uppercase font-black tracking-widest">
              Social
            </p>

            <p className="text-xl font-black text-white">24.8%</p>
          </div>
        </div>
      </div>
    ),

    code: `

import { MoreVertical } from "lucide-react";



export default function AnalyticsCard() {

  return (

    <div className="w-full max-w-sm p-6 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      <div className="flex justify-between items-center mb-6">

        <h3 className="text-white font-bold tracking-tight">Traffic Source</h3>

        <MoreVertical size={18} className="text-[#9CA3AF] cursor-pointer" />

      </div>

      <div className="h-40 bg-gradient-to-t from-[#6366F1]/10 to-transparent rounded-2xl flex items-end p-5 border border-white/5 shadow-inner">

        <div className="w-full flex justify-between items-end gap-3 h-full">

          {[40, 70, 45, 90, 60].map((h, i) => (

            <div key={i} style={{ height: \`\${h}%\` }} className="flex-1 bg-[#6366F1] rounded-t-lg opacity-80 transition-all hover:scale-[1.05]" />

          ))}

        </div>

      </div>

    </div>

  );

}

      `,

    usage:
      "Data-driven analytics variant. Features `shadow-inner` on the chart container for professional depth.",
  },

  {
    id: "statistic-card",

    name: "Statistic Card",

    description:
      "Quantitative highlight component with status trend indicators and soft shadows.",

    preview: (
      <div className="w-full max-w-sm p-6 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-300 group">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-xs font-black text-[#9CA3AF] uppercase tracking-widest opacity-80">
              Revenue Yield
            </p>

            <h3 className="text-4xl font-black text-white tracking-tighter">
              $14,502
            </h3>
          </div>

          <div className="px-3 py-1.5 bg-[#16A34A]/10 text-[#16A34A] rounded-full text-[10px] font-black flex items-center gap-1 border border-[#16A34A]/20 shadow-lg shadow-[#16A34A]/5">
            <TrendingUp size={12} strokeWidth={3} />
            +12.5%
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2.5 text-[11px] font-medium text-[#9CA3AF] bg-white/5 p-3 rounded-xl border border-white/5">
          <div className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse shadow-lg shadow-[#16A34A]/40" />

          <span>
            Real-time sync active{" "}
            <span className="opacity-50">• $12,890 yesterday</span>
          </span>
        </div>
      </div>
    ),

    code: `

import { TrendingUp } from "lucide-react";



export default function StatisticCard() {

  return (

    <div className="w-full max-w-sm p-6 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg hover:shadow-2xl transition-all group">

      <div className="flex justify-between items-start">

        <div className="space-y-1">

          <p className="text-xs font-black text-[#9CA3AF] uppercase tracking-widest">Revenue Yield</p>

          <h3 className="text-4xl font-black text-white tracking-tighter">$14,502</h3>

        </div>

        <div className="px-3 py-1.5 bg-[#16A34A]/10 text-[#16A34A] rounded-full text-[10px] font-black flex items-center gap-1 border border-[#16A34A]/20">

          <TrendingUp size={12} strokeWidth={3} />

          +12.5%

        </div>

      </div>

      <div className="mt-8 flex items-center gap-2.5 text-[11px] text-[#9CA3AF] bg-white/5 p-3 rounded-xl border border-white/5">

        <div className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse shadow-lg shadow-[#16A34A]/40" />

        <span>Real-time sync active</span>

      </div>

    </div>

  );

}

      `,

    usage:
      "Executive KPI highlighter. Features pulsed status indicators and `font-black` typography for impact.",
  },

  {
    id: "profile-card",

    name: "Profile Card",

    description:
      "User-centric container featuring avatars, role descriptions, and primary action triggers.",

    preview: (
      <div className="w-full max-w-sm p-8 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-300 text-center hover:-translate-y-1 group">
        <div className="relative inline-block mb-6">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#1F2937] to-[#111827] border-4 border-[#111827] flex items-center justify-center text-[#6366F1] overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
            <Users size={56} />
          </div>

          <div className="absolute bottom-1.5 right-1.5 w-7 h-7 bg-[#16A34A] border-4 border-[#111827] rounded-full shadow-lg" />
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-black text-white tracking-tight">
            Alex Sterling
          </h3>

          <p className="text-xs text-[#6366F1] font-black uppercase tracking-[0.2em] mt-1">
            Lead Systems Architect
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex-1 py-4 bg-[#6366F1] hover:bg-white hover:text-[#111827] text-white font-black text-sm rounded-xl transition-all shadow-xl shadow-[#6366F1]/20">
            Follow
          </button>

          <button className="p-4 bg-white/5 text-white rounded-xl hover:bg-[#6366F1] transition-all border border-white/5 active:scale-90">
            <Mail size={18} />
          </button>
        </div>
      </div>
    ),

    code: `

import { Users, Mail } from "lucide-react";



export default function ProfileCard() {

  return (

    <div className="w-full max-w-sm p-8 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg hover:shadow-2xl transition-all text-center group">

      <div className="relative inline-block mb-6">

        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#1F2937] to-[#111827] border-4 border-[#111827] flex items-center justify-center text-[#6366F1] shadow-2xl group-hover:scale-105 transition-transform duration-500">

          <Users size={56} />

        </div>

        <div className="absolute bottom-1.5 right-1.5 w-7 h-7 bg-[#16A34A] border-4 border-[#111827] rounded-full" />

      </div>

      <div className="mb-10 text-center">

        <h3 className="text-2xl font-black text-white tracking-tight">Alex Sterling</h3>

        <p className="text-xs text-[#6366F1] font-black uppercase tracking-[0.2em]">Lead Architect</p>

      </div>

      <div className="flex items-center gap-3">

        <button className="flex-1 py-4 bg-[#6366F1] hover:bg-white hover:text-[#111827] text-white font-black text-sm rounded-xl transition-all">

          Follow

        </button>

      </div>

    </div>

  );

}

      `,

    usage:
      "Executive profile variant. Features a larger, shadow-heavy avatar and bold role-based typography.",
  },

  {
    id: "action-card",

    name: "Action Card",

    description:
      "High-intent layout optimized for driving specific user interactions within deep interfaces.",

    preview: (
      <div className="w-full max-w-sm p-8 bg-gradient-to-br from-[#1F2937] to-[#111827] border border-[#6366F1]/30 rounded-[20px] shadow-[0_20px_50px_rgba(99,102,241,0.1)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-500 overflow-hidden relative group">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#6366F1]/10 blur-3xl rounded-full group-hover:bg-[#6366F1]/20 transition-all duration-500" />

        <h3 className="text-2xl font-black text-white mb-4 tracking-tight relative z-10">
          Advanced Tier
        </h3>

        <p className="text-[#9CA3AF] text-sm mb-8 leading-relaxed relative z-10 opacity-90">
          Unlock specialized developer frameworks and 24/7 dedicated support
          lanes for enterprise production cycles.
        </p>

        <button className="w-full py-4.5 bg-white text-[#111827] font-black text-sm rounded-xl hover:bg-[#6366F1] hover:text-white transition-all flex items-center justify-center gap-3 active:scale-95 shadow-2xl relative z-10">
          Go Pro Now <Zap size={18} className="fill-current animate-pulse" />
        </button>
      </div>
    ),

    code: `

import { Zap } from "lucide-react";



export default function ActionCard() {

  return (

    <div className="w-full max-w-sm p-8 bg-gradient-to-br from-[#1F2937] to-[#111827] border border-[#6366F1]/30 rounded-[20px] shadow-2xl hover:-translate-y-1 transition-all group overflow-hidden relative">

      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#6366F1]/10 blur-3xl rounded-full" />

      <h3 className="text-2xl font-black text-white mb-4 tracking-tight relative z-10">Advanced Tier</h3>

      <p className="text-[#9CA3AF] text-sm mb-8 leading-relaxed relative z-10">

        Unlock specialized developer frameworks and 24/7 dedicated support lanes.

      </p>

      <button className="w-full py-4.5 bg-white text-[#111827] font-black rounded-xl hover:bg-[#6366F1] hover:text-white transition-all flex items-center justify-center gap-3 relative z-10">

        Go Pro Now <Zap size={18} className="fill-current animate-pulse" />

      </button>

    </div>

  );

}

      `,

    usage:
      "High-visibility action variant. Features a background glow effect and `animate-pulse` iconography.",
  },

  {
    id: "notification-card",

    name: "Notification Card",

    description:
      "Status-aware alert with color-coded info signals for real-time dashboard updates.",

    preview: (
      <div className="w-full max-w-sm p-6 bg-[#111827]/90 backdrop-blur-3xl border-l-[6px] border-l-[#0EA5E9] border border-white/5 rounded-r-[20px] rounded-l-md shadow-2xl hover:shadow-[#0EA5E9]/5 hover:-translate-y-1 transition-all duration-300 flex gap-5">
        <div className="w-14 h-14 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center text-[#0EA5E9] animate-bounce-slow shrink-0 shadow-inner">
          <Bell size={28} />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-white font-black text-sm tracking-tight">
              System Update
            </p>

            <span className="text-[10px] text-[#0EA5E9] font-black uppercase tracking-widest">
              Live
            </span>
          </div>

          <p className="text-xs text-[#9CA3AF] leading-relaxed opacity-80 font-medium">
            NovaUI v2.5 Stable is now rolling out. Your components are being
            synchronized automatically.
          </p>

          <div className="flex gap-5 pt-3">
            <button className="text-[11px] font-black text-[#6366F1] hover:text-white transition-colors flex items-center gap-1 group">
              View Changelog{" "}
              <ExternalLink
                size={12}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>

            <button className="text-[11px] font-black text-[#9CA3AF] hover:text-white transition-colors">
              Dismiss
            </button>
          </div>
        </div>
      </div>
    ),

    code: `

import { Bell, ExternalLink } from "lucide-react";



export default function NotificationCard() {

  return (

    <div className="w-full max-w-sm p-6 bg-[#111827]/90 backdrop-blur-3xl border-l-[6px] border-l-[#0EA5E9] border border-white/5 rounded-r-[20px] rounded-l-md shadow-2xl flex gap-5">

      <div className="w-14 h-14 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center text-[#0EA5E9] shrink-0 shadow-inner">

        <Bell size={28} />

      </div>

      <div className="space-y-2">

        <div className="flex justify-between items-center">

          <p className="text-white font-black text-sm">System Update</p>

          <span className="text-[10px] text-[#0EA5E9] font-black uppercase tracking-widest">Live</span>

        </div>

        <p className="text-xs text-[#9CA3AF] font-medium leading-relaxed">NovaUI v2.5 Stable is rolling out.</p>

        <div className="flex gap-5 pt-3">

          <button className="text-[11px] font-black text-[#6366F1] hover:text-white transition-all flex items-center gap-1">

            View <ExternalLink size={12} />

          </button>

        </div>

      </div>

    </div>

  );

}

      `,

    usage:
      "Premium notification variant. Features a wide color-coded accent bar and `backdrop-blur-3xl` for a high-priority feel.",
  },

  {
    id: "summary-card",

    name: "Dashboard Summary Card",

    description:
      "Minimalist overview component designed for grid layouts with small footprints.",

    preview: (
      <div className="w-full max-w-sm p-7 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg flex items-center gap-7 group hover:bg-[#1F2937] hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center group-hover:bg-[#F59E0B] group-hover:text-white transition-all duration-500 shadow-inner group-hover:rotate-12">
          <Star size={30} className="fill-current" />
        </div>

        <div className="relative z-10">
          <h4 className="text-3xl font-black text-white tracking-tighter">
            4.9
          </h4>

          <p className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-[0.2em] mt-1 group-hover:text-white transition-colors">
            Global Rating
          </p>
        </div>
      </div>
    ),

    code: `

import { Star } from "lucide-react";



export default function SummaryCard() {

  return (

    <div className="w-full max-w-sm p-7 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg flex items-center gap-7 group hover:bg-[#1F2937] hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative">

      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center group-hover:bg-[#F59E0B] group-hover:text-white transition-all duration-500 shadow-inner group-hover:rotate-12">

        <Star size={30} className="fill-current" />

      </div>

      <div className="relative z-10">

        <h4 className="text-3xl font-black text-white tracking-tighter">4.9</h4>

        <p className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-[0.2em] mt-1 group-hover:text-white transition-colors">Global Rating</p>

      </div>

    </div>

  );

}

      `,

    usage:
      "Micro-summary variant. Employs `group-hover` rotations and subtle linear gradients for immersive interactivity.",
  },

  {
    id: "premium-glass-card",

    name: "Glassmorphism Card",

    description:
      "Deep frosted transparency with multi-layer blurs and vibrant indigo-to-pink stroke highlights.",

    preview: (
      <div className="w-full max-w-sm p-8 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[20px] shadow-2xl relative overflow-hidden group">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#6366F1]/20 blur-3xl rounded-full" />

        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#EC4899]/20 blur-3xl rounded-full" />

        <div className="relative z-10">
          <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
            Crystal Layer
          </h3>

          <p className="text-white/70 text-sm leading-relaxed mb-6">
            A peak-fidelity glass container designed for immersive dashboard
            overlays and premium AI workspace modules.
          </p>

          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#6366F1] to-[#EC4899]"
            />
          </div>
        </div>
      </div>
    ),

    code: `

import { motion } from "framer-motion";



export default function GlassmorphismCard() {

  return (

    <div className="w-full max-w-sm p-8 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[20px] shadow-2xl relative overflow-hidden group">

      {/* Dynamic Background Glows */}

      <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#6366F1]/20 blur-3xl rounded-full" />

      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#EC4899]/20 blur-3xl rounded-full" />

      

      <div className="relative z-10">

        <h3 className="text-2xl font-black text-white mb-4 tracking-tight">Crystal Layer</h3>

        <p className="text-white/70 text-sm leading-relaxed mb-6">

          A peak-fidelity glass container designed for immersive dashboard overlays.

        </p>

        

        {/* Animated Progress Tracker */}

        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">

          <motion.div 

            initial={{ width: 0 }}

            whileInView={{ width: "65%" }}

            transition={{ duration: 2, ease: "easeOut" }}

            className="h-full bg-gradient-to-r from-[#6366F1] to-[#EC4899]" 

          />

        </div>

      </div>

    </div>

  );

}

    `,

    usage:
      "High-end transparency. Works best on top of vibrant or patterned backgrounds. Uses `backdrop-blur-3xl` for maximum frosting.",
  },

  {
    id: "spotlight-card",

    name: "Spotlight Card",

    description:
      "Interactive card that tracks the mouse with a radial light beam, illuminating content in the dark.",

    preview: (
      <div
        className="relative w-full max-w-sm p-8 bg-[#111827] border border-white/5 rounded-[20px] shadow-2xl overflow-hidden group"
        onMouseMove={({ currentTarget, clientX, clientY }) => {
          const rect = currentTarget.getBoundingClientRect();
          const x = clientX - rect.left;
          const y = clientY - rect.top;
          const spotlight = currentTarget.querySelector(".spotlight-effect");
          if (spotlight) {
            (spotlight as HTMLElement).style.background =
              `radial-gradient(650px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.15), transparent 80%)`;
          }
        }}
      >
        {/* Spotlight Radial Mask */}
        <div className="spotlight-effect pointer-events-none absolute -inset-px rounded-[20px] opacity-0 transition duration-300 group-hover:opacity-100" />

        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-[#6366F1]/20 group-hover:text-[#6366F1] transition-colors">
            <Maximize2 size={24} />
          </div>

          <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
            Active Detection
          </h3>

          <p className="text-[#9CA3AF] text-sm leading-relaxed">
            Mouse-aware illumination system that highlights interface depth
            through real-time coordinate tracking.
          </p>
        </div>
      </div>
    ),

    code: `

import React, { useRef, useState } from "react";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { Maximize2 } from "lucide-react";



export default function SpotlightCard() {

  const mouseX = useMotionValue(0);

  const mouseY = useMotionValue(0);



  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {

    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);

    mouseY.set(clientY - top);

  }



  return (

    <div

      onMouseMove={handleMouseMove}

      className="group relative w-full max-w-sm p-8 bg-[#111827] border border-white/5 rounded-[20px] shadow-2xl overflow-hidden"

    >

      {/* Spotlight Radial Mask */}

      <motion.div

        className="pointer-events-none absolute -inset-px rounded-[20px] opacity-0 transition duration-300 group-hover:opacity-100"

        style={{

          background: useMotionTemplate\`

            radial-gradient(

              650px circle at \${mouseX}px \${mouseY}px,

              rgba(99, 102, 241, 0.15),

              transparent 80%

            )

          \`,

        }}

      />

      

      <div className="relative z-10">

        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-[#6366F1]/20 group-hover:text-[#6366F1] transition-colors">

          <Maximize2 size={24} />

        </div>

        <h3 className="text-2xl font-black text-white mb-3 tracking-tight">Active Detection</h3>

        <p className="text-[#9CA3AF] text-sm leading-relaxed">

          Mouse-aware illumination system that highlights interface depth.

        </p>

      </div>

    </div>

  );

}

    `,

    usage:
      "Exceptional for dark-themed landings. The spotlight effect uses a `radial-gradient` masked by cursor coordinates.",
  },

  {
    id: "parallax-card",

    name: "3D Parallax Card",

    description:
      "Responsive card that tilts in 3D space relative to mouse movement, providing a physical sense of depth.",

    preview: (
      <div
        className="w-full max-w-sm p-8 bg-gradient-to-br from-[#1F2937] to-[#111827] border border-white/5 rounded-[20px] shadow-2xl flex flex-col items-center text-center cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const width = rect.width;
          const height = rect.height;
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          const xPct = mouseX / width - 0.5;
          const yPct = mouseY / height - 0.5;
          const rotateY = xPct * 17.5;
          const rotateX = -yPct * 17.5;
          e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        }}
      >
        <div
          style={{ transform: "translateZ(75px)" }}
          className="w-20 h-20 bg-[#6366F1]/10 rounded-full flex items-center justify-center text-[#6366F1] mb-6 shadow-inner"
        >
          <Cpu size={40} />
        </div>

        <div style={{ transform: "translateZ(50px)" }}>
          <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
            Neural Core
          </h3>

          <p className="text-[#9CA3AF] text-sm leading-relaxed">
            High-performance sensory feedback system that responds to
            environmental interaction with 60FPS precision.
          </p>
        </div>
      </div>
    ),

    code: `

import React, { useRef } from "react";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { Cpu } from "lucide-react";



export default function ParallaxCard() {

  const x = useMotionValue(0);

  const y = useMotionValue(0);



  const mouseXSpring = useSpring(x);

  const mouseYSpring = useSpring(y);



  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);

  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);



  const handleMouseMove = (e: React.MouseEvent) => {

    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;

    const height = rect.height;

    const mouseX = e.clientX - rect.left;

    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;

    const yPct = mouseY / height - 0.5;

    x.set(xPct);

    y.set(yPct);

  };



  const handleMouseLeave = () => {

    x.set(0);

    y.set(0);

  };



  return (

    <motion.div

      onMouseMove={handleMouseMove}

      onMouseLeave={handleMouseLeave}

      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}

      className="relative w-full max-w-sm p-8 bg-gradient-to-br from-[#1F2937] to-[#111827] border border-white/10 rounded-[20px] shadow-2xl flex flex-col items-center text-center cursor-pointer"

    >

      <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }} className="w-20 h-20 bg-[#6366F1]/20 rounded-full flex items-center justify-center text-[#6366F1] shadow-2xl mb-6">

        <Cpu size={40} />

      </div>

      <h3 style={{ transform: "translateZ(50px)" }} className="text-2xl font-black text-white mb-3 tracking-tight">Neural Core</h3>

      <p style={{ transform: "translateZ(25px)" }} className="text-[#9CA3AF] text-sm leading-relaxed">

        High-performance sensory feedback system that responds to interaction.

      </p>

    </motion.div>

  );

}

    `,

    usage:
      "Use for hero sections or key product features. Requires `transformStyle: 'preserve-3d'` for the internal elements to pop.",
  },

  {
    id: "hover-expand-card",

    name: "Hover Expand Card",

    description:
      "Elegant card that reveals deeper details or utility actions with a smooth height expansion.",

    preview: (
      <div className="w-full max-w-sm p-6 bg-[#111827] border border-white/5 rounded-[20px] shadow-lg group cursor-pointer">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
              <Star size={20} className="fill-current" />
            </div>

            <h4 className="text-white font-bold tracking-tight">
              System Health
            </h4>
          </div>

          <ChevronDown
            size={18}
            className="text-[#9CA3AF] group-hover:rotate-180 transition-transform duration-500"
          />
        </div>

        <p className="text-xs text-[#9CA3AF] mb-4">
          Core performance metrics within normal parameters.
        </p>

        <div className="h-0 group-hover:h-20 transition-all duration-500 overflow-hidden opacity-0 group-hover:opacity-100">
          <div className="pt-4 border-t border-white/5 flex gap-4">
            <div className="flex-1 p-2 bg-white/5 rounded-lg text-center">
              <p className="text-[10px] text-[#9CA3AF] uppercase font-black tracking-widest mb-1">
                CPU
              </p>

              <p className="text-white font-black">24%</p>
            </div>

            <div className="flex-1 p-2 bg-white/5 rounded-lg text-center">
              <p className="text-[10px] text-[#9CA3AF] uppercase font-black tracking-widest mb-1">
                RAM
              </p>

              <p className="text-white font-black">1.2GB</p>
            </div>
          </div>
        </div>
      </div>
    ),

    code: `

import { ChevronDown, Star } from "lucide-react";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";



export default function HoverExpandCard() {

  const [isHovered, setIsHovered] = useState(false);



  return (

    <div 

      onMouseEnter={() => setIsHovered(true)}

      onMouseLeave={() => setIsHovered(false)}

      className="w-full max-w-sm p-6 bg-[#111827] border border-white/5 rounded-[20px] shadow-lg cursor-pointer"

    >

      <div className="flex justify-between items-center mb-4">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">

            <Star size={20} className="fill-current" />

          </div>

          <h4 className="text-white font-bold tracking-tight">System Health</h4>

        </div>

        <motion.div animate={{ rotate: isHovered ? 180 : 0 }}>

          <ChevronDown size={18} className="text-[#9CA3AF]" />

        </motion.div>

      </div>

      <p className="text-xs text-[#9CA3AF] mb-4">Core metrics within normal parameters.</p>

      

      <AnimatePresence>

        {isHovered && (

          <motion.div

            initial={{ height: 0, opacity: 0 }}

            animate={{ height: "auto", opacity: 1 }}

            exit={{ height: 0, opacity: 0 }}

            className="overflow-hidden"

          >

            <div className="pt-4 border-t border-white/5 flex gap-4">

              <div className="flex-1 p-2 bg-white/5 rounded-lg text-center">

                <p className="text-[10px] text-[#9CA3AF] uppercase font-black tracking-widest mb-1">CPU</p>

                <p className="text-white font-black">24%</p>

              </div>

              <div className="flex-1 p-2 bg-white/5 rounded-lg text-center">

                <p className="text-[10px] text-[#9CA3AF] uppercase font-black tracking-widest mb-1">RAM</p>

                <p className="text-white font-black">1.2GB</p>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>

  );

}

    `,

    usage:
      "Ideal for 'See More' dashboard widgets. Uses `AnimatePresence` for smooth mounting/unmounting of expanded content.",
  },

  {
    id: "animated-border-card",

    name: "Animated Border Card",

    description:
      "High-visibility card with a continuous light orbiting its edge, drawing significant attention.",

    preview: (
      <div className="relative p-[1.5px] rounded-[20px] bg-slate-800 overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] via-transparent to-[#EC4899] animate-[spin_5s_linear_infinite] opacity-30 group-hover:opacity-70 transition-opacity" />

        <div className="relative z-10 w-full p-8 bg-[#111827] rounded-[19px] flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#6366F1] mb-6">
            <Zap size={28} className="fill-current" />
          </div>

          <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
            Orbital Sync
          </h3>

          <p className="text-[#9CA3AF] text-sm leading-relaxed">
            Cyclical energy framework that emphasizes critical dashboard nodes
            through animated edge highlights.
          </p>
        </div>
      </div>
    ),

    code: `

import { Zap } from "lucide-react";



export default function AnimatedBorderCard() {

  return (

    <div className="relative p-[1.5px] rounded-[20px] bg-slate-800 overflow-hidden group">

      {/* Perpetual Rotating Border */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] via-transparent to-[#EC4899] animate-[spin_5s_linear_infinite] opacity-30 group-hover:opacity-70 transition-opacity" />

      

      <div className="relative z-10 w-full p-8 bg-[#111827] rounded-[19px] flex flex-col items-center text-center">

        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#6366F1] mb-6 group-hover:scale-110 transition-transform">

          <Zap size={28} className="fill-current" />

        </div>

        <h3 className="text-2xl font-black text-white mb-3 tracking-tight">Orbital Sync</h3>

        <p className="text-[#9CA3AF] text-sm leading-relaxed">

          Critical dashboard nodes with animated edge highlights.

        </p>

      </div>

    </div>

  );

}

    `,

    usage:
      "Use for prominent feature showcases or highest-priority alerts on a page.",
  },

  {
    id: "floating-card",

    name: "Floating Animation Card",

    description:
      "Component featuring a gentle, perpetual levitation effect, adding a sense of weightlessness to the UI.",

    preview: (
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-full max-w-sm p-8 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-2xl flex flex-col items-center text-center"
      >
        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-[#6366F1] mb-6 relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Cpu size={32} />
          </motion.div>

          <div className="absolute inset-0 bg-[#6366F1]/10 blur-xl rounded-full" />
        </div>

        <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
          Levity Cloud
        </h3>

        <p className="text-[#9CA3AF] text-sm leading-relaxed">
          Autonomous levitation physics applied to static components for a more
          dynamic and futuristic spatial user experience.
        </p>
      </motion.div>
    ),

    code: `

import { motion } from "framer-motion";

import { Cpu } from "lucide-react";



export default function FloatingCard() {

  return (

    <motion.div 

      animate={{ y: [0, -15, 0] }}

      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}

      className="w-full max-w-sm p-8 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-2xl flex flex-col items-center text-center"

    >

      <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-[#6366F1] mb-6 relative">

        <motion.div 

          animate={{ rotate: 360 }} 

          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}

        >

          <Cpu size={32} />

        </motion.div>

        {/* Glow Effect */}

        <div className="absolute inset-0 bg-[#6366F1]/10 blur-xl rounded-full" />

      </div>

      <h3 className="text-2xl font-black text-white mb-3 tracking-tight">Levity Cloud</h3>

      <p className="text-[#9CA3AF] text-sm leading-relaxed">

        Autonomous levitation physics applied to static components.

      </p>

    </motion.div>

  );

}

    `,

    usage:
      "Add visual interest to static pages. Combines vertical floating with internal rotational animations.",
  },

  {
    id: "interactive-action-card",

    name: "Interactive Action Card",

    description:
      "Complex component with multiple interactive zones and high-fidelity feedback for power users.",

    preview: (
      <div className="w-full max-w-sm p-8 bg-[#111827] border border-white/5 rounded-[20px] shadow-2xl group overflow-hidden relative">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#6366F1]/10 blur-3xl rounded-full group-hover:bg-[#6366F1]/20 transition-all duration-500" />

        <div className="flex justify-between items-start mb-10 relative z-10">
          <div className="w-14 h-14 bg-[#6366F1]/10 rounded-2xl flex items-center justify-center text-[#6366F1] group-hover:bg-[#6366F1] group-hover:text-white transition-all duration-500 group-hover:scale-110">
            <Send size={24} />
          </div>

          <button className="px-3 py-1.5 bg-white/5 hover:bg-[#6366F1] text-white text-[10px] font-black uppercase tracking-widest rounded-lg transition-all hover:scale-105 active:scale-95">
            Configure
          </button>
        </div>

        <div className="relative z-10 mb-8">
          <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-[#6366F1] transition-colors">
            Request Stream
          </h3>

          <p className="text-xs text-[#9CA3AF] group-hover:text-white transition-colors">
            Manage automated outbound communication channels.
          </p>
        </div>

        <div className="flex gap-4 relative z-10">
          <button className="flex-1 py-4 bg-[#6366F1] text-white font-black rounded-xl hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all">
            Launch
          </button>

          <button className="p-4 bg-white/5 text-white rounded-xl hover:bg-white/10 hover:scale-110 transition-all active:scale-95">
            <Info size={18} />
          </button>
        </div>
      </div>
    ),

    code: `

import { Send, Info } from "lucide-react";



export default function InteractiveActionCard() {

  return (

    <div className="w-full max-w-sm p-8 bg-[#111827] border border-white/5 rounded-[20px] shadow-2xl group overflow-hidden relative">

      <div className="flex justify-between items-start mb-10 relative z-10">

        <div className="w-14 h-14 bg-[#6366F1]/10 rounded-2xl flex items-center justify-center text-[#6366F1]">

          <Send size={24} />

        </div>

        <button className="px-3 py-1.5 bg-white/5 hover:bg-[#6366F1] text-white text-[10px] font-black uppercase tracking-widest rounded-lg transition-all duration-300">

          Configure

        </button>

      </div>

      

      <div className="relative z-10 mb-8">

        <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Request Stream</h3>

        <p className="text-xs text-[#9CA3AF]">Manage automated outbound channels.</p>

      </div>

      

      <div className="flex gap-4 relative z-10">

        <button className="flex-1 py-3.5 bg-[#6366F1] text-white font-black rounded-xl hover:shadow-[0_10px_30px_rgba(99,102,241,0.3)] active:scale-95 transition-all outline-none">

          Launch

        </button>

        <button className="p-3.5 bg-white/5 text-white rounded-xl hover:bg-[#1F2937] transition-colors border border-white/5">

          <Info size={18} />

        </button>

      </div>

      

      {/* Dynamic Ambient Glow */}

      <div className="absolute top-0 right-0 w-64 h-64 bg-[#6366F1]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#6366F1]/10 transition-all duration-500 pointer-events-none" />

    </div>

  );

}

    `,

    usage:
      "Multi-action container for dashboard management tools. Features nested hover effects and background depth glows.",
  },
];
