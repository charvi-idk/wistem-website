import { useMemo, useState } from "react"
import { Section } from "../components/Section"
import { EventCard } from "../components/EventCard"
import { events } from "../data/mock"
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
