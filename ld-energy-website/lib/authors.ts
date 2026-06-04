export interface Author {
  slug: string
  name: string
  role: string
  bio: string
  image?: string
  credentials: string[]
  linkedIn?: string
}

export const authors: Record<string, Author> = {
  'abdul-taher': {
    slug: 'abdul-taher',
    name: 'Abdul M Taher',
    role: 'Elmhurst-Accredited Domestic Energy Assessor',
    bio: "Founder of L&D Energy. Elmhurst-accredited DEA covering all London boroughs. Trained in RdSAP 10 methodology with hands-on experience assessing London's full range of property types, Victorian terraces, post-war estates, modern new-builds, and converted period flats.",
    credentials: [
      'Level 3 Domestic Energy Assessor',
      'Level 2 Award in Retrofit',
      'Elmhurst Energy member',
    ],
    linkedIn: '',
  },
}

export function getAuthor(slug: string): Author | undefined {
  return authors[slug]
}
