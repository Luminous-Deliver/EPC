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
            'Accredited assessor visit and full assessment',
            'Lodged on the official GOV.UK EPC register within 72 hours',
            'Certificate link sent once live — valid 10 years',
            'Improvement recommendations included',
          ]}
          href="/contact"
        />
        <PricingServiceCard
          title="EPC + Floor Plan"
          from={priceFrom.bundle}
          positioning="Everything a listing needs, measured in a single visit."
          inclusions={[
            'Everything in the Domestic EPC',
            'Laser-measured 2D plan to Rightmove & Zoopla spec',
            'Total area, room dimensions, compass point, floor labels',
            'Floor plan supplied as JPG & PDF — one visit for both',
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
            'Laser-measured 2D plan, drawn to portal spec',
            'Total area, room dimensions, compass point, floor labels',
            'Supplied as high-resolution JPG & PDF files',
            'Ready for Rightmove, Zoopla and OnTheMarket',
          ]}
          href="/contact"
        />
      </div>

      <FloorAreaGuide />
    </Section>
  )
}
