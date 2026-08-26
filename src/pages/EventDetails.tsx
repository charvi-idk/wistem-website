import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Section } from "../components/Section"
import { Badge } from "../components/Badge"
import { events } from "../data/mock"

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function EventDetails() {
  const { id } = useParams()
  const event = events.find((e) => e.id === id)
  const [rsvped, setRsvped] = useState(false)

  if (!event) {
    return (
      <Section title="Event not found">
        <Link to="/events" className="text-iris">← Back to events</Link>
      </Section>
    )
  }

  const spotsLeft = event.capacity - event.rsvpCount - (rsvped ? 1 : 0)

  return (
    <div>
      <div
        className="h-56 md:h-72"
        style={{
          background: `linear-gradient(135deg, color-mix(in srgb, ${event.color} 85%, black), ${event.color})`,
        }}
      />
      <Section className="!pt-10">
        <Link to="/events" className="text-sm text-muted hover:text-ink">← Back to events</Link>

        <div className="grid lg:grid-cols-3 gap-10 mt-6">
          <div className="lg:col-span-2">
            <Badge label={event.category} color={event.color} />
            <h1 className="font-display font-semibold text-3xl md:text-4xl mt-3">{event.title}</h1>
            <p className="text-muted mt-4 leading-relaxed max-w-2xl">{event.longDescription}</p>
          </div>

          <aside className="rounded-2xl border border-line bg-white p-6 h-fit space-y-4">
            <InfoRow label="Date" value={formatDate(event.date)} />
            <InfoRow label="Time" value={event.time} />
            <InfoRow label="Location" value={event.location} />
            <InfoRow label="Organiser" value={event.organiser} />
            <InfoRow label="Capacity" value={`${event.capacity} people`} />

            <div className="pt-2">
              {rsvped ? (
                <div className="rounded-lg bg-sage-bg text-center py-2.5 text-sm font-medium" style={{ backgroundColor: "#E3EFE6", color: "#3E8C6A" }}>
                  ✓ You're going
                </div>
              ) : (
                <button
                  onClick={() => setRsvped(true)}
                  disabled={spotsLeft <= 0}
                  className="w-full rounded-full bg-iris text-white text-sm font-medium py-2.5 hover:bg-iris-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {spotsLeft <= 0 ? "Fully booked" : "RSVP"}
                </button>
              )}
              <p className="text-xs text-muted text-center mt-2">
                {Math.max(spotsLeft, 0)} spots left · {event.rsvpCount + (rsvped ? 1 : 0)} going
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wide text-muted">{label}</p>
      <p className="text-sm mt-0.5">{value}</p>
    </div>
  )
}
