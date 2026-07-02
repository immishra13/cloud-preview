import React from 'react';
import { Award, Briefcase, ChevronRight, CheckSquare, Layers, ShieldCheck, Terminal } from 'lucide-react';

const InternshipSlide = () => {
  const contributions = [
    "Full-scale booking flow development",
    "Secure JWT session integrations",
    "Database schema planning & tuning",
    "Agile sprint delivery cycles"
  ];

  const learnings = [
    { title: "Real-world Architectures", desc: "Understanding multi-tier structures, payload optimization, and client session limits." },
    { title: "Scalable Database Systems", desc: "Developing indexed queries, Redis route registers, and database caching patterns." },
    { title: "Client Business Logic", desc: "Translating customer requirements directly into modular, clean, and maintainable codebase files." },
    { title: "Collaborative Agile Workflows", desc: "Coordinating code review PR checkouts, staging builds, and git branches protocols." }
  ];

  return (
    <div className="flex flex-col justify-between h-full space-y-6 px-16 py-12">
      {/* Header */}
      <div className="text-left space-y-2 border-b border-slate-800 pb-4">
        <h2 className="text-4xl font-bold tracking-tight text-white flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-purple-400" />
          Supporting Internship: <span className="text-purple-400">Industry Exposure</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Applying professional engineering standards learned at FixMateHub Startup to the Preview Cloud system.
        </p>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-12 gap-8 items-stretch flex-grow my-auto min-h-[380px]">
        
        {/* Left Column: Company Details & Deliverables */}
        <div className="col-span-5 bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between text-left backdrop-blur-md">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-mono bg-purple-950/40 border border-purple-500/30 text-purple-400 px-3 py-1 rounded-full uppercase tracking-wider">
                Full-Stack Development Team
              </span>
              <h3 className="text-2xl font-bold text-white mt-3">FixMateHub Startup</h3>
              <p className="text-sm text-slate-400 font-mono">[ Professional Immersion ]</p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono text-purple-400 uppercase tracking-wider font-bold">Key Project Contributions:</h4>
              <ul className="space-y-3.5 text-sm text-slate-300">
                {contributions.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <ChevronRight className="w-4.5 h-4.5 text-purple-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800/80 pt-4 mt-6 text-xs text-slate-400 flex items-center gap-2 font-mono">
            <Award className="w-5 h-5 text-purple-400" />
            <span>TERM: PUNE AREA METROPOLITAN STARTUP</span>
          </div>
        </div>

        {/* Right Column: Takeaways */}
        <div className="col-span-7 grid grid-cols-2 gap-6">
          {learnings.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-950/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-center space-y-3 text-left hover:border-purple-500/20 hover:scale-[1.01] transition-all duration-300"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></div>
                <h4 className="text-sm font-bold text-white tracking-wide">{item.title}</h4>
              </div>
              <p className="text-xs text-slate-350 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default InternshipSlide;
