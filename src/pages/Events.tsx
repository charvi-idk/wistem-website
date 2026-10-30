import { useMemo, useState } from "react"
import { Section } from "../components/Section"
import { EventCard } from "../components/EventCard"
import { activities, events, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../data/mock"
import type { EventCategory } from "../types"

const CATEGORIES: EventCategory[] = [
  "Academic",
  "Careers",
  "Social",
  "Workshop",
  "Networking",
  "Hackathon",
]

export function Events() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<EventCategory | "All">("All")

  const filtered = useMemo(() => {
    return events
      .filter((e) => category === "All" || e.category === category)
      .filter((e) => e.title.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => a.date.localeCompare(b.date))
  }, [query, category])

  if (events.length === 0) {
    return (
      <Section eyebrow="Events" title="What we get up to" description="Talks, skill-building, outreach, socials, and everything in between.">
        <div className="rounded-2xl bg-lilac/50 border border-lilac-line p-6 mb-8">
          <p className="font-display font-semibold">No dates listed here right now.</p>
          <p className="text-sm text-muted mt-1">
            Follow{" "}
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-iris hover:text-iris-dark">
              {INSTAGRAM_HANDLE}
            </a>{" "}
            on Instagram for the latest from the society.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activities.map((a) => (
            <div key={a.title} className="rounded-2xl border border-line bg-white p-5">
              <h3 className="font-display font-semibold">{a.title}</h3>
              <p className="text-sm text-muted mt-2">{a.description}</p>
            </div>
          ))}
        </div>
      </Section>
    )
  }

  return (
    <div>
      <Section eyebrow="Events" title="Find your next event" description="Workshops, talks, socials, and everything in between.">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-sm">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search events…"
              className="w-full rounded-full border border-line bg-white pl-10 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-iris"
            />
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2"
              width="15" height="15" viewBox="0 0 15 15" fill="none"
            >
              <circle cx="6.5" cy="6.5" r="5" stroke="#6E6280" strokeWidth="1.3" />
              <line x1="10.2" y1="10.2" x2="14" y2="14" stroke="#6E6280" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </div>

          <div className="flex flex-wrap gap-2">
            <FilterChip active={category === "All"} onClick={() => setCategory("All")}>
              All
            </FilterChip>
            {CATEGORIES.map((c) => (
              <FilterChip key={c} active={category === c} onClick={() => setCategory(c)}>
                {c}
              </FilterChip>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-muted text-sm py-12 text-center">
            No events match "{query}". Try a different search or filter.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        )}
      </Section>
    </div>
  )
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3.5 py-2 text-xs font-medium transition-colors ${
        active ? "bg-iris text-white" : "bg-white border border-line text-ink/70 hover:bg-lilac/50"
      }`}
    >
      {children}
    </button>
  )
}
