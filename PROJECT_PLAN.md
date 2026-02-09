# Moonspire Labs Website - Implementation Plan

**Created:** February 9, 2026  
**Status:** Phase 1 - Content Revision

## Project Goal

Create a clean, professional website for Moonspire Labs with:
- Clear messaging about consulting services
- Professional design following Refactoring UI principles
- Easy-to-maintain content structure
- Fast, responsive static site

## Implementation Phases

### Phase 1: Content Refinement ⏳ IN PROGRESS

**Objective:** Finalize all website copy with clear messaging and consistent service offerings.

**Tasks:**
1. **Review and revise `draft_copy/moonspire_website_copy.md`:**
   - Clarify discovery/scoping pricing and process
   - Ensure discovery fee credit is clearly explained
   - Adjust timeline expectations (currently 4-8 weeks may be too fast)
   - Review pricing ($15-30k range) for appropriateness
   - Ensure service descriptions are consistent across Home and Consulting pages
   - Target audience clarity: small technical startups with ideas + research teams converting prototypes

2. **Key messaging points to address:**
   - Discovery work is PAID and a DEPOSIT toward the main project
   - Proposal contains full estimate; discovery payment is credited toward total
   - Clear value proposition for target audiences
   - Realistic engagement timelines
   - Transparent pricing structure

3. **Deliverable:** Finalized `draft_copy/moonspire_website_copy.md` ready to integrate into site

---

### Phase 2: Template Integration ⏳ PLANNED

**Objective:** Update all Nunjucks templates to properly render content from markdown files.

**Approach:**
- Store copy in content markdown files as front matter variables
- Reference these variables in Nunjucks templates
- Use structured data (objects, arrays) for sections, cards, services
- Keep templates clean and maintainable

**Files to Update:**

1. **Home Page**
   - Content: `src/content/home.md` - Add/update front matter from finalized copy
   - Template: `src/_includes/layouts/home.njk` - Render hero, services, process sections

2. **Consulting Page**
   - Content: `src/content/consulting.md` - Restructure with all services and process details
   - Template: `src/_includes/layouts/consulting.njk` - Render services, approach, process

3. **Products Page**
   - Content: `src/content/products.md` - Add Starling description and future products section
   - Template: `src/_includes/layouts/products.njk` - Render product cards and descriptions

4. **About Page**
   - Content: `src/content/about.md` - Add background, philosophy, values
   - Template: `src/_includes/layouts/about.njk` - Render bio and company information

**Components to Use:**
- `components/card.njk` - For service cards, feature cards
- `components/cta-block.njk` - For call-to-action sections
- `components/service-card.njk` - For consulting service offerings
- `components/product-card.njk` - For product showcases

**Validation:**
- Run `npm start` after each page update
- Verify content renders correctly
- Check for build errors
- Test navigation between pages

**Deliverable:** All pages rendering content from markdown files with working navigation

---

### Phase 3: Design System Integration ⏳ PLANNED

**Objective:** Apply the Refactoring UI-based design system to create a polished, professional appearance.

**Resources:**
- Design documentation: `design/DESIGN-SYSTEM.md`
- Design system CSS: `design/styles.css`
- Style guide reference: `design/website-style-guide.docx` (Refactoring UI principles)

**Implementation Steps:**

1. **Integrate Design System CSS**
   - Copy design tokens from `design/styles.css` to `src/css/styles.css`
   - Ensure all CSS custom properties are available
   - Maintain existing critical.css for base resets

2. **Apply Typography System**
   - Use restrictive type scale (xs to 6xl)
   - Apply proper font weights (400, 500, 600, 700)
   - Set line heights inversely proportional to font size
   - Implement tighter letter-spacing for headlines

3. **Implement Color System**
   - Apply 9-shade grey scale with cool blue tint
   - Use primary blue for actions and emphasis
   - Use accent purple sparingly for highlights
   - Apply semantic colors (success, warning, error, info) where appropriate
   - Ensure text color hierarchy (primary, secondary, tertiary)

4. **Apply Spacing System**
   - Use 4px base unit spacing scale
   - Ensure consistent spacing within and between sections
   - More space between groups than within groups
   - Maximum content width: 1200px

5. **Implement Component Styles**
   - **Buttons:** Primary, secondary, tertiary, outline, danger variants
   - **Cards:** Shadow-based elevation, featured variants
   - **Panels:** Colorful left accent borders for info blocks
   - **Navigation:** Hover states and background feedback
   - **Forms:** Focus states with ring effect

