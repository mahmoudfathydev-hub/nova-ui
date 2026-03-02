import React from "react";
import DocsSidebar from "@/components/Docs/DocsSidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-[#05070a] relative">
            {/* Background Orbs */}
            <div className="fixed top-1/4 -left-20 w-72 md:w-[600px] h-72 md:h-[600px] bg-blue-600/5 rounded-full blur-[100px] md:blur-[160px] pointer-events-none"></div>
            <div className="fixed bottom-1/4 -right-20 w-72 md:w-[500px] h-72 md:h-[500px] bg-purple-600/5 rounded-full blur-[100px] md:blur-[140px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex gap-10 px-6 pt-24 pb-20 relative z-10">
                {/* Sidebar Space */}
                <div className="hidden lg:block w-64 shrink-0">
                    <DocsSidebar />
                </div>

                {/* Content Area */}
                <div className="flex-1 min-w-0">
                    {children}
                </div>
            </div>
        </div>
    );
}
