# Moonspire Labs Design System

## Overview

This design system is based on **Refactoring UI** principles and provides a comprehensive, constraint-based approach to web design. The system emphasizes consistency, professional appearance, and ease of maintenance.

## Implementation Summary

### ✅ Completed Changes

1. **Complete HSL Color System**
   - 9-shade grey scale with cool blue tint (hsl 220°)
   - 9-shade primary blue color palette
   - 9-shade accent purple color palette
   - 7-shade semantic colors (success, warning, error, info)
   - All colors use HSL format for easier manipulation

2. **Typography Scale**
   - Restrictive scale: 10 sizes from xs (12px) to 6xl (60px)
   - System font stack for optimal performance
   - Font weights limited to 2-3 (normal: 400, medium: 500, semibold: 600, bold: 700)
   - Line heights inversely proportional to font size
   - Tightened letter-spacing for headlines (-0.02em to -0.03em)

3. **Spacing System**
   - Base unit: 4px
   - Scale: 1 (4px) to 32 (128px)
   - Values increase by ~25% per step
   - Ensures visual rhythm and consistency

4. **Shadow System**
   - 5 elevation levels (shadow-1 through shadow-5)
   - Two-part shadows (large soft + small dark) for realistic depth
   - Used for cards, buttons, modals, and elevation hierarchy

5. **Button Hierarchy**
   - Primary: Most important action (blue, elevated)
   - Secondary: Alternative actions (grey, subtle border)
   - Tertiary/Ghost: Least emphasis (transparent, text-only)
   - Outline: Clear boundaries without heavy weight
   - Danger: Destructive actions (red)
   - Sizes: small, default, large

6. **Component Styles**
   - Cards with shadow-based elevation (no borders by default)
   - Panels with colorful left accent borders
   - Forms with proper focus states (ring effect)
   - Navigation with hover states and background feedback
   - Feature lists with custom checkmark bullets

7. **Responsive Design**
   - Mobile-first approach
   - Large elements shrink faster than small (headlines: 33% reduction, body: 11%)
   - Breakpoints: 1024px, 768px, 480px
   - Proportional scaling of spacing and typography

## Key Design Principles Applied

### From Refactoring UI Style Guide

