"use client";

import React from "react";
import { Sparkles } from "lucide-react";

function cn(...classes: (string | undefined | false)[]) {
    return classes.filter(Boolean).join(" ");
}

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    shimmerColor?: string;
    icon?: React.ReactNode;
}

export default function ShimmerButton({
    children,
    className,
    shimmerColor = "white/10",
    icon,
    ...props
}: ShimmerButtonProps) {
    return (
        <button
            className={cn(
                "relative px-8 py-3 bg-[#111827] text-white font-black rounded-xl overflow-hidden group border border-white/10 shadow-2xl active:scale-95 transition-transform hover:bg-[#1f2937] disabled:opacity-50 disabled:cursor-not-allowed",
                className
            )}
            {...props}
        >
            {/* Shimmer Effect */}
            <div
                className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite]"
                style={{
                    background: `linear-gradient(90deg, transparent, ${shimmerColor.includes('/') ? 'rgba(255,255,255,0.1)' : shimmerColor}, transparent)`
                }}
            />

            <span className="relative z-10 flex items-center justify-center gap-2">
                {children || "Unlock Pro"}
                {icon || <Sparkles size={18} className="text-[#6366F1]" />}
            </span>
        </button>
    );
}
