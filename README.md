# WiSTEM Website

The public-facing website for the WiSTEM (Women in STEM) university society —
a full frontend template with realistic mock data, ready to wire up to a
real backend.

## Run it

```
npm install
npm run dev
```

## What's here

**Stack:** React, TypeScript, Vite, Tailwind CSS v4, React Router.

**Pages** (`src/pages/`):
- `Home` — hero, upcoming events, about/stats, opportunities, Instagram feed, newsletter
- `About` — mission, values, milestone timeline
- `Events` + `EventDetails` — search, category filters, RSVP
- `CalendarPage` — month view and upcoming view, filterable by category, click a date to see what's on
- `OpportunitiesPage` — search, filters, deadline sorting, "deadline approaching" section, save-to-local-state, and a quick-add form for committee members
- `ResourcesPage` — grouped by Careers / Learning / University / Wellbeing
- `CommitteePage` — grouped by role
- `Join` — membership signup form with validation and a success state
- `Contact` — general contact form + event suggestion form
- `Dashboard` — a concept for a future logged-in member area (mocked)

**Data & types:**
- `src/data/mock.ts` — every bit of mock content in one file (events, opportunities, committee, resources, milestones). Swap this for real API calls without touching component code.
- `src/types/index.ts` — shared TypeScript types matching the mock data shape.

**Shared components** (`src/components/`): `Navbar`, `Footer`, `EventCard`,
`OpportunityCard`, `CalendarGrid`, `NewsletterForm`, `Badge`, `Section`,
`OrbitGraphic` (the hero's signature visual), `RootLayout`.

## Where a real backend plugs in

Every form has a `// TODO` at its submit handler:
- `NewsletterForm` — email provider
- `Join` — membership API / SU system
- `Contact` — support inbox
- Event suggestion form (`Contact.tsx`) — events pipeline
- Opportunity quick-add form (`OpportunitiesPage.tsx`) — opportunities database
- RSVP (`EventDetails.tsx`, `CalendarPage.tsx`) — currently just local state
- `Dashboard.tsx` — needs real auth; member data is hardcoded

## Design tokens

Colors, fonts, and spacing live in `src/index.css` under the `@theme`
block: `ink` (near-black violet, text), `iris` (primary purple), `bloom`
(pink accent), `lilac` (soft tint backgrounds), `cream` (page background),
`violet-deep` (dark sections — hero, footer). Fonts: Space Grotesk
(display), Plus Jakarta Sans (body), JetBrains Mono (labels/data).
