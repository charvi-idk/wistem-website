import { Link } from "react-router-dom"
import { Section } from "../components/Section"
import { events, resources } from "../data/mock"

// TODO: replace with real authenticated member session data
const mockMember = {
  name: "Elle",
  course: "Physics",
  year: "2nd Year",
  memberSince: "September 2025",
  savedOpportunities: ["Google STEP Internship Programme", "IET Diamond Jubilee Scholarship"],
  recentlyViewed: resources.slice(0, 3),
}

export function Dashboard() {
  const upcoming = events.slice(0, 3)

  return (
    <Section eyebrow="Your account" title={`Welcome back, ${mockMember.name}`}>
      <p className="text-sm text-muted -mt-6 mb-10">
        This is a concept for a logged-in member area — authentication isn't
        wired up yet.
      </p>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Upcoming events">
            <ul className="space-y-3">
              {upcoming.map((e) => (
                <li key={e.id}>
                  <Link to={`/events/${e.id}`} className="flex items-center justify-between text-sm hover:text-iris">
                    <span>{e.title}</span>
                    <span className="font-mono text-xs text-muted">
                      {new Date(e.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Saved opportunities">
            {mockMember.savedOpportunities.length === 0 ? (
              <p className="text-sm text-muted">
                Nothing saved yet — browse <Link to="/opportunities" className="text-iris">opportunities</Link> and tap the bookmark icon.
              </p>
            ) : (
              <ul className="space-y-2">
                {mockMember.savedOpportunities.map((o) => (
                  <li key={o} className="text-sm">{o}</li>
                ))}
              </ul>
            )}
          </Card>

          <Card title="Recently viewed resources">
            <ul className="space-y-2">
              {mockMember.recentlyViewed.map((r) => (
                <li key={r.id} className="text-sm">{r.title}</li>
              ))}
            </ul>
          </Card>
        </div>

        <Card title="Membership">
          <dl className="space-y-3 text-sm">
            <Row label="Course" value={mockMember.course} />
            <Row label="Year" value={mockMember.year} />
            <Row label="Member since" value={mockMember.memberSince} />
          </dl>
        </Card>
      </div>
    </Section>
  )
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6">
      <h3 className="font-display font-semibold mb-4">{title}</h3>
      {children}
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <dt className="text-muted">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  )
}
