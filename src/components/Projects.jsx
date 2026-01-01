import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import { projectsData } from "./data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl font-black mb-10 border-b-4 border-cyan-400 pb-2 inline-block text-white drop-shadow-lg">Key Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="card bg-slate-800/70 backdrop-blur-sm shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-slate-700/50">
            <div className="card-body">
              <h3 className="card-title text-2xl text-cyan-300">{project.title}</h3>
              <p className="text-sm font-semibold mb-3 bg-slate-700/50 p-2 rounded-lg inline-block text-slate-100 border border-slate-600">
                Tech Stack: <span className="text-cyan-300 font-bold">{project.techStack}</span>
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-200 mt-4">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="card-actions justify-end mt-4 space-x-3">

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="btn btn-sm bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all duration-300 border-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GlobeAltIcon className="w-5 h-5 mr-1" /> Live Demo
                  </a>
                )}

                <a
                  href={project.githubLink}
                  className="btn btn-sm btn-outline border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-slate-900 font-bold transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CodeBracketIcon className="w-5 h-5 mr-1" /> View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;