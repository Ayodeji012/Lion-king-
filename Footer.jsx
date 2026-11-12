import { ArrowUpRight } from 'lucide-react'
import { site } from '../data/site'
export default function Footer(){return <footer className="footer">
 <div><a className="brand" href="#top"><span className="brand-mark">♛</span><span>LION KING<small>DIGITAL STUDIO</small></span></a><p>BUILDING DIGITAL EXPERIENCES.<br/>CREATING DIGITAL LEGACIES.</p></div>
 <div className="footer-links"><a href="#about">About</a><a href="#services">Services</a><a href="#work">Portfolio</a><a href="#contact">Contact <ArrowUpRight size={13}/></a></div>
 <div className="footer-bottom"><span>FOUNDED BY {site.founder}</span><span>© {new Date().getFullYear()} LION KING DIGITAL STUDIO</span><span>Privacy · Terms</span></div>
 </footer>}