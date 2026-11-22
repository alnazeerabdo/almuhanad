# المهند العقارية — Homepage Redesign

A responsive RTL homepage built with plain HTML, CSS, and JavaScript.

## Project structure

```text
almuhanad-website/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    └── images/
        ├── README.md
        └── image-sources.json
```

## Run locally

Open `index.html` directly in a modern browser, or run a local static server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## What is included

- Responsive RTL navigation and mobile menu.
- Hero section based on the current homepage headline, ISO 9001 statement, and company proof points.
- A property search that filters the four highlighted homepage projects locally. It is a front-end demo and is not connected to the WordPress/Houzez property database.
- Featured projects: Al Muhannad 133 (Al Faisaliyah), 126 (Al Rehab), 127 (Al Safa), and the Naeem rooftop project. Copy, prices, and specifications follow the source homepage.
- Customer proof, company guarantees, image gallery, and contact information from the current public homepage.
- Scroll reveal, sticky header, back-to-top control, and mobile navigation interactions.

## Brand / typography notes

The visual system has been aligned to the official site's dark blue and turquoise/teal direction. Tajawal is loaded as the Arabic web-font choice and has been centralized in `css/styles.css`; the publicly readable page text does not expose the website's actual CSS font declaration, so this is the best-effort matching Arabic font, not a verified copy of the original font file.

## Images

Images are hot-linked to the official `almuhanad.com` WordPress media library. This keeps the exact company photography in use without duplicating image files. They require an internet connection to load. See `assets/images/image-sources.json`.

## Before production

1. Connect the search form to the live property API / WordPress search endpoint if server-side results are required.
2. Confirm the exact font family from the site's theme CSS and replace Tajawal in one place if needed.
3. Confirm project availability and price changes before publishing; property information can change.
4. If deploying on the same domain, replace external project-detail links with the local WordPress routes as required.
