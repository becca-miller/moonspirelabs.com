# Moonspire Labs - Developer Instructions

**Last Updated:** February 9, 2026

## Project Overview

Moonspire Labs is a professional consulting and products website built with [Eleventy (11ty)](https://www.11ty.dev/). The site showcases consulting services for early-stage teams and introduces products like Starling. It consists of four main pages: Home, Consulting, Products, and About.

---

## Architecture & Structure

### Tech Stack
- **Static Site Generator:** Eleventy v3.1.2
- **Templating:** Nunjucks (.njk)
- **Content:** Markdown with front matter (YAML)
- **Styling:** CSS (critical.css + styles.css)
- **Build Output:** `_site` directory (configured as `dist` in .eleventy.js)

### Directory Structure

```
moonspire-labs/
├── .eleventy.js                    # Eleventy configuration
├── package.json                     # Dependencies & scripts
├── src/                             # Source files (input directory)
│   ├── _data/                       # Global data files
│   │   ├── site.json                # Site metadata (name, URL, author)
│   │   ├── navigation.json          # Main navigation items
│   │   ├── helpers.js               # Template helper functions
│   │   └── global.js                # (if present) Additional global data
│   ├── _includes/                   # Reusable templates
│   │   ├── layouts/                 # Page layouts
│   │   │   ├── base.njk             # Base HTML structure
│   │   │   ├── home.njk             # Home page layout
│   │   │   ├── consulting.njk       # Consulting page layout
│   │   │   ├── products.njk         # Products page layout
│   │   │   └── about.njk            # About page layout
│   │   └── components/              # Reusable components
│   │       ├── header.njk           # Site header & navigation
│   │       ├── footer.njk           # Site footer
│   │       ├── meta-info.njk        # SEO meta tags
│   │       ├── card.njk             # Generic card component
│   │       ├── product-card.njk     # Product-specific card
│   │       ├── service-card.njk     # Service-specific card
│   │       ├── cta-block.njk        # Call-to-action block
│   │       └── page-wrapper.njk     # Page wrapper component
│   ├── content/                     # Markdown content files
│   │   ├── home.md                  # Home page content
│   │   ├── consulting.md            # Consulting page content
│   │   ├── products.md              # Products page content
│   │   └── about.md                 # About page content
│   ├── assets/                      # Static assets (images, icons, etc.)
│   ├── css/                         # Stylesheets
│   │   ├── critical.css             # Critical/above-fold styles
│   │   └── styles.css               # Main stylesheet
│   └── 404.md                       # 404 error page
└── _site/ (or dist/)                # Built site output
```

---

## Key Concepts

### Content Flow
1. **Markdown Files** (`src/content/*.md`) contain page content with YAML front matter
2. **Front Matter** defines:
   - `layout`: Which Nunjucks template to use
   - `permalink`: URL path for the page
   - **Structured data**: Custom objects (e.g., `hero`, `cards`, `sections`) for the template
3. **Layouts** (`src/_includes/layouts/*.njk`) receive front matter data and render content
4. **Components** (`src/_includes/components/*.njk`) are reusable UI elements included in layouts
5. **Data Files** (`src/_data/*.json` and `.js`) provide global site data accessible in all templates

### Template Data Access
- Site-wide data: `{{ site.name }}`, `{{ site.url }}`
- Navigation: `{{ navigation.items }}`
- Front matter: `{{ hero.header }}`, `{{ cards }}`, etc.
- Helpers: `{{ helpers.getLinkActiveState() }}`

### Current Page Structure Pattern

Each page follows this pattern in its markdown file:

```yaml
---
title: 'Page Title'
layout: 'layouts/pagename.njk'
permalink: '/pagename/'

# Structured content sections
hero:
  header: 'Main headline'
  subheader: 'Supporting text'

section_name:
  header: 'Section title'
  cards:
    - title: 'Card 1'
      description: 'Card description'
      icon: '/assets/icons/icon.svg'
---
```

---

## Development Workflow

### Setup
```bash
npm install
```

### Development Server
```bash
npm start
# Runs: npx eleventy --serve
# Opens local server with live reload (usually http://localhost:8080)
```

### Production Build
```bash
npm run production
# Runs: NODE_ENV=production npx eleventy
# Outputs to _site/ (or dist/ per config)
```

### **CRITICAL: Testing Before Committing**
**Before finalizing any code changes, ALWAYS:**
1. Run `npm start` or build the site
2. Verify the build completes without errors
3. Check that the page renders correctly in the browser
4. Test navigation and layout on the affected pages

This ensures changes don't break the build or introduce layout issues.

---

## Configuration Notes

### .eleventy.js Configuration
- **Input:** `src/`
- **Output:** `dist/` (note: some references may still say `_site`)
- **Template Engines:** Nunjucks for markdown, data, and HTML
- **Passthrough Copy:** `src/assets/` and `src/css/` are copied as-is
- **Browser Sync:** Watches CSS and assets for live reload

### Styles
- **critical.css:** Base resets, typography, layout fundamentals
- **styles.css:** Utility classes and screen-reader helpers (currently minimal)

Both stylesheets are linked in [base.njk](src/_includes/layouts/base.njk#L7-L8).

---

## Content Strategy

### Pages Priority Order
1. **Home** - Main landing page, most important for first impressions
2. **Consulting** - Core service offering
3. **Products** - Future product showcase (Starling, etc.)
4. **About** - Background and story

### Content Development Phases
1. **Draft Copy** - Write and refine content in markdown files
2. **Template Integration** - Update Nunjucks layouts to render the structured data
3. **Layout & Spacing** - Adjust structure, containers, spacing
4. **Typography** - Fonts, sizes, weights, hierarchy
5. **Color & Visual Design** - Brand colors, visual identity
6. **Icons & Assets** - Add icons, images, polish
7. **Responsive Design** - Mobile, tablet, desktop optimization
8. **Final Polish** - Animations, interactions, performance

---

## Brand & Design (To Be Defined)

A brand guide (co

See [design/DESIGN-SYSTEM.md](design/DESIGN-SYSTEM.md) for the complete design system documentation.

The design system is based on **Refactoring UI** principles and includes:
- Complete HSL-based color palettes (grey, blue, purple, semantic colors)
- Restrictive typography scale with system fonts
- 4px-based spacing system
- Shadow system for elevation
- Button and component hierarchies
- Responsive design patterns

The design tokens are implemented in [design/styles.css](design/styles.css) and need to be integrated into the main site

## Common Tasks

### Adding a New Page
1. Create `src/content/newpage.md` with front matter
2. Create `src/_includes/layouts/newpage.njk` template
3. Add navigation item to `src/_data/navigation.json`
4. Build and test

### Creating a Reusable Component
1. Create `src/_includes/components/componentname.njk`
2. Document expected variables in comments
3. Include in layouts: `{% include "components/componentname.njk" %}`

### Updating Styles
1. Edit `src/css/critical.css` or `src/css/styles.css`
2. Browser Sync will auto-reload during `npm start`

### Updating Site Data
- Edit `src/_data/site.json` for global site info
- Edit `src/_data/navigation.json` for menu items

---
Current Development Status

### Phase 1: Content & Copy (In Progress)
- ✅ Draft copy completed in `draft_copy/moonspire_website_copy.md`
- 🔄 Copy needs minor revisions (pricing clarity, service consistency)
- ⏳ Content pages need to be updated with finalized copy

### Phase 2: Template Integration (Not Started)
- Templates exist but need to properly render markdown front matter data
- Content should live in markdown files as structured data
- Templates should reference and loop through this data

### Phase 3: Styling (Not Started)
- ✅ Design system fully defined in `design/DESIGN-SYSTEM.md` and `design/styles.css`
- ⏳ Design system CSS needs to be integrated into `src/css/styles.css`
- ⏳ Components need to be styled according to design system

### Phase 4: Polish & Testing (Not Started)
- Responsive testing needed
- Icon assets need to be created/sourced
- Final content review and proofreading
- [consulting.md](src/content/consulting.md) has extensive structured content (183 lines) but the layout doesn't render it

---

## Future Enhancements (Post-Launch)

- [ ] Add actual icon assets to replace placeholders
- [ ] Optimize performance (image optimization, CSS minification)
- [ ] Add SEO enhancements (Open Graph, structured data)
- [ ] Consider adding a blog or case studies section
- [ ] Implement analytics
- [ ] Add functional contact form (currently HTML form with mailto)
- [ ] Progressive enhancement for JavaScript features
- [ ] Custom 404 page styling

---

## Resources

- **Eleventy Docs:** https://www.11ty.dev/docs/
- **Nunjucks Docs:** https://mozilla.github.io/nunjucks/
- **Current TODO List:** [TODOs.md](TODOs.md)

---Design System:** [design/DESIGN-SYSTEM.md](design/DESIGN-SYSTEM.md)
- **Master Copy:** [draft_copy/moonspire_website_copy.md](draft_copy/moonspire_website_copy.md)
- **Refactoring UI:** Design principles documented in design system

## Agent Guidelines

When working on this project:
1. **Always test builds** before committing changes (`npm start` or `npm run production`)
2. **Maintain consistency** with the established patterns
3. **Document decisions** in this file or commit messages
4. **Respect the phased approach**: Copy → Layout → Styling → Polish
5. **Check both desktop and mobile** views when making visual changes
6. **Reference the brand guide** (once created) for design decisions
7. **Keep components reusable** and well-documented
