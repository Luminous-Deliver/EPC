'use client'

import { useState } from 'react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Sparkles, Clock, BadgePoundSterling, Home, ChevronDown } from 'lucide-react'
import { pricing, type PropertyType } from '@/lib/site'

export function Pricing() {
  const [selectedType, setSelectedType] = useState<PropertyType>('2-bed')

  const currentPricing = pricing.find((p) => p.type === selectedType) || pricing[2]

  return (
    <Section variant="muted" id="pricing" className="scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest font-semibold text-secondary-600">
          <span className="block h-px w-8 bg-secondary-300" aria-hidden="true" />
          Transparent Pricing
          <span className="block h-px w-8 bg-secondary-300" aria-hidden="true" />
        </div>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-secondary-900">
          What your EPC costs
        </h2>
        <p className="mt-4 text-lg text-secondary-700 leading-relaxed">
          Choose your property size to see your guide price. Every figure below is a starting estimate, not a fixed quote.
        </p>
      </div>

      <div className="mt-10 max-w-2xl mx-auto">
        <Card className="p-5 md:p-8 rounded-2xl ring-1 ring-secondary-900/5 shadow-premium-lg bg-white">
          <div className="flex flex-col gap-6">
            
            {/* Dropdown Selector */}
            <div className="space-y-2">
              <label htmlFor="property-size" className="block text-sm font-bold text-secondary-900">
                Property Size
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <Home className="h-5 w-5 text-secondary-400" aria-hidden="true" />
                </div>
                <select
                  id="property-size"
                  name="property-size"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as PropertyType)}
                  className="block w-full appearance-none rounded-xl border-0 py-4 pl-12 pr-10 text-secondary-900 ring-1 ring-inset ring-secondary-200 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-lg font-semibold bg-secondary-50 cursor-pointer hover:bg-secondary-100 transition-colors"
                >
                  {pricing.map((option) => (
                    <option key={option.type} value={option.type}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                  <ChevronDown className="h-5 w-5 text-secondary-500" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="border-t border-secondary-100 my-2" />

            {/* Results Output */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-sm font-semibold text-secondary-500 uppercase tracking-wide">Estimated Starting Price</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-lg font-semibold text-secondary-600">from</span>
                  <span className="text-5xl font-extrabold font-display text-secondary-900 tracking-tight">
                    £{currentPricing.epc}
                  </span>
                  <span className="text-sm font-medium text-secondary-500">standard turnaround</span>
                </div>
                <p className="mt-1.5 inline-flex items-center gap-1.5 rounded-md bg-warm-50 px-2 py-1 text-xs font-semibold text-warm-700 ring-1 ring-warm-200">
                  Estimate only — final price confirmed on quote
                </p>
                <div className="mt-4 space-y-2">
                  <p className="inline-flex items-center gap-2 text-sm text-secondary-600 font-medium">
                    <Clock className="w-4 h-4 text-primary-600" aria-hidden="true" /> 
                    Assessment takes ~{currentPricing.duration}
                  </p>
                  <p className="inline-flex items-center gap-2 text-sm text-secondary-600 font-medium">
                    <Sparkles className="w-4 h-4 text-warm-500" aria-hidden="true" />
                    Next-day express available (+£12)
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button href="#contact" variant="accent" size="lg" className="w-full text-base">
                  Book This EPC
                </Button>
                <Button href="/pricing" variant="secondary" className="w-full text-sm">
                  View Full Price List
                </Button>
              </div>
            </div>
            
          </div>
        </Card>

        <div className="mt-5 rounded-xl border border-warm-200 bg-warm-50 p-4 text-sm text-secondary-800">
          <p className="leading-relaxed">
            <strong className="font-semibold text-secondary-900">These figures are estimates only and act as starting prices.</strong>{' '}
            Your final cost depends on the property&rsquo;s floor area (m²), any extensions or loft conversions,
            layout, and condition — a larger or extended property costs more to assess. There&rsquo;s no charge for
            travel or mileage; properties more than about 45 minutes away add a little for the extra time. Payment is
            taken after the assessment.{' '}
            <a href="/contact" className="font-medium text-primary-700 underline">Request an exact quote</a>.
          </p>
        </div>

        {/* Upsell Banner */}
        <div className="mt-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white ring-1 ring-primary-200 shadow-sm p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="inline-flex items-center justify-center w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white ring-1 ring-primary-700/10">
            <Sparkles className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-secondary-900">Need a Floor Plan?</h3>
            <p className="mt-0.5 text-sm text-secondary-700">
              Add a floor plan to your EPC and the combined guide price is lower than booking them separately.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
