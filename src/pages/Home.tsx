import { Link } from "react-router-dom"
import { Section } from "../components/Section"
import { EventCard } from "../components/EventCard"
import { OrbitGraphic } from "../components/OrbitGraphic"
import { NewsletterForm } from "../components/NewsletterForm"
import { Badge } from "../components/Badge"
import { events, opportunities, stats, instagramPosts } from "../data/mock"

export function Home() {
  const upcoming = [...events]
    .filter((e) => new Date(e.date) >= new Date("2026-08-24"))
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 3)

  const featuredOpportunities = opportunities.slice(0, 4)

  return (
    <div>
      {/* Hero */}
      <section className="bg-violet-deep text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-bloom mb-4">
              WiSTEM Society
            </p>
            <h1 className="font-display font-semibold text-4xl md:text-5xl leading-tight">
              Empowering women in STEM.
            </h1>
            <p className="text-white/70 mt-5 max-w-md">
              WiSTEM is a student-run community for women and non-binary
              students across engineering, science, tech, and maths —
              built on mentorship, real talk, and a genuinely good time.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                to="/events"
                className="rounded-full bg-bloom text-white text-sm font-medium px-6 py-3 hover:bg-bloom/90 transition-colors"
              >
                Explore Events
              </Link>
              <a
                href="https://www.su.rhul.ac.uk/societies/a-z/18352/"
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

      {/* Upcoming events */}
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
                Our mission is simple: connect students to each other, to
                mentors, and to opportunities they might not find on their
                own — through events, a strong peer network, and honest
                conversations about what a career in STEM actually looks like.
              </p>
              <Link to="/about" className="inline-block text-sm font-medium text-iris hover:text-iris-dark">
                Read our full story →
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <StatCard value={`${stats.members}+`} label="Members" />
              <StatCard value={`${stats.eventsHosted}`} label="Events hosted" />
              <StatCard value={`${stats.partnerships}`} label="Partnerships" />
            </div>
          </div>
        </Section>
      </section>

      {/* Opportunities */}
      <Section
        eyebrow="Opportunities"
        title="Open right now"
        action={
          <Link to="/opportunities" className="text-sm font-medium text-iris hover:text-iris-dark">
            View all opportunities →
          </Link>
        }
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredOpportunities.map((op) => (
            <div key={op.id} className="rounded-2xl border border-line bg-white p-5">
              <Badge label={op.category} />
              <p className="font-mono text-xs text-muted mt-3">{op.organisation}</p>
              <h3 className="font-display font-semibold mt-0.5">{op.title}</h3>
              <p className="text-sm text-muted mt-2">{op.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Instagram */}
      <section className="bg-lilac/40">
        <Section eyebrow="Follow along" title="From our Instagram">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {instagramPosts.map((post, i) => (
              <div
                key={post.id}
                className="aspect-square rounded-2xl flex flex-col justify-end p-4 text-white"
                style={{
                  background: [
                    "linear-gradient(135deg,#5B3E8C,#E9679E)",
                    "linear-gradient(135deg,#2A1B40,#5B3E8C)",
                    "linear-gradient(135deg,#E9679E,#F2A6C4)",
                    "linear-gradient(135deg,#40295F,#9B7FD4)",
                  ][i % 4],
                }}
              >
                <p className="text-xs leading-snug">{post.caption}</p>
                <p className="text-[11px] text-white/70 mt-1 font-mono">♡ {post.likes}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* Newsletter */}
      <Section>
        <div className="rounded-3xl bg-violet-deep text-white px-8 py-14 text-center max-w-3xl mx-auto">
          <h2 className="font-display font-semibold text-2xl md:text-3xl">
            Get events and opportunities in your inbox
          </h2>
          <p className="text-white/60 mt-2 mb-7 text-sm">
            One email a fortnight. No spam, unsubscribe anytime.
          </p>
          <div className="max-w-sm mx-auto">
            <NewsletterForm dark />
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
