"use client";

import React from "react";
import { cnSimple } from "../../../lib/utils";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  blurAmount?: string;
}

export default function GlassButton({
  children,
  className,
  blurAmount = "backdrop-blur-2xl",
  ...props
}: GlassButtonProps) {
  return (
    <button
      className={cnSimple(
        "px-8 py-3 bg-white/5 border border-white/10 text-white font-black rounded-xl hover:bg-white/10 hover:border-white/20 transition-all shadow-xl shadow-black/20 active:scale-95 focus:ring-2 focus:ring-white/20 outline-none disabled:opacity-50 disabled:cursor-not-allowed",
        blurAmount,
        className,
      )}
      {...props}
    >
      {children || "Glass Morph"}
    </button>
  );
}
