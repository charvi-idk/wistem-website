import { useState } from "react"
import { Section } from "../components/Section"

interface ContactState {
  name: string
  email: string
  subject: string
  message: string
}
const EMPTY_CONTACT: ContactState = { name: "", email: "", subject: "", message: "" }

interface SuggestionState {
  ideaTitle: string
  eventType: string
  reason: string
  suggestedSpeaker: string
}
const EMPTY_SUGGESTION: SuggestionState = { ideaTitle: "", eventType: "", reason: "", suggestedSpeaker: "" }

export function Contact() {
  return (
    <div>
      <Section eyebrow="Get involved" title="Ask, suggest, or get in touch" description="Questions, event ideas, collaboration pitches, or interest in joining the committee — all welcome.">
        <div className="grid lg:grid-cols-2 gap-10">
          <ContactForm />
          <EventSuggestionForm />
        </div>
      </Section>
    </div>
  )
}

function ContactForm() {
  const [form, setForm] = useState(EMPTY_CONTACT)
  const [errors, setErrors] = useState<Partial<Record<keyof ContactState, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const next: typeof errors = {}
    if (!form.name.trim()) next.name = "Enter your name."
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email."
    if (!form.subject.trim()) next.subject = "Add a subject."
    if (!form.message.trim()) next.message = "Write a short message."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    // TODO: send to a real inbox / support system
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-lilac/50 border border-lilac-line p-8">
        <p className="font-display font-semibold text-lg">Message sent ✓</p>
        <p className="text-sm text-muted mt-2">
          Someone from the committee will get back to you within a few days.
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="font-display font-semibold text-lg mb-4">Ask a question or suggest something</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Name" error={errors.name}>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" />
          </Field>
          <Field label="Email" error={errors.email}>
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input" type="email" />
          </Field>
        </div>
        <Field label="Subject" error={errors.subject}>
          <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="input">
            <option value="">Select…</option>
            <option>General question</option>
            <option>Suggest an event</option>
            <option>Suggest a collaboration</option>
            <option>Interested in joining the committee</option>
          </select>
        </Field>
        <Field label="Message" error={errors.message}>
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="input resize-none"
          />
        </Field>
        <button type="submit" className="rounded-full bg-iris text-white text-sm font-medium px-6 py-2.5 hover:bg-iris-dark transition-colors">
          Send message
        </button>
      </form>
    </div>
  )
}

function EventSuggestionForm() {
  const [form, setForm] = useState(EMPTY_SUGGESTION)
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.ideaTitle.trim() || !form.eventType.trim() || !form.reason.trim()) {
      setError("Fill in the idea, type, and reason — the rest is optional.")
      return
    }
    setError("")
    // TODO: persist to a real events pipeline
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-bloom-light border border-bloom/20 p-8">
        <p className="font-display font-semibold text-lg">Idea received ✓</p>
        <p className="text-sm text-muted mt-2">
          The events team reviews suggestions monthly — thank you for putting this forward.
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="font-display font-semibold text-lg mb-4">Suggest an event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Event idea">
          <input
            value={form.ideaTitle}
            onChange={(e) => setForm({ ...form, ideaTitle: e.target.value })}
            className="input"
            placeholder="e.g. Intro to robotics workshop"
          />
        </Field>
        <Field label="Event type">
          <select value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })} className="input">
            <option value="">Select…</option>
            <option>Workshop</option>
            <option>Talk / Panel</option>
            <option>Social</option>
            <option>Networking</option>
            <option>Hackathon</option>
          </select>
        </Field>
        <Field label="Why would you like this event?">
          <textarea
            rows={3}
            value={form.reason}
            onChange={(e) => setForm({ ...form, reason: e.target.value })}
            className="input resize-none"
          />
        </Field>
        <Field label="Suggested speaker or company (optional)">
          <input
            value={form.suggestedSpeaker}
            onChange={(e) => setForm({ ...form, suggestedSpeaker: e.target.value })}
            className="input"
          />
        </Field>
        {error && <p className="text-xs text-bloom">{error}</p>}
        <button type="submit" className="rounded-full bg-bloom text-white text-sm font-medium px-6 py-2.5 hover:bg-bloom/90 transition-colors">
          Submit idea
        </button>
      </form>
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
