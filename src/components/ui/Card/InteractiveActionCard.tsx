"use client";

import React from "react";
import { Send, ArrowRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const InteractiveActionCard = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn("max-w-sm rounded-[20px] bg-[#111827] border border-[#6366F1]/20 shadow-2xl overflow-hidden flex flex-col group", className)} {...props}>
            <div className="p-6 pb-4">
                <div className="flex items-center gap-2 text-[#6366F1] mb-2">
                    <Send size={16} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Deployment</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Edge Instance</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                    Execute serverless functions across 300+ global edge locations.
                </p>
            </div>
            <div className="p-6 pt-0 flex-grow">
                <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 group-hover:border-[#6366F1]/30 transition-colors cursor-pointer">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-white font-bold text-sm">us-east-1</span>
                            <span className="text-[#16A34A] text-[10px] font-bold">Active</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-[#16A34A] opacity-50" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6 pt-0 mt-auto">
                <button className="w-full px-6 py-2.5 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-bold rounded-xl shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all active:scale-95 flex items-center justify-center gap-2 outline-none focus:ring-2 focus:ring-[#6366F1]/50">
                    Deploy Now
                    <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
};
