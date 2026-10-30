import { Section } from "../components/Section"
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../data/mock"

const REASONS = [
  { title: "Got a question?", description: "Ask us anything about the society, membership, or what's coming up." },
  { title: "Have an event idea?", description: "Tell us what you'd like to see, or suggest a speaker we should invite." },
  { title: "Want to work with us?", description: "We'd love to hear from companies, speakers, schools, and community groups." },
]

export function Contact() {
  return (
    <div>
      <Section eyebrow="Get involved" title="Ask, suggest, or get in touch" description="Questions, event ideas, and collaboration pitches are all welcome.">
        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {REASONS.map((r) => (
            <div key={r.title} className="rounded-2xl border border-line bg-white p-5">
              <h3 className="font-display font-semibold">{r.title}</h3>
              <p className="text-sm text-muted mt-2">{r.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="rounded-full bg-iris text-white text-sm font-medium px-6 py-3 hover:bg-iris-dark transition-colors break-all"
          >
            {CONTACT_EMAIL}
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line bg-white text-sm font-medium px-6 py-3 hover:bg-lilac/50 transition-colors"
          >
            {INSTAGRAM_HANDLE} on Instagram
          </a>
        </div>
      </Section>
    </div>
  )
}
