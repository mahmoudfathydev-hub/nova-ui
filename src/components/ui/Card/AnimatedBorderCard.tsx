"use client";

import React from "react";
import { Zap } from "lucide-react";
import { cnSimple } from "../../../lib/utils";

interface AnimatedBorderCardProps extends React.HTMLAttributes<HTMLDivElement> {
  borderColors?: [string, string];
  duration?: string;
}

export const AnimatedBorderCard = ({
  children,
  className,
  borderColors = ["#6366F1", "#EC4899"],
  duration = "5s",
  ...props
}: AnimatedBorderCardProps) => {
  return (
    <div className="relative p-[1.5px] rounded-[20px] bg-slate-800 overflow-hidden group w-fit">
      {/* Perpetual Rotating Border */}
      <div
        style={{
          background: `linear-gradient(to right, ${borderColors[0]}, transparent, ${borderColors[1]})`,
          animationDuration: duration,
        }}
        className="absolute inset-0 animate-[spin_5s_linear_infinite] opacity-30 group-hover:opacity-70 transition-opacity"
      />

      <div
        className={cnSimple(
          "relative z-10 w-full p-8 bg-[#111827] rounded-[19px] flex flex-col items-center text-center",
          className,
        )}
        {...props}
      >
        {children || (
          <>
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-[#6366F1] mb-6 group-hover:scale-110 transition-transform">
              <Zap size={28} className="fill-current" />
            </div>
            <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
              Orbital Sync
            </h3>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Critical dashboard nodes with animated edge highlights.
            </p>
          </>
        )}
      </div>
    </div>
  );
};
