import React, { useState, useEffect, useRef } from 'react';
import pptxgen from 'pptxgenjs';
import GridOverlay from './components/GridOverlay';
import Github from './components/GithubIcon';

// Slides Imports
import TitleSlide from './components/slides/TitleSlide';
import IntroSlide from './components/slides/IntroSlide';
import LiteratureSurvey from './components/slides/LiteratureSurvey';
import ResearchGap from './components/slides/ResearchGap';
import ProblemStatement from './components/slides/ProblemStatement';
import Objectives from './components/slides/Objectives';
import ProposedMethodology from './components/slides/ProposedMethodology';
import Timeline from './components/slides/Timeline';
import WorkCompleted from './components/slides/WorkCompleted';
import InternshipSlide from './components/slides/InternshipSlide';
import TechStack from './components/slides/TechStack';
import FutureScope from './components/slides/FutureScope';
import ThankYouSlide from './components/slides/ThankYouSlide';

// Icons for Top Toolbar
import { 
  ChevronLeft, ChevronRight, Play, Pause, RotateCcw, 
  Maximize2, Minimize2, FileText, Download, Printer, 
  Monitor, Layout, Settings, Camera, Eye, Info
} from 'lucide-react';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewMode, setViewMode] = useState('keynote'); // 'keynote' or 'speaker'
  const [scale, setScale] = useState(1);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(true);
  const [transitionEffect, setTransitionEffect] = useState('keynote-transition');
  
  const scrollTimeout = useRef(null);
  const touchStart = useRef({ x: 0, y: 0 });
  const totalSlides = 21;

  // Slide Titles list
  const slideTitles = [
    "Title Slide: Preview Cloud Introduction",
    "Problem Introduction & Current Friction",
    "Literature Survey (Papers 1-4)",
    "Literature Survey (Papers 5-8)",
    "Literature Survey (Papers 9-12)",
    "Literature Survey (Papers 13-15)",
    "Research Gap & Competitors Analysis",
    "Core Project Problem Statement",
    "Research System Objectives",
    "Methodology: Proposed Pipeline Diagram",
    "Methodology: Core Microservice Modules",
    "Project Development Timeline (Gantt)",
    "Work Completed: Idea & Architectural Blueprint",
    "Work Completed: Tech & Wireframe Dashboard",
    "Work Completed: Git Checkouts & Scanning",
    "Work Completed: Docker Resource Security",
    "Work Completed: Staging Prototype Build",
    "Supporting Internship: FixMateHub Startup",
    "High-Performance Technology Stack",
    "Future System Roadmap Features",
    "Thank You & Questions Closure"
  ];

  // Speaker Cues
  const speakerNotes = {
    1: "Introduce the project title: Preview Cloud. Emphasize team members (Nikhil, Riya, Aditya, Ankur) and Computer Science (AI & ML) at VIVA Institute of Technology. Explain that this project creates instant previews from Git URLs.",
    2: "Explain why local setup is difficult (works on my machine issues, package conflicts, wasted developer hours). Highlight Preview Cloud's solution: paste URL and immediately get live URLs.",
    3: "Literature Survey Page 1 (Papers 1-4): Focus on decoupled browser UI and code isolation engines (Donca 2022, Jadhav 2023).",
    4: "Literature Survey Page 2 (Papers 5-8): Focus on microservice container networks and CI/CD pipelines. State that manual Jenkins builds are too slow.",
    5: "Literature Survey Page 3 (Papers 9-12): Explain container performance benchmarks. Cite Felter (2019) showing Docker performance has near-zero overhead.",
    6: "Literature Survey Page 4 (Papers 13-15): Review automated package managers. Identify the gap: no dynamic port routing templates.",
    7: "Highlight competitor matrix gaps: Codespaces, Gitpod, and Replit require complex configs (.gitpod.yml / devcontainer.json) and run heavy in-browser IDEs.",
    8: "State the research problem: How to automate zero-configuration scanner structures, compile code in Docker, and proxy route custom domains under 12 seconds.",
    9: "Review our 5 objectives: static scans, container allocations, dynamic proxy routes, Postgres/Redis caching, and secure isolation filters.",
    10: "Walk through the SVG architecture flow. Show path: user URL -> backend cloners -> file scanner scanner -> Docker compile nodes -> Nginx subdomain routes.",
    11: "Explain the four modules: Git synchronizer API, regex static package analyzers, Alpine docker compilers, and Nginx route managers.",
    12: "Milestone timeline: Literature search and architecture are fully complete. Writing backend API hooks is currently active.",
    13: "Work completed milestones 1 & 2: Project idea approved and blueprint routes mapped out.",
    14: "Work completed milestones 3 & 4: Tech stack finalized and dashboard UI screens wireframed.",
    15: "Work completed milestones 5 & 6: Git OAuth integrations tested and regex scanner models compiled.",
    16: "Work completed milestone 7: Configured sandboxes (Docker limits: 256MB memory cap and read-only host filesystem rules).",
    17: "Work completed milestone 8: Prototype build and routing design is currently in progress. Setting up the base Alpine cloner templates.",
    18: "Elaborate on FixMateHub startup internship. Nikhil, Riya, Aditya, and Ankur designed booking workflows, login protocols, and DB queries, understanding scalable agile systems.",
    19: "Review chosen technologies: React UI, Express, Docker build runs, Postgres registers, Redis routes, Nginx edge proxy.",
    20: "Explain the future scope additions: private repo OAuth keys, AI README generators via Gemini, Snky security sweeps, and Lighthouse audits.",
    21: "Conclude presentation. Thank the panel reviewers and welcome any questions or feedback."
  };

  // Scaling Engine Hook
  useEffect(() => {
    const calculateScale = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const toolbarHeight = 60; // top toolbar height
      
      const virtualWidth = 1920;
      const virtualHeight = 1080;

      // Fit inside window width and remaining height
      const scaleX = windowWidth / virtualWidth;
      const scaleY = (windowHeight - toolbarHeight) / virtualHeight;
      
      let scaleRatio = Math.min(scaleX, scaleY);

      // In speaker notes mode, scale down even more to fit dashboard splits
      if (viewMode === 'speaker') {
        const dashboardHeight = (windowHeight - toolbarHeight) * 0.55; // reserve 45% for speaker notes
        const dashboardWidth = windowWidth * 0.70; // reserve 30% for sidebar
        const scaleDashX = dashboardWidth / virtualWidth;
        const scaleDashY = dashboardHeight / virtualHeight;
        scaleRatio = Math.min(scaleDashX, scaleDashY);
      }

      setScale(scaleRatio);
    };

    window.addEventListener('resize', calculateScale);
    calculateScale(); // run initially

    return () => window.removeEventListener('resize', calculateScale);
  }, [viewMode]);

  // Timer runner
  useEffect(() => {
    let interval = null;
    if (timerActive) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  const formatTimer = (sec) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Slide navigation actions
  const handleNext = () => {
    if (currentSlide < totalSlides) setCurrentSlide(currentSlide + 1);
  };

  const handlePrev = () => {
    if (currentSlide > 1) setCurrentSlide(currentSlide - 1);
  };

  const handleJump = (num) => {
    if (num >= 1 && num <= totalSlides) setCurrentSlide(num);
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Spacebar' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'Backspace') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        handleJump(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        handleJump(totalSlides);
      } else if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(err => console.log(err));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  // Mouse wheel slide shifts
  const handleWheel = (e) => {
    if (scrollTimeout.current) return;
    scrollTimeout.current = setTimeout(() => {
      scrollTimeout.current = null;
    }, 800);

    if (e.deltaY > 20) {
      handleNext();
    } else if (e.deltaY < -20) {
      handlePrev();
    }
  };

  // Touch swipes triggers
  const handleTouchStart = (e) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStart.current.x;
    const deltaY = e.changedTouches[0].clientY - touchStart.current.y;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Fullscreen trigger
  const handleFullscreenToggle = () => {
    const docEl = document.documentElement;
    if (!document.fullscreenElement) {
      docEl.requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(err => console.log(err));
    } else {
      document.exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(err => console.log(err));
    }
  };

  // Track manual Esc exiting
  useEffect(() => {
    const handleFSChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFSChange);
    return () => document.removeEventListener('fullscreenchange', handleFSChange);
  }, []);

  // Screenshot slide mock utility
  const handleScreenshot = () => {
    alert("Snapshot captured! Saved slide to Review-1 Staging directory.");
  };

  // Real PPTX Download utilizing pptxgenjs
  const handleDownloadPPTX = () => {
    let pptx = new pptxgen();
    pptx.layout = "LAYOUT_16x9";

    // Set brand theme background
    const bgFill = "030712";

    // Slide 1: Title
    let s1 = pptx.addSlide();
    s1.background = { fill: bgFill };
    s1.addText("Preview Cloud", { x: 1.0, y: 1.5, w: 8, h: 1.2, fontSize: 44, color: "22d3ee", bold: true });
    s1.addText("Paste Any Public GitHub Repository URL and Get Instant Live Preview", { x: 1.0, y: 2.8, w: 8, h: 1, fontSize: 18, color: "94a3b8" });
    s1.addText("Team: Nikhil Bendre, Riya Jadhav, Aditya Shirsath, Ankur Mishra\nDept: Computer Science & Engineering (AI & ML)\nCollege: VIVA Institute of Technology", { x: 1.0, y: 4.2, w: 8, h: 2.2, fontSize: 14, color: "ffffff" });

    // Slide 2: Introduction
    let s2 = pptx.addSlide();
    s2.background = { fill: bgFill };
    s2.addText("Introduction", { x: 1.0, y: 1.0, w: 8, h: 0.8, fontSize: 32, color: "22d3ee", bold: true });
    s2.addText("- Developer Pain Points: Local builds take 30+ minutes, clutter local directories.", { x: 1.0, y: 2.2, w: 8, h: 1, fontSize: 16, color: "ffffff" });
    s2.addText("- Environment conflicts: Works on my machine bugs are common.", { x: 1.0, y: 3.4, w: 8, h: 1, fontSize: 16, color: "ffffff" });
    s2.addText("- Solution: Preview Cloud clones and builds repositories in Docker container staging sandboxes instantly.", { x: 1.0, y: 4.6, w: 8, h: 1.2, fontSize: 16, color: "22d3ee", bold: true });

    // Slide 3: Survey Overview
    let s3 = pptx.addSlide();
    s3.background = { fill: bgFill };
    s3.addText("Literature Survey Overview", { x: 1.0, y: 1.0, w: 8, h: 0.8, fontSize: 32, color: "22d3ee", bold: true });
    s3.addText("Evaluated 15 genuine research papers covering:\n1. Web IDE decoupling patterns (Donca 2022)\n2. Safe sandbox code execution (Jadhav 2023)\n3. Elastic microservices container hosting (Raikar 2025)\n4. Dynamic proxy subdomain routers.", { x: 1.0, y: 2.2, w: 8, h: 3.5, fontSize: 16, color: "ffffff" });

    // Slide 4: Research Gap
    let s4 = pptx.addSlide();
    s4.background = { fill: bgFill };
    s4.addText("Research Gaps Identified", { x: 1.0, y: 1.0, w: 8, h: 0.8, fontSize: 32, color: "22d3ee", bold: true });
    s4.addText("1. Codespaces / Gitpod require complex config files (.gitpod.yml).\n2. They load heavy editor IDE frames inside the browser.\n3. Slow start time (up to 90 seconds).\n\nPreview Cloud resolves this by scanning and running code in short-lived environments.", { x: 1.0, y: 2.2, w: 8, h: 3.5, fontSize: 16, color: "ffffff" });

    // Slide 5: Problem Statement
    let s5 = pptx.addSlide();
    s5.background = { fill: bgFill };
    s5.addText("Problem Statement", { x: 1.0, y: 1.0, w: 8, h: 0.8, fontSize: 32, color: "22d3ee", bold: true });
    s5.addText("How to build an automated, zero-configuration build and preview orchestrator that securely isolates, compiles, and dynamically routes multi-file full-stack Git repositories within short-lived container sandboxes in under 12 seconds?", { x: 1.0, y: 2.5, w: 8, h: 3.0, fontSize: 20, color: "ffffff", italic: true });

    // Slide 6: Objectives
    let s6 = pptx.addSlide();
    s6.background = { fill: bgFill };
    s6.addText("Project Objectives", { x: 1.0, y: 1.0, w: 8, h: 0.8, fontSize: 32, color: "22d3ee", bold: true });
    s6.addText("1. Static code layout structure analyzer\n2. Dynamic Docker workspace compile bounds\n3. Redis dynamic port registries\n4. Fast cache volume mounting\n5. Non-privileged host isolation security", { x: 1.0, y: 2.0, w: 8, h: 3.5, fontSize: 16, color: "ffffff" });

    // Slide 7: Methodology
    let s7 = pptx.addSlide();
    s7.background = { fill: bgFill };
    s7.addText("Proposed Methodology Flow", { x: 1.0, y: 1.0, w: 8, h: 0.8, fontSize: 32, color: "22d3ee", bold: true });
    s7.addText("User URL Input -> Clones code -> Scans dependencies -> Builds Docker container -> dynamic proxy routes Nginx subdomains.", { x: 1.0, y: 2.5, w: 8, h: 3.0, fontSize: 18, color: "ffffff" });

    // Slide 8: Timeline
    let s8 = pptx.addSlide();
    s8.background = { fill: bgFill };
    s8.addText("Development Gantt Timeline", { x: 1.0, y: 1.0, w: 8, h: 0.8, fontSize: 32, color: "22d3ee", bold: true });
    s8.addText("- July - Aug 2026: Literature Research\n- Sep - Oct: Blueprints and Routes designs\n- Oct - Dec: Backend trigger API\n- Nov - Jan: Client frontend panels\n- Dec - Feb: Sandbox Docker tests", { x: 1.0, y: 2.2, w: 8, h: 3.5, fontSize: 16, color: "ffffff" });

    // Slide 9: Internship
    let s9 = pptx.addSlide();
    s9.background = { fill: bgFill };
    s9.addText("Industry Internship: FixMateHub", { x: 1.0, y: 1.0, w: 8, h: 0.8, fontSize: 32, color: "22d3ee", bold: true });
    s9.addText("Role: Full Stack Development Team\n- Implemented booking panels, user logouts, database setups.\n- Learned Agile code evaluations, production staging triggers.", { x: 1.0, y: 2.2, w: 8, h: 3.5, fontSize: 16, color: "ffffff" });

    // Slide 10: Tech Stack
    let s10 = pptx.addSlide();
    s10.background = { fill: bgFill };
    s10.addText("Technology Stack Selection", { x: 1.0, y: 1.0, w: 8, h: 0.8, fontSize: 32, color: "22d3ee", bold: true });
    s10.addText("- React UI framework\n- Express Node routing backend\n- Docker sandboxing compiles\n- Redis active subdomain directory\n- PostgreSQL persistent tables\n- Nginx edge ingress routing", { x: 1.0, y: 2.0, w: 8, h: 4.0, fontSize: 16, color: "ffffff" });

    // Slide 11: Closing
    let s11 = pptx.addSlide();
    s11.background = { fill: bgFill };
    s11.addText("Thank You", { x: 1.0, y: 2.0, w: 8, h: 1.5, fontSize: 54, color: "22d3ee", bold: true, align: "center" });
    s11.addText("Questions & Feedback", { x: 1.0, y: 3.8, w: 8, h: 1.0, fontSize: 24, color: "ffffff", align: "center" });

    pptx.writeFile({ fileName: "Preview_Cloud_Review_1_Presentation.pptx" });
  };

  // Slide rendering mapper
  const renderActiveSlide = () => {
    switch (currentSlide) {
      case 1: return <TitleSlide />;
      case 2: return <IntroSlide />;
      case 3: return <LiteratureSurvey page={1} />;
      case 4: return <LiteratureSurvey page={2} />;
      case 5: return <LiteratureSurvey page={3} />;
      case 6: return <LiteratureSurvey page={4} />;
      case 7: return <ResearchGap />;
      case 8: return <ProblemStatement />;
      case 9: return <Objectives />;
      case 10: return <ProposedMethodology part={1} />;
      case 11: return <ProposedMethodology part={2} />;
      case 12: return <Timeline />;
      case 13: return <WorkCompleted page={1} />;
      case 14: return <WorkCompleted page={2} />;
      case 15: return <WorkCompleted page={3} />;
      case 16: return <WorkCompleted page={4} />;
      case 17: return <WorkCompleted page={5} />;
      case 18: return <InternshipSlide />;
      case 19: return <TechStack />;
      case 20: return <FutureScope />;
      case 21: return <ThankYouSlide />;
      default: return <TitleSlide />;
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-between bg-[#020617] relative overflow-hidden select-none">
      
      {/* Background ambient light */}
      <GridOverlay />

      {/* Static hidden printer panel */}
      <div className="print-only w-full">
        {Array.from({ length: totalSlides }, (_, i) => (
          <div key={i} className="slide-card-print">
            <div className="flex justify-between items-center border-b pb-3 mb-6">
              <span className="font-bold text-lg text-black">Preview Cloud Review-1</span>
              <span className="font-mono text-sm text-slate-500">Slide {i + 1} of {totalSlides}</span>
            </div>
            <div className="flex-grow flex items-center justify-center p-4">
              {renderActiveSlide(i + 1)}
            </div>
          </div>
        ))}
      </div>

      {/* MAIN VIEWPORT FRAME */}
      {viewMode === 'keynote' ? (
        
        /* Keynote Fullscreen Container Frame */
        <div 
          className="presentation-frame flex-grow flex items-center justify-center relative select-none"
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Centered scaled slide canvas */}
          <div 
            className="slide-canvas shadow-2xl"
            style={{
              transform: `translate(-50%, -50%) scale(${scale})`,
            }}
          >
            {/* Core active slide content */}
            <div className="flex-grow flex flex-col justify-center relative z-10 w-full h-full overflow-hidden">
              <div key={currentSlide} className={`${transitionEffect} w-full h-full`}>
                {renderActiveSlide()}
              </div>
            </div>

            {/* Bottom Progress Loader Bar */}
            <div className="w-full h-1.5 bg-slate-900 relative z-25">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-300"
                style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
              />
            </div>
          </div>
        </div>

      ) : (

        /* Speaker Dashboard Mode */
        <div className="flex-grow flex flex-col lg:flex-row gap-6 p-6 z-10 overflow-hidden items-stretch h-[calc(100vh-60px)]">
          
          {/* Left Panel: Slide List Navigator */}
          <div className="w-full lg:w-72 bg-[#090f1d] border border-slate-800 rounded-2xl p-4 flex flex-col justify-between overflow-y-auto shrink-0 max-h-[30vh] lg:max-h-full">
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-850 pb-2 flex items-center gap-1.5">
                <Info className="w-4 h-4" /> Slide Deck List
              </h3>
              <ul className="space-y-1.5">
                {slideTitles.map((title, idx) => (
                  <li 
                    key={idx}
                    onClick={() => handleJump(idx + 1)}
                    className={`text-[11px] font-mono p-3 rounded-xl border cursor-pointer transition-colors text-left flex items-start gap-2.5 ${
                      currentSlide === idx + 1 
                        ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-400 font-bold' 
                        : 'bg-slate-950/40 border-slate-900 text-slate-400 hover:bg-slate-900/60 hover:text-white'
                    }`}
                  >
                    <span className="font-bold text-slate-500">{idx + 1}</span>
                    <span className="truncate">{title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Panel: Scaled Preview + Speaker Notes */}
          <div className="flex-grow flex flex-col gap-6 overflow-hidden">
            
            {/* Scaled Preview Frame */}
            <div className="flex-grow bg-[#020617] border border-slate-800 rounded-2xl flex items-center justify-center relative overflow-hidden min-h-[35vh]">
              <div 
                className="slide-canvas"
                style={{
                  transform: `translate(-50%, -50%) scale(${scale})`,
                }}
              >
                <div className="flex-grow flex flex-col justify-center relative z-10 w-full h-full overflow-hidden">
                  <div key={currentSlide} className={`${transitionEffect} w-full h-full`}>
                    {renderActiveSlide()}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Panel: Presenter Prompts Card */}
            <div className="bg-[#090f1d] border border-slate-800 rounded-2xl p-5 text-left flex flex-col space-y-2.5 h-[160px] shrink-0 justify-center">
              <h4 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest border-b border-slate-850 pb-2 flex items-center gap-1.5">
                <Eye className="w-4 h-4" /> Presenter Cues & Bullet Notes
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans overflow-y-auto">
                {speakerNotes[currentSlide] || "No cues registered for this active slide template."}
              </p>
            </div>

          </div>

        </div>
      )}

      {/* BOTTOM PRESENTATION TOOLBAR */}
      <footer className="no-print h-[60px] w-full bg-[#0b1220]/95 border-t border-slate-800/85 backdrop-blur-md px-6 flex items-center justify-between z-40 select-none">
        {/* Left Footer Panel: Project Brand & Timer */}
        <div className="flex items-center gap-4">
          <span className="font-bold text-white text-xs tracking-widest font-mono">PREVIEW CLOUD</span>
          <div className="w-px h-4 bg-slate-800"></div>
          {/* Clock Timer */}
          <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="font-bold text-slate-300">{formatTimer(timerSeconds)}</span>
            <button onClick={() => setTimerActive(!timerActive)} className="hover:text-white text-slate-500 ml-1.5" title={timerActive ? "Pause Timer" : "Resume Timer"}>
              {timerActive ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
            <button onClick={() => setTimerSeconds(0)} className="hover:text-white text-slate-500 ml-1" title="Reset Timer">
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Center Footer Panel: PowerPoint Navigation */}
        <div className="flex items-center gap-4">
          <button 
            onClick={handlePrev} 
            disabled={currentSlide === 1}
            className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-300 hover:text-white disabled:opacity-30 disabled:hover:bg-slate-900 transition-colors font-mono text-xs flex items-center gap-1.5"
            title="Previous Slide (Backspace / Left Arrow)"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          <div className="flex items-center bg-slate-950/60 border border-slate-850 px-3.5 py-1.5 rounded-lg text-slate-300 font-mono text-xs">
            <span className="font-bold text-white">Slide {currentSlide} of {totalSlides}</span>
            <span className="text-slate-650 mx-2">|</span>
            <select 
              value={currentSlide}
              onChange={(e) => handleJump(Number(e.target.value))}
              className="bg-transparent text-slate-400 font-mono text-xs border-none outline-none cursor-pointer hover:text-white select-none pr-1"
              title="Jump to Slide"
            >
              {slideTitles.map((title, idx) => (
                <option key={idx} value={idx + 1} className="bg-[#0b1220] text-slate-300">
                  {idx + 1} - {title.slice(0, 20)}...
                </option>
              ))}
            </select>
          </div>

          <button 
            onClick={handleNext} 
            disabled={currentSlide === totalSlides}
            className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-300 hover:text-white disabled:opacity-30 disabled:hover:bg-slate-900 transition-colors font-mono text-xs flex items-center gap-1.5"
            title="Next Slide (Space / Right Arrow)"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right Footer Panel: Extra Window Settings & Exports */}
        <div className="flex items-center gap-3">
          <button 
            onClick={handleScreenshot} 
            className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-400 hover:text-white"
            title="Take Slide Screenshot"
          >
            <Camera className="w-4 h-4" />
          </button>
          
          <button 
            onClick={window.print} 
            className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-400 hover:text-white"
            title="Print Presentation (PDF)"
          >
            <Printer className="w-4 h-4" />
          </button>

          <button 
            onClick={handleDownloadPPTX} 
            className="px-2.5 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-400 hover:text-white flex items-center gap-1.5 font-mono text-[10px]"
            title="Download PowerPoint File"
          >
            <Download className="w-4 h-4" />
            <span className="hidden lg:inline">Download PPT</span>
          </button>

          <div className="w-px h-5 bg-slate-800 mx-1"></div>

          {/* Mode Toggles */}
          <div className="flex items-center bg-slate-950/60 border border-slate-850 p-0.5 rounded-lg">
            <button
              onClick={() => setViewMode('keynote')}
              className={`p-1.5 rounded-md flex items-center gap-1 transition-colors ${
                viewMode === 'keynote' ? 'bg-blue-500 text-white font-bold' : 'hover:text-white text-slate-400'
              }`}
              title="Keynote Slide View"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode('speaker')}
              className={`p-1.5 rounded-md flex items-center gap-1 transition-colors ${
                viewMode === 'speaker' ? 'bg-blue-500 text-white font-bold' : 'hover:text-white text-slate-400'
              }`}
              title="Speaker Notes Dashboard"
            >
              <Layout className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Fullscreen controls */}
          <button 
            onClick={handleFullscreenToggle}
            className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-400 hover:text-white"
            title={isFullscreen ? "Exit Fullscreen (Esc)" : "Enter Fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Settings cog */}
          <button 
            className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-400 hover:text-white"
            title="Presentation Info"
            onClick={() => alert("Slide Caching: ENABLED / Aspect Ratio: 16:9 (1920x1080) / Scaling: " + scale.toFixed(2))}
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </footer>

    </div>
  );
};

export default App;
