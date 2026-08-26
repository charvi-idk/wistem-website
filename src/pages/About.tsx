import { Section } from "../components/Section"
import { milestones } from "../data/mock"

const VALUES = [
  { title: "Belonging first", description: "You don't need to prove you belong in STEM to join us — you already do." },
  { title: "Honest, not polished", description: "We talk about the hard parts of a STEM career too, not just the wins." },
  { title: "Open doors", description: "Every event, resource, and connection we make is shared with the whole society." },
  { title: "Student-run, student-led", description: "Every decision is made by students, for students — no top-down agenda." },
]

export function About() {
  return (
    <div>
      <section className="bg-violet-deep text-white">
        <Section className="!py-16 md:!py-20">
          <p className="font-mono text-xs uppercase tracking-wide text-bloom mb-3">About us</p>
          <h1 className="font-display font-semibold text-4xl max-w-2xl">
            Started by five students who wanted better company.
          </h1>
          <p className="text-white/70 mt-4 max-w-xl">
            WiSTEM began as an informal study group and grew into one of the
            university's largest societies — without ever losing the thing
            that made it worth joining in the first place.
          </p>
        </Section>
      </section>

      <Section eyebrow="Our mission" title="Why we exist">
        <div className="grid md:grid-cols-2 gap-10">
          <p className="text-ink/80 leading-relaxed">
            Women and non-binary students are still a minority in most STEM
            classrooms, labs, and lecture theatres — and that can make the
            experience feel lonelier than it needs to be. WiSTEM exists to
            close that gap: a place where you can find people who understand
            exactly what you're going through, mentors who've already been
            through it, and opportunities that don't require knowing the
            right person to hear about them.
          </p>
          <p className="text-ink/80 leading-relaxed">
            We're open to any student across engineering, computer science,
            maths, physics, chemistry, biology, and beyond — undergraduate
            or postgraduate, any year. You don't need to be top of your
            class or have your career mapped out. You just need to want a
            community that's actually looking out for you.
          </p>
        </div>
      </Section>

      <section className="bg-lilac/40">
        <Section eyebrow="What we stand for" title="Our values">
          <div className="grid sm:grid-cols-2 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white border border-lilac-line p-6">
                <h3 className="font-display font-semibold text-lg">{v.title}</h3>
                <p className="text-sm text-muted mt-2">{v.description}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      <Section eyebrow="Our story" title="How we've grown">
        <ol className="relative border-l border-line ml-2 space-y-10">
          {milestones.map((m) => (
            <li key={m.year} className="ml-8">
              <span className="absolute -left-[9px] mt-1 w-4 h-4 rounded-full bg-iris ring-4 ring-lilac" />
              <p className="font-mono text-xs text-bloom">{m.year}</p>
              <h3 className="font-display font-semibold text-lg mt-1">{m.title}</h3>
              <p className="text-sm text-muted mt-1 max-w-lg">{m.description}</p>
            </li>
          ))}
        </ol>
      </Section>
    </div>
  )
}
