import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans, Fraunces } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileCallBar } from '@/components/layout/MobileCallBar'
import { CookieBanner } from '@/components/layout/CookieBanner'
import { LondonSkyline } from '@/components/ui/LondonSkyline'
import { site, pricing } from '@/lib/site'
import { boroughMeta } from '@/lib/boroughs'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

// Editorial display serif for headlines — warm, optical, distinctly not-Inter.
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  axes: ['SOFT', 'opsz'],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Domestic EPC London | From £49 | Elmhurst Accredited | L&D Energy',
    template: '%s | L&D Energy',
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: site.url,
    siteName: site.name,
    title: 'Domestic EPC London | From £49 | L&D Energy',
    description:
      'Elmhurst accredited domestic energy assessor. Guide prices from £49. Next-day service available across all London boroughs.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Domestic EPC London | From £49',
    description: 'Fast, affordable EPC certificates across London. Book today.',
  },
  robots: { index: true, follow: true },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
  other: {
    'geo.region': 'GB-LND',
    'geo.placename': 'London',
    'geo.position': `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
    'msvalidate.01': 'DFFEC284468B87783C72AAE82B182E2B',
  },
}

export const viewport: Viewport = {
  themeColor: '#0D9488',
  width: 'device-width',
  initialScale: 1,
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${site.url}/#business`,
  name: site.name,
  legalName: site.legalName,
  description: site.description,
  url: site.url,
  telephone: site.phoneIntl,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '20:00',
  },
  areaServed: [
    { '@type': 'City', name: 'London', addressCountry: 'GB' },
    ...Object.values(boroughMeta).map((b) => ({ '@type': 'AdministrativeArea', name: b.name, containedInPlace: { '@type': 'City', name: 'London' } })),
  ],
  priceRange: '£',
  currenciesAccepted: 'GBP',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'EPC and Floor Plan Services',
    itemListElement: [
      ...pricing.map((p) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: `${p.label} Domestic EPC Certificate` },
        price: p.epc,
        priceCurrency: 'GBP',
      })),
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Next-Day EPC Service', description: 'Certificate within 24 hours' },
        priceSpecification: { '@type': 'PriceSpecification', price: 12, priceCurrency: 'GBP', description: 'Additional charge on top of base EPC price' },
      },
    ],
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Domestic Energy Assessor Accreditation',
    identifier: site.assessor.accreditationNumber,
    recognizedBy: { '@type': 'Organization', name: site.assessor.scheme },
  },
  employee: {
    '@type': 'Person',
    name: site.assessor.name,
    jobTitle: 'Domestic Energy Assessor',
    identifier: site.assessor.accreditationNumber,
  },
  sameAs: [
    'https://share.google/4LTPb4XMjeNq7TpXk',
    'https://www.elmhurstenergy.co.uk/find-an-assessor',
  ],
  knowsAbout: [
    'Energy Performance Certificates',
    'Domestic EPC',
    'MEES Compliance',
    'RdSAP Assessment',
    'Elmhurst Energy Accreditation',
  ],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site.url}/#organization`,
  name: 'L&D Energy',
  legalName: site.legalName,
  alternateName: ['LD Energy', 'L and D Energy'],
  disambiguatingDescription: 'L&D Energy is a domestic Energy Performance Certificate (EPC) provider based in Stratford, East London. We provide official EPC certificates and floor plans for residential properties across all London boroughs. L&D Energy is not related to learning and development, oil and gas training, L&Q Energy, or LD Energy Solutions.',
  description: 'Elmhurst-accredited domestic Energy Performance Certificate (EPC) provider serving all 32 London boroughs. Official EPC certificates for homeowners, landlords, and letting agents from £49.',
  url: site.url,
  telephone: site.phoneIntl,
  email: site.email,
  foundingLocation: { '@type': 'Place', name: 'Stratford, East London', address: { '@type': 'PostalAddress', addressLocality: 'Stratford', postalCode: 'E15', addressCountry: 'GB' } },
  areaServed: { '@type': 'City', name: 'London', addressCountry: 'GB' },
  serviceType: 'Energy Performance Certificate Assessment',
  parentOrganization: { '@type': 'Organization', name: site.legalName },
  sameAs: [
    'https://share.google/4LTPb4XMjeNq7TpXk',
    'https://www.elmhurstenergy.co.uk/find-an-assessor',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cfBeaconToken = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN
  return (
    <html lang="en-GB" className={`${inter.variable} ${jakarta.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, organizationSchema]) }}
        />
        {cfBeaconToken ? (
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: cfBeaconToken })}
          />
        ) : null}
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        {/* Skyline transition — ivory canvas fades into forest dark */}
        <LondonSkyline className="text-[#07211e] -mb-1" />
        <Footer />
        <MobileCallBar />
        <CookieBanner />
      </body>
    </html>
  )
}
