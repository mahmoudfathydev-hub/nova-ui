"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Maximize2 } from "lucide-react";
function cn(...classes: (string | undefined | false)[]) {
    return classes.filter(Boolean).join(" ");
}

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
    spotlightColor?: string;
}

export const SpotlightCard = ({
    children,
    className,
    spotlightColor = "rgba(99, 102, 241, 0.15)",
    ...props
}: SpotlightCardProps) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            className={cn(
                "group relative w-full max-w-sm p-8 bg-[#111827] border border-white/5 rounded-[20px] shadow-2xl overflow-hidden",
                className
            )}
            {...props}
        >
            {/* Spotlight Radial Mask */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[20px] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
                }}
            />

            <div className="relative z-10">
                {children || (
                    <>
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-[#6366F1]/20 group-hover:text-[#6366F1] transition-colors">
                            <Maximize2 size={24} />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-3 tracking-tight">Active Detection</h3>
                        <p className="text-[#9CA3AF] text-sm leading-relaxed">
                            Mouse-aware illumination system that highlights interface depth through real-time coordinate tracking.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};
