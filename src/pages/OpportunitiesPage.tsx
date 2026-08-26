import { useMemo, useState } from "react"
import { Section } from "../components/Section"
import { OpportunityCard } from "../components/OpportunityCard"
import { opportunities as initialOpportunities } from "../data/mock"
import type { Opportunity, OpportunityCategory } from "../types"

const CATEGORIES: OpportunityCategory[] = [
  "Internship",
  "Graduate Scheme",
  "Spring Week",
  "Scholarship",
  "Competition",
  "Hackathon",
  "Mentoring",
]

function daysUntil(iso: string) {
  return Math.ceil((new Date(iso).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
}

export function OpportunitiesPage() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>(initialOpportunities)
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<OpportunityCategory | "All">("All")
  const [saved, setSaved] = useState<Set<string>>(new Set())
  const [showSubmitForm, setShowSubmitForm] = useState(false)

  function toggleSave(id: string) {
    setSaved((s) => {
      const next = new Set(s)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const filtered = useMemo(() => {
    return opportunities
      .filter((o) => category === "All" || o.category === category)
      .filter(
        (o) =>
          o.title.toLowerCase().includes(query.toLowerCase()) ||
          o.organisation.toLowerCase().includes(query.toLowerCase())
      )
      .sort((a, b) => a.deadline.localeCompare(b.deadline))
  }, [query, category, opportunities])

  const approaching = opportunities
    .filter((o) => daysUntil(o.deadline) <= 14 && daysUntil(o.deadline) >= 0)
    .sort((a, b) => a.deadline.localeCompare(b.deadline))

  return (
    <Section
      eyebrow="Opportunities"
      title="Find your next opportunity"
      description="Internships, schemes, scholarships, and competitions — curated for WiSTEM members."
      action={
        <button
          onClick={() => setShowSubmitForm((s) => !s)}
          className="rounded-full border border-line bg-white text-sm font-medium px-4 py-2 hover:bg-lilac/50 transition-colors"
        >
          {showSubmitForm ? "Close form" : "+ Add an opportunity"}
        </button>
      }
    >
      {showSubmitForm && (
        <SubmitOpportunityForm
          onAdd={(op) => {
            setOpportunities((prev) => [op, ...prev])
            setShowSubmitForm(false)
          }}
        />
      )}

      {approaching.length > 0 && (
        <div className="mb-10 rounded-2xl bg-bloom-light border border-bloom/20 p-5">
          <p className="font-mono text-xs uppercase tracking-wide text-bloom mb-3">
            ⏰ Deadline approaching
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {approaching.map((o) => (
              <OpportunityCard key={o.id} opportunity={o} saved={saved.has(o.id)} onToggleSave={toggleSave} />
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by role or organisation…"
          className="flex-1 max-w-sm rounded-full border border-line bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-iris"
        />
        <div className="flex flex-wrap gap-2">
          <FilterChip active={category === "All"} onClick={() => setCategory("All")}>All</FilterChip>
          {CATEGORIES.map((c) => (
            <FilterChip key={c} active={category === c} onClick={() => setCategory(c)}>{c}</FilterChip>
          ))}
        </div>
      </div>

      {saved.size > 0 && (
        <p className="text-xs text-muted mb-4 font-mono">{saved.size} saved</p>
      )}

      {filtered.length === 0 ? (
        <p className="text-muted text-sm py-12 text-center">No opportunities match your filters.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((o) => (
            <OpportunityCard key={o.id} opportunity={o} saved={saved.has(o.id)} onToggleSave={toggleSave} />
          ))}
        </div>
      )}
    </Section>
  )
}

function SubmitOpportunityForm({ onAdd }: { onAdd: (op: Opportunity) => void }) {
  const [form, setForm] = useState({
    title: "",
    organisation: "",
    location: "",
    category: "Internship" as OpportunityCategory,
    deadline: "",
    description: "",
    applyUrl: "",
  })
  const [error, setError] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.title || !form.organisation || !form.deadline || !form.description) {
      setError("Fill in title, organisation, deadline, and description.")
      return
    }
    // TODO: persist to a real opportunities database
    onAdd({ id: `custom-${Date.now()}`, ...form, applyUrl: form.applyUrl || "#" })
  }

  return (
    <form onSubmit={handleSubmit} className="mb-10 rounded-2xl border border-line bg-white p-6 grid sm:grid-cols-2 gap-4">
      <input className="input" placeholder="Opportunity name" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input className="input" placeholder="Organisation" value={form.organisation} onChange={(e) => setForm({ ...form, organisation: e.target.value })} />
      <input className="input" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
      <select className="input" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as OpportunityCategory })}>
        {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
      </select>
      <input className="input" type="date" value={form.deadline} onChange={(e) => setForm({ ...form, deadline: e.target.value })} />
      <textarea className="input sm:col-span-2 resize-none" rows={2} placeholder="Short description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <input className="input sm:col-span-2" placeholder="Application link" value={form.applyUrl} onChange={(e) => setForm({ ...form, applyUrl: e.target.value })} />
      {error && <p className="text-xs text-bloom sm:col-span-2">{error}</p>}
      <button type="submit" className="sm:col-span-2 rounded-full bg-iris text-white text-sm font-medium px-6 py-2.5 hover:bg-iris-dark transition-colors">
        Add opportunity
      </button>
    </form>
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
