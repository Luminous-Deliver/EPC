import { CheckCircle2 } from 'lucide-react'

interface KeyTakeawaysProps {
  takeaways: string[]
}

export function KeyTakeaways({ takeaways }: KeyTakeawaysProps) {
  if (!takeaways || takeaways.length === 0) return null
  return (
    <aside
      aria-label="Key takeaways"
      className="rounded-lg bg-primary-50 border border-primary-200 p-6 my-8 not-prose"
    >
      <h2 className="text-lg font-bold text-primary-900 mb-3">Key Takeaways</h2>
      <ul className="space-y-2">
        {takeaways.map((t) => (
          <li key={t} className="flex items-start gap-2.5 text-secondary-800">
            <CheckCircle2 className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" aria-hidden="true" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
