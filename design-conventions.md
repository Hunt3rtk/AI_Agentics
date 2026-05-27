<!-- markdownlint-disable MD013 -->

# Design Conventions

Purpose
- Central source of truth for visual and interaction patterns used by the `Frontend Designer` agent.
- Keeps UI consistent, accessible, and aesthetically cohesive across components and pages.

Scope
- Applies to HTML/CSS/JS components and small pages produced by the `Frontend Designer` agent.
- Exceptions must be documented (third-party widgets, vendor files, or design-system-wide overrides).

Tokens & Variables
- Colors (CSS variables):
  - `--color-bg`: #ffffff
  - `--color-surface`: #f7f7fb
  - `--color-primary`: #0b69ff
  - `--color-primary-600`: #0056d6
  - `--color-accent`: #00c2a8
  - `--color-text`: #0f1724
  - `--color-muted`: #6b7280
  - `--color-danger`: #e02424
- Spacing scale (rem): 0.25, 0.5, 1, 1.5, 2, 3 (use named tokens `xs`, `sm`, `md`, `lg`, `xl`, `xxl`).
- Type scale and font stack:
  - Base font: system stack Ã¢â‚¬â€ `Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial`.
  - Sizes: `--font-size-base`: 16px, `--font-size-lg`: 20px, `--font-size-sm`: 14px.

Layout & Breakpoints
- Use mobile-first responsive CSS.
- Breakpoints: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px.
- Prefer flexible containers (CSS Grid / Flexbox) with sensible max-widths (e.g., 1200px).

Typography
- Use semantic headings (`h1`..`h6`) and meaningful structure.
- Line-height: 1.4Ã¢â‚¬â€œ1.6 depending on font size.
- Avoid decorative fonts for body copy; reserve for branding headings with fallbacks.

Color & Contrast
- Aim for minimum contrast ratio 4.5:1 for body text, 3:1 for large text.
- Use `--color-primary` for CTAs; ensure hover/focus states use darker shade (`--color-primary-600`).

Accessibility
- Always label form controls with `<label>`; use `aria-*` only when semantic HTML is insufficient.
- Provide skip links for pages with navigation.
- Ensure focus-visible styles are clear and preserved.
- Keyboard-only interaction must be supported for interactive components (modals, dropdowns).

Components
- Keep components small, composable, and dependency-free by default.
- Provide a demo HTML file for each component showing expected markup and behavior.
- Prefer progressive enhancement: HTML first, CSS next, JS for enhancements.

CSS Conventions
- Use clear, descriptive class names (BEM-like or `component__element--modifier`).
- Use CSS variables for theme tokens.
- Keep specificity low; avoid `!important`.

JavaScript
- Prefer unobtrusive, small vanilla JS modules. Export a single initializer function per component.
- Keep state local; avoid global variables.
- When adding event listeners, clean up on destroy.

Interaction & Motion
- Use motion sparingly; prefer 150Ã¢â‚¬â€œ300ms durations and `ease` easing.
- Respect user `prefers-reduced-motion`.

Images & Media
- Use responsive images (`srcset`) and lazy-loading where appropriate.
- Provide `alt` text for all meaningful images.

Icons
- Prefer inline SVGs or a simple SVG sprite. Keep icons accessible (use `aria-hidden="true"` for decorative icons).

Naming & File Layout
- Place components under `src/components/<component-name>/` with `index.html`, `styles.css`, `script.js`, and `README.md` demo.

Versioning and Changes
- For large design-system changes, create a migration plan and coordinate via the Orchestrator agent.

Acceptance Checklist (for generated components)
- Mobile-first responsive behavior validated.
- Semantic HTML used.
- Color contrast >= 4.5:1 for body text.
- Keyboard navigation works for interactive controls.
- Focus styles visible.
- Minimal and documented JS with no global leaks.

Reference
- WCAG 2.1 AA
- MDN Web Docs (HTML/CSS/ARIA best practices)
