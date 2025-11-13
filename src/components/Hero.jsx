import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight"
          >
            Build and ship websites, faster.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="mt-4 text-lg text-gray-600"
          >
            A modern developer portfolio & agency theme. Clean sections, subtle motion, and a timeless layout optimized for conversions.
          </motion.p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white font-semibold px-5 py-3 hover:bg-gray-800">
              Get Started
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-md border border-gray-300 text-gray-800 font-semibold px-5 py-3 hover:bg-gray-50">
              View Work
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {["Stripe-like", "Shadcn", "Framer"].map((brand) => (
              <div key={brand} className="h-10 rounded bg-white/70 border border-gray-200 shadow-sm flex items-center justify-center text-sm text-gray-500">
                {brand}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl bg-white border border-gray-200 shadow-2xl overflow-hidden">
            <div className="h-full w-full bg-gradient-to-tr from-indigo-500/10 via-blue-500/10 to-cyan-400/10" />
          </div>
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 blur-2xl opacity-20" />
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 blur-2xl opacity-20" />
        </div>
      </div>
    </section>
  );
}
