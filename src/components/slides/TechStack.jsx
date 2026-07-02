import React from 'react';
import { Layers, Terminal, ShieldAlert, Cpu } from 'lucide-react';

const TechStack = () => {
  const stack = [
    { name: "React", category: "Frontend Framework", role: "Renders the dashboard UI, real-time logging terminal, and presentation dashboard.", color: "border-cyan-500/20 text-cyan-400 bg-cyan-950/5", brand: "ReactJS Framework" },
    { name: "NodeJS", category: "Core Runtime", role: "Asynchronous backend execution engine hosting API routes and script runners.", color: "border-emerald-500/20 text-emerald-400 bg-emerald-950/5", brand: "V8 JavaScript Runtime" },
    { name: "Docker", category: "Sandbox Isolation", role: "Compiles full-stack source code inside unprivileged Alpine nodes with memory bounds.", color: "border-blue-500/20 text-blue-400 bg-blue-950/5", brand: "Containerization Engine" },
    { name: "Redis", category: "Routing Registry", role: "Stores port slots dynamically and maps incoming PR URLs to active containers.", color: "border-red-500/20 text-red-400 bg-red-950/5", brand: "In-Memory Database" },
    { name: "PostgreSQL", category: "Relational Storage", role: "Stores persistent metadata, user profiles, project configs, and deployment stats.", color: "border-sky-500/20 text-sky-400 bg-sky-950/5", brand: "Relational SQL Engine" },
    { name: "Nginx", category: "Reverse Ingress Proxy", role: "Reverse proxy that directs client subdomain hits to active Docker network ports.", color: "border-emerald-600/20 text-emerald-500 bg-emerald-950/5", brand: "Edge Ingress Server" }
  ];

  return (
    <div className="flex flex-col justify-between h-full space-y-6 px-16 py-12">
      {/* Header */}
      <div className="text-left space-y-2 border-b border-slate-800 pb-4">
        <h2 className="text-4xl font-bold tracking-tight text-white flex items-center gap-3">
          <Layers className="w-8 h-8 text-cyan-400" />
          Technology Stack: <span className="text-cyan-400">Core Architecture</span>
        </h2>
        <p className="text-slate-400 text-lg">
          High-performance developer tool chain driving our instant staging pipeline.
        </p>
      </div>

      {/* Spacious 3x2 Tech Cards Grid */}
      <div className="grid grid-cols-3 gap-8 flex-grow my-auto min-h-[380px]">
        {stack.map((item, idx) => (
          <div 
            key={idx}
            className={`bg-slate-900/50 border rounded-2xl p-8 text-left flex flex-col justify-between hover:scale-[1.01] hover:bg-slate-900/70 transition-all duration-300 backdrop-blur-md group ${item.color}`}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {item.name}
                </h3>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest bg-slate-950 px-2 py-0.5 rounded border border-slate-850">
                  {item.category}
                </span>
              </div>
              <p className="text-sm text-slate-305 leading-relaxed">
                {item.role}
              </p>
            </div>
            
            <div className="border-t border-slate-800/80 pt-3 mt-4 flex justify-between items-center text-xs font-mono text-slate-400">
              <span>{item.brand}</span>
              <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">✓ SELECTED</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer statistics bar */}
      <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-4 flex items-center justify-between font-mono text-xs text-slate-400">
        <span>RUNTIME: ALPINE LINUX / PORT MAPPER: REDIS / EDGE: NGINX PROXY</span>
        <span className="text-cyan-400 font-bold">STABLE VERSION BUILD READY</span>
      </div>
    </div>
  );
};

export default TechStack;
