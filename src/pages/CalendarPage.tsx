import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { Section } from "../components/Section"
import { Badge } from "../components/Badge"
import { CalendarGrid } from "../components/CalendarGrid"
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

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]

export function CalendarPage() {
  const [view, setView] = useState<"month" | "upcoming">("month")
  const [category, setCategory] = useState<EventCategory | "All">("All")
  const [cursor, setCursor] = useState(new Date(2026, 8, 1)) // September 2026
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [rsvps, setRsvps] = useState<Record<string, boolean>>({})

  const filteredEvents = useMemo(
    () => events.filter((e) => category === "All" || e.category === category),
    [category]
  )

  const eventsOnSelectedDate = filteredEvents.filter((e) => e.date === selectedDate)

  const upcoming = [...filteredEvents].sort((a, b) => a.date.localeCompare(b.date))

  function changeMonth(delta: number) {
    setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + delta, 1))
    setSelectedDate(null)
  }

  return (
    <Section eyebrow="Calendar" title="What's happening, when" description="Every WiSTEM event in one place.">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex gap-2">
          <ToggleButton active={view === "month"} onClick={() => setView("month")}>Month view</ToggleButton>
          <ToggleButton active={view === "upcoming"} onClick={() => setView("upcoming")}>Upcoming</ToggleButton>
        </div>

        <div className="flex flex-wrap gap-2">
          <FilterChip active={category === "All"} onClick={() => setCategory("All")}>All</FilterChip>
          {CATEGORIES.map((c) => (
            <FilterChip key={c} active={category === c} onClick={() => setCategory(c)}>{c}</FilterChip>
          ))}
        </div>
      </div>

      {view === "month" ? (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <button onClick={() => changeMonth(-1)} className="w-9 h-9 rounded-full border border-line hover:bg-lilac/50 flex items-center justify-center">‹</button>
              <p className="font-display font-semibold text-lg">
                {MONTH_NAMES[cursor.getMonth()]} {cursor.getFullYear()}
              </p>
              <button onClick={() => changeMonth(1)} className="w-9 h-9 rounded-full border border-line hover:bg-lilac/50 flex items-center justify-center">›</button>
            </div>
            <CalendarGrid
              year={cursor.getFullYear()}
              month={cursor.getMonth()}
              events={filteredEvents}
              selectedDate={selectedDate}
              onSelectDate={(iso) => setSelectedDate(iso === selectedDate ? null : iso)}
            />
          </div>

          <aside className="rounded-2xl border border-line bg-white p-6 h-fit">
            {!selectedDate ? (
              <p className="text-sm text-muted">Select a date to see what's on.</p>
            ) : eventsOnSelectedDate.length === 0 ? (
              <p className="text-sm text-muted">Nothing scheduled on this date.</p>
            ) : (
              <div className="space-y-6">
                {eventsOnSelectedDate.map((e) => (
                  <EventDetailBlock
                    key={e.id}
                    event={e}
                    rsvped={!!rsvps[e.id]}
                    onRsvp={() => setRsvps((r) => ({ ...r, [e.id]: true }))}
                  />
                ))}
              </div>
            )}
          </aside>
        </div>
      ) : (
        <div className="space-y-3 max-w-2xl">
          {upcoming.map((e) => (
            <Link
              key={e.id}
              to={`/events/${e.id}`}
              className="flex items-center gap-4 rounded-xl border border-line bg-white px-4 py-3 hover:border-lilac-line transition-colors"
            >
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: e.color }} />
              <span className="font-mono text-xs text-muted w-20 shrink-0">
                {new Date(e.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
              </span>
              <span className="text-sm font-medium flex-1">{e.title}</span>
              <Badge label={e.category} color={e.color} />
            </Link>
          ))}
        </div>
      )}
    </Section>
  )
}

function EventDetailBlock({
  event,
  rsvped,
  onRsvp,
}: {
  event: (typeof events)[number]
  rsvped: boolean
  onRsvp: () => void
}) {
  return (
    <div>
      <Badge label={event.category} color={event.color} />
      <h3 className="font-display font-semibold mt-2">{event.title}</h3>
      <p className="text-sm text-muted mt-1">{event.description}</p>
      <dl className="mt-3 space-y-1 text-xs text-muted">
        <div><dt className="inline font-mono">Time — </dt><dd className="inline">{event.time}</dd></div>
        <div><dt className="inline font-mono">Where — </dt><dd className="inline">{event.location}</dd></div>
        <div><dt className="inline font-mono">Host — </dt><dd className="inline">{event.organiser}</dd></div>
        <div><dt className="inline font-mono">Capacity — </dt><dd className="inline">{event.capacity}</dd></div>
      </dl>
      {rsvped ? (
        <p className="mt-3 text-sm font-medium" style={{ color: "#3E8C6A" }}>✓ You're going</p>
      ) : (
        <button
          onClick={onRsvp}
          className="mt-3 w-full rounded-full bg-iris text-white text-sm font-medium py-2 hover:bg-iris-dark transition-colors"
        >
          RSVP
        </button>
      )}
      <Link to={`/events/${event.id}`} className="block mt-2 text-xs text-iris hover:underline">
        Full details →
      </Link>
    </div>
  )
}

function ToggleButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        active ? "bg-iris text-white" : "bg-white border border-line text-ink/70"
      }`}
    >
      {children}
    </button>
  )
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
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
