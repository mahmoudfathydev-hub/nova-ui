import React from "react";
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
  ExternalLink
} from "lucide-react";
import { ComponentVariant } from "./types";

export const cardVariants: ComponentVariant[] = [
  {
    id: "basic-card",
    name: "Basic Card",
    description: "A clean, foundational container for any type of content. Perfect for simple text blocks or mixed media.",
    preview: (
      <div className="w-full max-w-sm p-6 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Fundamental Storage</h3>
        <p className="text-[#9CA3AF] leading-relaxed text-sm">
          A simple yet robust container designed for clean data presentation and effortless scalability.
        </p>
        <button className="mt-4 text-[#6366F1] font-semibold text-sm flex items-center gap-2 hover:translate-x-1 transition-transform group">
          Read more <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
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
    usage: "Professional base card. Use `backdrop-blur-xl` and `border-white/10` for a glassmorphic depth effect."
  },
  {
    id: "feature-card",
    name: "Feature Card",
    description: "High-visibility showcase with prominent indigo highlights and smooth hover transformations.",
    preview: (
      <div className="group relative w-full max-w-sm p-6 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg hover:shadow-2xl hover:border-[#6366F1]/30 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#6366F1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-[#6366F1]/20 flex items-center justify-center text-[#6366F1] group-hover:bg-[#6366F1] group-hover:text-white transition-all duration-500 shadow-inner">
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
    ),
    code: `
import { Zap } from "lucide-react";

export default function FeatureCard() {
  return (
    <div className="group relative w-full max-w-sm p-6 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg hover:shadow-2xl hover:border-[#6366F1]/30 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[#6366F1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
    usage: "High-end feature card. Uses `group-hover` for internal state synchronization."
  },
  {
    id: "pricing-card",
    name: "Pricing Card",
    description: "Tiered pricing selector with feature lists, ideally suited for conversion-focused landing pages.",
    preview: (
      <div className="w-full max-w-sm p-8 bg-[#111827]/90 backdrop-blur-2xl border-2 border-[#6366F1]/40 rounded-[20px] shadow-2xl relative hover:-translate-y-2 transition-transform duration-500">
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1 bg-linear-to-r from-[#6366F1] to-indigo-400 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-[#6366F1]/40">
          Popular
        </div>
        <div className="mb-10">
          <h4 className="text-[#6366F1] font-black text-xs uppercase tracking-widest mb-3 opacity-90">Pro Plan</h4>
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-black text-white">$49</span>
            <span className="text-[#9CA3AF] font-medium text-sm">/mo</span>
          </div>
        </div>
        <ul className="space-y-5 mb-10">
          {[1, 2, 3].map((i) => (
            <li key={i} className="flex items-center gap-3 text-sm text-white/90">
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
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1 bg-linear-to-r from-[#6366F1] to-indigo-400 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-[#6366F1]/40">
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
    usage: "Conversion-optimized pricing variant. Uses `backdrop-blur-2xl` for peak professional aesthetics."
  },
  {
    id: "product-card",
    name: "Product Card",
    description: "E-commerce container with image space, price point, and direct action triggers.",
    preview: (
      <div className="group w-full max-w-sm p-5 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <div className="aspect-square bg-linear-to-b from-[#1F2937] to-[#111827] rounded-xl mb-5 relative overflow-hidden flex items-center justify-center text-white/5 group-hover:scale-[1.02] transition-transform duration-500 shadow-inner">
          <CreditCard size={80} strokeWidth={1} className="opacity-20 translate-y-2" />
          <div className="absolute top-3 right-3 p-2.5 bg-black/50 backdrop-blur-xl rounded-full text-white/50 cursor-pointer hover:text-white hover:scale-110 transition-all border border-white/10">
            <Star size={18} className="fill-current" />
          </div>
        </div>
        <div className="flex justify-between items-start mb-5">
          <div>
            <h3 className="font-bold text-white text-lg tracking-tight">Nova Shield X1</h3>
            <p className="text-[10px] text-[#6366F1] uppercase tracking-[0.2em] font-black opacity-80 mt-1">Enterprise Hardware</p>
          </div>
          <div className="text-right">
            <span className="text-xl font-black text-white">$299</span>
            <p className="text-[9px] text-[#9CA3AF] font-medium leading-none">VAT Incl.</p>
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
    usage: "Sleek e-commerce variant. Uses a white-to-indigo color shift on the primary action button."
  },
  {
    id: "analytics-card",
    name: "Analytics Card",
    description: "Data-driven component featuring visual placeholders and trend overlays.",
    preview: (
      <div className="w-full max-w-sm p-6 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-white font-bold tracking-tight">Traffic Source</h3>
          <div className="p-1.5 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
            <MoreVertical size={18} className="text-[#9CA3AF]" />
          </div>
        </div>
        <div className="h-40 bg-linear-to-t from-[#6366F1]/10 to-transparent rounded-2xl flex items-end p-5 border border-white/5 shadow-inner">
          <div className="w-full flex justify-between items-end gap-3 h-full">
            {[40, 70, 45, 90, 60].map((h, i) => (
              <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-[#6366F1] rounded-t-lg opacity-80 hover:opacity-100 hover:scale-[1.05] transition-all cursor-crosshair shadow-lg shadow-[#6366F1]/20" />
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-between px-2">
          <div className="space-y-1">
            <p className="text-[10px] text-[#9CA3AF] uppercase font-black tracking-widest">Direct</p>
            <p className="text-xl font-black text-white">45.2%</p>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-[10px] text-[#9CA3AF] uppercase font-black tracking-widest">Social</p>
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
      <div className="h-40 bg-linear-to-t from-[#6366F1]/10 to-transparent rounded-2xl flex items-end p-5 border border-white/5 shadow-inner">
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
    usage: "Data-driven analytics variant. Features `shadow-inner` on the chart container for professional depth."
  },
  {
    id: "statistic-card",
    name: "Statistic Card",
    description: "Quantitative highlight component with status trend indicators and soft shadows.",
    preview: (
      <div className="w-full max-w-sm p-6 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-300 group">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-xs font-black text-[#9CA3AF] uppercase tracking-widest opacity-80">Revenue Yield</p>
            <h3 className="text-4xl font-black text-white tracking-tighter">$14,502</h3>
          </div>
          <div className="px-3 py-1.5 bg-[#16A34A]/10 text-[#16A34A] rounded-full text-[10px] font-black flex items-center gap-1 border border-[#16A34A]/20 shadow-lg shadow-[#16A34A]/5">
            <TrendingUp size={12} strokeWidth={3} />
            +12.5%
          </div>
        </div>
        <div className="mt-8 flex items-center gap-2.5 text-[11px] font-medium text-[#9CA3AF] bg-white/5 p-3 rounded-xl border border-white/5">
          <div className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse shadow-lg shadow-[#16A34A]/40" />
          <span>Real-time sync active <span className="opacity-50">• $12,890 yesterday</span></span>
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
    usage: "Executive KPI highlighter. Features pulsed status indicators and `font-black` typography for impact."
  },
  {
    id: "profile-card",
    name: "Profile Card",
    description: "User-centric container featuring avatars, role descriptions, and primary action triggers.",
    preview: (
      <div className="w-full max-w-sm p-8 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-300 text-center hover:-translate-y-1 group">
        <div className="relative inline-block mb-6">
          <div className="w-28 h-28 rounded-full bg-linear-to-br from-[#1F2937] to-[#111827] border-4 border-[#111827] flex items-center justify-center text-[#6366F1] overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
            <Users size={56} />
          </div>
          <div className="absolute bottom-1.5 right-1.5 w-7 h-7 bg-[#16A34A] border-4 border-[#111827] rounded-full shadow-lg" />
        </div>
        <div className="mb-10">
          <h3 className="text-2xl font-black text-white tracking-tight">Alex Sterling</h3>
          <p className="text-xs text-[#6366F1] font-black uppercase tracking-[0.2em] mt-1">Lead Systems Architect</p>
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
        <div className="w-28 h-28 rounded-full bg-linear-to-br from-[#1F2937] to-[#111827] border-4 border-[#111827] flex items-center justify-center text-[#6366F1] shadow-2xl group-hover:scale-105 transition-transform duration-500">
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
    usage: "Executive profile variant. Features a larger, shadow-heavy avatar and bold role-based typography."
  },
  {
    id: "action-card",
    name: "Action Card",
    description: "High-intent layout optimized for driving specific user interactions within deep interfaces.",
    preview: (
      <div className="w-full max-w-sm p-8 bg-linear-to-br from-[#1F2937] to-[#111827] border border-[#6366F1]/30 rounded-[20px] shadow-[0_20px_50px_rgba(99,102,241,0.1)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-500 overflow-hidden relative group">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#6366F1]/10 blur-3xl rounded-full group-hover:bg-[#6366F1]/20 transition-all duration-500" />
        <h3 className="text-2xl font-black text-white mb-4 tracking-tight relative z-10">Advanced Tier</h3>
        <p className="text-[#9CA3AF] text-sm mb-8 leading-relaxed relative z-10 opacity-90">
          Unlock specialized developer frameworks and 24/7 dedicated support lanes for enterprise production cycles.
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
    <div className="w-full max-w-sm p-8 bg-linear-to-br from-[#1F2937] to-[#111827] border border-[#6366F1]/30 rounded-[20px] shadow-2xl hover:-translate-y-1 transition-all group overflow-hidden relative">
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
    usage: "High-visibility action variant. Features a background glow effect and `animate-pulse` iconography."
  },
  {
    id: "notification-card",
    name: "Notification Card",
    description: "Status-aware alert with color-coded info signals for real-time dashboard updates.",
    preview: (
      <div className="w-full max-w-sm p-6 bg-[#111827]/90 backdrop-blur-3xl border-l-[6px] border-l-[#0EA5E9] border border-white/5 rounded-r-[20px] rounded-l-md shadow-2xl hover:shadow-[#0EA5E9]/5 hover:-translate-y-1 transition-all duration-300 flex gap-5">
        <div className="w-14 h-14 bg-[#0EA5E9]/10 rounded-2xl flex items-center justify-center text-[#0EA5E9] animate-bounce-slow shrink-0 shadow-inner">
          <Bell size={28} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-white font-black text-sm tracking-tight">System Update</p>
            <span className="text-[10px] text-[#0EA5E9] font-black uppercase tracking-widest">Live</span>
          </div>
          <p className="text-xs text-[#9CA3AF] leading-relaxed opacity-80 font-medium">NovaUI v2.5 Stable is now rolling out. Your components are being synchronized automatically.</p>
          <div className="flex gap-5 pt-3">
            <button className="text-[11px] font-black text-[#6366F1] hover:text-white transition-colors flex items-center gap-1 group">
              View Changelog <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button className="text-[11px] font-black text-[#9CA3AF] hover:text-white transition-colors">Dismiss</button>
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
    usage: "Premium notification variant. Features a wide color-coded accent bar and `backdrop-blur-3xl` for a high-priority feel."
  },
  {
    id: "summary-card",
    name: "Dashboard Summary Card",
    description: "Minimalist overview component designed for grid layouts with small footprints.",
    preview: (
      <div className="w-full max-w-sm p-7 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg flex items-center gap-7 group hover:bg-[#1F2937] hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative">
        <div className="absolute inset-0 bg-linear-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center group-hover:bg-[#F59E0B] group-hover:text-white transition-all duration-500 shadow-inner group-hover:rotate-12">
          <Star size={30} className="fill-current" />
        </div>
        <div className="relative z-10">
          <h4 className="text-3xl font-black text-white tracking-tighter">4.9</h4>
          <p className="text-[10px] font-black text-[#9CA3AF] uppercase tracking-[0.2em] mt-1 group-hover:text-white transition-colors">Global Rating</p>
        </div>
      </div>
    ),
    code: `
import { Star } from "lucide-react";

export default function SummaryCard() {
  return (
    <div className="w-full max-w-sm p-7 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-lg flex items-center gap-7 group hover:bg-[#1F2937] hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative">
      <div className="absolute inset-0 bg-linear-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
    usage: "Micro-summary variant. Employs `group-hover` rotations and subtle linear gradients for immersive interactivity."
  }
];
