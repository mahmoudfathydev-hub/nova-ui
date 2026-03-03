"use client";

import React from "react";

function cn(...classes: (string | undefined | false)[]) {
    return classes.filter(Boolean).join(" ");
}

interface ThreeDPressButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    depth?: number;
    color?: string;
    shadowColor?: string;
}

export default function ThreeDPressButton({
    children,
    className,
    depth = 8,
    color = "#6366F1",
    shadowColor = "#4338ca",
    ...props
}: ThreeDPressButtonProps) {
    return (
        <button
            style={{
                backgroundColor: color,
                boxShadow: `0 ${depth}px 0 0 ${shadowColor}`,
            } as React.CSSProperties}
            className={cn(
                "relative px-8 py-3 text-white font-black rounded-xl active:shadow-none active:translate-y-2 transition-all hover:scale-[1.01] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-y-0",
                className
            )}
            {...props}
        >
            {children || "Push Me"}
        </button>
    );
}
