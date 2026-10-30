import { Link } from "react-router-dom"
import { Section } from "../components/Section"
import { EventCard } from "../components/EventCard"
import { OrbitGraphic } from "../components/OrbitGraphic"
import { activities, CONTACT_EMAIL, events, INSTAGRAM_HANDLE, INSTAGRAM_URL, SU_JOIN_URL } from "../data/mock"

export function Home() {
  const today = new Date().toISOString().slice(0, 10)
  const upcoming = [...events]
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="bg-violet-deep text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-bloom mb-4">
              Royal Holloway, University of London
            </p>
            <h1 className="font-display font-semibold text-4xl md:text-5xl leading-tight">
              Empowering women in STEM.
            </h1>
            <p className="text-white/70 mt-5 max-w-md">
              WiSTEM is a student-run community for women and non-binary
              students across engineering, science, tech, and maths —
              built on professional growth, outreach, and a genuinely good time.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                to="/events"
                className="rounded-full bg-bloom text-white text-sm font-medium px-6 py-3 hover:bg-bloom/90 transition-colors"
              >
                Explore Events
              </Link>
              <a
                href={SU_JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 text-white text-sm font-medium px-6 py-3 hover:bg-white/20 transition-colors border border-white/20">
                Join WiSTEM
              </a>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto aspect-square">
            <OrbitGraphic />
          </div>
        </div>
      </section>

      {/* Upcoming events, or what we do when nothing is listed */}
      {upcoming.length > 0 ? (
        <Section
          eyebrow="What's on"
          title="Upcoming events"
          action={
            <Link to="/events" className="text-sm font-medium text-iris hover:text-iris-dark">
              View all events →
            </Link>
          }
        >
          <div className="grid md:grid-cols-3 gap-6">
            {upcoming.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </Section>
      ) : (
        <Section eyebrow="What we do" title="More than a society">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activities.map((a) => (
              <div key={a.title} className="rounded-2xl border border-line bg-white p-5">
                <h3 className="font-display font-semibold">{a.title}</h3>
                <p className="text-sm text-muted mt-2">{a.description}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* About */}
      <section className="bg-lilac/40">
        <Section eyebrow="About us" title="A community, not just a society">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-ink/80">
              <p>
                WiSTEM exists so that no one has to be the only woman in the
                room to feel like they belong in it. We're open to any
                student — undergraduate or postgraduate, any year, any STEM
                subject — who wants a community that gets it.
              </p>
              <p>
                Our mission is simple: connect students to each other and to
                people working in STEM — through events, a strong peer
                network, and honest conversations about what a career in STEM
                actually looks like.
              </p>
              <Link to="/about" className="inline-block text-sm font-medium text-iris hover:text-iris-dark">
                Read our full story →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <StatCard value="£0" label="Standard membership" />
              <StatCard value="£3" label="Social membership" />
            </div>
          </div>
        </Section>
      </section>

      {/* Stay in touch */}
      <Section>
        <div className="rounded-3xl bg-violet-deep text-white px-8 py-14 text-center max-w-3xl mx-auto">
          <h2 className="font-display font-semibold text-2xl md:text-3xl">
            Come and say hello
          </h2>
          <p className="text-white/60 mt-2 mb-7 text-sm">
            Follow us on Instagram or drop us an email.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-bloom text-white text-sm font-medium px-6 py-3 hover:bg-bloom/90 transition-colors"
            >
              {INSTAGRAM_HANDLE}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-full bg-white/10 text-white text-sm font-medium px-6 py-3 hover:bg-white/20 transition-colors border border-white/20"
            >
              Email us
            </a>
          </div>
        </div>
      </Section>
    </div>
  )
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white border border-lilac-line p-5 text-center">
      <p className="font-display font-semibold text-2xl text-iris">{value}</p>
      <p className="text-xs text-muted mt-1">{label}</p>
    </div>
  )
}
