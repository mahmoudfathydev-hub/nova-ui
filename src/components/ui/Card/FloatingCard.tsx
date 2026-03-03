"use client";

import React from "react";
import { Info } from "lucide-react";
import { cnSimple } from "../../../lib/utils";

interface FloatingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  floatDistance?: number;
  children?: React.ReactNode;
}

export const FloatingCard = ({
  children,
  className,
  floatDistance = 20,
  ...props
}: FloatingCardProps) => {
  return (
    <div
      className={cnSimple(
        "w-full max-w-sm p-8 bg-[#1F2937]/50 backdrop-blur-xl border border-white/10 rounded-[20px] shadow-2xl flex flex-col items-center text-center",
        className,
      )}
      style={
        {
          animation: `float ${4}s ease-in-out infinite`,
          "--float-distance": `-${floatDistance}px`,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="w-16 h-16 bg-[#0EA5E9]/20 rounded-full flex items-center justify-center text-[#0EA5E9] mb-6 shadow-xl">
        <Info size={32} />
      </div>
      {(children as React.ReactNode) || (
        <>
          <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
            Zero-G Layer
          </h3>
          <p className="text-[#9CA3AF] text-sm leading-relaxed">
            Weightless interface modules that utilize gentle vertical
            oscillation.
          </p>
        </>
      )}
    </div>
  );
};
