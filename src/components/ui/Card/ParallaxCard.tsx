"use client";

import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  HTMLMotionProps,
} from "framer-motion";
import { Cpu } from "lucide-react";
import { cnSimple } from "../../../lib/utils";

interface ParallaxCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  tiltIntensity?: number;
  children?: React.ReactNode;
}

export const ParallaxCard = ({
  children,
  className,
  tiltIntensity = 17.5,
  ...props
}: ParallaxCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${tiltIntensity}deg`, `-${tiltIntensity}deg`],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${tiltIntensity}deg`, `${tiltIntensity}deg`],
  );

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
      className={cnSimple(
        "relative w-full max-w-sm p-8 bg-gradient-to-br from-[#1F2937] to-[#111827] border border-white/10 rounded-[20px] shadow-2xl flex flex-col items-center text-center cursor-pointer",
        className,
      )}
      {...props}
    >
      <div
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="w-20 h-20 bg-[#6366F1]/20 rounded-full flex items-center justify-center text-[#6366F1] shadow-2xl mb-6"
      >
        <Cpu size={40} />
      </div>
      <div style={{ transform: "translateZ(50px)" }}>
        {(children as React.ReactNode) || (
          <>
            <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
              Neural Core
            </h3>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              High-performance sensory feedback system that responds to
              interaction.
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
};
