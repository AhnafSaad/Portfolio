import { AcademicCapIcon, ChatBubbleBottomCenterTextIcon, TrophyIcon } from "@heroicons/react/24/solid";
import { additionalInfo, educationData } from "./data/portfolioData";

const Education = () => {
  return (
    <section id="education" className="py-16">
      <h2 className="text-4xl font-black mb-10 border-b-4 border-cyan-400 pb-2 inline-block text-white drop-shadow-lg">Education & Additional Info</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="card bg-slate-800/70 backdrop-blur-sm shadow-xl col-span-1 lg:col-span-2 border border-slate-700/50">
          <div className="card-body">
            <h3 className="card-title text-2xl text-cyan-300 flex items-center"><AcademicCapIcon className="w-6 h-6 mr-2 text-cyan-400" /> Education</h3>
            <div className="mt-4 space-y-3">
              <p className="text-xl font-bold text-white">{educationData.degree}</p>
              <p className="text-lg italic text-slate-300">{educationData.university}</p>
              <p className="text-slate-200">Duration: <span className="font-semibold text-cyan-300">{educationData.duration}</span></p>
              <p className="text-slate-200">CGPA: <span className="font-semibold text-cyan-400">{educationData.cgpa}</span></p>
              <p className="mt-2 text-slate-200">Key Coursework: <span className="text-sm italic text-slate-300">{educationData.coursework}</span></p>
            </div>
          </div>
        </div>

        <div className="card bg-slate-800/70 backdrop-blur-sm shadow-xl border border-slate-700/50">
          <div className="card-body">
            <h3 className="card-title text-2xl text-cyan-300 flex items-center"><TrophyIcon className="w-6 h-6 mr-2 text-cyan-400" /> Certifications</h3>
            <ul className="list-disc list-inside space-y-2 mt-4 text-slate-200">
              {additionalInfo.certifications.map((cert, index) => (
                <li key={index} className="font-medium">{cert.name} <span className="text-xs italic text-slate-400">({cert.source}, {cert.date})</span></li>
              ))}
            </ul>

            <div className="divider bg-slate-700"></div>

            <h3 className="card-title text-2xl text-cyan-300 flex items-center"><ChatBubbleBottomCenterTextIcon className="w-6 h-6 mr-2 text-cyan-400" /> Soft Skills</h3>
            <p className="mt-4 text-slate-200">{additionalInfo.softSkills}</p>
            <p className="mt-2 text-slate-200">Languages: <span className="font-medium text-cyan-300">{additionalInfo.languages}</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;