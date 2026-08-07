import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { ArrowRight } from 'lucide-react'

const audiences = [
  {
    title: 'EPCs for homeowners',
    body: 'Selling or letting? You need a valid EPC before the property is marketed. We survey, lodge and explain the rating in plain English.',
    kicker: 'Ready before your listing goes live',
    href: '/sellers',
  },
  {
    title: 'EPCs for landlords',
    body: 'Rented homes must reach at least band E. We flag properties at risk, work politely around tenants, and explain clearly what would lift a low rating.',
    kicker: 'MEES compliance, handled',
    href: '/landlords',
  },
  {
    title: 'EPCs for estate agents',
    body: 'Instruct today, list this week. EPCs and floor plans come back correctly formatted for the portals, so nothing holds up a launch.',
    kicker: 'Priority slots for agencies',
    href: '/estate-agents',
  },
  {
    title: 'Bulk EPCs for letting firms',
    body: 'Portfolios batched by postcode, volume rates from five properties a month and one consolidated monthly invoice with a per-property breakdown.',
    kicker: 'Bulk EPCs and floor plans',
    href: '/estate-agents',
  },
]

export function WhoWeHelp() {
  return (
    <Section variant="muted" id="who-we-help" pattern className="scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-secondary-600">
          <span className="block h-px w-8 bg-secondary-300" aria-hidden="true" />
          Who we help
        </div>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-secondary-900">
          Built around why you need one
        </h2>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((a, i) => (
          <Link
            key={a.title}
            href={a.href}
            className="group flex flex-col rounded-2xl border border-secondary-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-premium hover:border-primary-200"
          >
            <span className="font-mono text-xs text-secondary-600">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 text-lg font-bold text-secondary-900 group-hover:text-primary-700">
              {a.title}
            </h3>
            <p className="mt-2.5 text-sm text-secondary-600 leading-relaxed flex-1">{a.body}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700">
              {a.kicker}
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  )
}
