import SectionHeader from "./SectionHeader";
import { Code, Layout, Smartphone, Zap } from "lucide-react";

const items = [
  {
    icon: Code,
    title: "Custom Development",
    desc: "Performance-first builds using modern stacks and best practices.",
  },
  {
    icon: Layout,
    title: "Design Systems",
    desc: "Scalable UI with accessible components and consistent theming.",
  },
  {
    icon: Smartphone,
    title: "Responsive & Mobile",
    desc: "Pixel-perfect across devices with fluid layout and touch gestures.",
  },
  {
    icon: Zap,
    title: "Optimized Delivery",
    desc: "SEO, structured data, code-splitting, and build-time optimizations.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="What I do"
          subtitle="From idea to production — I help craft fast, delightful digital experiences."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon className="text-blue-600" size={24} />
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
