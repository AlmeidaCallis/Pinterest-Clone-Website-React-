# Pinterest Clone — React Conversion

This repository contains a converted React app version of the original static Pinterest clone.

Quick start

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm start
```

Routes

- `/` — Home
- `/explore` — Explore
- `/login` — Login
- `/signup` — Signup
- `/contact` — Contact (uses EmailJS)

Notes

- Global styles are loaded from `style.css` in the project root.
- The contact form uses EmailJS via `@emailjs/browser`. Public key and service/template IDs are already referenced in `src/pages/Contact.js`. Replace them with your own EmailJS values if needed.

Move local images into `public/assets/`

If you have the original JPG files in the project root, run:

```bash
npm run move-images
```

This runs `move-images.js` which moves the expected image filenames into `public/assets/`. After that the app will serve them at `/assets/<filename>`.
