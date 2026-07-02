import React from 'react';
import Github from '../GithubIcon';
import { Users, GraduationCap } from 'lucide-react';

const TitleSlide = () => {
  return (
    <div className="grid grid-cols-12 gap-8 items-center h-full px-16 py-12">
      {/* Left Info Column */}
      <div className="col-span-7 flex flex-col justify-center space-y-8 text-left h-full">
        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest text-cyan-400 uppercase w-fit font-mono">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
          <span>Final Year Project Review - I</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-7xl font-extrabold tracking-tight text-white leading-tight">
            Preview <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Cloud</span>
          </h1>
          <p className="text-3xl font-light text-slate-300 max-w-2xl leading-relaxed">
            Paste Any Public GitHub Repository URL and Get Instant Live Preview
          </p>
        </div>

        <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-2 gap-8 pt-4">
          <div className="space-y-4 bg-slate-900/50 border border-slate-800 p-6 rounded-2xl backdrop-blur-md">
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2 font-mono">
              <Users className="w-4 h-4" /> Team Members
            </h3>
            <ul className="space-y-2 text-base font-semibold text-slate-200">
              <li>Nikhil Bendre</li>
              <li>Riya Jadhav</li>
              <li>Aditya Shirsath</li>
              <li>Ankur Mishra</li>
            </ul>
          </div>

          <div className="space-y-4 bg-slate-900/50 border border-slate-800 p-6 rounded-2xl backdrop-blur-md flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2 font-mono">
                <GraduationCap className="w-4 h-4" /> Institution
              </h3>
              <p className="text-base font-bold text-white mt-1 leading-normal">
                VIVA Institute of Technology
              </p>
            </div>
            <div className="text-xs text-slate-400 border-t border-slate-800/80 pt-3 mt-3 font-mono">
              Dept: Computer Science & Engineering (AI & ML)
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Hero SVG Graphic */}
      <div className="col-span-5 flex justify-center items-center h-full">
        <div className="relative w-full max-w-[450px] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full filter blur-[60px] animate-pulse"></div>

          <svg className="w-full h-full relative z-10" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Orbits */}
            <circle cx="200" cy="200" r="160" stroke="#1e293b" strokeWidth="2.5" strokeDasharray="8 8" />
            <circle cx="200" cy="200" r="120" stroke="#334155" strokeWidth="2" />

            {/* Central Cloud Node */}
            <g transform="translate(140, 150)">
              <rect x="0" y="0" width="120" height="80" rx="40" fill="url(#cloudGlow)" filter="blur(15px)" opacity="0.6" />
              <path d="M30 65 hr60 a25 25 0 0 0 0 -50 a30 30 0 0 0 -55 10 a20 20 0 0 0 -5 40 Z" fill="#0f172a" stroke="url(#cyanBlueGrad)" strokeWidth="3" className="animate-bounce" style={{ animationDuration: '6s' }} />
              <polygon points="52,32 52,52 68,42" fill="#22d3ee" className="animate-pulse" />
            </g>

            {/* GitHub Node */}
            <g transform="translate(60, 100)">
              <circle cx="25" cy="25" r="25" fill="#0f172a" stroke="#475569" strokeWidth="2.5" />
              <g transform="translate(13, 13)">
                <Github className="w-6 h-6 text-white" />
              </g>
            </g>

            {/* Docker Node */}
            <g transform="translate(290, 100)">
              <circle cx="25" cy="25" r="25" fill="#0f172a" stroke="#a855f7" strokeWidth="2.5" />
              <path d="M15 17h6v6h-6zm8 0h6v6h-6zm8 0h6v6h-6zm-16 8h6v6h-6zm8 0h6v6h-6zm8 0h6v6h-6zm-8 8h6v6h-6z" fill="#c084fc" />
            </g>

            {/* Live Web Node */}
            <g transform="translate(175, 290)">
              <rect x="0" y="0" width="50" height="50" rx="12" fill="#0f172a" stroke="#06b6d4" strokeWidth="2.5" />
              <circle cx="25" cy="25" r="12" stroke="#22d3ee" strokeWidth="2" />
              <path d="M13 25h24M25 13a18 18 0 0 0 0 24M25 13a18 18 0 0 1 0 24" stroke="#22d3ee" strokeWidth="1" />
            </g>

            {/* Connectors */}
            <path d="M110 125 L160 165" stroke="url(#cyanGlow)" strokeWidth="2.5" strokeDasharray="4 4" className="animate-[dash_10s_linear_infinite]" />
            <path d="M290 125 L240 165" stroke="url(#purpleGlow)" strokeWidth="2.5" strokeDasharray="4 4" className="animate-[dash_10s_linear_infinite]" />
            <path d="M200 230 L200 290" stroke="url(#cyanGlow)" strokeWidth="2.5" strokeDasharray="4 4" className="animate-[dash_10s_linear_infinite]" />

            {/* Gradients */}
            <defs>
              <linearGradient id="cyanBlueGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="cyanGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="purpleGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
              <radialGradient id="cloudGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;
