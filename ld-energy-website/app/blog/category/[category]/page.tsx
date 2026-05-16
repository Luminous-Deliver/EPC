import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Section } from '@/components/ui/Section'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { PageHero } from '@/components/sections/PageHero'
import { CtaStrip } from '@/components/sections/CtaStrip'
import { PostCard } from '@/components/blog/PostCard'
import { categories, getCategory } from '@/lib/blog-categories'
import { getPostsByCategory } from '@/lib/blog'
import { site } from '@/lib/site'

interface PageProps {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params
  const cat = getCategory(slug)
  if (!cat) return {}
  const url = `${site.url}/blog/category/${cat.slug}`
  return {
    title: `${cat.name} — EPC Guides`,
    description: `${cat.description} Posts written by an Elmhurst-accredited London Domestic Energy Assessor.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${cat.name} — EPC Guides | L&D Energy`,
      description: cat.description,
      url,
    },
    twitter: {
      title: `${cat.name} — EPC Guides`,
      description: cat.description,
    },
  }
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const { category: slug } = await params
  const cat = getCategory(slug)
  if (!cat) notFound()
  const posts = await getPostsByCategory(slug)

  const breadcrumbs = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: `/blog/category/${cat.slug}`, label: cat.name },
  ]

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.label,
      item: b.href ? `${site.url}${b.href === '/' ? '' : b.href}` : undefined,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BreadcrumbNav items={breadcrumbs} />
      <PageHero
        eyebrow="EPC Blog"
        heading={cat.name}
        subheading={cat.description}
        primaryCta={{ label: 'Book Your EPC', href: '/contact' }}
      />

      <Section variant="default">
        {posts.length === 0 ? (
          <p className="text-secondary-700">No posts in this category yet — check back soon.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        )}
      </Section>

      <CtaStrip
        heading="Need an EPC? Book in 60 seconds."
        body="Elmhurst-accredited assessor. Guide prices from £49. Certificate within 72 hours."
        primaryCta={{ label: 'Book Now', href: '/contact' }}
      />
    </>
  )
}
