<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into Fayda.studio, an Astro 6 site using ClientRouter (View Transitions). The integration is fully compatible with soft navigation — PostHog is initialized once with a `window.__posthog_initialized` guard to prevent stack overflow errors during page transitions, and `capture_pageview: 'history_change'` is set to automatically track pageviews on every client-side navigation.

**Files created:**
- `src/components/integrations/posthog.astro` — PostHog snippet component with View Transitions guard
- `src/env.d.ts` — TypeScript global declaration for `window.posthog` and `window.__posthog_initialized`

**Files modified:**
- `src/layouts/Layout.astro` — Imports and renders `<PostHog />` in `<head>` alongside the existing `<ClientRouter />`
- `src/components/ui/ContactForm.astro` — Tracks form submissions and service selection
- `src/components/sections/Plans.astro` — Tracks plan category tab switches
- `src/components/ui/PlanCard.astro` — Tracks "Contact for Pricing" button clicks per plan
- `src/components/sections/home/Hero.astro` — Tracks hero CTA button clicks with label + destination
- `src/components/ui/ProjectCard.astro` — Tracks project card clicks with project title + URL
- `src/components/sections/case-study/CaseStudyPage.astro` — Tracks case study bottom CTA clicks
- `src/pages/book-a-call.astro` — Tracks book-a-call page views (top of conversion funnel)
- `src/components/ui/CTA.astro` — Tracks CTA section button clicks with label + destination

**Environment variables set in `.env`:**
- `PUBLIC_POSTHOG_PROJECT_TOKEN`
- `PUBLIC_POSTHOG_HOST`

| Event | Description | File |
|-------|-------------|------|
| `contact_form_submitted` | User submits the contact enquiry form. Captures service subject. Also calls `posthog.identify()` with user email. | `src/components/ui/ContactForm.astro` |
| `contact_form_service_selected` | User selects a service from the contact form dropdown. | `src/components/ui/ContactForm.astro` |
| `plan_category_switched` | User switches between plan category tabs. Captures category ID and label. | `src/components/sections/Plans.astro` |
| `plan_cta_clicked` | User clicks "Contact for Pricing" on a plan card. Captures plan title and whether it is the popular plan. | `src/components/ui/PlanCard.astro` |
| `hero_cta_clicked` | User clicks a CTA button in the hero section. Captures button label and destination. | `src/components/sections/home/Hero.astro` |
| `project_card_clicked` | User clicks a project card. Captures project title and destination URL. | `src/components/ui/ProjectCard.astro` |
| `case_study_cta_clicked` | User clicks "Book a free strategy call" at the bottom of a case study. Captures case study title. | `src/components/sections/case-study/CaseStudyPage.astro` |
| `book_a_call_page_viewed` | User views the book-a-call page. Top of the scheduling conversion funnel. | `src/pages/book-a-call.astro` |
| `cta_section_clicked` | User clicks a CTA section button (e.g. "Book a free call" on the plans page). Captures label and destination. | `src/components/ui/CTA.astro` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics:** https://eu.posthog.com/project/157806/dashboard/616814
- **Hero → Contact Form Conversion Funnel:** https://eu.posthog.com/project/157806/insights/G1vCbE0u
- **Plan Engagement: Browse vs. Intent:** https://eu.posthog.com/project/157806/insights/freeL5DM
- **Most Clicked Projects:** https://eu.posthog.com/project/157806/insights/vHh77kjR
- **Book a Call → Contact Form Funnel:** https://eu.posthog.com/project/157806/insights/EMy9MhTs
- **CTA Section Clicks by Label:** https://eu.posthog.com/project/157806/insights/VH0lpOdC

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-astro-view-transitions/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
