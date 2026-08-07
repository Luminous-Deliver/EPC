import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { ArrowRight, FileText, Ruler, PackageCheck, Leaf, CheckCircle2, Sparkles } from 'lucide-react'

// Three core services today; the grid flexes to fit future additions
// (property photography, gas & electric boiler work, …) without redesign.
const services = [
  {
    Icon: FileText,
    title: 'Domestic EPC Certificate',
    href: '/services/domestic-epc',
    description:
      "Required by law for selling or renting residential property in England and Wales. We assess your home's energy efficiency and provide an official certificate registered with the UK government.",
    bullets: [
      'Guide prices from £49',
      '72-hour standard delivery',
      '10-year validity',
      'Improvement recommendations included',
    ],
    highlighted: false,
  },
  {
    Icon: Ruler,
    title: 'Property Floor Plans',
    href: '/services/floor-plans',
    description:
      'Accurate, professional floor plans for property marketing. Measured on-site with laser tools, delivered as high-resolution image files.',
    bullets: [
      'Same price as your EPC standalone',
      'Perfect for estate agent listings',
      'Laser-measured on site',
      'Multiple format options',
    ],
    highlighted: false,
  },
  {
    Icon: PackageCheck,
    title: 'EPC & Floor Plan Bundle',
    href: '/pricing',
    description:
      'Book both for the same property and save 50% on the floor plan. One visit, one assessor, everything your listing needs — ready in a single appointment.',
    bullets: [
      'Bundles from £73.50',
      'Save up to £52.50 per property',
      'Both services, same property, one visit',
      'Ideal for sellers & letting agents',
    ],
    highlighted: true,
  },
  {
    Icon: Leaf,
    title: 'Retrofit Consultation',
    href: '/services/retrofit-consultation',
    description:
      'A 15-minute verbal walk-through on the day of your assessment: what would realistically lift this property to band C, roughly what it costs, and the order to do it in.',
    bullets: [
      'Just £25 added to your EPC',
      'Plain-English route to band C',
      'Ideal for MEES planning',
      'Based on your actual survey data',
    ],
    highlighted: false,
  },
]

export function ServicesOverview() {
  return (
    <Section variant="muted" id="services" pattern className="scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-secondary-400">
          <span className="block h-px w-8 bg-secondary-300" aria-hidden="true" />
          Services
        </div>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-secondary-900">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-secondary-600 leading-relaxed">
          Everything you need to sell or let your property, from one accredited local assessor.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <Card
            key={service.title}
            interactive
            className={
              service.highlighted
                ? 'group relative flex flex-col rounded-2xl ring-2 ring-accent-500 bg-accent-50/60 transition-all duration-200 hover:-translate-y-1 hover:shadow-premium'
                : 'group flex flex-col rounded-2xl ring-1 ring-secondary-900/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-premium'
            }
          >
            {service.highlighted && (
              <span className="absolute -top-3 left-5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-600 to-accent-700 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                Bundle Discount
              </span>
            )}
            {/* Mobile: icon left + title right; md+: stacked */}
            <div className="flex items-center gap-4 md:block">
              <span
                className={
                  service.highlighted
                    ? 'shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 text-white ring-1 ring-accent-700/10'
                    : 'shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white ring-1 ring-primary-700/10'
                }
              >
                <service.Icon className="w-6 h-6" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold text-secondary-900 md:mt-4">{service.title}</h3>
            </div>
            <p className="mt-3 text-secondary-700 leading-relaxed text-sm">{service.description}</p>
            <ul className="mt-5 space-y-2 flex-1">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-secondary-700 text-sm">
                  <CheckCircle2
                    className={
                      service.highlighted
                        ? 'w-5 h-5 text-accent-600 shrink-0 mt-0.5'
                        : 'w-5 h-5 text-primary-600 shrink-0 mt-0.5'
                    }
                    aria-hidden="true"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Link
              href={service.href}
              className={
                service.highlighted
                  ? 'mt-6 inline-flex items-center gap-1.5 text-accent-700 font-semibold hover:text-accent-800'
                  : 'mt-6 inline-flex items-center gap-1.5 text-primary-700 font-semibold hover:text-primary-800'
              }
            >
              {service.highlighted ? 'See bundle pricing' : 'Learn more'}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  )
}
