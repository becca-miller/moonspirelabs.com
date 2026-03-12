# Moonspire Labs Website

Marketing website for Moonspire Labs, a one-person software studio. Built with Eleventy (11ty) and Nunjucks.

## Quick Start

```bash
npm install
npm start  # Development server at http://localhost:8080
```

## Site Structure

- **Home** (`/`) — Services overview and CTA
- **Products** (`/products/`) — Product showcase
- **About** (`/about/`) — Background and philosophy
- **Contact** (`/contact/`) — Contact form

## Development

### Local development
```bash
npm start
# Runs Eleventy with live reload at http://localhost:8080
```

### Production build
```bash
npm run build
# Outputs to dist/
```

**Deploy the `dist/` directory only.** The `archive/`, `draft_copy/`, and `design/` folders are development references and are never included in the build output — Eleventy reads exclusively from `src/`.

### Project structure
```
src/
├── _data/              # Global data (site.json, navigation.json, helpers.js)
├── _includes/
│   ├── components/     # Reusable UI components (header, footer, cards, etc.)
│   └── layouts/        # Page layouts (Nunjucks templates)
├── content/            # Markdown content files with YAML front matter
├── css/                # Stylesheets (critical.css, styles.css)
└── assets/             # Static assets (images, favicon)
```

## Tech Stack

- **Generator**: Eleventy v3.1.2
- **Templates**: Nunjucks
- **Content**: Markdown with YAML front matter
- **Styling**: CSS with custom properties
- **Forms**: web3forms (honeypot spam protection, no redirect)

