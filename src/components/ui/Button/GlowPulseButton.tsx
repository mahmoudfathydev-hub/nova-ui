"use client";

import React from "react";

function cn(...classes: (string | undefined | false)[]) {
    return classes.filter(Boolean).join(" ");
}

interface GlowPulseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    glowColor?: string;
}

export default function GlowPulseButton({
    children,
    className,
    glowColor = "#6366F1",
    ...props
}: GlowPulseButtonProps) {
    return (
        <button
            className={cn(
                "relative px-8 py-3 bg-[#6366F1] text-white font-black rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.5)] active:scale-95 transition-transform group disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110",
                className
            )}
            {...props}
        >
            {/* Outer Glow Ring */}
            <div
                style={{ backgroundColor: glowColor } as React.CSSProperties}
                className="absolute inset-0 rounded-xl blur-xl opacity-40 group-hover:opacity-60 animate-pulse"
            />

            <span className="relative z-10">{children || "Live Status"}</span>
        </button>
    );
}