1. **Color Philosophy**
   - Use 2-3 text colors maximum (primary, secondary, tertiary)
   - Hand-pick colors for backgrounds (don't just lighten)
   - Never rely on color alone for meaning (add icons, text labels)

2. **Typography**
   - Restrictive type scale prevents decision paralysis
   - Line height inversely proportional to font size
   - Optimal line length: 45-75 characters (65ch max-width)
   - Tighter letter-spacing for headlines, normal for body

3. **Spacing & Layout**
   - Start with too much white space, then remove
   - More space between groups than within them
   - Maximum content width: 1200px (prevents unfocused layouts)
   - Mobile-first at ~400px, scale up as needed

4. **Visual Hierarchy**
   - Combine size, weight, and color (not size alone)
   - De-emphasize competing elements instead of over-emphasizing important ones
   - Labels are de-emphasized (smaller, lighter)

5. **Depth & Elevation**
   - Shadow system simulates light from above
   - Two-part shadows (soft large + sharp small) for realism
   - Lighter elements appear closer, darker appear further

6. **Borders & Dividers**
   - Use shadows and spacing instead of borders when possible
   - Default border: 1px grey-300
   - Accent borders: 3-4px colorful left borders for panels

## CSS Custom Properties

All design tokens are defined as CSS custom properties in `:root`:

```css
/* Colors */
--grey-50 through --grey-900
--primary-50 through --primary-900
--accent-50 through --accent-900
--success/warning/error/info-50 through -700

/* Spacing */
--space-1 (4px) through --space-32 (128px)

/* Typography */
--text-xs through --text-6xl
--weight-normal, --weight-medium, --weight-semibold, --weight-bold
--leading-tight, --leading-snug, --leading-normal, --leading-relaxed

/* Shadows */
--shadow-1 through --shadow-5

/* Other */
--radius-sm through --radius-full
--transition-fast, --transition-base, --transition-slow
```

## Component Usage

### Buttons
```html
<button class="btn btn--primary">Primary Action</button>
<button class="btn btn--secondary">Secondary</button>
<button class="btn btn--tertiary">Tertiary</button>
<button class="btn btn--outline">Outline</button>
<button class="btn btn--danger">Delete</button>
```

### Cards
```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>

<div class="card card--subtle">Subtle card with border</div>
<div class="card card--featured">Featured with accent border</div>
```

### Panels
```html
<div class="panel">
  <h3>Information</h3>
  <p>Panel content...</p>
</div>

<div class="panel panel--success">Success message</div>
<div class="panel panel--warning">Warning message</div>
<div class="panel panel--error">Error message</div>
```

### Grid
```html
<div class="card-grid">
  <div class="card">...</div>
  <div class="card">...</div>
  <div class="card">...</div>
</div>
```

## Accessibility Features

1. **Color Contrast**
   - Primary text (grey-900) on light backgrounds: high contrast
   - Secondary text (grey-600): 4.5:1 minimum
   - Hand-picked text colors for colored backgrounds

2. **Focus States**
   - Clear ring effect (3px) on form inputs
   - Visible hover states on all interactive elements
   - Keyboard navigation support

3. **Never Rely on Color Alone**
   - Icons accompany color-coded information
   - Text labels supplement visual cues
   - Multiple visual indicators (color + icon + text)

## Migration Notes

### Breaking Changes
- All color variables have been renamed to HSL-based semantic names
- Spacing scale changed from rem-based to px-based (4px increments)
- Shadow names simplified from descriptive to numbered (shadow-1 to shadow-5)
- Button classes now require explicit modifiers (btn--primary, btn--secondary)

### Backwards Compatibility
- The backup file is saved as `src/assets/css/styles.css.backup`
- HTML class names remain mostly compatible
- Existing components will work but may look different

## Testing & Validation

✅ Build successful: `npm run build` completes without errors  
✅ Dev server running: `npm start` serves on http://localhost:8080  
✅ No CSS errors or warnings  
✅ Responsive breakpoints tested  
✅ All pages render correctly (Home, Consulting, Products, About)

## Next Steps for Enhancement

### Optional Improvements (from style guide)
1. **Custom Elements**
   - Replace bullet points with custom icons (checkmarks ✓, arrows →)
   - Style quotation marks as visual elements
   - Custom checkboxes and radio buttons

2. **Background Decoration**
   - Subtle gradient overlays
   - Geometric shapes in corners
   - Low-contrast repeating patterns

3. **Empty States**
   - Design empty states with helpful illustrations
   - Clear call-to-action buttons
   - Hide irrelevant UI until content exists

4. **Images & Media**
   - Add text overlay system for hero images
   - Icon system integration (Heroicons, Feather, or Lucide)
   - User-generated content handling

## Resources

- **Style Guide Source**: website-style-guide.docx (Refactoring UI principles)
- **CSS File**: [src/assets/css/styles.css](src/assets/css/styles.css)

## Maintenance

### Adding New Colors
1. Generate 7-9 shades using HSL
2. Rotate hue 20-30° when adjusting lightness for vibrancy
3. Increase saturation in lighter/darker shades to prevent washed-out appearance

### Adding New Components
1. Use existing design tokens (don't add new values without consideration)
2. Follow button hierarchy model (primary, secondary, tertiary)
3. Apply shadow system for depth (shadow-1 for subtle, shadow-3 for elevated)
4. Ensure proper hover/focus states

### Responsive Considerations
- Large elements shrink faster than small
- Headlines: 20-33% reduction on mobile
- Body text: 0-11% reduction on mobile
- Test at 480px, 768px, and 1024px breakpoints

---

**Design system applied**: February 4, 2026  
**Based on**: Refactoring UI principles  
**Status**: ✅ Production-ready
