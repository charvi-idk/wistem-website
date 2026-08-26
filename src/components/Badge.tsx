export function Badge({ label, color }: { label: string; color?: string }) {
  return (
    <span
      className="inline-flex items-center rounded-none border-2 px-2.5 py-1 text-xs font-medium font-mono"
      style={{
        backgroundColor: color ? `color-mix(in srgb, ${color} 16%, white)` : "var(--color-lilac)",
        color: color ?? "var(--color-iris)",
        borderColor: "var(--color-ink)",
      }}
    >
      {label}
    </span>
  )
}