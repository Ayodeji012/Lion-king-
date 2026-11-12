import { ArrowUpRight } from 'lucide-react'
export default function ProjectCard({project,onOpen}){return <article className="project-card">
 <button className={`project-visual visual-${project.visual}`} onClick={()=>onOpen(project)} aria-label={`View ${project.title} case study`}>
  <span className="visual-orbit"></span><span className="visual-word">{project.visual==='chain'?'∞':project.visual==='rehoboth'?'R':project.visual==='volt'?'VOLT':'✳'}</span><span className="visual-index">LK / 0{project.id}</span>
 </button>
 <div className="project-meta"><span>{project.category}</span><span className="concept">{project.status}</span></div>
 <button className="project-title" onClick={()=>onOpen(project)}>{project.title}<ArrowUpRight size={17}/></button>
 <p>{project.desc}</p>
 <small className="stack">{project.stack}</small>
 </article>}