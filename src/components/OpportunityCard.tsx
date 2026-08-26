import type { Opportunity } from "../types"
import { Badge } from "./Badge"

function daysUntil(iso: string) {
  const diff = new Date(iso).getTime() - Date.now()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
}

export function OpportunityCard({
  opportunity,
  saved,
  onToggleSave,
}: {
  opportunity: Opportunity
  saved?: boolean
  onToggleSave?: (id: string) => void
}) {
  const days = daysUntil(opportunity.deadline)
  const soon = days <= 10 && days >= 0

  return (
    <div className="rounded-none border-2 border-ink pixel-shadow-sm bg-white p-5 flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-mono text-muted">{opportunity.organisation}</p>
          <h3 className="font-display font-semibold text-lg mt-0.5">{opportunity.title}</h3>
        </div>
        {onToggleSave && (
          <button
            onClick={() => onToggleSave(opportunity.id)}
            aria-label={saved ? "Remove from saved" : "Save opportunity"}
            className={`w-9 h-9 rounded-none border-2 border-ink flex items-center justify-center shrink-0 transition-colors ${
              saved ? "bg-bloom text-white" : "bg-lilac text-iris hover:bg-lilac-line"
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill={saved ? "currentColor" : "none"}>
              <path
                d="M4 2.5h8a.5.5 0 0 1 .5.5v10.5l-4.5-2.5-4.5 2.5V3a.5.5 0 0 1 .5-.5Z"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>

      <p className="text-sm text-muted mt-3 flex-1">{opportunity.description}</p>

      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge label={opportunity.category} />
        <span className="text-xs text-muted">{opportunity.location}</span>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t-2 border-ink">
        <span className={`text-xs font-mono ${soon ? "text-bloom font-medium" : "text-muted"}`}>
          {days < 0 ? "Closed" : soon ? `${days}d left · ${formatDate(opportunity.deadline)}` : formatDate(opportunity.deadline)}
        </span>
        <a
          href={opportunity.applyUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-iris hover:text-iris-dark"
        >
          Apply →
        </a>
      </div>
    </div>
  )
}