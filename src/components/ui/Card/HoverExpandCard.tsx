"use client";

import React, { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
function cn(...classes: (string | undefined | false)[]) {
    return classes.filter(Boolean).join(" ");
}

interface HoverExpandCardProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: React.ReactNode;
    expandedContent?: React.ReactNode;
}

export const HoverExpandCard = ({
    children,
    className,
    icon = <Star size={20} className="fill-current" />,
    expandedContent,
    ...props
}: HoverExpandCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "w-full max-w-sm p-6 bg-[#111827] border border-white/5 rounded-[20px] shadow-lg cursor-pointer",
                className
            )}
            {...props}
        >
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                        {icon}
                    </div>
                    <h4 className="text-white font-bold tracking-tight">System Health</h4>
                </div>
                <motion.div animate={{ rotate: isHovered ? 180 : 0 }}>
                    <ChevronDown size={18} className="text-[#9CA3AF]" />
                </motion.div>
            </div>
            <div className="text-xs text-[#9CA3AF] mb-4">
                {children || "Core performance metrics within normal parameters."}
            </div>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        {expandedContent || (
                            <div className="pt-4 border-t border-white/5 flex gap-4">
                                <div className="flex-1 p-2 bg-white/5 rounded-lg text-center">
                                    <p className="text-[10px] text-[#9CA3AF] uppercase font-black tracking-widest mb-1">CPU</p>
                                    <p className="text-white font-black">24%</p>
                                </div>
                                <div className="flex-1 p-2 bg-white/5 rounded-lg text-center">
                                    <p className="text-[10px] text-[#9CA3AF] uppercase font-black tracking-widest mb-1">RAM</p>
                                    <p className="text-white font-black">1.2GB</p>
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
