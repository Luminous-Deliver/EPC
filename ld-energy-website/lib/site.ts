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

export const pricing: Array<{
  type: PropertyType
  label: string
  epc: number
  duration: string
  nextDay: number
  floorPlan: number
  bundle: number
  saving: number
}> = [
  { type: 'studio', label: 'Studio', epc: 49, duration: '45 minutes', nextDay: 61, floorPlan: 49, bundle: 73.5, saving: 24.5 },
  { type: '1-bed', label: '1 Bedroom', epc: 59, duration: '45–60 minutes', nextDay: 71, floorPlan: 59, bundle: 88.5, saving: 29.5 },
  { type: '2-bed', label: '2 Bedroom', epc: 69, duration: '45–60 minutes', nextDay: 81, floorPlan: 69, bundle: 103.5, saving: 34.5 },
  { type: '3-bed', label: '3 Bedroom', epc: 85, duration: '1–1.5 hours', nextDay: 97, floorPlan: 85, bundle: 127.5, saving: 42.5 },
  { type: '4-bed', label: '4 Bedroom', epc: 95, duration: '1.5–2 hours', nextDay: 107, floorPlan: 95, bundle: 142.5, saving: 47.5 },
  { type: '5-bed-plus', label: '5+ Bedroom', epc: 105, duration: '1.5–2 hours', nextDay: 117, floorPlan: 105, bundle: 157.5, saving: 52.5 },
]

export const boroughs = [
  'stratford', 'hackney', 'tower-hamlets', 'newham', 'greenwich',
  'islington', 'southwark', 'lewisham', 'barking-dagenham',
  'waltham-forest', 'camden', 'westminster', 'lambeth', 'wandsworth',
  'brent', 'ealing', 'hounslow', 'richmond', 'kingston', 'croydon',
  'enfield', 'haringey', 'redbridge', 'havering', 'bexley', 'bromley',
  'sutton', 'merton', 'hammersmith-fulham', 'kensington-chelsea',
  'city-of-london', 'barnet', 'harrow', 'hillingdon',
] as const
