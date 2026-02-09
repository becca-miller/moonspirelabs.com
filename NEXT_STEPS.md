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

## Next Phase: Phase 2 - Template Integration ⏳ READY TO START

**Objective:** Update all Nunjucks templates to properly render content from markdown files.

**Tasks:**
- Update content markdown files with finalized copy from draft_copy/moonspire_website_copy.md
- Build out Nunjucks templates to render the content
- Use structured data (objects, arrays) for sections, cards, services
- Test that all pages render correctly

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

---

## Subsequent Phases

### Phase 3: Design System Integration
- Copy design/styles.css into src/css/styles.css
- Apply component styles
- Implement responsive design

### Phase 4: Polish & Testing
- Add icon assets
- Final QA
- Deploy

---

## Reference Documents

- **Content to edit:** [draft_copy/moonspire_website_copy.md](draft_copy/moonspire_website_copy.md)
- **Full plan:** [PROJECT_PLAN.md](PROJECT_PLAN.md)
- **Design reference:** [design/DESIGN-SYSTEM.md](design/DESIGN-SYSTEM.md)

---

**Ready to start?** Begin with the discovery/scoping section in [draft_copy/moonspire_website_copy.md](draft_copy/moonspire_website_copy.md)
