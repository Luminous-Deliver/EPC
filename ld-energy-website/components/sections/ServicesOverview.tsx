import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { ArrowRight, FileText, Ruler, CheckCircle2 } from 'lucide-react'

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
  },
  {
    Icon: Ruler,
    title: 'Floor Plans',
    href: '/services/floor-plans',
    description:
      'Accurate, professional floor plans for property marketing. Measured on-site with laser tools, delivered as high-resolution image files.',
    bullets: [
      'Same price as your EPC standalone',
      'Half price when bundled with EPC',
      'Perfect for estate agent listings',
      'Multiple format options',
    ],
  },
]

export function ServicesOverview() {
  return (
    <Section variant="default" id="services" className="scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-secondary-400">
          <span className="block h-px w-8 bg-secondary-300" aria-hidden="true" />
          Services
        </div>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-secondary-900">
          Our Services
        </h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <Card
            key={service.title}
            interactive
            className="group flex flex-col rounded-2xl ring-1 ring-secondary-900/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-premium"
          >
            {/* Mobile: icon left + title right; md+: stacked */}
            <div className="flex items-center gap-4 md:block">
              <span className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white ring-1 ring-primary-700/10">
                <service.Icon className="w-6 h-6" aria-hidden="true" />
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-secondary-900 md:mt-4">{service.title}</h3>
            </div>
            <p className="mt-3 text-secondary-700 leading-relaxed text-sm md:text-base">{service.description}</p>
            <ul className="mt-5 space-y-2">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-secondary-700 text-sm md:text-base">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Link
              href={service.href}
              className="mt-6 inline-flex items-center gap-1.5 text-primary-700 font-semibold hover:text-primary-800"
            >
              Learn more
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  )
}
