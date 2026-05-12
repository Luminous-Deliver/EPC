import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { ArrowRight } from 'lucide-react'
import { boroughMeta } from '@/lib/boroughs'

const featured = [
  'stratford', 'hackney', 'tower-hamlets', 'newham',
  'greenwich', 'islington', 'southwark', 'lewisham',
  'camden', 'westminster', 'lambeth', 'wandsworth',
  'barking-dagenham', 'waltham-forest', 'croydon', 'brent',
] as const

export function Coverage() {
  return (
    <Section variant="muted" id="areas">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">Coverage</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
          Areas We Cover
        </h2>
        <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
          Based in Stratford, we provide EPC services across every London borough and surrounding areas within a 1.5-hour radius.
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {featured.map((slug) => {
          const borough = boroughMeta[slug]
          return (
            <li key={slug}>
              <Link
                href={`/areas/${slug}`}
                className="block rounded-md border border-secondary-200 bg-white px-4 py-3 text-sm font-medium text-secondary-800 hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50 transition-colors"
              >
                {borough.name}
              </Link>
            </li>
          )
        })}
      </ul>

      <div className="mt-8">
        <Link
          href="/areas"
          className="inline-flex items-center gap-1.5 text-primary-700 font-semibold hover:text-primary-800"
        >
          View all areas
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  )
}
