import { Section } from "../components/Section"
import { resources } from "../data/mock"
import type { ResourceGroup } from "../types"

const GROUPS: { key: ResourceGroup; blurb: string }[] = [
  { key: "Careers", blurb: "CVs, interviews, and applications." },
  { key: "Learning", blurb: "Courses and platforms to build your skills." },
  { key: "University", blurb: "Making the most of your degree." },
  { key: "Wellbeing", blurb: "Support for the harder days too." },
]

export function ResourcesPage() {
  return (
    <Section eyebrow="Resources" title="A hub for STEM students" description="Everything we wish someone had handed us in first year.">
      <div className="space-y-14">
        {GROUPS.map((group) => (
          <div key={group.key}>
            <div className="mb-5">
              <h2 className="font-display font-semibold text-xl">{group.key}</h2>
              <p className="text-sm text-muted">{group.blurb}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {resources
                .filter((r) => r.group === group.key)
                .map((r) => (
                  <a
                    key={r.id}
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-line bg-white p-5 hover:border-lilac-line hover:shadow-md transition-all block"
                  >
                    <h3 className="font-medium">{r.title}</h3>
                    <p className="text-sm text-muted mt-1.5">{r.description}</p>
                    <span className="inline-block mt-3 text-xs font-medium text-iris">Open resource →</span>
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
