import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Pricing />
        <FAQ />
        <section id="cta" className="py-20 bg-gray-900 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Ready to craft something great?</h2>
            <p className="mt-3 text-gray-300">Tell me about your project and timeline — I’ll reply within a business day.</p>
            <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-md bg-white text-gray-900 font-semibold px-5 py-3 hover:bg-gray-100">Start a project</a>
          </div>
        </section>
        <footer className="py-10 border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} DevGenius. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Twitter</a>
              <a href="#" className="hover:text-gray-900">GitHub</a>
              <a href="#" className="hover:text-gray-900">LinkedIn</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
