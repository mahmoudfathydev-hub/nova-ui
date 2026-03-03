import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all duration-300 focus-visible:outline-hidden focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:scale-[1.02] focus-visible:ring-blue-500/30",
        secondary:
          "bg-white/10 text-white border border-white/10 hover:bg-white/15 focus-visible:ring-white/10",
        outline:
          "bg-transparent border-2 border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400 focus-visible:ring-blue-500/50",
        ghost:
          "text-slate-400 hover:text-white hover:bg-white/5 focus-visible:ring-white/5",
        destructive:
          "bg-rose-500/10 text-rose-400 border border-rose-500/30 hover:bg-rose-500 hover:text-white focus-visible:ring-rose-500/20",
        success:
          "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white focus-visible:ring-emerald-500/20",
        link:
          "text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline px-0 py-0",
      },
      size: {
        default: "px-8 py-3",
        sm: "px-4 py-2 text-xs",
        lg: "px-10 py-4 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);
