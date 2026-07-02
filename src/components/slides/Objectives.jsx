import React from 'react';
import { Target, CheckSquare, Zap, ShieldCheck, Compass, Terminal } from 'lucide-react';

const Objectives = () => {
  const objectiveList = [
    {
      num: "01",
      title: "Static Repository Scanning",
      desc: "Develop code scanning logic using Node.js to auto-detect framework environments and map build folders.",
      icon: Terminal,
      color: "text-cyan-400 border-cyan-500/20 bg-cyan-950/20"
    },
    {
      num: "02",
      title: "Docker Sandbox Allocation",
      desc: "Orchestrate resource-limited Docker compilers (Alpine containers) to execute builds safely.",
      icon: ShieldCheck,
      color: "text-purple-400 border-purple-500/20 bg-purple-950/20"
    },
    {
      num: "03",
      title: "Dynamic Subdomain Routing",
      desc: "Implement a routing proxy using Nginx to map temporary domains directly to active build containers.",
      icon: Compass,
      color: "text-blue-400 border-blue-500/20 bg-blue-950/20"
    },
    {
      num: "04",
      title: "Redis & Postgres Caching",
      desc: "Establish a cache matrix mapping active PR subdomains to port registries, reducing lookup overhead.",
      icon: Zap,
      color: "text-amber-400 border-amber-500/20 bg-amber-950/20"
    }
  ];

  return (
    <div className="flex flex-col justify-between h-full space-y-6 px-16 py-12">
      {/* Header */}
      <div className="text-left space-y-2 border-b border-slate-800 pb-4">
        <h2 className="text-4xl font-bold tracking-tight text-white flex items-center gap-3">
          <Target className="w-8 h-8 text-cyan-400" />
          System Design Objectives
        </h2>
        <p className="text-slate-400 text-lg">
          Outlining the core execution goals for Preview Cloud's build orchestration engine.
        </p>
      </div>

      {/* Spacious 2x2 Objective Grid */}
      <div className="grid grid-cols-2 gap-8 flex-grow my-auto">
        {objectiveList.map((obj, index) => {
          const Icon = obj.icon;
          return (
            <div 
              key={index}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex gap-6 hover:border-slate-700 transition-all duration-300 backdrop-blur-md items-center group"
            >
              {/* Objective Number and Icon */}
              <div className={`w-16 h-16 rounded-xl border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform ${obj.color}`}>
                <Icon className="w-8 h-8" />
              </div>

              {/* Objective Details */}
              <div className="text-left space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-cyan-500 font-bold">{obj.num} / OBJECTIVE</span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">{obj.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{obj.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Target Focus Banner */}
      <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-4 flex items-center justify-between font-mono text-xs text-slate-400">
        <span>CORE RESEARCH DIRECTIVE:</span>
        <span className="text-cyan-400 font-bold">Build an end-to-end sandbox runner under 12 seconds with zero local setup.</span>
      </div>
    </div>
  );
};

export default Objectives;
