"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Braces, Check, Cpu, Database, FileText, GitBranch, Play, Pause } from "lucide-react";
const steps = ["Waiting for input", "Document received", "AI extracts invoice fields", "Required fields validated", "Structured record ready"];
export default function StudioHero() {
  const [phase, setPhase] = useState(0);
  const [running, setRunning] = useState(true);
  const [inView, setInView] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const canvasRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => { if (preference.matches) setRunning(false); };
    updatePreference();
    preference.addEventListener("change", updatePreference);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {threshold: .1});
    if (canvasRef.current) observer.observe(canvasRef.current);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => { observer.disconnect(); preference.removeEventListener("change", updatePreference); document.removeEventListener("visibilitychange", updateVisibility); };
  }, []);
  useEffect(() => {
    if (!running || !inView || !pageVisible) return;
    const timer = window.setTimeout(() => setPhase(p => (p + 1) % 5), phase === 4 ? 2400 : 1400);
    return () => window.clearTimeout(timer);
  }, [phase, running, inView, pageVisible]);
  return <section id="top" className="studio-hero">
    <div className="studio-heading section-shell">
      <div className="studio-eyebrow"><span className="status-dot"/> HARISH VELAYUTHAM <span className="eyebrow-divider">/</span> VILNIUS, LITHUANIA</div>
      <h1>Human thinking.<br/><span>Intelligent execution.</span></h1>
      <p>AI AUTOMATION ENGINEER</p>
    </div>
    <div ref={canvasRef} className={`studio-canvas section-shell phase-${phase} ${running ? "demo-running" : ""}`}>
      <div className="canvas-toolbar"><span><GitBranch size={13}/> harish / automation-studio</span><span>01 — THE ENGINEER</span><span className="canvas-zoom">100% <span>＋</span></span></div>
      <div className="execution-track" aria-label="Illustrative workflow stages">
        {["Receive", "Understand", "Validate", "Deliver"].map((label,index) => <div key={label} className={`execution-step ${phase >= index+1 ? "complete" : ""} ${phase === index+1 ? "active" : ""}`}><span>{phase >= index+1 ? <Check size={12}/> : `0${index+1}`}</span><strong>{label}</strong><i/></div>)}
      </div>
      <div className="canvas-surface">
        <span className="canvas-watermark" aria-hidden="true">AUTOMATE</span>
        <svg className="workflow-wires" viewBox="0 0 1160 540" preserveAspectRatio="none" aria-hidden="true">
          <path className={`wire ${phase>=1?'energized':''}`} d="M270 165 H350 Q375 165 375 190 V230 Q375 250 410 250 H510"/>
          <path className={`wire ${phase>=2?'energized':''}`} d="M270 350 H345 Q375 350 375 325 V290 Q375 270 410 270 H510"/>
          <path className={`wire ${phase>=3?'energized':''}`} d="M650 250 H735 Q765 250 765 230 V185 Q765 165 795 165 H890"/>
          <path className={`wire ${phase>=4?'energized':''}`} d="M650 270 H735 Q765 270 765 300 V325 Q765 350 795 350 H890"/>
          {[ [270,165],[270,350],[890,165],[890,350] ].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="4" fill="#85e2c9"/>)}
        </svg>
        <div className={`workflow-node input-node ${phase>=1?'node-complete':''}`}>
          <div className="node-top"><span>01 / INPUT</span><span className="node-port"/></div>
          <div className="node-content"><span className="workflow-icon"><FileText size={22}/></span><div><strong>Unstructured data</strong><small>Documents · events · APIs</small></div></div>
          <div className="node-code"><span className={`node-activity ${phase>=1?'ready':''}`}/>{phase>=1 ? 'invoice.pdf → received' : '{ "trigger": "new_document" }'}</div>
        </div>
        <div className={`workflow-node context-node ${phase>=2?'node-complete':''}`}>
          <div className="node-top"><span>02 / CONTEXT</span><span className="node-port"/></div>
          <div className="node-content"><span className="workflow-icon violet"><Database size={22}/></span><div><strong>Knowledge & memory</strong><small>Supabase · vectors · RAG</small></div></div>
          <div className="node-code"><span className={`node-activity ${phase>=2?'ready':''}`}/>retrieve → ground → reason</div>
        </div>
        <div className="portrait-glow"/>
        <div className="portrait-frame"><img className="studio-portrait" src="/media/harish-studio-v2.png" alt="Harish Velayutham in a dark suit" fetchPriority="high"/><div className="portrait-fade"/></div>
        <div className={`engineer-label ${phase>=2?'node-complete':''}`}><span className="engineer-icon"><Cpu size={17}/></span><div><strong>Harish Velayutham</strong><small>THE ENGINEER BEHIND THE SYSTEM</small></div><span className="status-dot"/></div>
        <div className={`workflow-node logic-node ${phase>=3?'node-complete':''}`}>
          <div className="node-top"><span>03 / ORCHESTRATE</span><span className="node-port"/></div>
          <div className="node-content"><span className="workflow-icon"><GitBranch size={22}/></span><div><strong>AI + workflow logic</strong><small>n8n · Python · Node.js</small></div></div>
          <div className="node-code"><span className={`node-activity ${phase>=3?'ready':''}`}/>{phase>=3 ? 'schema.validate() → passed' : 'extract → validate → route'}</div>
        </div>
        <div className={`workflow-node output-node ${phase>=4?'node-complete':''}`}>
          <div className="node-top"><span>04 / OUTPUT</span><span className="node-port"/></div>
          <div className="node-content"><span className="workflow-icon amber">{phase>=4?<Check size={22}/>:<Braces size={22}/>}</span><div><strong>Useful, reliable results</strong><small>Structured data · actions</small></div></div>
          <div className="node-code"><span className={`node-activity ${phase>=4?'ready':''}`}/>{phase>=4 ? '{ "status": "validated" }' : 'business processes, connected.'}</div>
        </div>
        <div className="canvas-caption"><span className="crosshair">＋</span> Designed to connect. Engineered to work.</div>
      </div>
      <div className="canvas-footer"><div className="simulation-status" aria-live="off"><span className={`status-dot ${running?'busy':''}`}/><span>WORKFLOW SIMULATION</span><strong>{steps[phase]}</strong></div><button onClick={() => setRunning(value => !value)} aria-pressed={!running} className="run-button">{running?<Pause size={14}/>:<Play size={14}/>} {running?'Pause animation':'Resume animation'}</button></div>
    </div>
    <div className="studio-intro section-shell">
      <div><p>I build the systems that turn <strong>complex processes into clear outcomes.</strong> Workflow orchestration, grounded AI, and reliable integrations.</p><div className="studio-actions"><a className="button" href="#work">Explore the systems <ArrowUpRight size={17}/></a><a className="resume-link" href="/Harish-Velayutham-Resume.pdf" download>Download résumé <ArrowDown size={15}/></a></div></div>
    </div>
    <div className="studio-scroll section-shell"><span>ENGINEERING PORTFOLIO / 2026</span><a href="#work">Explore below <ArrowDown size={12}/></a></div>
  </section>;
}
