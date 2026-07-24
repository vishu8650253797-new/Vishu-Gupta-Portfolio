# Vishu Gupta — Portfolio

Premium personal portfolio built with **React.js + Tailwind CSS** only — no animation or UI libraries. All motion uses native CSS transitions/keyframes and the Intersection Observer API.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Structure

```
src/
├── components/   Navbar, Footer, Button, SectionHeading, ProjectCard, ScrollReveal, Icons, CursorGlow
├── sections/     Hero, About, Skills, Experience, Projects, Services, Process, Interests, Contact
├── data/         projects.js, skills.js, experience.js, services.js, stats.js
├── App.jsx
├── main.jsx
└── index.css
```

## Personalize

Replace the placeholders in:

- `src/data/stats.js` — your real numbers
- `src/data/projects.js` — project titles, descriptions, images, live/GitHub links
- `src/data/experience.js` — real employment/education history
- `src/components/Footer.jsx` & `src/sections/Contact.jsx` — email, GitHub, LinkedIn links
- `src/sections/Contact.jsx` — connect `submitForm()` to a real email service (EmailJS, Formspree, or your own API)
