export const site = {
  name: 'L&D Energy',
  legalName: 'Luminous & Deliver Ltd',
  url: 'https://epc.luminousanddeliver.co.uk',
  description:
    'L&D Energy is an Elmhurst-accredited Domestic Energy Assessor providing official EPC certificates and floor plans for residential properties across all 32 London boroughs. Guide prices from £49.',
  phone: '07492 575 396',
  phoneIntl: '+447492575396',
  phoneHref: 'tel:+447492575396',
  whatsappHref: 'https://wa.me/447492575396',
  email: 'contact@luminousanddeliver.co.uk',
  emailHref: 'mailto:contact@luminousanddeliver.co.uk',
  hours: 'Monday–Sunday, 8am–8pm',
  address: {
    locality: 'Stratford',
    region: 'London',
    postalCode: 'E15',
    country: 'GB',
  },
  geo: { lat: 51.543, lng: -0.0005 },
  assessor: {
    name: 'Abdul Motaleb Taher',
    accreditationNumber: 'EES/036265',
    scheme: 'Elmhurst Energy Systems Ltd',
    qualification: 'Domestic Energy Assessor',
    // Official government register — the authoritative place to verify an assessor
    verifyUrl: 'https://getting-new-energy-certificate.service.gov.uk/find-an-assessor/search-by-name',
  },
  /** Add-on services quoted alongside an EPC */
  addOns: {
    retrofitConsult: 25,
  },
  // Google Business Profile reviews. Keep in sync with the live profile.
  reviews: {
    ratingValue: 5,
    reviewCount: 3,
    profileUrl: 'https://share.google/UkIv0ZTOezQ5KqPQx',
    writeUrl: 'https://g.page/r/CWdJZan0XQzDEAI/review',
  },
} as const

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services/domestic-epc', label: 'Domestic EPC' },
  { href: '/domestic-energy-assessor-london', label: 'Energy Assessor' },
  { href: '/services/floor-plans', label: 'Floor Plans' },
  { href: '/landlords', label: 'For Landlords' },
  { href: '/sellers', label: 'For Sellers' },
  { href: '/estate-agents', label: 'For Agents' },
  { href: '/areas', label: 'Areas' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

/** Top-level desktop nav items (Services is a dropdown; others are direct links) */
export const topNav = [
  { href: '/areas', label: 'Areas' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const

/** Grouped links for the Services menu (desktop dropdown + mobile drawer) */
export const servicesMenu = [
  {
    heading: 'Services',
    links: [
      { href: '/services/domestic-epc', label: 'Domestic EPC', desc: 'Official certificates from £49' },
      { href: '/services/floor-plans', label: 'Floor Plans', desc: 'Professional measured plans' },
      { href: '/domestic-energy-assessor-london', label: 'Energy Assessor', desc: 'Your accredited London DEA' },
    ],
  },
  {
    heading: 'Who we help',
    links: [
      { href: '/landlords', label: 'For Landlords', desc: 'Stay compliant & avoid fines' },
      { href: '/sellers', label: 'For Sellers', desc: 'Boost your listing appeal' },
      { href: '/estate-agents', label: 'For Agents', desc: 'EPC partner for new instructions' },
    ],
  },
] as const

export type PropertyType = 'studio' | '1-bed' | '2-bed' | '3-bed' | '4-bed' | '5-bed-plus'

/**
 * Fixed surcharge for next-day (express) delivery. This is one of the few
 * genuinely fixed numbers on the site — it is added to the confirmed quote,
 * not to the guide estimate.
 */
export const EXPRESS_SURCHARGE = 12

/**
 * CANONICAL PRICING SOURCE.
 *
 * Every figure here is an explicit GUIDE price, not a fixed quote. Internal
 * floor area (m²) is the real pricing driver; the bedroom label exists only
 * because customers recognise "2 bedroom" more readily than "52–70 m²".
 *
 * Bundle prices are deliberately stored as explicit values rather than being
 * derived from a percentage of the EPC price. They used to be computed as
 * `epc * 1.5` (i.e. "floor plan half price"), which hard-coded a blanket
 * discount promise into the data model. Each band can now be priced
 * independently without that promise leaking back into the copy.
 *
 * `express` is optional per band and falls back to EXPRESS_SURCHARGE.
 */
export interface PricingBand {
  type: PropertyType
  /** Familiar bedroom reference. Secondary to floor area — never lead with this. */
  label: string
  /** Primary pricing driver, e.g. '52–70 m²'. */
  areaLabel: string
  areaMin: number
  /** null = open-ended top band. */
  areaMax: number | null
  /** Muted caption used beneath the area figure. */
  typicalLabel: string
  epc: number
  floorPlan: number
  bundle: number
  duration: string
  express?: number
}

export const pricing: PricingBand[] = [
  { type: 'studio',     label: 'Studio',     areaLabel: '18–37 m²',  areaMin: 18,  areaMax: 37,   typicalLabel: 'Typical studio',          epc: 49,  floorPlan: 49,  bundle: 73.5,  duration: '45 minutes' },
  { type: '1-bed',      label: '1 Bedroom',  areaLabel: '37–52 m²',  areaMin: 37,  areaMax: 52,   typicalLabel: 'Typical 1-bedroom home',  epc: 59,  floorPlan: 59,  bundle: 88.5,  duration: '45–60 minutes' },
  { type: '2-bed',      label: '2 Bedroom',  areaLabel: '52–70 m²',  areaMin: 52,  areaMax: 70,   typicalLabel: 'Typical 2-bedroom home',  epc: 69,  floorPlan: 69,  bundle: 103.5, duration: '45–60 minutes' },
  { type: '3-bed',      label: '3 Bedroom',  areaLabel: '70–95 m²',  areaMin: 70,  areaMax: 95,   typicalLabel: 'Typical 3-bedroom home',  epc: 85,  floorPlan: 85,  bundle: 127.5, duration: '1–1.5 hours' },
  { type: '4-bed',      label: '4 Bedroom',  areaLabel: '95–120 m²', areaMin: 95,  areaMax: 120,  typicalLabel: 'Typical 4-bedroom home',  epc: 95,  floorPlan: 95,  bundle: 142.5, duration: '1.5–2 hours' },
  { type: '5-bed-plus', label: '5+ Bedroom', areaLabel: '120 m²+',   areaMin: 120, areaMax: null, typicalLabel: 'Typical 5+ bedroom home', epc: 105, floorPlan: 105, bundle: 157.5, duration: '1.5–2 hours' },
]

/** Express fee for a band — per-band override, else the standard surcharge. */
export function expressFee(band: PricingBand): number {
  return band.express ?? EXPRESS_SURCHARGE
}

/** Guide price for an EPC delivered next day. Derived, never stored. */
export function nextDayGuide(band: PricingBand): number {
  return band.epc + expressFee(band)
}

/**
 * Genuine arithmetic difference between booking separately and as a bundle.
 * Derived from the explicit prices above, so it can never contradict them —
 * and it is a guide figure like everything else, so present it hedged
 * ("around £X less") and in one place only. Never as a "You Save" column.
 */
export function bundleSaving(band: PricingBand): number {
  return band.epc + band.floorPlan - band.bundle
}

/** Lowest guide price across all bands, for "from £X" copy. */
export const priceFrom = {
  epc: Math.min(...pricing.map((p) => p.epc)),
  floorPlan: Math.min(...pricing.map((p) => p.floorPlan)),
  bundle: Math.min(...pricing.map((p) => p.bundle)),
}

export const boroughs = [
  'stratford', 'hackney', 'tower-hamlets', 'newham', 'greenwich',
  'islington', 'southwark', 'lewisham', 'barking-dagenham',
  'waltham-forest', 'camden', 'westminster', 'lambeth', 'wandsworth',
  'brent', 'ealing', 'hounslow', 'richmond', 'kingston', 'croydon',
  'enfield', 'haringey', 'redbridge', 'havering', 'bexley', 'bromley',
  'sutton', 'merton', 'hammersmith-fulham', 'kensington-chelsea',
  'city-of-london', 'barnet', 'harrow', 'hillingdon',
] as const
