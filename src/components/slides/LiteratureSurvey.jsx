import React from 'react';
import { papers } from '../../data/papers';
import { BookOpen, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';

const LiteratureSurvey = ({ page = 1 }) => {
  const itemsPerPage = 4;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, papers.length);
  const currentPapers = papers.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col justify-between h-full space-y-6 px-16 py-12">
      {/* Header */}
      <div className="flex justify-between items-end border-b border-slate-800 pb-4">
        <div className="text-left space-y-1">
          <h2 className="text-4xl font-bold tracking-tight text-white flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-cyan-400" />
            Literature Survey: <span className="text-cyan-400">Research Matrix</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Reviewing foundational systems, container sandboxing, and web IDE designs (Papers {startIndex + 1} - {endIndex} of {papers.length}).
          </p>
        </div>
        <div className="text-sm font-mono bg-cyan-950/40 border border-cyan-500/30 px-4 py-2 rounded-xl text-cyan-400">
          Page {page} / 4
        </div>
      </div>

      {/* Spacious Table Container */}
      <div className="flex-grow overflow-x-auto my-auto min-h-[350px]">
        <table className="w-full border-collapse text-left text-sm text-slate-300">
          <thead>
            <tr className="border-b border-slate-700 bg-slate-900/60 font-mono text-cyan-400 uppercase tracking-widest text-xs">
              <th className="py-4 px-4 w-[22%]">Paper & Authors</th>
              <th className="py-4 px-4 w-[28%]">Methodology</th>
              <th className="py-4 px-4 w-[18%]">Advantages</th>
              <th className="py-4 px-4 w-[17%]">Limitations</th>
              <th className="py-4 px-4 w-[15%]">Research Gap</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/40">
            {currentPapers.map((paper) => (
              <tr key={paper.id} className="hover:bg-slate-900/20 transition-colors duration-250">
                {/* Title and Authors */}
                <td className="py-4 px-4 align-top border-r border-slate-800/30">
                  <div className="font-bold text-white text-sm leading-snug mb-1">{paper.title}</div>
                  <div className="text-xs text-slate-450 italic mb-2">{paper.authors}</div>
                  <span className="inline-block bg-slate-800 border border-slate-700 text-slate-300 text-[10px] px-2 py-0.5 rounded font-mono">
                    Year: {paper.year}
                  </span>
                </td>
                
                {/* Methodology */}
                <td className="py-4 px-4 align-top border-r border-slate-800/30 leading-relaxed text-slate-200">
                  {paper.methodology}
                </td>

                {/* Advantages */}
                <td className="py-4 px-4 align-top border-r border-slate-800/30 text-emerald-400">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{paper.advantages}</span>
                  </div>
                </td>

                {/* Limitations */}
                <td className="py-4 px-4 align-top border-r border-slate-800/30 text-amber-400">
                  <div className="flex items-start gap-1.5">
                    <AlertTriangle className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{paper.limitations}</span>
                  </div>
                </td>

                {/* Research Gap */}
                <td className="py-4 px-4 align-top text-purple-405">
                  <div className="flex items-start gap-1.5 text-purple-400">
                    <Lightbulb className="w-4.5 h-4.5 text-purple-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-semibold">{paper.gap}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pages indicator bullet dots */}
      <div className="flex justify-center items-center space-x-3 pt-3 border-t border-slate-900">
        {[1, 2, 3, 4].map((p) => (
          <span
            key={p}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              page === p ? 'bg-cyan-400 w-6' : 'bg-slate-800'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LiteratureSurvey;
