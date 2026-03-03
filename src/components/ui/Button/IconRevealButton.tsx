"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { cnSimple } from "../../../lib/utils";

interface IconRevealButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

export default function IconRevealButton({
  children,
  className,
  icon = <ArrowRight size={20} />,
  ...props
}: IconRevealButtonProps) {
  return (
    <button
      className={cnSimple(
        "group flex items-center justify-center gap-0 px-8 py-3 bg-[#6366F1] text-white font-black rounded-xl overflow-hidden transition-all hover:gap-3 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#4f46e5]",
        className,
      )}
      {...props}
    >
      <span className="shrink-0">{children || "Submit Case"}</span>
      <div className="-translate-x-10 w-0 opacity-0 group-hover:w-auto group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
        {icon}
      </div>
    </button>
  );
}
