import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "SaaS Dashboard",
    desc: "Analytics-first interface with role-based UI and dark mode.",
  },
  {
    title: "E‑commerce Store",
    desc: "Headless storefront with instant search and optimized images.",
  },
  {
    title: "Portfolio Site",
    desc: "Fast, lightweight, and SEO-friendly developer portfolio.",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Work"
          title="Selected Projects"
          subtitle="A snapshot of the kind of work I help teams ship."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="aspect-video rounded-lg bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-cyan-400/10 mb-4" />
              <h3 className="font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
