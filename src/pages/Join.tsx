import { useState } from "react"
import { Section } from "../components/Section"

const INTERESTS = ["Engineering", "Computer Science", "Data & AI", "Biosciences", "Physics", "Maths"]
const YEARS = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Postgraduate"]

const BENEFITS = [
  { title: "Real mentorship", description: "Paired with someone a few years ahead who's been exactly where you are." },
  { title: "First access", description: "Priority sign-up for workshops, hackathons, and industry events." },
  { title: "A genuine community", description: "People who'll actually show up to your presentation practice run." },
  { title: "Opportunities first", description: "Internships and schemes shared with members before anyone else." },
]

interface FormState {
  fullName: string
  email: string
  course: string
  yearOfStudy: string
  interests: string[]
  socialHandle: string
}

const EMPTY: FormState = { fullName: "", email: "", course: "", yearOfStudy: "", interests: [], socialHandle: "" }

export function Join() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  function toggleInterest(interest: string) {
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(interest)
        ? f.interests.filter((i) => i !== interest)
        : [...f.interests, interest],
    }))
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.fullName.trim()) next.fullName = "Enter your full name."
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid university email."
    if (!form.course.trim()) next.course = "Enter your course."
    if (!form.yearOfStudy) next.yearOfStudy = "Select your year of study."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    // TODO: send to membership API / SU system
    setSubmitted(true)
  }

  return (
    <div>
      <section className="bg-violet-deep text-white">
        <Section className="!py-16">
          <p className="font-mono text-xs uppercase tracking-wide text-bloom mb-3">Join Us</p>
          <h1 className="font-display font-semibold text-4xl max-w-xl">
            Membership is free. The community is priceless.
          </h1>
          <p className="text-white/70 mt-4 max-w-lg">
            Sign up in two minutes and get access to every event, mentor, and
            opportunity WiSTEM has to offer.
          </p>
        </Section>
      </section>

      <Section eyebrow="Why join" title="What you get as a member">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-2xl border border-line bg-white p-5">
              <h3 className="font-display font-semibold">{b.title}</h3>
              <p className="text-sm text-muted mt-2">{b.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Sign up" title="Become a member">
        {submitted ? (
          <div className="max-w-md rounded-2xl bg-lilac/50 border border-lilac-line p-8 text-center">
            <p className="font-display font-semibold text-xl">You're in, {form.fullName.split(" ")[0]}! 🎉</p>
            <p className="text-sm text-muted mt-2">
              Check your inbox for a welcome email with our Slack invite and
              the September events line-up.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg space-y-5">
            <Field label="Full name" error={errors.fullName}>
              <input
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className="input"
                placeholder="Amara Nwosu"
              />
            </Field>

            <Field label="University email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input"
                placeholder="you@university.ac.uk"
              />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Course" error={errors.course}>
                <input
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value })}
                  className="input"
                  placeholder="Mechanical Engineering"
                />
              </Field>

              <Field label="Year of study" error={errors.yearOfStudy}>
                <select
                  value={form.yearOfStudy}
                  onChange={(e) => setForm({ ...form, yearOfStudy: e.target.value })}
                  className="input"
                >
                  <option value="">Select…</option>
                  {YEARS.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </Field>
            </div>

            <div>
              <label className="text-sm font-medium">Interests in STEM</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {INTERESTS.map((i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => toggleInterest(i)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                      form.interests.includes(i) ? "bg-iris text-white" : "bg-white border border-line text-ink/70"
                    }`}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>

            <Field label="Social media handle (optional)">
              <input
                value={form.socialHandle}
                onChange={(e) => setForm({ ...form, socialHandle: e.target.value })}
                className="input"
                placeholder="@yourhandle"
              />
            </Field>

            <button
              type="submit"
              className="rounded-full bg-iris text-white text-sm font-medium px-6 py-3 hover:bg-iris-dark transition-colors"
            >
              Join WiSTEM
            </button>
          </form>
        )}
      </Section>
    </div>
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <div className="mt-1.5">{children}</div>
      {error && <p className="text-xs text-bloom mt-1.5">{error}</p>}
    </div>
  )
}
