import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Sparkles, Clock } from 'lucide-react'
import { pricing } from '@/lib/site'

export function Pricing() {
  return (
    <Section variant="muted" id="pricing">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">Transparent Pricing</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
          Transparent Guide Prices
        </h2>
        <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
          Guide prices by property type — final cost depends on floor area (m²) and condition. Request a personalised quote. Need it faster? Add next-day service for just £12.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {pricing.map((row) => (
          <Card key={row.type} interactive className="flex flex-col p-5 md:p-6">
            <p className="text-sm font-semibold text-secondary-600">{row.label}</p>
            <p className="mt-1 text-4xl md:text-5xl font-extrabold font-display text-secondary-900">
              £{row.epc}
            </p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-secondary-500">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" /> {row.duration}
            </p>
            <p className="mt-3 text-xs text-secondary-600">
              Next day available: <span className="font-semibold text-secondary-800">£{row.nextDay}</span>
            </p>
            <Button href="#contact" variant="primary" className="mt-5 w-full" size="md">
              Book Now
            </Button>
          </Card>
        ))}
      </div>

      <div className="mt-10 rounded-xl bg-white border border-primary-200 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="inline-flex items-center justify-center w-12 h-12 shrink-0 rounded-full bg-primary-100 text-primary-700">
          <Sparkles className="w-6 h-6" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-secondary-900">Save when you bundle.</h3>
          <p className="mt-1 text-secondary-700">
            Add a professional floor plan to any EPC for 50% off the standard floor plan price.
          </p>
        </div>
        <Button href="/pricing" variant="secondary" className="md:self-center">
          View All Services & Pricing
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Button>
      </div>
    </Section>
  )
}
