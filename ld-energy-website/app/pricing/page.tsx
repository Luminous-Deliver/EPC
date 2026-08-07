import type { Metadata } from 'next'
import { CheckCircle2, XCircle, Sparkles, Ruler, Info } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { PageHero } from '@/components/sections/PageHero'
import { CtaStrip } from '@/components/sections/CtaStrip'
import { Accordion } from '@/components/ui/Accordion'
import { pricing, site, nextDayGuide, formatPrice } from '@/lib/site'
import type { FaqItem } from '@/lib/faq'

export const metadata: Metadata = {
  title: 'EPC Prices London | From £49',
  description:
    'Guide prices for EPC services in London, from £49 for studios. Final price depends on property floor area (m²) and condition. Request a personalised quote.',
  alternates: { canonical: `${site.url}/pricing` },
  openGraph: {
    title: 'EPC Prices London | From £49 | Transparent Guide Pricing | L&D Energy',
    description:
      'Guide prices for EPC services in London, from £49 for studios. Final price depends on floor area (m²) and condition. Request a personalised quote.',
    url: `${site.url}/pricing`,
  },
  twitter: {
    title: 'EPC Prices London | From £49 | Transparent Guide Pricing',
    description:
      'Guide prices from £49. Final price depends on floor area (m²) and condition. Request a personalised quote.',
  },
}

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing' },
]

const included = [
  'On-site assessment by an Elmhurst-accredited DEA',
  'Official lodgement on the UK Government EPC Register',
  'Certificate link sent once lodged on the government register',
  'Energy improvement recommendations',
  'Full data report',
  'No travel surcharges within London',
]

const notIncluded = [
  'Re-visits due to access issues, charged at £25 per visit',
  'Properties outside our 1.5-hour service radius (contact for a quote)',
]

const pricingFaq: FaqItem[] = [
  {
    q: 'How much does an EPC cost in London?',
    a: 'Our guide prices start at £49 for studios, £59 for 1-bedroom, £69 for 2-bedroom, £85 for 3-bedroom, £95 for 4-bedroom, and £105 for 5+ bedroom homes. These are estimates only, the final price depends on the property\'s floor area (m²), any extensions or loft conversions, and overall condition. We don\'t charge for travel or mileage, though properties more than about 45 minutes away add a little for the extra time.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'No. The price we quote is the price you pay. Quotes are personalised based on your property size and condition, so there are no surprise add-ons, call-out charges, or travel surcharges within our service area.',
  },
  {
    q: 'Do you charge for travel?',
    a: 'We don\'t charge for travel or mileage itself. For properties more than about 45 minutes from us, a small amount is added for the extra time involved, not the distance. This is always confirmed in your personalised quote before you book, so there are no surprises.',
  },
  {
    q: 'Can I get a discount for multiple properties?',
    a: 'Yes. We offer portfolio rates for landlords and letting agents with multiple properties. Contact us directly for a quote.',
  },
  {
    q: 'What is the next-day service?',
    a: 'For £12 extra per EPC, we guarantee your certificate within 24 hours of the assessment. This applies to assessments completed during our standard hours (Mon–Sun, 8am–8pm). Book before noon for the best chance of a same-day or next-morning appointment.',
  },
  {
    q: 'How much does a floor plan cost?',
    a: 'A standalone floor plan costs the same as your EPC for that property size, with guide prices from £49. Booking an EPC and floor plan together is cheaper than booking them separately — we measure the property during the assessment anyway, so it is one visit rather than two. Your exact quote is confirmed before booking.',
  },
]

