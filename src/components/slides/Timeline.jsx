import React from 'react';
import { Calendar, CheckCircle2, Circle } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      phase: "Phase 1: Setup & Design",
      months: "July - Aug 2026",
      tasks: "Literature survey, system architecture designs, and initial mockups.",
      status: "complete",
      pct: 100,
      color: "bg-emerald-500"
    },
    {
      phase: "Phase 2: Core API Dev",
      months: "Sep - Oct 2026",
      tasks: "Git webhook receivers, cloner API endpoints, and database models.",
      status: "complete",
      pct: 100,
      color: "bg-emerald-500"
    },
    {
      phase: "Phase 3: Docker Sandbox",
      months: "Nov - Dec 2026",
      tasks: "Alpine compiler setup, resource limits, and build commands scanner.",
      status: "active",
      pct: 50,
      color: "bg-cyan-500"
    },
    {
      phase: "Phase 4: Proxy Routing",
      months: "Jan - Feb 2027",
      tasks: "Nginx proxy routes, Redis registry, and staging subdomain triggers.",
      status: "upcoming",
      pct: 0,
      color: "bg-slate-800"
    }
  ];

  return (
    <div className="flex flex-col justify-between h-full space-y-6 px-16 py-12">
      {/* Header */}
      <div className="text-left space-y-2 border-b border-slate-800 pb-4">
        <h2 className="text-4xl font-bold tracking-tight text-white flex items-center gap-3">
          <Calendar className="w-8 h-8 text-cyan-400" />
          Project Development Timeline
        </h2>
        <p className="text-slate-400 text-lg">
          Milestones, phases, and schedule tracking for Review-1 execution cycle.
        </p>
      </div>

      {/* Gantt Timeline Container (Spacious) */}
      <div className="flex-grow flex flex-col justify-center gap-6 my-auto min-h-[380px] max-w-5xl mx-auto w-full">
        {milestones.map((ms, index) => (
          <div 
            key={index}
            className={`bg-slate-900/50 border rounded-2xl p-6 flex items-center justify-between gap-6 transition-all duration-300 ${
              ms.status === 'active' 
                ? 'border-cyan-500/30 bg-cyan-950/5 shadow-[0_0_15px_rgba(6,182,212,0.05)]' 
                : 'border-slate-800/80'
            }`}
          >
            {/* Status indicator */}
            <div className="flex items-center gap-4 w-[30%] text-left shrink-0">
              {ms.status === 'complete' ? (
                <div className="w-10 h-10 rounded-full bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              ) : ms.status === 'active' ? (
                <div className="w-10 h-10 rounded-full bg-cyan-950/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 animate-pulse">
                  <Circle className="w-6 h-6 fill-cyan-500/30" />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500">
                  <Circle className="w-6 h-6" />
                </div>
              )}

              <div>
                <h3 className="text-base font-bold text-white tracking-wide">{ms.phase}</h3>
                <span className="text-xs font-mono text-cyan-400">{ms.months}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 text-left w-[40%] leading-relaxed">
              {ms.tasks}
            </p>

            {/* Gantt Bar progress display */}
            <div className="w-[25%] flex flex-col items-end gap-2 shrink-0">
              <div className="flex justify-between w-full text-xs font-mono">
                <span className="text-slate-400">PROGRESS:</span>
                <span className={ms.status === 'active' ? 'text-cyan-400 font-bold' : 'text-slate-300'}>{ms.pct}%</span>
              </div>
              <div className="w-full h-3.5 bg-slate-950 rounded-full overflow-hidden border border-slate-850">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${ms.color}`}
                  style={{ width: `${ms.pct}%` }}
                />
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Footnote */}
      <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-4 text-center text-xs font-mono text-slate-400">
        <span>CURRENT MILESTONE: Complete base cloner hooks, proceeding to Docker Alpine compilers development.</span>
      </div>
    </div>
  );
};

export default Timeline;
