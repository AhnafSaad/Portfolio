import { EnvelopeIcon, GlobeAltIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { personalInfo } from "./data/portfolioData";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-slate-800/80 backdrop-blur-sm text-slate-100 transition-colors duration-500 mt-12 border-t border-slate-700/50">
      <aside>
        <p className="font-black text-2xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {personalInfo.name.toUpperCase()}
        </p>
        <p className="text-lg font-semibold text-cyan-300">{personalInfo.title}</p>
        <p className="mt-4 text-slate-300">Copyright © {new Date().getFullYear()} - All rights reserved.</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href={`mailto:${personalInfo.email}`} className="link link-hover flex items-center space-x-2 text-slate-200 hover:text-cyan-400 transition-colors font-medium">
            <EnvelopeIcon className="w-5 h-5" />
            <span>{personalInfo.email}</span>
          </a>
          <a href={`tel:${personalInfo.phone}`} className="link link-hover flex items-center space-x-2 text-slate-200 hover:text-cyan-400 transition-colors font-medium">
            <PhoneIcon className="w-5 h-5" />
            <span>{personalInfo.phone}</span>
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="link link-hover flex items-center space-x-2 text-slate-200 hover:text-cyan-400 transition-colors font-medium">
            <GlobeAltIcon className="w-5 h-5" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;