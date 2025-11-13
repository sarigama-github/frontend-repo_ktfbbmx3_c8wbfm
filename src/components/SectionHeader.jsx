import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, subtitle, align = "center" }) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} max-w-3xl mx-auto mb-12`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest text-blue-600 font-semibold"
        >
          {eyebrow}
        </motion.div>
      )}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900"
        >
          {title}
        </motion.h2>
      )}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-gray-600"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
