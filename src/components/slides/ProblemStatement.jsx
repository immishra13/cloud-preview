import React from 'react';
import { HelpCircle, AlertOctagon, Cpu, Shield, Zap } from 'lucide-react';

const ProblemStatement = () => {
  return (
    <div className="flex flex-col justify-between h-full space-y-6 px-16 py-12">
      {/* Slide Header */}
      <div className="text-left space-y-2 border-b border-slate-800 pb-4">
        <h2 className="text-4xl font-bold tracking-tight text-white flex items-center gap-3">
          <HelpCircle className="w-8 h-8 text-cyan-400" />
          Project Problem Statement
        </h2>
        <p className="text-slate-400 text-lg">
          Formulating the research core behind container sandbox compile-and-deploy cycles.
        </p>
      </div>

      {/* Main Focus Container */}
      <div className="flex-grow flex flex-col justify-center items-center my-auto max-w-4xl mx-auto space-y-8">
        
        {/* Massive Quote Block */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-10 relative overflow-hidden shadow-xl text-center backdrop-blur-md">
          {/* Decorative quotes icons */}
          <span className="absolute top-4 left-6 text-slate-800 text-[180px] font-serif leading-none select-none">“</span>
          
          <p className="text-2xl font-medium text-slate-100 italic relative z-10 leading-relaxed max-w-3xl pt-6">
            How to build an automated, zero-configuration build and preview orchestrator that securely isolates, compiles, and dynamically routes multi-file full-stack Git repositories within short-lived container sandboxes in under 12 seconds?
          </p>

          <span className="absolute bottom-[-60px] right-6 text-slate-800 text-[180px] font-serif leading-none select-none">”</span>
        </div>

        {/* 3 Core Pillars of Execution */}
        <div className="grid grid-cols-3 gap-8 w-full">
          
          {/* Pillar 1: Zero-Config */}
          <div className="bg-slate-900/20 border border-slate-800/80 rounded-2xl p-5 text-center flex items-center gap-4 hover:border-cyan-500/25 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Zap className="w-6 h-6 animate-pulse" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-white tracking-wide">1. Zero-Configuration</h4>
              <p className="text-xs text-slate-400 mt-1">Automatic package and build file detection logic.</p>
            </div>
          </div>

          {/* Pillar 2: Secure Sandbox */}
          <div className="bg-slate-900/20 border border-slate-800/80 rounded-2xl p-5 text-center flex items-center gap-4 hover:border-purple-500/25 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-950/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-white tracking-wide">2. Isolated Compiles</h4>
              <p className="text-xs text-slate-400 mt-1">Strict resource containment bounds via Docker runs.</p>
            </div>
          </div>

          {/* Pillar 3: Fast Proxy */}
          <div className="bg-slate-900/20 border border-slate-800/80 rounded-2xl p-5 text-center flex items-center gap-4 hover:border-blue-500/25 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-950/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold text-white tracking-wide">3. Subdomain Proxies</h4>
              <p className="text-xs text-slate-400 mt-1">Dynamic route register mapped using Redis memory.</p>
            </div>
          </div>

        </div>

      </div>

      {/* Warning/Constraint indicator */}
      <div className="bg-red-950/25 border border-red-500/20 rounded-xl p-4 flex items-center gap-3 text-xs text-red-400 font-mono">
        <AlertOctagon className="w-5 h-5 shrink-0" />
        <span>CRITICAL CRITERIA: High performance compiles (limit 12 seconds) & strict execution boundaries.</span>
      </div>

    </div>
  );
};

export default ProblemStatement;
