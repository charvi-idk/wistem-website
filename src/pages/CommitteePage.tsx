import { Section } from "../components/Section"
import { committee } from "../data/mock"
import type { CommitteeSection } from "../types"

const SECTIONS: CommitteeSection[] = [
  "President",
  "Vice President",
  "Treasurer",
  "Secretary",
  "Events",
  "Social Media",
]

const GRADIENTS = [
  "linear-gradient(135deg,#5B3E8C,#E9679E)",
  "linear-gradient(135deg,#2A1B40,#9B7FD4)",
  "linear-gradient(135deg,#E9679E,#F2A6C4)",
]

export function CommitteePage() {
  return (
    <Section
      eyebrow="Committee"
      title="Meet the people behind WiSTEM"
      description="Every one of them started as a member, just like you."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SECTIONS.map((section) => {
          const member = committee.find((m) => m.role === section)
          if (!member) return null
          return (
            <div key={section} className="rounded-2xl border border-line bg-white overflow-hidden">
              <div
                className="h-28 flex items-center justify-center"
                style={{ background: GRADIENTS[committee.indexOf(member) % GRADIENTS.length] }}
              >
                <span className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white font-display font-semibold text-lg border-2 border-white/40">
                  {member.initials}
                </span>
              </div>
              <div className="p-5">
                <p className="font-mono text-xs uppercase tracking-wide text-bloom">{member.role}</p>
                <h3 className="font-display font-semibold text-lg mt-1">{member.name}</h3>
                <p className="text-xs text-muted">{member.subject}</p>
                <p className="text-sm text-ink/80 mt-3">{member.bio}</p>
                <p className="text-xs text-muted mt-3 italic">✨ {member.funFact}</p>
                <div className="flex gap-3 mt-4">
                  {member.linkedin && (
                    <a href={member.linkedin} className="text-xs font-medium text-iris hover:text-iris-dark">
                      LinkedIn
                    </a>
                  )}
                  {member.instagram && (
                    <a href={member.instagram} className="text-xs font-medium text-iris hover:text-iris-dark">
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
