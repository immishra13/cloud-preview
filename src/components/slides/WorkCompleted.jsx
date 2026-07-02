import React from 'react';
import { CheckCircle2, Clock, ShieldCheck, Terminal, Award, HelpCircle } from 'lucide-react';

const WorkCompleted = ({ page = 1 }) => {
  const milestones = [
    {
      id: 1,
      title: "Project Idea Finalized",
      description: "Explored deployment systems friction, held brainstorming rounds, and locked down the core value proposition of Preview Cloud: Git-URL to live staging preview.",
      progress: 100,
      slide: 1,
      category: "Idea & Planning",
      logs: ["Conducted brainstorming (July 2, 2026)", "Assessed competitor platforms limitations", "Approved project proposal with CSE faculty"]
    },
    {
      id: 2,
      title: "Architecture Design Completed",
      description: "Drafted decoupled microservice architecture: Web client -> API server -> Repo Cloner -> Analyzer -> Docker Host -> Nginx Dynamic router.",
      progress: 100,
      slide: 1,
      category: "Architecture",
      logs: ["Mapped REST APIs for sandbox triggers", "Designed internal bridge network routes", "Finalized database caching schema in Redis"]
    },
    {
      id: 3,
      title: "Technology Stack Selected",
      description: "Locked down high-efficiency tools: React/CSS for frontend; Node/Express for API; Docker/Alpine for sandbox; PostgreSQL for metadata; Redis for dynamic routing table.",
      progress: 100,
      slide: 2,
      category: "Stack Setup",
      logs: ["Benchmarked Alpine vs Debian startup time", "Configured Postgres connection pooler", "Tested dynamic port bindings in NodeJS"]
    },
    {
      id: 4,
      title: "Initial UI Design Drafting",
      description: "Created wireframes and mockups for client-facing dashboard, preview frames, logs streamer, and domain settings.",
      progress: 100,
      slide: 2,
      category: "Design & UX",
      logs: ["Designed high-fidelity layout wireframes", "Drafted custom Terminal logs viewer layout", "Optimized mobile view layout frames"]
    },
    {
      id: 5,
      title: "GitHub API Sync Integration",
      description: "Established OAuth protocols and Webhook synchronization listeners to pull private/public codebases dynamically.",
      progress: 100,
      slide: 3,
      category: "Git Integration",
      logs: ["Integrated git clone operations in Express", "Configured webhook push event listeners", "Secured GitHub OAuth secret token stores"]
    },
    {
      id: 6,
      title: "System Flow Framework",
      description: "Programmed directory scanner to identify package dependencies (npm/yarn/pnpm), package scripts, and framework configurations.",
      progress: 100,
      slide: 3,
      category: "Static Analyzer",
      logs: ["Parsed package.json dependencies list", "Detected framework tags (Vite/React/Next)", "Deduce run scripts automatically"]
    },
    {
      id: 7,
      title: "Docker Workflow Research",
      description: "Engineered secure build environments. Configured non-root Alpine users, read-only root filesystems, and strict memory/CPU limits via cgroups.",
      progress: 100,
      slide: 4,
      category: "Sandbox Security",
      logs: ["Restricted memory caps to 256MB/container", "Set read-only host mounts rules", "Tested seccomp profile restrictions"]
    },
    {
      id: 8,
      title: "Prototype Compile Pipeline",
      description: "Designing build stage environments. Setting up dynamic Alpine containers and Nginx proxy routing to map staging subdomains automatically.",
      progress: 0,
      slide: 5,
      category: "Prototype V1",
      logs: ["Docker workspace configuration initiated", "Proxy routing table schema defined", "Staging integration tests pending"]
    }
  ];

  // Group milestones to pages:
  let currentMilestones = [];
  if (page === 1) currentMilestones = [milestones[0], milestones[1]];
  else if (page === 2) currentMilestones = [milestones[2], milestones[3]];
  else if (page === 3) currentMilestones = [milestones[4], milestones[5]];
  else if (page === 4) currentMilestones = [milestones[6]];
  else if (page === 5) currentMilestones = [milestones[7]];

  return (
    <div className="flex flex-col justify-between h-full space-y-6 px-16 py-12">
      {/* Header */}
      <div className="flex justify-between items-end border-b border-slate-800 pb-4">
        <div className="text-left space-y-1">
          <h2 className="text-4xl font-bold tracking-tight text-white flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-emerald-400" />
            Work Completed: <span className="text-emerald-400">Milestones Verified</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Reviewing engineering progress and completed pipeline checkpoints.
          </p>
        </div>
        <div className="text-sm font-mono bg-emerald-950/40 border border-emerald-500/30 px-4 py-2 rounded-xl text-emerald-400">
          Checkpoint {page} / 5
        </div>
      </div>

      {/* Progress Cards Split Layout */}
      <div className={`grid grid-cols-1 ${currentMilestones.length > 1 ? 'md:grid-cols-2 gap-8' : 'md:grid-cols-1 max-w-3xl mx-auto'} flex-grow items-center my-auto min-h-[380px]`}>
        {currentMilestones.map((milestone) => (
          <div 
            key={milestone.id}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-left flex flex-col justify-between hover:border-emerald-500/20 transition-all duration-300 backdrop-blur-md relative overflow-hidden h-full group"
          >
            {/* Top row Info */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono bg-slate-800 border border-slate-700 text-slate-350 px-3 py-1 rounded-full uppercase tracking-wider">
                  {milestone.category}
                </span>
                
                {/* Circular Progress Ring */}
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="28" cy="28" r="24" stroke="#1e293b" strokeWidth="4" fill="transparent" />
                    <circle 
                      cx="28" cy="28" r="24" 
                      stroke="#10b981" strokeWidth="4" fill="transparent" 
                      strokeDasharray="150.7"
                      strokeDashoffset={150.7 - (150.7 * milestone.progress) / 100}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <span className="absolute text-xs font-mono font-bold text-white">
                    {milestone.progress}%
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-emerald-450 transition-colors tracking-wide">
                {milestone.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {milestone.description}
              </p>
            </div>

            {/* Build Verification Logs Terminal */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 font-mono text-[11px] space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <Terminal className="w-4 h-4" />
                <span>Verification Logs</span>
              </div>
              <ul className="space-y-1.5 text-slate-400">
                {milestone.logs.map((log, idx) => (
                  <li key={idx} className="truncate flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{log}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

      {/* Pages Bullet tracker */}
      <div className="flex justify-center items-center space-x-3 pt-3 border-t border-slate-900">
        {[1, 2, 3, 4, 5].map((p) => (
          <span
            key={p}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              page === p ? 'bg-emerald-400 w-6' : 'bg-slate-800'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkCompleted;
