# Archive

This directory contains obsolete or superseded project files kept for reference.

## Contents

- **TODO_CHECKLIST.md** - Original detailed checklist, superseded by PROJECT_PLAN.md
- **Eleventy-Site-Prompt.md** - Original AI prompt for site generation, no longer relevant
- **README.md** - Old project README from earlier iteration (this file)
- **color-palette-options.css** - Color palette experiments, finalized in design/DESIGN-SYSTEM.md
- **color-palettes.md** - Color research notes, finalized in design system

## Current Documentation

For active project documentation, see:
- `/README.md` - Project overview and quick start
- `/DEVELOPER_INSTRUCTIONS.md` - Complete developer guide
- `/PROJECT_PLAN.md` - Implementation roadmap
- `/design/DESIGN-SYSTEM.md` - Design system documentation

---

**Archived:** February 9, 2026

- **Markdown Content**: Easy-to-edit content files
- **Nunjucks Templates**: Reusable components and layouts

## Customization

### Colors
All colors are defined in CSS variables at the top of `src/assets/css/styles.css`. Edit these to rebrand:

```css
:root {
  --color-background: #F5F7F6;
  --color-text: #1B1F24;
  --color-accent: #2A6F6F;
  /* ... and more */
}
```

### Typography
Font families are also defined as CSS variables:

```css
:root {
  --font-heading: 'Inter', sans-serif;
  --font-body: 'IBM Plex Sans', sans-serif;
}
```

### Spacing
Consistent spacing throughout the site using CSS variables:

```css
:root {
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 32px;
  --space-xl: 64px;
}
```

## Pages

- **Home** (`/`) - Overview and introduction
- **Consulting** (`/consulting/`) - Consulting services and approach
- **Products** (`/products/`) - Product philosophy and featured projects
- **About** (`/about/`) - About the studio and founder

## Contact

The site includes a simple contact form on the About page that uses a `mailto:` action. For production, consider integrating a form service like Formspree or Netlify Forms.
