# Jaswant Portfolio — Version 2

A responsive Next.js App Router portfolio based on Jaswant's original visual direction, expanded with clearer information architecture and scalable case-study pages.

## Included
- Sticky global navigation: Home, Projects, About, Resume, Contact
- Home page: hero, about, capabilities, skills, featured projects, experience and recognition roadmap
- Filterable Projects page: College, Personal, Research, Competition
- Reusable project case-study template
- About and Contact pages
- Responsive mobile navigation
- Reduced-motion support

## Install into the existing repository
Copy these folders/files into the existing Next.js project:
- `src/app`
- `src/components`
- `src/data`
- `public/jaswant-profile.png`

Then run:
```bash
npm run dev
```

## Replace before publishing
1. Put the real resume at `public/resume.pdf`.
2. Update LinkedIn, Behance, GitHub, and email links.
3. Replace placeholder project text in `src/data/projects.ts` with verified project content.
4. Replace the cropped profile image with the original high-resolution transparent image if available.
5. Confirm Jaswant's university name and education details before adding them.

## Deploy
```bash
git add .
git commit -m "Add portfolio version 2"
git push
```
Vercel will automatically create a new deployment.
