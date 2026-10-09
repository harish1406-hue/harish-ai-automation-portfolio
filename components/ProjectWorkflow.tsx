"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Cpu, FileText, Database, GitBranch, Pause, Play } from "lucide-react";
const icons = [FileText, Cpu, GitBranch, Database];
export default function ProjectWorkflow({ steps }: {steps:string[]}) {
  const summary = [steps[0], steps[Math.floor(steps.length / 3)], steps[Math.floor(steps.length * 2 / 3)], steps[steps.length-1]];
  const [phase,setPhase] = useState(-1);
  const [playing,setPlaying] = useState(true);
  const [visible,setVisible] = useState(false);
  const [pageVisible,setPageVisible] = useState(true);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => {if(media.matches) setPlaying(false);};
    updatePreference(); media.addEventListener('change',updatePreference);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {threshold:.15});
    if(root.current) observer.observe(root.current);
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateVisibility(); document.addEventListener('visibilitychange',updateVisibility);
    return () => {observer.disconnect();media.removeEventListener('change',updatePreference);document.removeEventListener('visibilitychange',updateVisibility);};
  },[]);
  useEffect(() => {
    if(!playing || !visible || !pageVisible) return;
    const timer = window.setTimeout(() => setPhase(value => value >= 3 ? -1 : value+1),phase===3?2300:1500);
    return () => window.clearTimeout(timer);
  },[phase,playing,visible,pageVisible]);
  return <div className="project-workflow-panel" ref={root}>
    <div className="diagram-toolbar"><span><span className={`diagram-dot ${playing && visible?'active':''}`}/> ARCHITECTURE ANIMATION</span><button className="diagram-motion" onClick={()=>setPlaying(value=>!value)} aria-label={playing?'Pause project animation':'Resume project animation'} aria-pressed={!playing}>{playing?<Pause size={12}/>:<Play size={12}/>}</button></div>
    <div className="project-workflow" aria-label={steps.join(' → ')}>{summary.map((step,index)=>{const Icon=icons[index];return <div className="workflow-mini-group" key={`${step}-${index}`}><div className={`workflow-mini mini-${index} ${phase>=index?'mini-complete':''} ${phase===index?'mini-current':''}`}><Icon size={21}/><span>{step}</span>{phase>=index&&<Check className="mini-check" size={11}/>}</div>{index<3&&<span className={`mini-connection ${phase===index && playing?'transmitting':''}`}><ArrowRight className="mini-arrow" size={15}/><i/></span>}</div>;})}</div>
    <div className="diagram-caption"><span>{phase<0?'Input → processing → output':summary[phase]}</span><span>FLOW / {phase<0?'—':String(phase+1).padStart(2,'0')}</span></div>
  </div>;
}
