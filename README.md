# LION KING DIGITAL STUDIO

Premium React + Vite agency website for LION KING, founded by DEVIX.

## Included
- Responsive luxury black / metallic-gold agency website
- Real-time 3D chain scene built with Three.js via React Three Fiber
- GSAP scroll-linked chain movement, Lenis smooth scrolling
- Responsive portfolio with category filters and case-study modal
- 14-service catalogue, process, technology stack and founder profile
- Project inquiry form (local demo persistence; Supabase-ready integration point)
- Separate founder dashboard UI with local demo authentication/content management
- Reduced-motion and WebGL fallback handling

## Run on iPad
You can edit this project in a browser-based coding environment such as StackBlitz or CodeSandbox:
1. Download and unzip this project.
2. Open StackBlitz (https://stackblitz.com/) or CodeSandbox (https://codesandbox.io/).
3. Create/import a Vite project and upload the extracted files, or open the ZIP using the platform's import option.
4. In the terminal run `npm install`, then `npm run dev`.
5. Run `npm run build` to verify production output.

Claude Free can help edit files, but it does not host or deploy the website by itself. For free deployment, push the project to GitHub and import the repository into Vercel or Netlify.

## Local admin demo
Open `/admin`. Demo login:
- Email: `founder@lionking.studio`
- Password: `LionKingDemo2026!`

This is a front-end demonstration only. Do not use this login for a real deployment. Before launch, replace the demo gate with Supabase Auth, enable Row Level Security, and protect all admin operations server-side.

## Connect a production backend
1. Create a Supabase project.
2. Copy `.env.example` to `.env` and fill in `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
3. Create `project_inquiries` table with columns: `id uuid primary key default gen_random_uuid()`, `created_at timestamptz default now()`, `full_name text`, `email text`, `company text`, `country text`, `category text`, `budget text`, `deadline text`, `description text`, `status text default 'new'`.
4. Enable RLS. Add an INSERT policy allowing anon users to submit inquiries. Only authenticated admins should be able to SELECT/UPDATE.
5. Install `@supabase/supabase-js` and connect the form in `src/lib/inquiries.js`. The current implementation safely stores inquiries in browser localStorage so the project works immediately as a demo.

## Important content notes
- Portfolio entries are explicitly marked **Concept Project**.
- Testimonials are clearly labelled **Demonstration testimonial**.
- Founder portrait is a replaceable placeholder.
- Contact details and social URLs are placeholders; set real details in `src/data/site.js`.
- No fake client results, contact details, or live project links are presented as real.

## Architecture
```
src/
  components/   Header, Footer, ChainScene, SectionHeading, ProjectCard
  data/          editable services, projects, site settings
  pages/         Home, Admin
  lib/           inquiry persistence
  styles/        global styles
  App.jsx
  main.jsx
public/
  lion-mark.svg
```

## Production checklist
- Replace placeholder email/social/WhatsApp values.
- Replace local demo admin with Supabase Auth + server-verified authorization.
- Connect inquiries to Supabase or a trusted email notification provider.
- Add real project screenshots and replace founder portrait placeholder.
- Configure domain, metadata, favicon and analytics.
- Test keyboard navigation, mobile rendering and low-power devices.
