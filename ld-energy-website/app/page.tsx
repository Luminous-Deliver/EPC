import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Phone } from 'lucide-react'
import { site } from '@/lib/site'

export default function HomePage() {
  return (
    <Section variant="default" className="py-20 md:py-28">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-wide font-medium text-primary-700">
          Elmhurst Accredited · All London Boroughs
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-secondary-900">
          Fast, Affordable EPCs Across London
        </h1>
        <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
          Elmhurst-accredited Domestic Energy Assessor. Fixed prices from £49. Certificate within 72 hours, or next day for just £12 extra.
        </p>
        <p className="mt-3 text-sm text-secondary-500">
          Covering all 32 London boroughs. 7 days a week. No hidden fees.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button href="/contact" variant="accent" size="lg">
            Get Your EPC Quote
          </Button>
          <Button href={site.phoneHref} variant="secondary" size="lg">
            <Phone className="w-5 h-5" aria-hidden="true" />
            Call {site.phone}
          </Button>
        </div>
        <p className="mt-10 text-sm text-secondary-500">
          Phase 1 foundation deployed — homepage and inner pages coming in Phase 2+.
        </p>
      </div>
    </Section>
  )
}
