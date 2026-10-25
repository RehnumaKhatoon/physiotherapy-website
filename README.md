# Medicare Physiotherapy – Website

A one-page physiotherapy clinic website built with React + Vite (plain CSS, no extra libraries).

## Run it

```bash
npm install
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Folder structure

```
src/
├── main.jsx                 # Entry point – mounts <App /> and global styles
├── App.jsx                  # Page layout – lists sections in order
│
├── data/
│   └── content.js           # ★ ALL text, links, services, reviews – edit content here
│
├── styles/
│   └── global.css           # Colours, fonts, reset, shared classes (.container, .section-title…)
│
├── hooks/
│   └── useReveal.js         # Fade-in-on-scroll animation
│
├── assets/images/           # All photos
│
└── components/
    ├── common/              # Small reusable pieces
    │   ├── Button.jsx/.css
    │   ├── Icons.jsx        # Inline SVG icons + Sparkle shape
    │   └── Logo.jsx/.css
    │
    ├── layout/              # Appears around every page
    │   ├── Navbar/          # Sticky header + mobile menu
    │   └── Footer/          # Brand band, links, newsletter
    │
    └── sections/            # One folder per page section (top → bottom)
        ├── Hero/            # Headline, photo, AppointmentForm.jsx
        ├── Services/        # Swipeable service cards
        ├── Marquee/         # Big scrolling text band
        ├── About/           # About the clinic + award badge
        ├── Conditions/      # 10 conditions we treat (from pamphlet)
        ├── Doctors/         # Dr. Arpit Shukla & Dr. Anita Shukla
        ├── Certificates/    # Auto-sliding awards & certificates
        ├── Process/         # 3-step recovery process
        └── Testimonials/    # Patient review slider
```

Each component keeps its own `.css` file in the same folder, so styles are easy to find.

## Common edits

| I want to…                         | Edit                                   |
| ---------------------------------- | -------------------------------------- |
| Change text, phone, services, reviews | `src/data/content.js`               |
| Add a certificate / doctor photo   | `certificates` / `doctors` in `src/data/content.js` (add `image`) |
| Change brand colours or font       | `:root` variables in `src/styles/global.css` |
| Replace a photo                    | Swap the file in `src/assets/images/` (keep the name) |
| Reorder / remove a section         | `src/App.jsx`                          |
| Connect the booking form           | `handleSubmit` in `components/sections/Hero/AppointmentForm.jsx` |
