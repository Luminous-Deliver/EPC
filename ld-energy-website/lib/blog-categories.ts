export interface BlogCategory {
  slug: string
  name: string
  description: string
}

export const categories: BlogCategory[] = [
  {
    slug: 'epc-basics',
    name: 'EPC Basics',
    description: 'Understanding what an EPC is, how it works, and what to expect.',
  },
  {
    slug: 'for-landlords',
    name: 'For Landlords',
    description: 'EPC compliance, MEES, and rental property guidance for London landlords.',
  },
  {
    slug: 'for-sellers',
    name: 'For Sellers',
    description: 'EPC requirements, timing, and tips for selling your home.',
  },
  {
    slug: 'improvements',
    name: 'Improvements',
    description: 'Practical, costed ways to improve your EPC rating.',
  },
  {
    slug: 'regulations',
    name: 'Regulations',
    description: 'UK energy regulations, MEES, RdSAP and upcoming changes.',
  },
]

export function getCategory(slug: string): BlogCategory | undefined {
  return categories.find((c) => c.slug === slug)
}
