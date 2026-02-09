## Design System Integration Complete! ✅

### Overview of Styling Choices

I've successfully integrated a comprehensive design system based on Refactoring UI principles. Here's what the site now has:

#### **Color System**
- **Primary Blue**: HSL-based 9-shade palette (hsl(210, 80%, 55%) base)
  - Used for CTAs, links, service card accents, and interactive elements
- **Accent Purple**: 9-shade palette (hsl(250, 75%, 60%) base)
  - Used for Starling product branding and visual variety
- **Greyscale**: Cool blue-tinted greys (hue: 220°) for modern feel
  - Grey-900: Primary text
  - Grey-600: Secondary text
  - Grey-400: Tertiary/placeholder text
- **Semantic Colors**: Green (success), Amber (warning), Red (error), Cyan (info)

#### **Typography**
- **Font Stack**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI)
- **Type Scale**: 10 sizes from 0.75rem (12px) to 3.75rem (60px)
- **Weights**: Limited to 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Line Heights**: Inversely proportional - tight for large text (1.25), relaxed for body (1.625)
- **Letter Spacing**: Tightened for headlines (-0.02em to -0.03em) for modern look

#### **Component Styling**

**Service Cards**:
- White background with shadow-2 elevation
- **4px left border** in primary blue for visual interest
- Hover effect: Lifts slightly (translateY(-2px)) with shadow-3
- Custom bullet points using "→" arrow in primary color
- Deliverables section with green checkmarks "✓"
- Pricing separated with top border for clarity

**Process Steps**:
- Clean timeline layout with bottom borders as dividers
- **Badge pills** for pricing/timing (free, $3,000, 30 days included)
- Blue background pills with rounded corners
- Flexible title layout that wraps on mobile

**Hero Sections**:
- Large, bold headlines (3rem on desktop, scales to 2.25rem on mobile)
- Subdued subheaders in grey-600 for hierarchy
- Maximum 700px width for optimal readability

**CTA Sections**:
- **Gradient background**: Primary-50 to Accent-50 (subtle blue→purple)
- Centered text with rounded corners (16px radius)
- Box shadow for slight elevation
- Welcoming, non-pressuring tone

**Technical Section**:
- Light grey background (grey-50) for visual separation
- **Responsive grid** for tech stack lists (auto-fit, min 200px columns)
- Single column on mobile, multi-column on desktop

**Audience Cards**:
- Grid layout (auto-fit, min 280px)
- **Top accent border** (3px primary blue)
- Subtle shadow with hover effect
- 2 columns on tablet, 1 column on mobile

#### **Responsive Behavior**

**Mobile (< 768px)**:
- Hero headlines: 3rem → 2.25rem (25% reduction)
- Body text: Minimal scaling (maintains readability)
- All grids collapse to single column
- Reduced padding (24px → 16px)
- Process badges stack vertically

**Tablet (768px - 1024px)**:
- 2-column grids for audiences and Starling steps
- Moderate headline scaling
- Balanced spacing

**Large Screens (> 1440px)**:
- Max-width constraints prevent overly wide content
- Hero: 1000px max
- Services/Audiences: 1200px max
- Maintains comfortable reading experience

#### **Shadows & Depth**
Using a 5-level shadow system with two-part shadows (large soft + small dark):
- **shadow-1**: Buttons, subtle lift (1-3px offset)
- **shadow-2**: Cards, standard elevation (3-6px offset)
- **shadow-3**: Hover states, dropdowns (10-20px offset)
- **shadow-4**: Modals, important overlays (15-35px offset)
- **shadow-5**: Dramatic effects (25-50px offset)

#### **Spacing System**
Base unit: 4px, growing by ~25% per step:
- Compact (4-12px): Within elements
- Standard (16-24px): Between elements
- Comfortable (32-48px): Section spacing
- Generous (64-128px): Major breaks

---

### Expected Visual Appearance

The site should look **clean, professional, and approachable** with:

