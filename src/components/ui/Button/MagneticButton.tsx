"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  HTMLMotionProps,
} from "framer-motion";
import { MousePointer2 } from "lucide-react";
import React, { useRef } from "react";
import { cnSimple } from "../../../lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  strength?: number;
}

export default function MagneticButton({
  children,
  className,
  strength = 1,
  ...props
}: MagneticButtonProps) {
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
    x.set((clientX - centerX) * strength);
    y.set((clientY - centerY) * strength);
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
      className={cnSimple(
        "px-10 py-4 bg-[#6366F1] text-white font-black rounded-2xl shadow-xl shadow-[#6366F1]/40 flex items-center gap-2 hover:bg-[#4f46e5] disabled:opacity-50 disabled:cursor-not-allowed",
        className as string,
      )}
      {...props}
    >
      {children || (
        <>
          <MousePointer2 size={20} /> Magnetic Pull
        </>
      )}
    </motion.button>
  );
}
