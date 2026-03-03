"use client";

import React from "react";

function cn(...classes: (string | undefined | false)[]) {
    return classes.filter(Boolean).join(" ");
}

interface AnimatedBorderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    borderColors?: [string, string];
    duration?: string;
}

export default function AnimatedBorderButton({
    children,
    className,
    borderColors = ["#6366F1", "#EC4899"],
    duration = "3s",
    ...props
}: AnimatedBorderButtonProps) {
    return (
        <div className="relative p-[2px] rounded-xl bg-slate-800 overflow-hidden group w-fit">
            <div
                style={{
                    background: `linear-gradient(to right, ${borderColors[0]}, transparent, ${borderColors[1]})`,
                    animationDuration: duration
                }}
                className="absolute inset-0 animate-[spin_3s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity"
            />

            <button
                className={cn(
                    "relative px-8 py-3 bg-[#111827] text-white font-bold rounded-[10px] z-10 w-full active:scale-95 transition-transform hover:bg-[#1f2937] disabled:opacity-50 disabled:cursor-not-allowed",
                    className
                )}
                {...props}
            >
                {children || "Cyber Sync"}
            </button>
        </div>
    );
}
