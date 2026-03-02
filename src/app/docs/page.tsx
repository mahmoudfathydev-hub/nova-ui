import { MousePointer2, Navigation, LayoutPanelTop, RectangleHorizontal, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const categories = [
    {
        title: "Buttons",
        description: "Primary, secondary, ghost, and animated button variants with built-in loading states.",
        icon: <MousePointer2 className="size-6 text-blue-400" />,
        count: 12,
        href: "/components/buttons",
        color: "from-blue-500/20 to-blue-500/5",
        border: "border-blue-500/20",
    },
    {
        title: "Navbars",
        description: "Responsive top-level navigation bars with dropdowns and mobile-first logic.",
        icon: <Navigation className="size-6 text-purple-400" />,
        count: 5,
        href: "/components/navbars",
        color: "from-purple-500/20 to-purple-500/5",
        border: "border-purple-500/20",
    },
    {
        title: "Footers",
        description: "Professional multi-column footer designs with social icons and newsletter forms.",
        icon: <LayoutPanelTop className="size-6 text-emerald-400" />,
        count: 6,
        href: "/components/footers",
        color: "from-emerald-500/20 to-emerald-500/5",
        border: "border-emerald-500/20",
    },
    {
        title: "Cards",
        description: "High-fidelity card designs for products, blog posts, profiles, and feature highlights.",
        icon: <RectangleHorizontal className="size-6 text-orange-400" />,
        count: 15,
        href: "/components/cards",
        color: "from-orange-500/20 to-orange-500/5",
        border: "border-orange-500/20",
    },
];

function DocsPage() {
    return (
        <main className="min-h-screen bg-[#05070a] pt-32 pb-20 overflow-hidden relative">
            {/* Background Orbs */}
            <div className="absolute top-1/4 -left-20 w-72 md:w-[600px] h-72 md:h-[600px] bg-blue-600/10 rounded-full blur-[100px] md:blur-[160px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-72 md:w-[500px] h-72 md:h-[500px] bg-purple-600/5 rounded-full blur-[100px] md:blur-[140px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-6 mb-16">
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest animate-fade-in-up">
                        <Sparkles size={14} className="animate-pulse" />
                        Component Library
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                        Explore the <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-white">Library</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                        Beautifully crafted, mobile-first UI components ready to be copied and pasted into your Next.js apps.
                    </p>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                    {categories.map((cat, idx) => (
                        <Link
                            key={cat.title}
                            href={cat.href}
                            className={`group relative p-8 rounded-[2rem] border ${cat.border} bg-white/2 hover:bg-white/5 transition-all duration-500 overflow-hidden`}
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            {/* Gradient Backdrop */}
                            <div className={`absolute inset-0 bg-linear-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-white/20 transition-all duration-500 shadow-2xl">
                                        {cat.icon}
                                    </div>
                                    <div className="bg-white/5 px-4 py-1.5 rounded-full border border-white/5 text-xs font-bold text-gray-400 group-hover:text-white transition-colors">
                                        {cat.count} Variants
                                    </div>
                                </div>

                                <div className="space-y-3 flex-1">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {cat.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {cat.description}
                                    </p>
                                </div>

                                <div className="mt-8 flex items-center gap-2 text-blue-400 font-bold text-sm tracking-wide opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                    Explore Components
                                    <ArrowRight size={16} />
                                </div>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/5 rotate-45 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                        </Link>
                    ))}
                </div>

                {/* Action Bar */}
                <div className="mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                            <Sparkles size={20} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold">New components weekly</h4>
                            <p className="text-sm text-gray-500">We keep adding more components to speed up your workflow.</p>
                        </div>
                    </div>
                    <Link
                        href="/"
                        className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-xl shadow-black/20"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default DocsPage;