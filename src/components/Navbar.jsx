import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded bg-gradient-to-tr from-blue-600 to-indigo-500"></span>
          <span className="font-bold text-gray-900">DevGenius</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gray-900">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">Contact</a>
          <a
            href="#cta"
            className="inline-flex items-center rounded-md bg-gray-900 text-white text-sm font-semibold px-4 py-2 hover:bg-gray-800"
          >
            Get Started
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-2 text-gray-700">
                {l.label}
              </a>
            ))}
            <a href="#cta" className="mt-2 inline-flex items-center justify-center rounded-md bg-gray-900 text-white text-sm font-semibold px-4 py-2">Get Started</a>
          </nav>
        </div>
      )}
    </header>
  );
}
