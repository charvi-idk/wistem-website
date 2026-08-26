import { useState } from "react"

export function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error")
      return
    }
    // TODO: send to a real newsletter/email provider
    setStatus("success")
  }

  if (status === "success") {
    return (
      <p className={`text-sm ${dark ? "text-white/80" : "text-iris-dark"}`}>
        You're on the list — first email lands with our September events.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status === "error") setStatus("idle")
          }}
          placeholder="you@university.ac.uk"
          className={`w-full rounded-none px-4 py-2.5 text-sm outline-none border-2 ${
            dark
              ? "bg-white/10 text-white placeholder:text-white/40 border-white/30 focus:bg-white/15"
              : "bg-white border-ink pixel-shadow-sm focus:ring-2 focus:ring-iris"
          }`}
        />
        {status === "error" && (
          <p className="text-xs text-bloom mt-1.5 pl-2">Enter a valid email address.</p>
        )}
      </div>
      <button
        type="submit"
        className={`rounded-none px-4 py-2.5 text-sm font-medium shrink-0 transition-colors border-2 ${
          dark
            ? "bg-bloom text-white hover:bg-bloom/90 border-ink pixel-shadow-sm"
            : "bg-iris text-white hover:bg-iris-dark border-ink pixel-shadow-sm"
        }`}
      >
        Sign up
      </button>
    </form>
  )
}