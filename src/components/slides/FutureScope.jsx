import React from 'react';
import { Sparkles, Lock, ShieldAlert, BarChart, Zap, MessageSquare, Compass } from 'lucide-react';

const FutureScope = () => {
  const scopeItems = [
    {
      icon: Lock,
      title: "Private Git Integration",
      description: "Support private repository checkouts using user OAuth tokens and encrypted SSH keychains.",
      color: "border-cyan-500/20 text-cyan-400"
    },
    {
      icon: Sparkles,
      title: "AI README Generator",
      description: "Auto-scan code layouts using LLMs to compile comprehensive visual system setup documents.",
      color: "border-purple-500/20 text-purple-400"
    },
    {
      icon: ShieldAlert,
      title: "Auto Security Sweep",
      description: "Scan code modules for vulnerabilities and secret keys leaks prior to sandbox staging compile.",
      color: "border-red-500/20 text-red-400"
    },
    {
      icon: BarChart,
      title: "Lighthouse Performance Audits",
      description: "Analyze deployed sandboxes with Google Lighthouse criteria for speed and accessibility marks.",
      color: "border-amber-500/20 text-amber-400"
    },
    {
      icon: Zap,
      title: "One-Click Deploy Promote",
      description: "Promote staging preview sandboxes straight to production clouds (AWS, Vercel, Netlify).",
      color: "border-emerald-500/20 text-emerald-400"
    },
    {
      icon: MessageSquare,
      title: "AI Review Assistant Chat",
      description: "Embed chat sidebars on staging URLs to help reviewers query logic and debug console logs.",
      color: "border-blue-500/20 text-blue-400"
    }
  ];

  return (
    <div className="flex flex-col justify-between h-full space-y-6 px-16 py-12">
      {/* Header */}
      <div className="text-left space-y-2 border-b border-slate-800 pb-4">
        <h2 className="text-4xl font-bold tracking-tight text-white flex items-center gap-3">
          <Compass className="w-8 h-8 text-cyan-400" />
          Future Scope: <span className="text-cyan-400">Roadmap & Expansion</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Key target additions planned to evolve Preview Cloud into a comprehensive review workspace.
        </p>
      </div>

      {/* Grid Content (Spacious) */}
      <div className="grid grid-cols-3 gap-8 flex-grow my-auto min-h-[380px]">
        {scopeItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx}
              className={`bg-slate-900/50 border rounded-2xl p-6 flex flex-col justify-between hover:scale-[1.01] hover:bg-slate-900/60 transition-all duration-300 backdrop-blur-md group ${item.color}`}
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white tracking-wide">{item.title}</h3>
                <p className="text-xs text-slate-350 leading-relaxed">{item.description}</p>
              </div>
              
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest pt-2 border-t border-slate-850 mt-4">
                [ ROADMAP: STAGE {idx + 1} ]
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer line */}
      <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-4 text-center text-xs font-mono text-slate-400">
        AI PIPELINE: GOOGLE GEMINI MODELS / SECURITY SCOPE: SNYK & TRIVY CONTAINER SCANNER
      </div>
    </div>
  );
};

export default FutureScope;
