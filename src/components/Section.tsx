export function Section({
  eyebrow,
  title,
  description,
  action,
  children,
  className = "",
}: {
  eyebrow?: string
  title?: string
  description?: string
  action?: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`max-w-7xl mx-auto px-5 md:px-8 py-16 ${className}`}>
      {(eyebrow || title) && (
        <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
          <div>
            {eyebrow && (
              <p className="font-mono text-sm uppercase tracking-wide text-bloom mb-2 before:content-['■_'] before:text-ink">
                {eyebrow}
              </p>
            )}
            {title && <h2 className="font-display font-semibold text-3xl md:text-4xl">{title}</h2>}
            {description && <p className="text-muted mt-2 max-w-xl">{description}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </section>
  )
}