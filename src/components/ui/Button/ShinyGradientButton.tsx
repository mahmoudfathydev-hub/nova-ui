"use client";

import React from "react";

function cn(...classes: (string | undefined | false)[]) {
    return classes.filter(Boolean).join(" ");
}

interface ShinyGradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    gradientColors?: string;
}

export default function ShinyGradientButton({
    children,
    className,
    gradientColors = "from-indigo-500 via-purple-500 to-pink-500",
    ...props
}: ShinyGradientButtonProps) {
    return (
        <button
            className={cn(
                "relative group px-10 py-4 rounded-2xl overflow-hidden bg-gradient-to-r bg-[length:200%_auto] hover:bg-right transition-all duration-700 font-black text-white shadow-2xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
                gradientColors,
                className
            )}
            {...props}
        >
            {children || "AI Pipeline"}
        </button>
    );
}
