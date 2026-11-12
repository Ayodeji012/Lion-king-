export const site = {
  name: 'LION KING',
  descriptor: 'DIGITAL STUDIO',
  founder: 'DEVIX',
  email: 'hello@yourdomain.com',
  whatsapp: 'https://wa.me/000000000000',
  instagram: 'https://instagram.com/',
  x: 'https://x.com/',
  location: 'Available worldwide · Based in Nigeria'
}

export const services = [
  ['01','Website Development','Fast, expressive websites that turn first impressions into lasting business relationships.','React · Next.js · Vite'],
  ['02','Full-Stack Web Development','End-to-end digital products with thoughtful interfaces, reliable APIs and scalable data.','React · Node.js · PostgreSQL'],
  ['03','E-commerce Development','Commerce experiences built to make discovery, checkout and repeat purchases effortless.','Shopify · Stripe · Supabase'],
  ['04','UI/UX Design','Research-led interfaces that balance clarity, accessibility and unmistakable visual character.','Figma · Design systems'],
  ['05','3D Website Development','Immersive WebGL experiences that bring products and stories into another dimension.','Three.js · R3F · Drei'],
  ['06','Creative Web Animation','Purposeful motion and micro-interactions that make every interaction feel considered.','GSAP · ScrollTrigger'],
  ['07','Brand Identity Design','Distinctive visual systems built to give ambitious brands a recognisable voice.','Art direction · Figma'],
  ['08','Logo Design','Memorable marks and flexible logo systems designed for digital and physical touchpoints.','Vector design · Identity'],
  ['09','Landing Page Development','Focused campaign pages designed around one clear message and measurable action.','React · Analytics'],
  ['10','Web Application Development','Useful browser-based tools, portals and platforms shaped around real workflows.','TypeScript · APIs'],
  ['11','AI Integration & Automation','Practical AI features and automations that remove repetitive work and unlock insight.','OpenAI API · Python'],
  ['12','SEO & Website Optimization','Technical foundations and performance improvements that help people find you.','Core Web Vitals · SEO'],
  ['13','Website Maintenance','Ongoing updates, monitoring and improvements that keep your digital presence healthy.','Security · Updates'],
  ['14','Digital Strategy & Consulting','A clear roadmap from early idea to launch, growth and the next iteration.','Discovery · Roadmapping']
].map(([number,name,description,stack])=>({number,name,description,stack}))

export const projects = [
  {id:1,title:'NORTHSTAR CORPORATE',category:'Business Websites',desc:'A confident digital home for a modern advisory firm, designed around clarity and trust.',stack:'React · GSAP · Tailwind',visual:'north',status:'Concept Project'},
  {id:2,title:'FORME ATELIER',category:'E-commerce',desc:'An editorial fashion storefront with refined product discovery and a streamlined shopping journey.',stack:'React · Commerce UI · Supabase',visual:'forme',status:'Concept Project'},
  {id:3,title:'VOLT MARKET',category:'E-commerce',desc:'A high-energy electronics shop concept with product-led layouts and comparison features.',stack:'Vite · TypeScript · API concept',visual:'volt',status:'Concept Project'},
  {id:4,title:'ORBIT ADMIN',category:'Web Applications',desc:'A modular operations dashboard concept for teams that need a clear view of their work.',stack:'React · Charts · Supabase',visual:'orbit',status:'Concept Project'},
  {id:5,title:'PULSE CRM',category:'Web Applications',desc:'A customer management experience concept that brings contacts, activity and follow-ups together.',stack:'React · Node.js · PostgreSQL',visual:'pulse',status:'Concept Project'},
  {id:6,title:'REHOBOTH CONNECT',category:'Church & Organization',desc:'A connected church platform concept for public information, events, giving and administration.',stack:'React · Supabase · Responsive UI',visual:'rehoboth',status:'Concept Project'},
  {id:7,title:'ALTAR / COMMUNITY',category:'Church & Organization',desc:'A warm community portal concept for event discovery, member updates and digital participation.',stack:'React · CMS concept · UI systems',visual:'altar',status:'Concept Project'},
  {id:8,title:'CHAIN REACTION',category:'Creative 3D',desc:'A cinematic studio experience concept where a metallic chain becomes the visual narrative.',stack:'Three.js · R3F · GSAP',visual:'chain',status:'Concept Project'},
  {id:9,title:'AURELIA OBJECTS',category:'Creative 3D',desc:'An immersive product showcase concept built around material, light and slow movement.',stack:'Three.js · React · WebGL',visual:'aurelia',status:'Concept Project'},
  {id:10,title:'LEADPOINT INTELLIGENCE',category:'AI & Automation',desc:'An intelligent lead research workspace concept for organising business prospects and outreach.',stack:'React · Python · AI integration',visual:'lead',status:'Concept Project'}
]

export const categories = ['All','Business Websites','E-commerce','Web Applications','Church & Organization','Creative 3D','AI & Automation']
