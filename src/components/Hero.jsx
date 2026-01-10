import { AcademicCapIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { personalInfo } from "./data/portfolioData";
import TypeWriter from "./TypeWriter";

const Hero = () => {
  return (
    <section id="hero" className="hero min-h-fit py-16 transition-all duration-500">
      <div className="hero-content flex-col lg:flex-row-reverse text-center lg:text-left">
        {personalInfo.profilePicUrl && (
            <div className="avatar mb-8 lg:mb-0 lg:ml-12 shadow-2xl transition-all duration-500 hover:scale-[1.05]">
                <div className="w-56 rounded-full ring ring-cyan-400 ring-offset-slate-950 ring-offset-8">
                    <img src={personalInfo.profilePicUrl} alt={personalInfo.name} />
                </div>
            </div>
        )}
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black text-white transition-all duration-700 drop-shadow-lg"><TypeWriter text={personalInfo.name} speed={50} /></h1>
          <p className="py-4 text-2xl font-bold text-cyan-300">{personalInfo.title}</p>
          <div className="flex justify-center lg:justify-start space-x-6 mb-8 text-lg font-semibold text-slate-200">
            <div className="flex items-center space-x-1"><AcademicCapIcon className="w-5 h-5 text-cyan-400" /><span>Software Engineering Student</span></div>
            <div className="flex items-center space-x-1"><MapPinIcon className="w-5 h-5 text-cyan-400" /><span>{personalInfo.location}</span></div>
          </div>
          <blockquote className="italic max-w-3xl mx-auto lg:mx-0 p-4 border-l-4 border-cyan-400 bg-slate-800/60 backdrop-blur-sm shadow-lg text-slate-100 rounded-r-lg">"{personalInfo.objective}"</blockquote>
          <div className="flex justify-center lg:justify-start space-x-4 mt-10">
            <a href={personalInfo.github} className="btn btn-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold border-none" target="_blank">View GitHub</a>
            <a href={personalInfo.linkedin} className="btn btn-lg btn-outline border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:border-cyan-400 hover:text-slate-900 font-bold" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;