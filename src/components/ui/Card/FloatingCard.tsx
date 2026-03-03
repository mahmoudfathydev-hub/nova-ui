"use client";

import React from "react";
import { Info } from "lucide-react";
import { motion, HTMLMotionProps } from "framer-motion";
function cn(...classes: (string | undefined | false)[]) {
    return classes.filter(Boolean).join(" ");
}

interface FloatingCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
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
        <motion.div
            animate={{
                y: [0, -floatDistance, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className={cn(
                "w-full max-w-sm p-8 bg-[#1F2937]/50 backdrop-blur-xl border border-white/10 rounded-[20px] shadow-2xl flex flex-col items-center text-center",
                className
            )}
            {...props}
        >
            <div className="w-16 h-16 bg-[#0EA5E9]/20 rounded-full flex items-center justify-center text-[#0EA5E9] mb-6 shadow-xl">
                <Info size={32} />
            </div>
            {(children as React.ReactNode) || (
                <>
                    <h3 className="text-2xl font-black text-white mb-3 tracking-tight">Zero-G Layer</h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">
                        Weightless interface modules that utilize gentle vertical oscillation.
                    </p>
                </>
            )}
        </motion.div>
    );
};
