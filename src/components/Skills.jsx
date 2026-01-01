import { SparklesIcon } from "@heroicons/react/24/solid";
import { skillsData } from "./data/portfolioData";

// src/components/Skills.jsx

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-4xl font-black mb-10 border-b-4 border-cyan-400 pb-2 inline-block text-white drop-shadow-lg">Technical Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skillGroup, index) => (
          <div key={index} className="card bg-slate-800/70 backdrop-blur-sm shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] border border-slate-700/50">
            <div className="card-body">
              <h3 className="card-title text-xl font-bold text-cyan-300 flex items-center">
                <SparklesIcon className="w-6 h-6 mr-2 text-cyan-400" />
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {skillGroup.items.map((item, i) => (
                  <div key={i} className="badge badge-lg bg-slate-700 text-slate-100 border border-slate-600 p-3 shadow-md font-semibold hover:bg-slate-600 transition-colors">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;