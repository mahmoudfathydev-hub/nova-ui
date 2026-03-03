import { Shield, Zap, Palette, Code, Layout } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const features: Feature[] = [
  {
    title: "Copy-Ready Code",
    description:
      "No installation required. Copy component code directly into your project and customize it freely.",
    icon: <Code className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Built-in Validation",
    description:
      "First-class Zod integration for every input and form component. Type-safety from day one.",
    icon: <Shield className="w-6 h-6" />,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Responsive Design",
    description:
      "Mobile-first components that look stunning on any screen size. Fully tested for all breakpoints.",
    icon: <Layout className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Clean Architecture",
    description:
      "Organized, readable, and extensible boilerplate that follows industry best practices.",
    icon: <Zap className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "TypeScript Support",
    description:
      "Full TypeScript definitions for every component. Enjoy intelligent autocomplete and refactoring.",
    icon: <Palette className="w-6 h-6" />, // Swapped for icon variety
    color: "from-blue-600 to-indigo-600",
  },
  {
    title: "Production Ready",
    description:
      "Battle-tested components ready for high-scale SaaS and enterprise applications.",
    icon: <Shield className="w-6 h-6" />,
    color: "from-rose-500 to-red-500",
  },
];

const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <div className="group relative p-8 rounded-3xl border border-white/5 bg-white/2 backdrop-blur-sm hover:bg-white/5 transition-all duration-500 hover:-translate-y-2">
      <div
        className={`absolute -inset-px bg-linear-to-r ${feature.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
      ></div>
      <div className="relative z-10 space-y-4">
        <div
          className={`w-12 h-12 rounded-2xl bg-linear-to-r ${feature.color} flex items-center justify-center text-white shadow-lg shadow-black/20`}
        >
          {feature.icon}
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-500">
          {feature.title}
        </h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-24 bg-[#05070a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-20 space-y-4">
          <h2 className="text-blue-500 font-semibold tracking-wider text-sm uppercase px-1">
            Features
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Engineered for the <br />
            <span className="text-gray-500">Modern Web</span>
          </h3>
          <p className="text-lg text-gray-400">
            NovaUI isn&apos;t just another component library. It&apos;s a
            technical foundation for building high-scale, type-safe web
            applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-200 h-75 md:h-150 bg-blue-500/5 rounded-full blur-[80px] md:blur-[140px] pointer-events-none"></div>
    </section>
  );
}
