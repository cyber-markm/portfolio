# Mark Marvin Noynay | Portfolio

Personal portfolio website of Mark Marvin Noynay, a full-time BS Information Technology student in Cebu City, Philippines, building community-focused web software.

## Features

- Responsive, mobile-first layout. On desktop, each section is designed to fit one screen.
- Light and dark mode. It follows the device setting and remembers the visitor's choice.
- Swipeable Projects carousel that advances on its own, and a slowly rotating circle of skills.
- All motion respects the visitor's reduced-motion setting.
- Accessible contact form with a consent checkbox.
- Privacy Policy page written for the Data Privacy Act of 2012 (Philippines).
- No cookies, analytics, or third-party trackers.
- Scored 100 in Lighthouse accessibility audits on desktop and mobile.

## Tech stack

- React with Vite
- Framer Motion
- Lucide icons and Devicon technology logos (bundled with the site)
- Inter and Plus Jakarta Sans fonts through Fontsource (bundled with the site)

## Requirements

- Node.js 20.19 or newer

## Run locally

```bash
npm install
npm run dev
```

Then open the address shown in the terminal, usually `http://localhost:5173/`.

## Build for production

```bash
npm run build
npm run preview
```

The finished site is created in the `dist` folder.

## Project structure

```
public/
  profile.jpg          profile photo
  favicon.svg          browser tab icon
src/
  components/
    About.jsx          bio, work-experience skills, and journey timeline
    Carousel.jsx       swipeable carousel used by Projects
    Contact.jsx        contact form and social links
    Container.jsx      shared width and padding
    DataNotice.jsx     Privacy Policy page
    Footer.jsx
    Header.jsx
    Hero.jsx
    Projects.jsx
    Section.jsx        shared section wrapper
    Skills.jsx         skills circle and list
    ThemeToggle.jsx    light and dark mode button
  App.jsx
  index.css            all styles and the color system
  main.jsx
```

## Customizing

- **Photo:** replace `public/profile.jpg` and update the description in `About.jsx`.
- **Projects:** edit `Projects.jsx`. Set `demoUrl` and `repoUrl` to real links when they exist.
- **Social links:** edit the `socials` list in `Contact.jsx`.
- **Contact form:** it opens the visitor's email app. To send messages through a form service instead, set `FORM_ENDPOINT` in `Contact.jsx`, then update the Privacy Policy to name the service.
- **Colors:** change the variables at the top of `index.css`.
- **Privacy Policy:** edit `DataNotice.jsx` and update its `LAST_UPDATED` date.

## Privacy

The only information the site collects is what a visitor types into the contact form, and only to reply to them. The site stores one preference, light or dark mode, in the visitor's own browser. If analytics, embeds, or a form service are ever added, the Privacy Policy must be updated first.

## Credits

- [Devicon](https://devicon.dev/) technology logos, MIT License
- [Lucide](https://lucide.dev/) interface icons, ISC License
- [Framer Motion](https://motion.dev/), MIT License
- Inter and Plus Jakarta Sans fonts through [Fontsource](https://fontsource.org/), SIL Open Font License 1.1
- Profile photo and written content by Mark Marvin Noynay

## Contact

cyber.markmarvin@gmail.com
