import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PricingServiceCard } from '@/components/ui/PricingServiceCard'
import { FloorAreaGuide } from '@/components/sections/FloorAreaGuide'
import { priceFrom } from '@/lib/site'

/**
 * Pricing — a primary-tier section built in three layers:
 *   1. three service cards: which service, roughly what does it start at
 *   2. floor-area guide: roughly what for a property this size
 *   3. enquiry: the only number that is ever binding
 *
 * Every figure here is a guide. The design has to make that obvious to someone
 * who reads only headings, labels and buttons — hence "Guide price from" as a
 * label line rather than a small "from" beside a big number.
 *
 * Now a server component; the interactive part lives in FloorAreaGuide, so the
 * cards and headings ship as static HTML.
 */
export function Pricing() {
  return (
    <Section variant="muted" tier="primary" id="pricing" className="scroll-mt-20 md:scroll-mt-24">
      <SectionHeader
        tier="primary"
        eyebrow="Guide pricing"
        heading="Straightforward guide pricing"
        intro="Starting prices for each service. Internal floor area is the main factor in the final figure, so we confirm your exact quote before you book — never after."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <PricingServiceCard
          title="Domestic EPC"
          from={priceFrom.epc}
          positioning="For selling, letting, or meeting MEES compliance."
          inclusions={[
            'Accredited assessor visit',
            'Lodged on the government EPC register',
            'PDF certificate, valid 10 years',
            'Improvement recommendations',
          ]}
          href="/contact"
        />
        <PricingServiceCard
          title="EPC + Floor Plan"
          from={priceFrom.bundle}
          positioning="Everything a listing needs, measured in a single visit."
          inclusions={[
            'EPC and measured floor plan',
            'One appointment, one assessor',
            'Portal-ready JPG and PDF',
            'Lower combined price than booking separately',
          ]}
          href="/contact"
          emphasis
          emphasisLabel="Better value together"
        />
        <PricingServiceCard
          title="Floor Plan only"
          from={priceFrom.floorPlan}
          positioning="For marketing a property that already has a valid EPC."
          inclusions={[
            'Laser-measured on site',
            'Room dimensions and total floor area',
            'High-resolution JPG and PDF',
            'Suitable for Rightmove and Zoopla',
          ]}
          href="/contact"
        />
      </div>

      <FloorAreaGuide />
    </Section>
  )
}
