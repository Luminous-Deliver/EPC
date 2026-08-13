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
    name: 'Abdul Motaleb Taher',
    role: 'Elmhurst-Accredited Domestic Energy Assessor',
    bio: "Founder of L&D Energy. Elmhurst-accredited DEA covering all London boroughs. Assesses using the current RdSAP 10 methodology, with hands-on experience across London's full range of property types, Victorian terraces, post-war estates, modern new-builds, and converted period flats.",
    // Only what the GOV.UK register and the Elmhurst accreditation actually
    // prove. "Level 3 Domestic Energy Assessor" and "Level 2 Award in Retrofit"
    // were removed as uncorroborated — reinstate using the exact title printed
    // on the certificate if the owner confirms they hold them.
    credentials: [
      'Elmhurst-accredited Domestic Energy Assessor',
      'Accreditation EES/036265',
    ],
    linkedIn: '',
  },
}

export function getAuthor(slug: string): Author | undefined {
  return authors[slug]
}
