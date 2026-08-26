import type { WistemEvent } from "../types"

function buildMonthGrid(year: number, month: number) {
  const firstDay = new Date(year, month, 1)
  const startOffset = (firstDay.getDay() + 6) % 7 // Monday-first
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells: (Date | null)[] = []
  for (let i = 0; i < startOffset; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d))
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}

function toIso(date: Date) {
  return date.toISOString().slice(0, 10)
}

export function CalendarGrid({
  year,
  month,
  events,
  selectedDate,
  onSelectDate,
}: {
  year: number
  month: number
  events: WistemEvent[]
  selectedDate: string | null
  onSelectDate: (iso: string) => void
}) {
  const cells = buildMonthGrid(year, month)
  const today = toIso(new Date())
  const eventsByDate = events.reduce<Record<string, WistemEvent[]>>((acc, e) => {
    acc[e.date] = acc[e.date] ? [...acc[e.date], e] : [e]
    return acc
  }, {})

  return (
    <div>
      <div className="grid grid-cols-7 text-center mb-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <div key={d} className="font-mono text-xs text-muted py-2">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1.5">
        {cells.map((date, i) => {
          if (!date) return <div key={i} />
          const iso = toIso(date)
          const dayEvents = eventsByDate[iso] ?? []
          const isSelected = iso === selectedDate
          const isToday = iso === today

          return (
            <button
              key={iso}
              onClick={() => onSelectDate(iso)}
              className={`aspect-square rounded-none p-1.5 flex flex-col items-start border-2 transition-colors ${
                isSelected
                  ? "bg-iris border-ink"
                  : isToday
                  ? "bg-lilac border-ink"
                  : "bg-white border-ink hover:bg-lilac/40"
              }`}
            >
              <span
                className={`text-xs font-mono ${
                  isSelected ? "text-white" : "text-ink/70"
                }`}
              >
                {date.getDate()}
              </span>
              <div className="flex flex-wrap gap-0.5 mt-auto">
                {dayEvents.slice(0, 3).map((e) => (
                  <span
                    key={e.id}
                    className="w-1.5 h-1.5 rounded-none"
                    style={{ backgroundColor: isSelected ? "white" : e.color }}
                  />
                ))}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}