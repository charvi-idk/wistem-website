import { Link } from "react-router-dom"
import type { WistemEvent } from "../types"
import { Badge } from "./Badge"

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  })
}

export function EventCard({ event }: { event: WistemEvent }) {
  return (
    <Link
      to={`/events/${event.id}`}
      className="group flex flex-col rounded-none border-2 border-ink pixel-shadow bg-white overflow-hidden hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_0_var(--color-ink)] transition-all"
    >
      <div
        className="h-32 flex items-end p-4"
        style={{
          background: `linear-gradient(135deg, color-mix(in srgb, ${event.color} 85%, black), ${event.color})`,
        }}
      >
        <span className="font-mono text-xs text-white/90 bg-black/20 rounded-none px-2.5 py-1">
          {formatDate(event.date)}
        </span>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <Badge label={event.category} color={event.color} />
        <h3 className="font-display font-semibold text-lg mt-3 group-hover:text-iris transition-colors">
          {event.title}
        </h3>
        <p className="text-sm text-muted mt-1.5 flex-1">{event.description}</p>
        <div className="mt-4 pt-4 border-t-2 border-ink text-xs text-muted space-y-1">
          <p>{event.time}</p>
          <p>{event.location}</p>
        </div>
      </div>
    </Link>
  )
}