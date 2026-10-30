import { Section } from "../components/Section"
import { SU_JOIN_URL } from "../data/mock"

const MEMBERSHIPS = [
  { title: "Standard", price: "£0", description: "Access to all events, workshops, and networking opportunities." },
  { title: "Social", price: "£3", description: "All Standard benefits, plus priority access to social events, mixers, and networking sessions." },
]

export function Join() {
  return (
    <div>
      <section className="bg-violet-deep text-white">
        <Section className="!py-16">
          <p className="font-mono text-xs uppercase tracking-wide text-bloom mb-3">Join Us</p>
          <h1 className="font-display font-semibold text-4xl max-w-xl">
            Membership is free. The community is priceless.
          </h1>
          <p className="text-white/70 mt-4 max-w-lg">
            Join through the Royal Holloway Students' Union and get access to
            everything WiSTEM has to offer.
          </p>
        </Section>
      </section>

      <Section eyebrow="Memberships" title="Pick the one that suits you">
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
          {MEMBERSHIPS.map((m) => (
            <div key={m.title} className="rounded-2xl border border-line bg-white p-6">
              <p className="font-display font-semibold text-3xl text-iris">{m.price}</p>
              <h3 className="font-display font-semibold mt-2">{m.title} membership</h3>
              <p className="text-sm text-muted mt-2">{m.description}</p>
            </div>
          ))}
        </div>
        <a
          href={SU_JOIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 rounded-full bg-iris text-white text-sm font-medium px-6 py-3 hover:bg-iris-dark transition-colors"
        >
          Join on the SU website →
        </a>
        <p className="text-xs text-muted mt-3">You'll need to log in to the SU website to join.</p>
      </Section>
    </div>
  )
}
