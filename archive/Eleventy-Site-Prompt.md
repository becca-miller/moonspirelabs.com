You are an expert Eleventy developer. Generate a complete static site for Moonspire Digital v1 using the Eleventy static site generator and Nunjucks templates. Follow these rules carefully:

1. **Content Source**  
   Use Eleventy-Site-Specs.md as the source of truth for all content, page structure, styling, and branding. Do not invent content. Maintain headings, lists, copy, and text exactly as specified.

2. **Site Structure**
   - Four main pages: Home (/), Consulting (/consulting/), Products & Experiments (/products/), About (/about/)
   - Navigation should be consistent across pages
   - Footer includes: company name, year, and optional link to personal site

3. **Templates & Layout**
   - Use Nunjucks templates with partials for header, footer, and common sections
   - Include a main layout template (`base.njk`) with slots for page content
   - Each page uses its own content file in Markdown or Nunjucks as appropriate
   - Use semantic HTML (header, main, footer, section, article, etc.)

4. **Styling**
   - Use the provided CSS variables for colors, spacing, typography, and layout
   - Ensure the site is responsive and readable
   - Avoid flashy animations; hover/focus states only where specified
   - Include button styles as defined

5. **Assets**
   - Use placeholder images/icons where indicated or where needed for layout
   - Include text-only v1 logo in header (Moonspire Digital)
   - Ensure any logo or accent icon follows branding guidance (minimal, subtle)

6. **Behavior**
   - No blog functionality for v1
   - Links, buttons, and navigation should work
   - Contact form can be a simple HTML form with `mailto:` action or placeholder

7. **File Organization**
   - Recommended Eleventy project structure:
     ```
     /src
       /_includes
         header.njk
         footer.njk
         base.njk
       /pages
         index.md
         consulting.md
         products.md
         about.md
       /assets
         /css
           styles.css
     .eleventy.js
     package.json
     ```
   - CSS can be placed in `assets/css/styles.css`
   - Include color, spacing, and typography constants as defined

8. **Additional Notes**
   - Maintain calm, thoughtful, senior tone across the site
   - Content should be editable; Markdown files should contain all text
   - Ensure the site is easy to maintain and update for future rebranding

**Task:**  
Generate all necessary Eleventy files, including Nunjucks templates, Markdown content files, CSS, and a sample `.eleventy.js` configuration file. Do not include node_modules. Structure the output so it can be copy-pasted into a fresh Eleventy project and run immediately.

The Eleventy files should be generated in the project directory, `Moonspire-Digital-Site/site-code`