1. **Strong Visual Hierarchy**: Large, bold headlines draw attention; secondary text is clearly de-emphasized
2. **Card-Based Layout**: Services and content sections use elevated cards with subtle shadows
3. **Colorful Accents**: Blue left borders and purple highlights add visual interest without overwhelming
4. **Smooth Interactions**: Hover effects provide feedback (cards lift, shadows deepen)
5. **Breathing Room**: Generous white space prevents cluttered feeling
6. **Modern Typography**: System fonts load instantly, tight letter-spacing on headlines feels contemporary
7. **Gradient Touches**: CTA sections have subtle blue-purple gradients for warmth
8. **Mobile-Friendly**: Single-column layouts on small screens, readable text sizes

---

### Variables to Experiment With for Different Themes

Here are key variables you can adjust in styles.css (lines 6-110) to explore different themes:

#### **Quick Theme Adjustments**

**1. Warmer Color Scheme** (vs current cool blues):
```css
/* Change hue from 220° (cool blue-grey) to 30-40° (warm beige-grey) */
--grey-50: hsl(35, 20%, 97%);
--grey-100: hsl(35, 18%, 93%);
/* ... continue pattern */

/* Shift primary from blue to teal or green */
--primary-500: hsl(170, 70%, 45%);  /* Teal */
/* or */
--primary-500: hsl(145, 65%, 50%);  /* Green */
```

**2. Higher Contrast / Bolder**:
```css
/* Darken primary text */
--grey-900: hsl(220, 20%, 8%);  /* Nearly black */

/* Increase primary color saturation */
--primary-500: hsl(210, 95%, 50%);  /* More vibrant blue */

/* Stronger shadows */
--shadow-2: 
  0 4px 8px hsla(220, 18%, 12%, 0.18),
  0 2px 4px hsla(220, 18%, 12%, 0.12);
```

**3. Softer / Lighter Aesthetic**:
```css
/* Lighter background */
--color-bg: hsl(220, 30%, 99%);

/* Softer primary color */
--primary-500: hsl(210, 65%, 62%);

/* Gentler shadows */
--shadow-2: 
  0 2px 4px hsla(220, 18%, 12%, 0.08),
  0 1px 2px hsla(220, 18%, 12%, 0.05);
```

**4. Different Accent Colors**:
```css
/* Purple accent → Coral/Orange */
--accent-500: hsl(15, 80%, 60%);

/* Or Cyan */
--accent-500: hsl(190, 70%, 50%);

/* Or Warm Pink */
--accent-500: hsl(340, 75%, 60%);
```

**5. Tighter/Looser Spacing**:
```css
/* Tighter overall (multiply all by 0.75) */
--space-4: 12px;  /* was 16px */
--space-8: 24px;  /* was 32px */

/* Or more generous (multiply by 1.25) */
--space-4: 20px;
--space-8: 40px;
```

**6. Typography Adjustments**:
```css
/* Larger base size */
html { font-size: 18px; }  /* Makes 1rem = 18px instead of 16px */

/* Different weights */
--weight-semibold: 700;  /* Bolder headings */

/* More or less tight headlines */
.hero__header { letter-spacing: -0.04em; }  /* Tighter */
/* or */
.hero__header { letter-spacing: 0; }  /* Normal */
```

---

### Quick Customization Guide

**To adjust only service card colors**:
Look for `.service` class (line ~1060):
- Change `border-left` color
- Modify `.service__title` color
- Adjust hover shadow intensity

**To change CTA gradient**:
Look for `.cta` class (line ~1380):
- Modify `background: linear-gradient()`
- Try different color combinations (primary + accent, primary + success, etc.)

**To tweak mobile breakpoints**:
Look for `@media (max-width: 768px)` (line ~1490):
- Adjust pixel value to trigger mobile layout earlier/later
- Modify font size reductions

**To change card elevation**:
Replace `var(--shadow-2)` with `var(--shadow-1)` (more subtle) or `var(--shadow-3)` (more dramatic) throughout
