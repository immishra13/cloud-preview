import React from 'react';

const GridOverlay = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Mesh Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.15]"></div>
      
      {/* Radial Ambient Glows */}
      <div className="absolute -top-[40%] -left-[20%] w-[80vw] h-[80vw] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_70%)] blur-[80px]"></div>
      <div className="absolute -bottom-[30%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_70%)] blur-[80px]"></div>
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.08)_0%,transparent_70%)] blur-[90px]"></div>

      {/* Futuristic Floating Code Nodes */}
      <div className="absolute top-[15%] left-[8%] w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-30 animate-pulse"></div>
      <div className="absolute top-[75%] left-[12%] w-2 h-2 rounded-full bg-blue-500 opacity-20 animate-ping" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-[25%] right-[15%] w-2 h-2 rounded-full bg-purple-500 opacity-25 animate-pulse" style={{ animationDuration: '3s' }}></div>
      <div className="absolute top-[85%] right-[25%] w-1.5 h-1.5 rounded-full bg-cyan-500 opacity-30"></div>
    </div>
  );
};

export default GridOverlay;
