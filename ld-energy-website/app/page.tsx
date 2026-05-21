import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { WhatIsEpc } from '@/components/sections/WhatIsEpc'
import { Pricing } from '@/components/sections/Pricing'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { WhyChoose } from '@/components/sections/WhyChoose'
import { Coverage } from '@/components/sections/Coverage'
import { Faq } from '@/components/sections/Faq'
import { ContactSection } from '@/components/sections/ContactSection'
import { site } from '@/lib/site'
import { homepageFaq } from '@/lib/faq'

export const metadata: Metadata = {
  title: { absolute: 'Domestic EPC London | From £49 | Elmhurst Accredited | L&D Energy' },
  description:
    'Fast, affordable EPC certificates across all London boroughs. Elmhurst accredited Domestic Energy Assessor. Guide prices from £49, certificate within 72 hours, next-day service available. Book your EPC today.',
  keywords: [
    'EPC London',
    'domestic EPC',
    'energy performance certificate London',
    'EPC certificate',
    'EPC assessor London',
    'cheap EPC London',
    'same day EPC London',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Domestic EPC London | From £49 | Elmhurst Accredited | L&D Energy',
    description:
      'Fast, affordable EPC certificates across all London boroughs. Elmhurst accredited DEA. Guide prices from £49, certificate within 72 hours, next-day service available.',
    url: site.url,
  },
  twitter: {
    title: 'Domestic EPC London | From £49 | Elmhurst Accredited',
    description:
      'Fast, affordable EPC certificates across all London boroughs. Guide prices from £49. Book your EPC today.',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site.url}/#organization`,
  name: 'L&D Energy',
  legalName: site.legalName,
  alternateName: ['LD Energy', 'L and D Energy'],
  disambiguatingDescription: 'L&D Energy is a domestic Energy Performance Certificate (EPC) provider based in Stratford, East London — not related to learning and development, oil and gas training, L&Q Energy, or LD Energy Solutions.',
  description: 'Elmhurst-accredited domestic EPC provider. Official Energy Performance Certificates for homeowners, landlords, and letting agents across all London boroughs.',
  url: site.url,
  logo: {
    '@type': 'ImageObject',
    url: `${site.url}/logo.png`,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: site.phoneIntl,
    contactType: 'customer service',
    areaServed: 'GB',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://share.google/4LTPb4XMjeNq7TpXk',
    'https://www.elmhurstenergy.co.uk/find-an-assessor',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.description,
  publisher: { '@id': `${site.url}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${site.url}/areas/{search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homepageFaq.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema, faqSchema]) }}
      />
      <section aria-label="Page summary" className="sr-only">
        <h2>About L&amp;D Energy</h2>
        <p>
          L&amp;D Energy is an Elmhurst-accredited Domestic Energy Assessor based in Stratford, East London. We provide official Energy Performance Certificates (EPCs) and floor plans for residential properties across all London boroughs. Standard turnaround is 72 hours; next-day service available for £12 extra. Prices start at £49 for studios and £79 for 5+ bedroom homes. All EPCs are lodged on the UK government&rsquo;s official EPC Register. Contact: 07492 575 396 or contact@luminousanddeliver.co.uk.
        </p>
      </section>

      <Hero />
      <TrustBar />
      <WhatIsEpc />
      <Pricing />
      <HowItWorks />
      <ServicesOverview />
      <WhyChoose />
      <Coverage />
      <Faq />
      <ContactSection />
    </>
  )
}
