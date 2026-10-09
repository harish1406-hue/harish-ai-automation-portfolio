import { ArrowRight, Check, Cpu, FileText, Database, GitBranch } from "lucide-react";
const icons = [FileText, Cpu, GitBranch, Database];
export default function ProjectWorkflow({ steps }: {steps:string[]}) {
  const summary = [steps[0], steps[Math.floor(steps.length / 3)], steps[Math.floor(steps.length * 2 / 3)], steps[steps.length-1]];
  return <div className="project-workflow" aria-label={steps.join(' → ')}>{summary.map((step,index)=>{const Icon=icons[index]; return <div className="workflow-mini-group" key={`${step}-${index}`}><div className={`workflow-mini mini-${index}`}><Icon size={19}/><span>{step}</span><Check className="mini-check" size={10}/></div>{index<3&&<ArrowRight className="mini-arrow" size={15}/>}</div>;})}</div>;
}
