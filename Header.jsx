import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
const links=[['About','#about'],['Services','#services'],['Work','#work'],['Process','#process'],['Contact','#contact']]
export default function Header(){
 const [open,setOpen]=useState(false)
 return <header className="header">
  <a className="brand" href="#top"><span className="brand-mark">♛</span><span>LION KING<small>DIGITAL STUDIO</small></span></a>
  <button className="mobile-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
  <nav className={open?'nav open':'nav'}>{links.map(([n,h])=><a key={n} href={h} onClick={()=>setOpen(false)}>{n}</a>)}<a className="nav-cta" href="#contact" onClick={()=>setOpen(false)}>Start a project <ArrowUpRight size={15}/></a></nav>
 </header>
}