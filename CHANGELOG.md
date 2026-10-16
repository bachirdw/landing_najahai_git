# Changelog

## Account journey and beta navigation (2026-10-17)

- Add Install beta to the existing desktop and mobile navigation, with the beta active state.
- Restore the Pricing hero, featured weekly plan and FAQ from eb62f3b; keep one centered plan linking to Subscribe, with included AI budget and daily limits instead of unlimited promises.
- Validation: npm run build passed (7 pages); Chromium at 1280/390 px confirmed the navigation journey, centered single plan and mobile FAQ, without overflow or JavaScript errors.

## Private beta onboarding — 13 October 2026

- Replace the unfinished Web Store link with a beta installation page and the public ZIP.
- Explain permissions, manual updates, problem reports and invited account access.
- Replace placeholder privacy and terms with the current beta operation and Bachir Diaw’s approved contact.
- Present the current beta as free and invitation-only; label 50 AUD/week as a planned paid version, without unlimited usage promises.

- Prepare beta v1.1 installation guidance for personal invited or paid accounts, keep subscription management in the app, and allow explicit local preview URLs without changing production defaults.

## Beta guide presentation (2026-10-17)

- Reuse existing Hero and resume-builder structure and global classes on the beta guide; remove inline styles while preserving BaseLayout, Nav and FooterSimple.
- Validation: Astro built 7 routes; beta guide checked in Chromium at 1280/390 px without overflow or JavaScript errors. Shared layout, navigation, footer and global CSS remain unchanged.
