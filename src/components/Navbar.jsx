import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { personalInfo } from "./data/portfolioData";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" }
  ];

  return (
    <>
      <nav className="navbar backdrop-blur-2xl bg-slate-900/90 sticky top-0 z-50 shadow-2xl border-b border-slate-700/50 transition-all duration-300">
        <div className="container mx-auto px-4 w-full">
          <div className="flex-1">
            <a
              href="#hero"
              className="text-2xl font-black hover:scale-105 transition-transform duration-300 group flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center font-bold text-slate-900 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300">
                {personalInfo.name.split(' ')[0][0]}
              </div>
              <div>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-cyan-400 transition-all duration-500">
                  {personalInfo.name.split(' ')[0]}
                </span>
                <span className="text-slate-400 text-sm font-medium ml-1 group-hover:text-slate-300 transition-colors duration-300">
                  Studio
                </span>
              </div>
            </a>
          </div>

          <div className="flex-none hidden md:flex items-center gap-8">
            <ul className="flex gap-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-semibold text-slate-300 hover:text-cyan-400 transition-all duration-300 rounded-lg px-4 py-2 relative overflow-hidden group"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-none md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn btn-ghost btn-circle btn-sm text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`md:hidden fixed top-[73px] left-0 right-0 bg-slate-900/95 backdrop-blur-2xl shadow-2xl border-b border-slate-700/50 z-40 transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col p-4 space-y-2">
          {navLinks.map((link, index) => (
            <li key={index} className="transform transition-all duration-300 hover:translate-x-2">
              <a
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-semibold text-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-300 block px-4 py-3"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;