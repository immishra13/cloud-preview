import React from 'react';
import { ShieldAlert, Cpu, Zap, Terminal, Compass } from 'lucide-react';

const IntroSlide = () => {
  return (
    <div className="flex flex-col justify-between h-full space-y-8 px-16 py-12">
      {/* Slide Header */}
      <div className="text-left space-y-2">
        <h2 className="text-4xl font-bold tracking-tight text-white">
          Introduction: <span className="text-cyan-400">The Local Setup Friction</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Why local environment configurations and pull request testing slow down engineering pipelines.
        </p>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-3 gap-8 flex-grow items-stretch my-auto">
        
        {/* Card 1: Time Waste */}
        <div className="bg-slate-900/50 border border-red-500/20 rounded-2xl p-8 flex flex-col justify-between hover:border-red-500/40 transition-all duration-300 backdrop-blur-md group">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-xl bg-red-950/30 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-105 transition-transform">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-wide">Developer Time Sinks</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Developers waste up to <strong>30 minutes</strong> configuring local checkouts for reviews.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span>Clogs local disk spaces with heavy folders like <strong>node_modules</strong>.</span>
              </li>
            </ul>
          </div>
          <div className="text-xs text-red-400 font-mono tracking-widest pt-4 border-t border-slate-800/80 mt-6">
            [ STATUS: INEFFICIENT ]
          </div>
        </div>

        {/* Card 2: Environment Conflicts */}
        <div className="bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 backdrop-blur-md group">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-xl bg-purple-950/30 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
              <Cpu className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-wide">Environment Conflicts</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span>The classic <strong>"Works on my machine"</strong> bug due to differing OS versions or packages.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span>Complex configuration of system dependencies, Redis caches, and database runtimes.</span>
              </li>
            </ul>
          </div>
          <div className="text-xs text-purple-400 font-mono tracking-widest pt-4 border-t border-slate-800/80 mt-6">
            [ STATUS: COMPLICATED ]
          </div>
        </div>

        {/* Card 3: Preview Cloud Cure */}
        <div className="bg-slate-900/50 border border-cyan-500/20 rounded-2xl p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md group shadow-[0_0_20px_rgba(6,182,212,0.05)]">
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
              <Zap className="w-7 h-7 animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-wide">Preview Cloud Remedy</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>One-Click Launch</strong>: Paste any Git URL to clone and trigger build isolates instantly.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Dynamic Staging Subdomains</strong>: Generates ephemeral sandbox URLs in under 12 seconds.</span>
              </li>
            </ul>
          </div>
          <div className="text-xs text-cyan-400 font-mono tracking-widest pt-4 border-t border-slate-800/80 mt-6">
            [ STATUS: OPTIMIZED ]
          </div>
        </div>

      </div>

      {/* Workflow Indicator */}
      <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-4 flex items-center justify-between font-mono text-xs text-slate-400">
        <span className="text-cyan-400 font-bold">PIPELINE ROUTE:</span>
        <div className="flex items-center gap-3">
          <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded text-white flex items-center gap-1.5"><Terminal className="w-4 h-4" /> Git URL</span>
          <span className="text-cyan-500 font-bold">→</span>
          <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded text-white flex items-center gap-1.5"><Compass className="w-4 h-4" /> Scan files</span>
          <span className="text-cyan-500 font-bold">→</span>
          <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded text-white flex items-center gap-1.5"><Cpu className="w-4 h-4" /> Container Build</span>
          <span className="text-cyan-500 font-bold">→</span>
          <span className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded text-cyan-400 flex items-center gap-1.5 font-bold"><Zap className="w-4 h-4" /> Live Preview</span>
        </div>
      </div>
    </div>
  );
};

export default IntroSlide;
