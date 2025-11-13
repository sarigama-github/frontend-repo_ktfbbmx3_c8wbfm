import SectionHeader from "./SectionHeader";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most sites launch in 2–4 weeks depending on scope and content readiness.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes — I provide maintenance and continuous improvement plans.",
  },
  {
    q: "Which stack do you use?",
    a: "React, Next.js, Tailwind, and modern tooling focused on performance.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Answers"
          subtitle="Quick answers to common questions."
        />
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-lg border border-gray-200 bg-white p-4">
              <summary className="cursor-pointer font-medium text-gray-900">
                {f.q}
              </summary>
              <p className="mt-2 text-sm text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
