import React from 'react';
import { GitBranch, Box, Database, ArrowRight, ShieldAlert } from 'lucide-react';

const ProposedMethodology = ({ part = 1 }) => {
  return (
    <div className="flex flex-col justify-between h-full space-y-6 px-16 py-12">
      {/* Header */}
      <div className="flex justify-between items-end border-b border-slate-800 pb-4">
        <div className="text-left space-y-1">
          <h2 className="text-4xl font-bold tracking-tight text-white flex items-center gap-3">
            <GitBranch className="w-8 h-8 text-cyan-400" />
            Methodology: <span className="text-cyan-400">Proposed Build Pipeline</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Architectural flows and core modules running on isolated compiler sandboxes.
          </p>
        </div>
        <div className="text-sm font-mono bg-cyan-950/40 border border-cyan-500/30 px-4 py-2 rounded-xl text-cyan-400">
          Part {part} / 2
        </div>
      </div>

      {part === 1 ? (
        /* Part 1: Visual SVG Pipeline Flow Diagram (Larger) */
        <div className="flex-grow flex flex-col justify-center items-center my-auto min-h-[400px]">
          <div className="w-full max-w-5xl bg-slate-900/40 border border-slate-800 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-center items-center shadow-xl">
            
            {/* Ambient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 pointer-events-none" />

            <svg viewBox="0 0 1000 320" className="w-full h-auto text-slate-300 relative z-10 font-mono text-[11px] font-bold">
              {/* Definitions for arrow markers */}
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#06b6d4" />
                </marker>
              </defs>

              {/* Node 1: User Client */}
              <rect x="20" y="110" width="130" height="70" rx="10" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" />
              <text x="85" y="142" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">User Client</text>
              <text x="85" y="162" textAnchor="middle" fill="#06b6d4" fontSize="10">[ Paste Git URL ]</text>

              {/* Path 1 -> 2 */}
              <path d="M 150 145 L 210 145" fill="none" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Node 2: Cloner API */}
              <rect x="210" y="110" width="130" height="70" rx="10" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="275" y="142" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">Cloner Hook</text>
              <text x="275" y="162" textAnchor="middle" fill="#3b82f6" fontSize="10">[ Git Cloner ]</text>

              {/* Path 2 -> 3 */}
              <path d="M 340 145 L 400 145" fill="none" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Node 3: Code Scanner */}
              <rect x="400" y="110" width="130" height="70" rx="10" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />
              <text x="465" y="142" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">Scan Parser</text>
              <text x="465" y="162" textAnchor="middle" fill="#8b5cf6" fontSize="10">[ Dependency Scan ]</text>

              {/* Path 3 -> 4 */}
              <path d="M 530 145 L 590 145" fill="none" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Node 4: Compile Sandbox */}
              <rect x="590" y="110" width="140" height="75" rx="12" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
              <text x="660" y="142" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">Docker Compiler</text>
              <text x="660" y="162" textAnchor="middle" fill="#ef4444" fontSize="10">[ Alpine Sandbox ]</text>

              {/* Path 4 -> 5 */}
              <path d="M 730 145 L 790 145" fill="none" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Node 5: Proxy Subdomain */}
              <rect x="790" y="110" width="130" height="70" rx="10" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
              <text x="855" y="142" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">Nginx Proxy</text>
              <text x="855" y="162" textAnchor="middle" fill="#10b981" fontSize="10">[ Staging Subdomain ]</text>

              {/* Auxiliary Node: Redis memory registry */}
              <path d="M 660 70 L 660 110" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3,3" />
              <ellipse cx="660" cy="40" rx="70" ry="25" fill="#090f1d" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="660" y="44" textAnchor="middle" fill="#f59e0b" fontSize="10">Redis Router Reg</text>

              {/* Flow descriptions */}
              <text x="180" y="220" textAnchor="middle" fill="#64748b" fontSize="10">1. Clone Repository</text>
              <text x="370" y="220" textAnchor="middle" fill="#64748b" fontSize="10">2. Regex Scanner</text>
              <text x="560" y="220" textAnchor="middle" fill="#64748b" fontSize="10">3. Safe compilation</text>
              <text x="750" y="220" textAnchor="middle" fill="#64748b" fontSize="10">4. Domain route registry</text>
            </svg>

            <div className="mt-4 text-xs font-mono text-slate-400">
              Figure 1.0: End-to-end Preview Cloud dynamic staging deployment lifecycle path.
            </div>
          </div>
        </div>
      ) : (
        /* Part 2: Module Descriptions (Spacious & Large text) */
        <div className="grid grid-cols-2 gap-8 flex-grow my-auto min-h-[380px]">
          
          {/* Module 1: Git Synchronizer API */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col justify-center space-y-3 hover:border-cyan-500/20 transition-all backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold font-mono text-sm">M1</span>
              <h3 className="text-xl font-bold text-white tracking-wide">Git Synchronizer API</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-350 leading-relaxed text-left pl-2">
              <li className="flex gap-2"><span className="text-cyan-400 font-bold">•</span><span>Handles repository download requests via Webhook API hooks.</span></li>
              <li className="flex gap-2"><span className="text-cyan-400 font-bold">•</span><span>Stores contents in secure local volume mounts.</span></li>
            </ul>
          </div>

          {/* Module 2: File Structure Scanner */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col justify-center space-y-3 hover:border-purple-500/20 transition-all backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-purple-950/20 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold font-mono text-sm">M2</span>
              <h3 className="text-xl font-bold text-white tracking-wide">File Structure Scanner</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-350 leading-relaxed text-left pl-2">
              <li className="flex gap-2"><span className="text-purple-400 font-bold">•</span><span>Scans workspace directory layouts using Node regex models.</span></li>
              <li className="flex gap-2"><span className="text-purple-400 font-bold">•</span><span>Identifies project types (React, HTML, static) and ports automatically.</span></li>
            </ul>
          </div>

          {/* Module 3: Alpine Docker Compiler */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col justify-center space-y-3 hover:border-red-500/20 transition-all backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-red-950/20 border border-red-500/20 flex items-center justify-center text-red-400 font-bold font-mono text-sm">M3</span>
              <h3 className="text-xl font-bold text-white tracking-wide">Alpine Docker Compiler</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-350 leading-relaxed text-left pl-2">
              <li className="flex gap-2"><span className="text-red-400 font-bold">•</span><span>Spins up Docker instances based on scanned workspace needs.</span></li>
              <li className="flex gap-2"><span className="text-red-400 font-bold">•</span><span>Executes builds inside sandboxes with memory caps (256MB).</span></li>
            </ul>
          </div>

          {/* Module 4: Nginx Proxy Router */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 flex flex-col justify-center space-y-3 hover:border-blue-500/20 transition-all backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-blue-950/20 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold font-mono text-sm">M4</span>
              <h3 className="text-xl font-bold text-white tracking-wide">Nginx Proxy Router</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-350 leading-relaxed text-left pl-2">
              <li className="flex gap-2"><span className="text-blue-400 font-bold">•</span><span>Registers ports inside memory tables via Redis lookup keys.</span></li>
              <li className="flex gap-2"><span className="text-blue-400 font-bold">•</span><span>Nginx routes domains to active containers instantly.</span></li>
            </ul>
          </div>

        </div>
      )}

      {/* Footer warning */}
      <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-4 flex items-center gap-3 text-xs text-slate-400 font-mono">
        <ShieldAlert className="w-5 h-5 text-cyan-400 shrink-0" />
        <span>SECURITY METRIC: Compilers run under non-privileged Alpine profiles, blocking host filesystem lookups.</span>
      </div>
    </div>
  );
};

export default ProposedMethodology;
