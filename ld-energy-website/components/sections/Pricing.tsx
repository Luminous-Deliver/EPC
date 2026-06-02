import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'
import { ArrowRight, Sparkles, Clock, BadgePoundSterling } from 'lucide-react'
import { pricing } from '@/lib/site'

const POPULAR_TYPE = '2-bed'

export function Pricing() {
  return (
    <Section variant="muted" id="pricing" className="scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 ring-1 ring-primary-100 px-3 py-1 text-xs uppercase tracking-wide font-semibold text-primary-700">
          <BadgePoundSterling className="w-3.5 h-3.5" aria-hidden="true" />
          Transparent Pricing
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-secondary-900">
          Transparent Guide Prices
        </h2>
        <p className="mt-4 text-lg text-secondary-700 leading-relaxed">
          The prices below are estimates only. Your final cost depends on the property&apos;s floor area (m²), any extensions or loft conversions, and overall condition. Request a personalised quote for an exact figure. Need it faster? Add next-day service for just £12.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {pricing.map((row) => {
          const popular = row.type === POPULAR_TYPE
          return (
            <Card
              key={row.type}
              interactive
              className={cn(
                'relative flex flex-col p-5 md:p-6 rounded-2xl ring-1 ring-secondary-900/5 transition-all duration-200 hover:-translate-y-1 hover:shadow-premium',
                popular && 'ring-2 ring-primary-500 shadow-premium',
              )}
            >
              {popular && (
                <span className="absolute -top-2.5 right-4 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
                  Popular
                </span>
              )}
              <span className="h-1 w-10 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mb-3" aria-hidden="true" />
              <p className="text-sm font-semibold text-secondary-600">{row.label}</p>
              <p className="mt-1 text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-secondary-900">
                <span className="text-2xl md:text-3xl font-semibold text-secondary-500">≈</span>£{row.epc}
              </p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-secondary-500">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" /> {row.duration}
              </p>
              <p className="mt-3 text-xs text-secondary-600">
                Next day available: <span className="font-semibold text-secondary-800">£{row.nextDay}</span>
              </p>
              <Button href="#contact" variant={popular ? 'accent' : 'primary'} className="mt-5 w-full" size="md">
                Book Now
              </Button>
            </Card>
          )
        })}
      </div>

      <p className="mt-5 text-sm text-secondary-600">
        Final price confirmed on quote · No travel surcharges within London · Next-day +£12
      </p>

      <div className="mt-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white ring-1 ring-primary-200 shadow-premium p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="inline-flex items-center justify-center w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white ring-1 ring-primary-700/10">
          <Sparkles className="w-6 h-6" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-secondary-900">Save when you bundle.</h3>
          <p className="mt-1 text-secondary-700">
            Add a professional floor plan to any EPC for 50% off the standard floor plan price.
          </p>
        </div>
        <Button href="/pricing" variant="secondary" className="md:self-center">
          View All Services &amp; Pricing
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Button>
      </div>
    </Section>
  )
}
