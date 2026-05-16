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
      'Required by law for selling or renting residential property in England and Wales. We assess your home’s energy efficiency and provide an official certificate registered with the UK government.',
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
    <Section variant="muted" id="services">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">Services</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
          Our Services
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title} interactive className="flex flex-col">
            <service.Icon className="w-10 h-10 text-primary-600" aria-hidden="true" />
            <h3 className="mt-4 text-2xl font-semibold text-secondary-900">{service.title}</h3>
            <p className="mt-3 text-secondary-700 leading-relaxed">{service.description}</p>
            <ul className="mt-5 space-y-2">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-secondary-700">
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
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  )
}
