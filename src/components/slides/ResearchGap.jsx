import React from 'react';
import { Search, TrendingUp, AlertTriangle } from 'lucide-react';

const ResearchGap = () => {
  const comparisonData = [
    {
      name: "GitHub Codespaces",
      startup: "Slow (> 60s)",
      config: "Complex (devcontainer.json)",
      cost: "High (Hourly billing)",
      weight: "Heavy IDE (VS Code)"
    },
    {
      name: "Gitpod",
      startup: "Slow (> 45s)",
      config: "Complex (.gitpod.yml)",
      cost: "Medium subscription",
      weight: "Full IDE workspace"
    },
    {
      name: "StackBlitz",
      startup: "Fast (< 15s)",
      config: "Medium (Limited Node support)",
      cost: "High for private repos",
      weight: "In-Browser WebContainers"
    },
    {
      name: "CodeSandbox / Replit",
      startup: "Slow (> 40s)",
      config: "Semi-Auto (Heavy VM setups)",
      cost: "Subscription-focused",
      weight: "Heavy IDE interface"
    },
    {
      name: "Preview Cloud (Ours)",
      startup: "Instant (< 12s)",
      config: "Zero Config (Auto-detect)",
      cost: "Minimal / Ephemeral",
      weight: "No IDE (Just Staging URL)",
      highlight: true
    }
  ];

  return (
    <div className="flex flex-col justify-between h-full space-y-6 px-16 py-12">
      {/* Header */}
      <div className="text-left space-y-2 border-b border-slate-800 pb-4">
        <h2 className="text-4xl font-bold tracking-tight text-white flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-cyan-400" />
          Research Gap: <span className="text-cyan-400">Competitor Matrix Analysis</span>
        </h2>
        <p className="text-slate-400 text-lg">
          Comparing cloud development platforms and identifying developer setup bottlenecks.
        </p>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-12 gap-8 items-stretch flex-grow my-auto">
        
        {/* Table Column */}
        <div className="col-span-8 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col justify-center backdrop-blur-md">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-800 font-mono text-xs text-cyan-400 uppercase tracking-wider">
                  <th className="pb-4 px-3">Platform</th>
                  <th className="pb-4 px-3">Staging Speed</th>
                  <th className="pb-4 px-3">Config Overhead</th>
                  <th className="pb-4 px-3">Visual Weight</th>
                  <th className="pb-4 px-3">Resource Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/40">
                {comparisonData.map((item, idx) => (
                  <tr 
                    key={idx} 
                    className={`transition-all duration-200 ${
                      item.highlight 
                        ? 'bg-cyan-950/20 text-cyan-300 font-bold border-y border-cyan-500/30' 
                        : 'text-slate-350 hover:bg-slate-800/20'
                    }`}
                  >
                    <td className="py-4.5 px-3 font-semibold text-sm">
                      {item.highlight ? (
                        <span className="flex items-center gap-1.5 text-white">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                          {item.name}
                        </span>
                      ) : item.name}
                    </td>
                    <td className="py-4.5 px-3 font-mono text-xs">
                      <span className={item.highlight ? 'text-cyan-400' : 'text-slate-400'}>
                        {item.startup}
                      </span>
                    </td>
                    <td className="py-4.5 px-3 text-xs">{item.config}</td>
                    <td className="py-4.5 px-3 text-xs">{item.weight}</td>
                    <td className="py-4.5 px-3 font-semibold text-xs">
                      <span className={item.highlight ? 'text-emerald-400' : 'text-slate-300'}>
                        {item.cost}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Synthesis Sidebar */}
        <div className="col-span-4 flex flex-col justify-between gap-6">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex-grow flex flex-col justify-center space-y-5">
            <div className="flex items-center gap-2.5 text-cyan-400 font-semibold text-sm font-mono">
              <Search className="w-5 h-5" />
              <span>Core Gaps Identified</span>
            </div>
            
            <div className="space-y-4 text-xs text-slate-300 text-left leading-relaxed">
              <div className="flex gap-3">
                <AlertTriangle className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" />
                <p>
                  <strong>Heavy IDE Overhead:</strong> Loading full browser editors wastes significant host memory.
                </p>
              </div>
              <div className="flex gap-3">
                <AlertTriangle className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                <p>
                  <strong>Startup Time Delay:</strong> Standard VM launch timings stall pipeline agility.
                </p>
              </div>
              <div className="flex gap-3">
                <AlertTriangle className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
                <p>
                  <strong>Manual Config Burden:</strong> Requiring custom setup files creates developer friction.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-4 text-center text-xs font-mono">
            <span className="text-slate-400">Preview Cloud solves these by offering a </span>
            <span className="text-cyan-400 font-bold">Zero-Config, Ephemeral Preview Workspace</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ResearchGap;
