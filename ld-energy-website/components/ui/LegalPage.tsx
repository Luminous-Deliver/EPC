import { Section } from '@/components/ui/Section'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'

interface LegalPageProps {
  title: string
  lastUpdated: string
  breadcrumbs: { href?: string; label: string }[]
  children: React.ReactNode
}

export function LegalPage({ title, lastUpdated, breadcrumbs, children }: LegalPageProps) {
  return (
    <>
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
