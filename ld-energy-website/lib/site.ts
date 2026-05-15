export const site = {
  name: 'L&D Energy',
  legalName: 'Luminous & Deliver Ltd',
  url: 'https://epc.luminousanddeliver.co.uk',
  description:
    'Elmhurst-accredited Domestic Energy Assessor providing EPC certificates and floor plans across all London boroughs. Fixed prices from £49.',
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
} as const

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services/domestic-epc', label: 'Domestic EPC' },
  { href: '/services/floor-plans', label: 'Floor Plans' },
  { href: '/landlords', label: 'For Landlords' },
  { href: '/sellers', label: 'For Sellers' },
  { href: '/areas', label: 'Areas' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
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
  { type: '1-bed', label: '1 Bedroom', epc: 60, duration: '1 hour', nextDay: 72, floorPlan: 60, bundle: 90, saving: 30 },
  { type: '2-bed', label: '2 Bedroom', epc: 65, duration: '1.5 hours', nextDay: 77, floorPlan: 65, bundle: 97.5, saving: 32.5 },
  { type: '3-bed', label: '3 Bedroom', epc: 67, duration: '1.5 hours', nextDay: 79, floorPlan: 67, bundle: 100.5, saving: 33.5 },
  { type: '4-bed', label: '4 Bedroom', epc: 69, duration: '2 hours', nextDay: 81, floorPlan: 69, bundle: 103.5, saving: 34.5 },
  { type: '5-bed-plus', label: '5+ Bedroom', epc: 79, duration: '2 hours', nextDay: 91, floorPlan: 79, bundle: 118.5, saving: 39.5 },
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