6. **Apply Shadow System**
   - Use 5 elevation levels (shadow-1 to shadow-5)
   - Two-part shadows for realistic depth
   - Lighter elements appear closer

7. **Responsive Design**
   - Mobile-first approach
   - Large elements shrink faster (headlines 33%, body 11%)
   - Test at breakpoints: 480px, 768px, 1024px
   - Proportional scaling of spacing and typography

**Testing Checklist:**
- [ ] Typography scales appropriately
- [ ] Colors provide sufficient contrast
- [ ] Components render consistently
- [ ] Shadows provide proper depth
- [ ] Responsive at all breakpoints
- [ ] Hover and focus states work
- [ ] Mobile navigation functions properly
- [ ] No visual regressions

**Deliverable:** Fully styled website matching design system documentation

---

### Phase 4: Polish & Finalization ⏳ PLANNED

**Objective:** Final touches, asset creation, and quality assurance.

**Tasks:**

1. **Icon Assets**
   - Source or create icons for service cards
   - Ensure consistent icon style
   - Optimize SVG files
   - Add to `src/assets/icons/`

2. **Content Review**
   - Proofread all copy
   - Check for consistency
   - Verify all links work
   - Test contact form

3. **Performance Optimization**
   - Minimize CSS
   - Optimize images (if any)
   - Test page load times
   - Verify build output size

4. **Cross-browser Testing**
   - Test on Chrome, Firefox, Safari, Edge
   - Verify mobile responsiveness
   - Check for visual inconsistencies

5. **Accessibility Check**
   - Verify color contrast ratios
   - Ensure keyboard navigation works
   - Check focus states
   - Test with screen reader (basic check)

6. **SEO Basics**
   - Verify meta descriptions
   - Check page titles
   - Ensure semantic HTML structure
   - Add structured data if time permits

**Deliverable:** Production-ready website ready for deployment

---

## Success Criteria

- ✅ All content is clear, consistent, and compelling
- ✅ Pricing and process information is transparent
- ✅ Design system is consistently applied
- ✅ Site is responsive and accessible
- ✅ All pages render without errors
- ✅ Navigation works seamlessly
- ✅ Ready for minor revisions and deployment

## Target Audiences

**Primary:**
1. Small technical startups (pre-seed to Series A) with ideas needing validation
2. Research teams (academic/industry) with prototypes needing production-ready systems

**Secondary:**
3. Small companies needing custom internal tools

## Key Differentiators

- Fixed-price engagements (no hourly billing)
- Paid discovery that credits toward project
- Focus on maintainability and intentional design
- Research integrity preservation
- Senior technical thinking without full team overhead

## Technical Stack

- **Generator:** Eleventy v3.1.2
- **Templates:** Nunjucks (.njk)
- **Content:** Markdown with YAML front matter
- **Styling:** CSS with custom properties (no preprocessor)
- **Output:** Static HTML/CSS/JS

## Repository Structure

```
moonspire-labs/
├── README.md                      # Project overview (CLEANED)
├── DEVELOPER_INSTRUCTIONS.md      # Developer guide (CLEANED)
├── PROJECT_PLAN.md                # This file
├── package.json
├── .eleventy.js                   # Eleventy configuration
│
├── src/                           # Source files
│   ├── _data/                     # Global data
│   ├── _includes/
│   │   ├── components/            # Reusable UI components
│   │   └── layouts/               # Page layouts
│   ├── content/                   # Markdown content files
│   ├── css/                       # Stylesheets
│   └── assets/                    # Static assets
│
├── design/                        # Design resources
│   ├── DESIGN-SYSTEM.md           # Complete design documentation
│   ├── styles.css                 # Design system CSS (to integrate)
│   └── website-style-guide.docx   # Refactoring UI reference
│
├── draft_copy/                    # Content drafts
│   └── moonspire_website_copy.md  # Master copy document
│
└── archive/                       # Obsolete files
    ├── TODO_CHECKLIST.md          # Old checklist
    ├── Eleventy-Site-Prompt.md    # Old AI prompt
    ├── README.md                  # Old README
    ├── color-palette-options.css  # Color experiments
    └── color-palettes.md          # Color research
```

## Next Steps

1. ✅ **Documentation cleanup** - COMPLETE
2. ⏳ **Phase 1** - Revise `draft_copy/moonspire_website_copy.md` for clarity, consistency, and realistic expectations
3. ⏳ **Phase 2** - Integrate finalized copy into content markdown files and update templates
4. ⏳ **Phase 3** - Apply design system styling
5. ⏳ **Phase 4** - Final polish and testing

---

**Last Updated:** February 9, 2026
