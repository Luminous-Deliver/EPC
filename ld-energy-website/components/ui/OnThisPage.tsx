import { Link2 } from 'lucide-react'

/**
 * Compact in-page navigation.
 *
 * Plain <a href="#..."> links so native fragment navigation works with no
 * JavaScript, keyboard included. The anchors themselves are short, stable
 * slugs set explicitly on the sections rather than derived from heading text,
 * so a copy of one of these URLs keeps working if the visible wording is
 * reworded later.
 */
export interface PageAnchor {
  id: string
  label: string
}

export function OnThisPage({ anchors }: { anchors: readonly PageAnchor[] }) {
  return (
    <nav
      aria-labelledby="on-this-page-heading"
      className="rounded-2xl border border-secondary-200 bg-white p-5"
    >
      <h2
        id="on-this-page-heading"
        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary-600"
      >
        <Link2 className="h-3.5 w-3.5 text-primary-600" aria-hidden="true" />
        On this page
      </h2>
      <ul className="mt-3 grid gap-x-6 gap-y-1 sm:grid-cols-2">
        {anchors.map((a) => (
          <li key={a.id}>
            <a
              href={`#${a.id}`}
              className="inline-flex min-h-[44px] items-center text-sm font-medium text-primary-700 underline underline-offset-2 transition-colors hover:text-primary-800"
            >
              {a.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
