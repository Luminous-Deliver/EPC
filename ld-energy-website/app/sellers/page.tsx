import type { Metadata } from 'next'
import {
  TrendingUp,
  Clock,
  Hourglass,
  Home,
  Lightbulb,
  Thermometer,
  Sun,
} from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { PageHero } from '@/components/sections/PageHero'
import { Pricing } from '@/components/sections/Pricing'
import { CtaStrip } from '@/components/sections/CtaStrip'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'EPC for Selling Your Home London | From £49',
  description:
    'EPC certificates for selling your London home. Required by law before marketing. Fast 72-hour turnaround, next-day available. Guide prices from £49. Book today.',
  alternates: { canonical: `${site.url}/sellers` },
  openGraph: {
    title: 'EPC for Selling Your Home London | From £49 | L&D Energy',
    description:
      'EPC certificates for selling your London home. Required by law before marketing. Fast 72-hour turnaround, next-day available. Guide prices from £49.',
    url: `${site.url}/sellers`,
  },
  twitter: {
    title: 'EPC for Selling Your Home London | From £49',
    description:
      'EPC certificates for selling your London home. Required by law before marketing. Book today.',
  },
}

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/sellers', label: 'For Sellers' },
]

const timeline = [
  {
    title: 'Get your EPC before marketing',
    body: 'You must have an EPC commissioned before your property is advertised. Estate agents will ask for it on day one.',
  },
  {
    title: 'Book early in the listing process',
    body: 'Booking your EPC at the same time as your photography and floor plan keeps everything ready for launch day.',
  },
  {
    title: 'Use next-day service if you’re tight',
    body: 'If your agent has already started chasing, our next-day service (+£12) gets the certificate to you within 24 hours.',
  },
  {
    title: 'Provide the EPC to your buyer’s solicitor',
    body: 'The certificate is required as part of your sale pack and is referenced during conveyancing.',
  },
]

const improvements = [
  {
    Icon: Lightbulb,
    title: 'LED lighting',
    body: 'Low-cost swap. Increases the proportion of low-energy lighting recorded — a direct EPC factor.',
  },
  {
    Icon: Thermometer,
    title: 'Modern condensing boiler',
    body: 'A high-efficiency boiler with good controls is one of the highest-impact upgrades for older properties.',
  },
  {
    Icon: Home,
    title: 'Loft & cavity wall insulation',
    body: 'Quick, cost-effective improvements that meaningfully shift your rating in many London homes.',
  },
  {
    Icon: Sun,
    title: 'Renewables',
    body: 'Solar PV or a heat pump can move a property up several bands — useful if you’re aiming for EPC C or above.',
  },
]

const whyMatters = [
  {
    Icon: Clock,
    title: 'Legal requirement',
    body: 'You must have an EPC commissioned before your property is marketed for sale in England and Wales — and your estate agent cannot legally list it without one.',
  },
  {
    Icon: TrendingUp,
    title: 'Buyers care about efficiency',
    body: 'With rising energy bills and tighter mortgage criteria, more buyers now factor EPC rating into offers. A better rating supports your asking price.',
  },
  {
    Icon: Hourglass,
    title: 'Don’t hold up your sale',
    body: 'Conveyancing solicitors will ask for the certificate early. Our 72-hour standard delivery (or 24-hour express) keeps your timeline on track.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'For Sellers', item: `${site.url}/sellers` },
  ],
}

export default function SellersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <BreadcrumbNav items={breadcrumbs} />

      <PageHero
        eyebrow="For Home Sellers"
        heading="EPCs for Selling Your London Home"
        subheading="An EPC is required by law before your property goes on the market. We provide fast, transparently priced certificates so your sale isn't held up — 72 hours standard, or next day for £12 extra."
        primaryCta={{ label: 'Book Your Seller EPC', href: '/contact' }}
      />

      {/* Why it matters */}
      <Section variant="default" id="why-it-matters">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">Why It Matters</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            Why You Need an EPC to Sell
          </h2>
          <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
            An EPC is legally required before any residential property is marketed for sale in England and Wales. It must be commissioned before your property is advertised and provided to potential buyers on request.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {whyMatters.map((m) => (
            <li key={m.title} className="rounded-lg border border-secondary-100 bg-white p-6 shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700">
                <m.Icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-secondary-900">{m.title}</h3>
              <p className="mt-2 text-secondary-700 leading-relaxed text-sm">{m.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Sale price impact */}
      <Section variant="muted" id="sale-price">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">Sale Price &amp; Speed</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
              How Your EPC Affects Your Sale
            </h2>
            <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
              EPC ratings are now front-and-centre on Rightmove, Zoopla and OnTheMarket listings. With energy costs and lender stress-testing in the spotlight, more buyers consider efficiency before making an offer.
            </p>
            <p className="mt-4 text-secondary-700 leading-relaxed">
              A higher rating signals lower running costs, which can support your asking price and reduce time on market. A lower rating doesn’t stop a sale, but it gives buyers a reason to negotiate down. The improvement recommendations on your certificate give you a roadmap if you want to push the rating up before relisting.
            </p>
          </div>

          <Card>
            <h3 className="text-xl font-semibold text-secondary-900">Quick-win improvements for sellers</h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {improvements.map((i) => (
                <li key={i.title} className="flex flex-col gap-2">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-700">
                    <i.Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <span className="font-semibold text-secondary-900">{i.title}</span>
                  <span className="text-sm text-secondary-700">{i.body}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Timeline */}
      <Section variant="default" id="timeline">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">Timeline</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            When to Book Your EPC
          </h2>
          <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
            The earlier the better. Here’s how to fit your EPC into a typical sale.
          </p>
        </div>
        <div className="mt-10 max-w-3xl">
          <ol className="space-y-6">
            {timeline.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary-600 text-white font-bold text-sm shrink-0">
                    {i + 1}
                  </span>
                  {i < timeline.length - 1 && (
                    <span className="mt-2 w-px flex-1 bg-primary-200" aria-hidden="true" />
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="text-lg font-semibold text-secondary-900">{step.title}</h3>
                  <p className="mt-1 text-secondary-700 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Pricing />

      <CtaStrip
        heading="Don’t Let an EPC Delay Your Sale"
        body="Standard 72-hour delivery or next-day for £12. We'll fit you in around your viewings."
        primaryCta={{ label: 'Book Your EPC', href: '/contact' }}
      />
    </>
  )
}
