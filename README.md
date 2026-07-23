# Ryan Verzo Portfolio

Personal portfolio for Ryan Verzo, a full-stack software engineer based in Manila, Philippines.

The site presents selected work across commerce, mobile, finance, and enterprise software, with a theme-aware interactive 3D logo and responsive motion design.

## Stack

- Next.js 16, React 19, and TypeScript
- Sass modules for styling
- Framer Motion, GSAP, and React Spring for motion
- Three.js with React Three Fiber and Drei for the interactive 3D logo
- OpenNext and Cloudflare Workers for deployment

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

```bash
npm run dev        # Run the local development server
npm run build      # Create a production build
npm run start      # Serve the production build locally
npm run preview    # Build and preview the Cloudflare deployment locally
npm run deploy     # Deploy to Cloudflare
```

## Project Structure

```text
src/app/components/portfolio/  Portfolio sections, shared content, and animation logic
src/app/components/portfolio/data.ts  Portfolio content and profile information
public/                        Static assets, 3D model, and downloadable resume
```

## Content Updates

Update portfolio copy, work history, toolkit items, contact links, and hero details in `src/app/components/portfolio/data.ts`.

Client names and sensitive implementation details are intentionally omitted from selected-work case studies.
