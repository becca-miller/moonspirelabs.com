# Moonspire Labs Website

A professional consulting and products website built with Eleventy (11ty).

## Quick Start

```bash
npm install
npm start  # Development server at http://localhost:8080
```

## Project Overview

Moonspire Labs is a consulting practice focused on early-stage product development, research-to-software translation, and custom tools. This website serves as the primary marketing and information hub.

### Site Structure
- **Home** (`/`) - Main landing page with services overview
- **Consulting** (`/consulting/`) - Detailed consulting offerings and process
- **Products** (`/products/`) - Product showcase (Starling music app)
- **About** (`/about/`) - Background and philosophy

## Development

### Local Development
```bash
npm start
# Runs Eleventy with live reload at http://localhost:8080
```

### Production Build
```bash
npm run build
# Outputs to _site/ directory
```

### Project Structure
```
src/
├── _data/              # Global data (site.json, navigation.json, helpers.js)
├── _includes/
│   ├── components/     # Reusable UI components
│   └── layouts/        # Page layouts (Nunjucks templates)
├── content/            # Markdown content files with front matter
├── css/                # Stylesheets
└── assets/             # Static assets (images, icons)
```

## Key Files

- **Content**: `draft_copy/moonspire_website_copy.md` - Master copy document
- **Design System**: `design/DESIGN-SYSTEM.md` and `design/styles.css`
- **Development Guide**: `DEVELOPER_INSTRUCTIONS.md`

## Design Philosophy

The design system is based on **Refactoring UI** principles:
- Constraint-based color system (9-shade grey, blue, purple palettes)
- Restrictive typography scale (10 sizes)
- 4px-based spacing system
- Shadow-based elevation and depth
- Mobile-first responsive design

See [design/DESIGN-SYSTEM.md](design/DESIGN-SYSTEM.md) for complete details.

## Current Status

**In Progress**: Initial website development
- ✅ Design system defined
- ✅ Copy drafted
- 🔄 Template integration
- ⏳ Styling application
- ⏳ Final polish

## Tech Stack

- **Generator**: Eleventy v3.1.2
- **Templates**: Nunjucks
- **Content**: Markdown with YAML front matter
- **Styling**: CSS with custom properties
