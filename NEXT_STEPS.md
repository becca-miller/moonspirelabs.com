# Next Steps - Task List

## Phase 1: Content Refinement ✅ COMPLETE

All Phase 1 content refinements have been completed in [draft_copy/moonspire_website_copy.md](draft_copy/moonspire_website_copy.md).

### Completed Tasks

#### 1. Discovery & Scoping Pricing Clarity ✅ COMPLETE

- ✅ Standardized discovery fee to $3,000 across all pages
- ✅ Made it crystal clear this is PAID work
- ✅ Clarified discovery fee is fully credited toward project if started within 60 days
- ✅ Explained that proposal is detailed and client keeps it regardless of decision
- ✅ Clarified that pricing ranges are project size indicators, with exact pricing in proposal

#### 2. Timeline Expectations ✅ COMPLETE

- ✅ Removed specific week timelines (4-8 weeks, 2-8 weeks, etc.)
- ✅ Kept general turnaround language: "Typical turnaround depends on project scope"
- ✅ Maintained timeline mention in initial discovery call ("rough sense of timeline")
- ✅ Ensured consistency across Home and Consulting pages

#### 3. Pricing Validation ✅ COMPLETE

- ✅ Clarified pricing tiers serve as project size indicators
- ✅ Updated pricing approach: exact pricing based on effort provided in proposal
- ✅ Standardized pricing ranges:
  - Early product development: $15-30k
  - Research-to-software translation: $8-15k (aligned across pages)
  - Custom tools & automation: $5-15k
- ✅ Added note that pricing may be higher/lower based on project scale

#### 4. Service Consistency ✅ COMPLETE

- ✅ Ensured service descriptions match between HOME and CONSULTING pages
- ✅ Pricing ranges are identical on both pages
- ✅ "What you get" sections are consistent
- ✅ Terminology is aligned throughout

#### 5. Target Audience Clarity ✅ COMPLETE

- ✅ Clear language for three target audiences maintained:
  - Small technical startups (pre-seed to Series A)
  - Research teams (academic/industry) converting prototypes
  - Small companies needing internal tools
- ✅ Added "Not sure if your project fits?" encouragement on both Home and Consulting pages
- ✅ Welcoming language to prevent premature self-filtering

#### 6. Minor Copy Polish ✅ COMPLETE

- ✅ Removed duplicate "How It Works" section on home page
- ✅ Ensured consistent tone throughout
- ✅ Updated meta descriptions to remove specific timelines
- ✅ Made all CTAs welcoming and inclusive
- ✅ Added "Complete" to handoff section for consistency

---

## Phase 2: Template Integration ✅ COMPLETE

**Objective:** Update all Nunjucks templates to properly render content from markdown files.

### Completed Tasks

#### Content Files Created ✅
- ✅ `src/content/home.md` - Complete YAML front matter with hero, services, process, audiences, and CTA
- ✅ `src/content/consulting.md` - Complete YAML with approach, services, technical, process, and CTA
- ✅ `src/content/products.md` - Complete YAML with Starling details, future products, and CTA
- ✅ `src/content/about.md` - Complete YAML with hero, background paragraphs, and CTA

#### Template Files Created ✅
- ✅ `src/_includes/layouts/home.njk` - Renders all home sections (hero, services, process, audiences, CTA)
- ✅ `src/_includes/layouts/consulting.njk` - Renders consulting sections (approach, services, technical, process)
- ✅ `src/_includes/layouts/products.njk` - Renders product showcase (Starling, future products)
- ✅ `src/_includes/layouts/about.njk` - Renders about content (hero, background, CTA)

#### Build & Testing ✅
- ✅ All YAML syntax errors resolved
- ✅ Build succeeds with all 5 pages (home, consulting, products, about, 404)
- ✅ Content renders correctly in generated HTML
- ✅ Development server tested and working

**All content files now contain structured data from the finalized copy and templates properly render all sections.**

---

## Phase 3: Design System Integration ✅ COMPLETE

**Objective:** Apply comprehensive design system based on Refactoring UI principles with full responsive design.

### Completed Tasks

#### Design Review ✅
- ✅ Reviewed website-style-guide.docx (Refactoring UI principles)
- ✅ Reviewed design/DESIGN-SYSTEM.md documentation  
- ✅ Reviewed design/styles.css (987 lines of comprehensive styles)

#### Styles Integration ✅
- ✅ Copied design/styles.css to src/css/styles.css
- ✅ Added 600+ lines of page-specific component styles
- ✅ All sections styled: hero, services, process, approach, technical, audiences, CTA, starling, background

#### Component Styling Applied ✅
- ✅ Service cards with left accent borders, box shadows, hover effects
- ✅ Process steps with badges, dividers, and proper spacing
- ✅ CTA sections with gradient backgrounds
- ✅ Technical section with responsive grid layout
- ✅ Audience cards with hover states and top accent borders
- ✅ Starling product cards with purple accent theme
- ✅ Background sections with optimal typography (65ch max-width)

#### Responsive Design Implemented ✅
- ✅ Mobile (< 768px): Single column, reduced font sizes, stacked grids
- ✅ Tablet (768px - 1024px): 2-column grids where appropriate, scaled typography
- ✅ Large screens (> 1440px): Max-width containers for readability
- ✅ Proper padding and spacing at all breakpoints

#### Build & Testing ✅
- ✅ Build successful: `npm run production` completes without errors
- ✅ All 4 pages render with proper styling
- ✅ CSS variables working throughout (color, spacing, typography, shadows)
- ✅ Development server tested on http://localhost:8081

**Design system fully integrated with professional, polished appearance based on Refactoring UI principles.**

---

## Next Phase: Phase 4 - Polish & Testing

**Objective:** Final visual polish, enhancements, and deployment preparation.

**Suggested Tasks:**
- Visual review and minor styling adjustments
- Add icon assets if desired (Heroicons, Feather, or Lucide recommended)
- Test across different browsers (Chrome, Firefox, Safari)
- Performance audit and optimization
- Accessibility review (color contrast, keyboard navigation)
- Final QA testing
- Deployment setup

---

## Subsequent Phases

### Phase 4: Polish & Testing
- Visual review and refinements
- Icon integration (optional)
- Cross-browser testing
- Performance optimization
- Accessibility audit
- Final QA
- Deploy

---

## Reference Documents

- **Content to edit:** [draft_copy/moonspire_website_copy.md](draft_copy/moonspire_website_copy.md)
- **Full plan:** [PROJECT_PLAN.md](PROJECT_PLAN.md)
- **Design reference:** [design/DESIGN-SYSTEM.md](design/DESIGN-SYSTEM.md)

---

**Ready to start?** Begin with the discovery/scoping section in [draft_copy/moonspire_website_copy.md](draft_copy/moonspire_website_copy.md)
