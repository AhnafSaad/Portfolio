import { UserGroupIcon } from "@heroicons/react/24/solid";
import { activitiesData } from "./data/portfolioData";

const Activities = () => {
  return (
    <section id="activities" className="py-16">
      <h2 className="text-4xl font-black mb-10 border-b-4 border-cyan-400 pb-2 inline-block text-white drop-shadow-lg">Leadership & Activities</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activitiesData.map((activity, index) => (
          <div key={index} className="card bg-slate-800/70 backdrop-blur-sm shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-slate-700/50">
            <div className="card-body">
              <h3 className="card-title text-xl text-cyan-300 flex items-start">
                <UserGroupIcon className="w-6 h-6 mr-2 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="leading-tight">{activity.title}</span>
              </h3>

              <div className="mt-3 space-y-2">
                <p className="text-lg font-bold text-white">{activity.role}</p>
                <p className="text-sm font-semibold text-cyan-400 bg-slate-700/50 p-2 rounded-lg inline-block border border-slate-600">
                  {activity.period}
                </p>
              </div>

              <p className="mt-4 text-slate-200 leading-relaxed">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
