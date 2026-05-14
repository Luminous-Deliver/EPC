import { Section } from '@/components/ui/Section'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { site } from '@/lib/site'

interface LegalPageProps {
  title: string
  lastUpdated: string
  breadcrumbs: { href?: string; label: string }[]
  children: React.ReactNode
}

export function LegalPage({ title, lastUpdated, breadcrumbs, children }: LegalPageProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: item.href ? `${site.url}${item.href === '/' ? '' : item.href}` : undefined,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BreadcrumbNav items={breadcrumbs} />
      <Section variant="default" className="py-12 md:py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-secondary-900">{title}</h1>
          <p className="mt-3 text-sm text-secondary-500">Last updated: {lastUpdated}</p>
          <div className="legal-prose mt-8 space-y-6 text-secondary-700 leading-relaxed">{children}</div>
        </div>
      </Section>
    </>
  )
}