// Typical internal floor-area ranges by property size (guide only) — reinforces
// that floor area is the biggest driver of the final price.
const offerCatalog = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'EPC and Floor Plan Pricing',
  itemListElement: pricing.map((row, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Offer',
      name: `${row.label} EPC`,
      price: row.epc,
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
      url: `${site.url}/contact`,
      seller: { '@id': `${site.url}/#business` },
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Pricing', item: `${site.url}/pricing` },
  ],
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([offerCatalog, breadcrumbSchema]) }}
      />

      <BreadcrumbNav items={breadcrumbs} />

      <PageHero
        eyebrow="Pricing"
        heading="EPC and Floor Plan Pricing"
        subheading="The prices shown are estimates only and act as starting prices. Your final cost depends on the property's floor area (m²), any extensions or loft conversions, layout, and condition, plus a little extra travel time for properties more than 45 minutes away, request a personalised quote for an exact figure."
        primaryCta={{ label: 'Request a Quote', href: '/contact' }}
      />

      {/* Full pricing table */}
      <Section variant="default" id="pricing-table">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">The Numbers</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            Guide Pricing Table
          </h2>
          <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
            Every EPC includes the assessment, certificate lodgement, and email delivery. Next-day service is £12 extra.
          </p>
        </div>

        {/* Two prominent callouts — read at a glance, even if nothing else is */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 max-w-3xl">
          <div className="flex gap-3 rounded-xl border border-warm-200 bg-warm-50 p-4">
            <Info className="w-5 h-5 text-warm-600 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-secondary-900">These are starting prices</p>
              <p className="mt-1 text-sm text-secondary-700 leading-relaxed">
                Every figure below is a guide estimate, not a fixed quote. You get an exact price confirmed before you book.
              </p>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl border border-primary-200 bg-primary-50 p-4">
            <Ruler className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-semibold text-secondary-900">Floor area is the biggest factor</p>
              <p className="mt-1 text-sm text-secondary-700 leading-relaxed">
                Your price is driven mainly by internal floor area (m²). Extensions, loft conversions, layout and condition also count.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-secondary-200 shadow-premium">
          <div className="overflow-x-auto overscroll-x-contain [scrollbar-width:thin]">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="bg-secondary-50 border-b border-secondary-200">
                  <th className="px-5 py-3.5 text-left font-semibold text-secondary-700">Internal floor area</th>
                  <th className="px-4 py-3.5 text-right font-semibold text-secondary-900">EPC guide</th>
                  <th className="px-4 py-3.5 text-right font-semibold text-secondary-600">Next-day guide</th>
                  <th className="px-4 py-3.5 text-right font-semibold text-secondary-600">Floor plan guide</th>
                  <th className="px-4 py-3.5 text-right font-semibold text-primary-800 bg-primary-50">Bundle guide</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-secondary-100">
                {pricing.map((row) => (
                  <tr key={row.type} className="bg-white hover:bg-secondary-50/70 transition-colors">
                    <td className="px-5 py-3.5">
                      {/* PRIMARY: floor area drives the guide band */}
                      <span className="flex items-center gap-1.5 text-base font-bold text-secondary-900">
                        <Ruler className="w-3.5 h-3.5 shrink-0 text-secondary-500" aria-hidden="true" />
                        {row.areaLabel}
                      </span>
                      {/* SECONDARY: familiar reference only */}
                      <span className="mt-0.5 block text-xs text-secondary-600">{row.typicalLabel}</span>
                    </td>
                    <td className="px-4 py-3.5 text-right whitespace-nowrap">
                      <span className="text-xs font-medium text-secondary-600">from</span>{' '}
                      <span className="text-base font-bold text-secondary-900">£{formatPrice(row.epc)}</span>
                    </td>
                    <td className="px-4 py-3.5 text-right text-secondary-600 whitespace-nowrap">£{formatPrice(nextDayGuide(row))}</td>
                    <td className="px-4 py-3.5 text-right text-secondary-600 whitespace-nowrap">£{formatPrice(row.floorPlan)}</td>
                    <td className="px-4 py-3.5 text-right font-bold text-primary-800 bg-primary-50 whitespace-nowrap">
                      £{formatPrice(row.bundle)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-secondary-50 border-t border-secondary-200">
                  <td colSpan={5} className="px-5 py-3 text-xs text-secondary-500 leading-relaxed">
                    All figures are guide estimates and act as starting prices. Floor area (m²) is the single biggest factor in the final price, alongside extensions, loft conversions, layout and condition. There&rsquo;s no charge for travel or mileage; properties more than about 45 minutes away add a little for the extra time.{' '}
                    <a href="/contact" className="font-medium text-primary-700 underline">Request an exact quote</a>.
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="bg-secondary-50 px-5 pb-3 text-xs font-medium text-secondary-600 sm:hidden" aria-hidden="true">
            Swipe sideways to see every column
          </p>
        </div>

        <div className="mt-6 rounded-xl bg-primary-50 border border-primary-200 p-6 flex items-start gap-4">
          <Sparkles className="w-6 h-6 text-primary-700 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-primary-900 font-medium">
            Better value together: booking an EPC and floor plan in one visit costs less than booking them separately. We measure the property during the assessment anyway, so it is one appointment rather than two.
          </p>
        </div>
      </Section>

      {/* What's included / not included */}
      <Section variant="muted" id="whats-included">
        <div className="grid gap-5 md:gap-8 md:grid-cols-2">
          <Card className="p-5 md:p-8">
            <h2 className="text-xl font-semibold text-secondary-900">What&rsquo;s included in every EPC</h2>
            <ul className="mt-5 space-y-2.5">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-secondary-700">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-5 md:p-8">
            <h2 className="text-xl font-semibold text-secondary-900">What&rsquo;s not included</h2>
            <ul className="mt-5 space-y-2.5">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-secondary-700">
                  <XCircle className="w-5 h-5 text-secondary-400 shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-secondary-600">
              For properties outside our service radius, contact us for a tailored quote.
            </p>
          </Card>
        </div>
      </Section>

      {/* Pricing FAQ */}
      <Section variant="default" id="pricing-faq">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">FAQ</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            Pricing Questions
          </h2>
          <div className="mt-8">
            <Accordion items={pricingFaq} />
          </div>
        </div>
      </Section>

      <CtaStrip
        heading="Get a Personalised Quote"
        body="Tell us your property size and we'll confirm an exact price within 2 hours."
        primaryCta={{ label: 'Request a Quote', href: '/contact' }}
      />
    </>
  )
}
