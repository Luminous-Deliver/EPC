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
    verifyUrl: 'https://www.elmhurstenergy.co.uk/find-an-assessor',
  },
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

/** Top-level desktop nav items (Services is a dropdown; others are direct links) */
export const topNav = [
  { href: '/areas', label: 'Areas' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const

/** Links shown inside the Services dropdown */
export const servicesDropdown = [
  { href: '/services/domestic-epc', label: 'Domestic EPC', desc: 'Official certificates from £49' },
  { href: '/services/floor-plans', label: 'Floor Plans', desc: 'Professional measured plans' },
  { href: '/landlords', label: 'For Landlords', desc: 'Stay compliant & avoid fines' },
  { href: '/sellers', label: 'For Sellers', desc: 'Boost your listing appeal' },
  { href: '/about', label: 'About Us', desc: 'Meet your assessor' },
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
  { type: '2-bed', label: '2 Bedroom', epc: 70, duration: '1.5 hours', nextDay: 82, floorPlan: 70, bundle: 105, saving: 35 },
  { type: '3-bed', label: '3 Bedroom', epc: 75, duration: '1.5 hours', nextDay: 87, floorPlan: 75, bundle: 112.5, saving: 37.5 },
  { type: '4-bed', label: '4 Bedroom', epc: 81, duration: '2 hours', nextDay: 93, floorPlan: 81, bundle: 121.5, saving: 40.5 },
  { type: '5-bed-plus', label: '5+ Bedroom', epc: 90, duration: '2 hours', nextDay: 102, floorPlan: 90, bundle: 135, saving: 45 },
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
