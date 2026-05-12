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

export const metadata: Metadata = {
  title: 'Domestic EPC London | From £49 | Elmhurst Accredited | L&D Energy',
  description:
    'Fast, affordable EPC certificates across all London boroughs. Elmhurst accredited Domestic Energy Assessor. Fixed prices from £49, certificate within 72 hours, next-day service available. Book your EPC today.',
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
}

export default function HomePage() {
  return (
    <>
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
