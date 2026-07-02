import React from 'react';
import { Mail, Users, Award, PlayCircle } from 'lucide-react';
import Github from '../GithubIcon';

const ThankYouSlide = () => {
  return (
    <div className="flex flex-col justify-between h-full px-16 py-12 text-center relative overflow-hidden">
      
      {/* Decorative top ambient bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-pulse"></div>

      {/* Central Thank You Title */}
      <div className="my-auto space-y-6">
        <h1 className="text-8xl font-black tracking-tight text-white select-none">
          Thank <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">You</span>
        </h1>
        <p className="text-3xl font-light tracking-wide text-cyan-400 font-mono">
          Questions & Feedback?
        </p>

        {/* Separator line */}
        <div className="w-24 h-1 bg-slate-800 rounded-full mx-auto my-8"></div>

        {/* Project Tagline Repeat */}
        <p className="text-slate-450 text-base max-w-2xl mx-auto leading-relaxed">
          Preview Cloud resolves manual local setups by provisioning instant, zero-configuration sandbox staging URLs straight from GitHub.
        </p>
      </div>

      {/* Contact & Team Credits footer */}
      <div className="space-y-6 max-w-2xl mx-auto w-full pt-8">
        <div className="grid grid-cols-2 gap-6 text-sm font-mono text-slate-400 bg-slate-900/40 border border-slate-850 p-6 rounded-2xl backdrop-blur-md">
          
          <div className="text-left space-y-2 border-r border-slate-800/80 pr-4">
            <span className="text-cyan-400 font-bold flex items-center gap-2 text-sm">
              <Users className="w-4 h-4" /> Project Presenters
            </span>
            <ul className="space-y-1 text-slate-300">
              <li>Nikhil Bendre</li>
              <li>Riya Jadhav</li>
              <li>Aditya Shirsath</li>
              <li>Ankur Mishra</li>
            </ul>
          </div>

          <div className="text-left space-y-2 pl-4 flex flex-col justify-between">
            <div>
              <span className="text-purple-400 font-bold flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" /> Contact Channels
              </span>
              <p className="text-slate-300 mt-2">support@previewcloud.dev</p>
            </div>
            <div className="text-xs text-slate-500 border-t border-slate-800/80 pt-2 mt-2 flex items-center gap-2">
              <Github className="w-4 h-4 text-slate-500" />
              <span>github.com/preview-cloud</span>
            </div>
          </div>

        </div>

        <div className="text-xs text-slate-600 font-mono tracking-widest uppercase">
          CSE (AI & ML) • VIVA INSTITUTE OF TECHNOLOGY EVALUATION REVIEW-1
        </div>
      </div>

    </div>
  );
};

export default ThankYouSlide;
