import SectionHeader from "./SectionHeader";

const tiers = [
  {
    name: "Starter",
    price: "$799",
    features: ["Single page", "Basic SEO", "3 revisions"],
  },
  {
    name: "Growth",
    price: "$2,499",
    features: ["Up to 6 pages", "Blog setup", "Email capture"],
  },
  {
    name: "Scale",
    price: "Custom",
    features: ["Complex flows", "Integrations", "Priority support"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, transparent"
          subtitle="Pick a package to get started — we can always tailor to your needs."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">{t.name}</h3>
              <div className="mt-2 text-3xl font-bold">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {t.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gray-900 text-white font-semibold px-4 py-2 hover:bg-gray-800">Start</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
