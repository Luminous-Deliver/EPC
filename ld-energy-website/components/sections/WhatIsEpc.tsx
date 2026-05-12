import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { CheckCircle2 } from 'lucide-react'

const contents = [
  'Current energy efficiency rating (A–G)',
  'Potential rating after recommended improvements',
  'Estimated annual energy costs',
  'CO₂ emissions estimate',
  'Specific improvement recommendations',
]

const whenRequired = [
  'Selling a residential property',
  'Renting a property to a new tenant',
  'Marketing a property for sale or rent',
  'Completing major renovations that change energy performance',
]

export function WhatIsEpc() {
  return (
    <Section variant="default" id="what-is-epc">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">EPC Basics</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
          What is an Energy Performance Certificate?
        </h2>
        <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
          An Energy Performance Certificate (EPC) is an official document that rates a property’s energy efficiency from A (most efficient) to G (least efficient). It is legally required in England and Wales when selling or renting any residential property, and remains valid for 10 years from the date of issue.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="text-xl font-semibold text-secondary-900">Your EPC includes</h3>
          <ul className="mt-4 space-y-2.5">
            {contents.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-secondary-700">
                <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold text-secondary-900">EPCs are legally required when</h3>
          <ul className="mt-4 space-y-2.5">
            {whenRequired.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-secondary-700">
                <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  )
}
