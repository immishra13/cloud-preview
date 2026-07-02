import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Play, Pause, RotateCcw, 
  Maximize2, Minimize2, FileText, Download, Printer, 
  Grid, Monitor, Layout 
} from 'lucide-react';

const PresentationControls = ({ 
  currentSlide, 
  totalSlides, 
  onNext, 
  onPrev, 
  onJump, 
  slideTitles,
  isFullscreen, 
  onToggleFullscreen,
  viewMode,
  onChangeViewMode,
  onPrint,
  onDownloadPPT
}) => {
  // Timer state
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (timerActive) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  const formatTime = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResetTimer = (e) => {
    e.stopPropagation();
    setTimerSeconds(0);
  };

  return (
    <div className="w-full bg-[#0b1329]/80 border-t border-slate-800/80 backdrop-blur-md px-4 py-2.5 z-40 relative flex flex-wrap items-center justify-between gap-3 text-slate-300 font-mono text-xs">
      
      {/* Left Pane: Timer and Mode Toggles */}
      <div className="flex items-center gap-4">
        {/* Timer UI */}
        <div className="flex items-center gap-2.5 bg-slate-950/60 border border-slate-800 px-3 py-1.5 rounded-lg select-none">
          <ClockIcon className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-bold text-white text-[13px] font-mono">{formatTime(timerSeconds)}</span>
          <button 
            onClick={() => setTimerActive(!timerActive)} 
            className="hover:text-white text-slate-400 p-0.5"
            title={timerActive ? "Pause Timer" : "Start Timer"}
          >
            {timerActive ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
          <button 
            onClick={handleResetTimer} 
            className="hover:text-white text-slate-400 p-0.5"
            title="Reset Timer"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center bg-slate-950/60 border border-slate-800 p-0.5 rounded-lg">
          <button
            onClick={() => onChangeViewMode('keynote')}
            className={`px-2.5 py-1 rounded-md flex items-center gap-1 transition-colors ${
              viewMode === 'keynote' ? 'bg-cyan-500 text-black font-bold' : 'hover:text-white text-slate-400'
            }`}
            title="Keynote Fullscreen Mode"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Keynote</span>
          </button>
          <button
            onClick={() => onChangeViewMode('dashboard')}
            className={`px-2.5 py-1 rounded-md flex items-center gap-1 transition-colors ${
              viewMode === 'dashboard' ? 'bg-cyan-500 text-black font-bold' : 'hover:text-white text-slate-400'
            }`}
            title="Presenter Dashboard Mode"
          >
            <Layout className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Dashboard</span>
          </button>
        </div>
      </div>

      {/* Middle Pane: Navigation Controls */}
      <div className="flex items-center gap-3">
        <button 
          onClick={onPrev}
          disabled={currentSlide === 1}
          className="bg-slate-900 border border-slate-800 p-1.5 rounded-lg hover:text-white hover:border-slate-700 disabled:opacity-30 disabled:hover:border-slate-800 transition-colors"
          title="Previous Slide (Left Arrow / Scroll Up)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Slide Selector dropdown */}
        <div className="flex items-center gap-2 bg-slate-950/60 border border-slate-800 px-3 py-1 rounded-lg">
          <span className="font-bold text-white text-[13px]">{currentSlide}</span>
          <span className="text-slate-600">/</span>
          <select 
            value={currentSlide}
            onChange={(e) => onJump(Number(e.target.value))}
            className="bg-transparent text-slate-300 font-mono text-xs border-none outline-none cursor-pointer pr-1 hover:text-white select-none max-w-[130px] sm:max-w-[200px]"
            title="Jump to Specific Slide"
          >
            {slideTitles.map((title, idx) => (
              <option key={idx} value={idx + 1} className="bg-[#0b1329] text-slate-300">
                Slide {idx + 1}: {title}
              </option>
            ))}
          </select>
          <span className="text-slate-500 font-bold hidden md:inline text-[11px] bg-slate-900 px-1.5 py-0.5 rounded border border-slate-850">
            TOTAL: {totalSlides}
          </span>
        </div>

        <button 
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          className="bg-slate-900 border border-slate-800 p-1.5 rounded-lg hover:text-white hover:border-slate-700 disabled:opacity-30 disabled:hover:border-slate-800 transition-colors"
          title="Next Slide (Right Arrow / Spacebar / Scroll Down)"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Right Pane: Extra Tools (Fullscreen, Export, Print) */}
      <div className="flex items-center gap-2.5">
        
        {/* Export / Print Panel */}
        <button 
          onClick={onPrint}
          className="bg-slate-900 border border-slate-800 p-1.5 rounded-lg hover:text-white hover:border-slate-700 transition-colors"
          title="Print or Save as PDF (Ctrl + P)"
        >
          <Printer className="w-4 h-4" />
        </button>

        <button 
          onClick={onDownloadPPT}
          className="bg-slate-900 border border-slate-800 p-1.5 rounded-lg hover:text-white hover:border-slate-700 transition-colors flex items-center gap-1.5"
          title="Download PPT Structure"
        >
          <Download className="w-4 h-4" />
          <span className="hidden lg:inline text-[10px]">Download PPT</span>
        </button>

        {/* Fullscreen Button */}
        <button 
          onClick={onToggleFullscreen}
          className="bg-slate-900 border border-slate-800 p-1.5 rounded-lg hover:text-white hover:border-slate-700 transition-colors"
          title={isFullscreen ? "Exit Fullscreen (Esc)" : "Enter Fullscreen Mode"}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>

    </div>
  );
};

// Clock Helper Icon SVG
const ClockIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default PresentationControls;
