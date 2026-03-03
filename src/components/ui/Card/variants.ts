import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "w-full rounded-[20px] transition-all duration-300 overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-[#111827]/80 backdrop-blur-xl border border-white/5 shadow-lg hover:shadow-2xl hover:-translate-y-1",
        premium: "bg-[#111827]/90 backdrop-blur-2xl border-2 border-[#6366F1]/40 shadow-2xl hover:-translate-y-2",
        feature: "group relative bg-[#111827]/80 backdrop-blur-xl border border-white/5 shadow-lg hover:shadow-2xl hover:border-[#6366F1]/30 hover:-translate-y-1",
        gradient: "bg-linear-to-br from-[#1F2937] to-[#111827] border border-[#6366F1]/30 shadow-2xl hover:-translate-y-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
