"use client";

import React from "react";
import { motion } from "framer-motion";
import { cnSimple } from "../../../lib/utils";

interface GlassmorphismCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColors?: [string, string];
}

export const GlassmorphismCard = ({
  children,
  className,
  glowColors = ["#6366F1", "#EC4899"],
  ...props
}: GlassmorphismCardProps) => {
  return (
    <div
      className={cnSimple(
        "w-full max-w-sm p-8 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[20px] shadow-2xl relative overflow-hidden group",
        className,
      )}
      {...props}
    >
      {/* Dynamic Background Glows */}
      <div
        style={{ backgroundColor: glowColors[0] } as React.CSSProperties}
        className="absolute -top-24 -left-24 w-48 h-48 blur-3xl rounded-full opacity-20"
      />
      <div
        style={{ backgroundColor: glowColors[1] } as React.CSSProperties}
        className="absolute -bottom-24 -right-24 w-48 h-48 blur-3xl rounded-full opacity-20"
      />

      <div className="relative z-10">
        {children || (
          <>
            <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
              Crystal Layer
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              A peak-fidelity glass container designed for immersive dashboard
              overlays.
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
          </>
        )}
      </div>
    </div>
  );
};
