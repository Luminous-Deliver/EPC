import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { EpcSimulator } from '@/components/sections/EpcSimulator'
import { Card } from '@/components/ui/Card'
import { CheckCircle2, BookOpen, FileText, Scale } from 'lucide-react'

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
      <Section variant="default" tier="secondary" id="what-is-epc" className="scroll-mt-24">
        <div className="max-w-3xl">
        <SectionHeader eyebrow="EPC Basics" heading="Understand your EPC rating" />
        <p className="mt-4 text-lg text-secondary-700 leading-relaxed">
          An Energy Performance Certificate (EPC) is an official document that rates a property’s energy efficiency from A (most efficient) to G (least efficient). It is legally required in England and Wales when selling or renting any residential property, and remains valid for 10 years from the date of issue.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card interactive className="rounded-2xl ring-1 ring-secondary-900/5">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white ring-1 ring-primary-700/10 shrink-0">
              <FileText className="w-5 h-5" aria-hidden="true" />
            </span>
            <h3 className="text-xl font-semibold text-secondary-900">Your EPC includes</h3>
          </div>
          <ul className="mt-4 space-y-2.5">
            {contents.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-secondary-700">
                <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card interactive className="rounded-2xl ring-1 ring-secondary-900/5">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white ring-1 ring-primary-700/10 shrink-0">
              <Scale className="w-5 h-5" aria-hidden="true" />
            </span>
            <h3 className="text-xl font-semibold text-secondary-900">EPCs are legally required when</h3>
          </div>
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

      <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">
        <div>
          <h3 className="text-lg font-bold text-secondary-900">See what would lift your rating</h3>
          <p className="mt-2 leading-relaxed text-secondary-700">
            Most London homes sit around band D or E. Toggle the upgrades to see roughly how each one
            moves the score — useful before you spend anything, and the same reasoning behind our{' '}
            <a href="/services/retrofit-consultation" className="font-semibold text-primary-700 underline underline-offset-2 hover:text-primary-800">
              retrofit consultation
            </a>.
          </p>
        </div>
        <EpcSimulator />
      </div>
      </Section>
  )
}
