# Design System

**Last updated**: 2026-10-01
**Personality**: calm, credible, warm, quietly technical. In practice: muted teal and warm neutrals rather than bright color, generous whitespace, serif headings over a plain sans body, one amber accent reserved for the main action on a page.

## Token files

- `src/css/styles.css`, `:root` block: every color ramp and semantic color, the spacing scale and `--section-space`, type scale, font families and weights, line heights, radii, container widths, shadows, and transitions. The breakpoint blocks at 1024px and 768px override a few type sizes and `--section-space`.

There is no other stylesheet. Page-specific rules live further down the same file.

## Spacing

- Every margin, padding, and gap uses a `--space-*` token. Borders and outlines (1-4px strokes) are the only raw pixel values.
- Sections own the vertical rhythm. Every `<section>` gets `--section-space` top and bottom, so adjacent sections are always two of them apart. Headings inside a section (`.section-header`, `.cta__header`) have no top margin.
- The first section after a hero gets `--space-16` on top (`--space-12` on phones) for extra room under the dark band.
- The last child of `.container`, `.content--medium`, and `.content--narrow` has no bottom margin, so a trailing paragraph doesn't add to the section gap.
- To pull an intro closer to what it introduces, drop the padding between those two sections (see `.product-band__intro`) rather than adding a custom value.

## Layout

- All page content shares one left edge: the `.container` edge the hero heading sits on. Constrain width with `.content--medium` (long-form pages, screenshots) or `.content--narrow` (forms, short summaries) inside a `.container`, not with a centered `.container--*` modifier.
- Paragraphs stop at `--container-text` (65ch) unless a component overrides it.
- The dark `.cta` card is the one centered element on a page. It is a standalone block, so it breaks from the left edge on purpose.

## Type

- **Lora**: headings and the CTA card title. The serif gives the site its considered, editorial tone.
- **Plus Jakarta Sans**: UI text (logo, nav, buttons, eyebrow labels).
- **Inter**: body copy and form fields.

| Role | Style |
|---|---|
| Hero title | `h1` in `.hero`, Lora bold, tight leading |
| Section title | `.section-header` |
| Item title inside a section | `.service-card__title`, teal |
| Hero subtitle | `.hero p`, `--teal-200` on the dark band |
| Lead paragraph | `.product-band__lead`, `.product-intro p` |
| Small label above a section | `.eyebrow`, all caps, tracked out |
| Secondary line under a title | `.service-card__subtitle`, italic, secondary text color |

## Color

- **Teal** (`--teal-50` to `--teal-950`): the brand. 950 and 900 are the dark surfaces (`--color-surface-dark`, `--color-surface-dark-raised`) for the header, hero, footer, and CTA card. 700 is primary and links.
- **Amber** (`--amber-*`): primary buttons (`--color-cta`), links inside the hero, the line under the hero, and focus rings on dark surfaces. Use it for one main action per screen area, not as decoration.
- **Warm grey** (`--grey-*`): page background (50), muted band (100), text (900, 600, 500), borders (200, 400).

Rules of use:

- Text on light surfaces uses `--color-text`, `--color-text-secondary`, or `--color-text-tertiary`. `--grey-500` is the lightest grey that passes 4.5:1; don't use lighter greys for text.
- Links use `--color-link`. `--color-accent` (`--teal-500`) fails text contrast on light backgrounds and is for decoration only: accent borders, list markers, check marks.
- Non-text indicators that need to be seen (input borders, inactive carousel dots) use `--grey-400` or darker, which meets 3:1.
- On dark surfaces, de-emphasized text is `--teal-200`, not grey.
- There are no success/warning/danger colors yet. The contact form's success message uses the teal panel style. Add semantic ramps when something needs an error state.

## Depth

- `--shadow-1`: resting buttons, the header.
- `--shadow-2`: dropdown submenu, hovered buttons, cards.
- `--shadow-3`: screenshots and carousels, the CTA card.
- `--shadow-4` and `--shadow-5`: defined but unused; reserve for overlays.

All shadows share one light source from above and are tinted with the dark teal hue.

## Component conventions

- **Buttons**: `.btn--primary` (amber) is the main action; `.btn--secondary` (teal outline) sits beside it for an alternative, such as a second store link. The secondary outline is an inset shadow, not a border, so both buttons are the same size. `.btn--large` is for the single action in a hero or CTA card.
- **Accent border**: a 4px `--color-accent` left border marks a grouped item in a list of peers (`.service-card`) or a callout (`.panel`, `.form-success`). Don't combine it with a shadow.
- **Dark CTA card** (`.cta`): closes a page with one call to action or the newsletter form. Centered, `--container-narrow` wide, `--shadow-3`. On phones it keeps a `--space-4` gutter.
- **Muted band** (`.product-band`): a `--color-bg-muted` background groups a run of sections into one walkthrough. Its sections supply the padding inside it.
- **Screenshots**: rounded `--radius-lg` with `--shadow-3`. In a carousel, the track carries the radius and shadow, not each image. Tall screenshots use `.carousel--narrow`.
- **Carousel dots**: the current dot is wider and primary-colored, so it doesn't rely on color alone.
- **Focus**: every interactive element shows a 2px `--color-focus` ring on keyboard focus, switched to `--color-focus-on-dark` inside the header, footer, hero, and CTA card. Form fields use a border color change plus a soft teal ring instead.
- **Nav**: the current page's link (`aria-current="page"`) uses the same raised background as hover.
- **Radius**: `--radius-md` for buttons, inputs, and panels; `--radius-lg` for screenshots and icons; `--radius-xl` for the CTA card and the hero product icon.
