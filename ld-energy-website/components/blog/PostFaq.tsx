import { Accordion } from '@/components/ui/Accordion'
import type { PostFaq as PostFaqItem } from '@/lib/blog'

interface PostFaqProps {
  faqs: PostFaqItem[]
}

export function PostFaq({ faqs }: PostFaqProps) {
  if (!faqs || faqs.length === 0) return null
  const items = faqs.map((f) => ({ q: f.question, a: f.answer }))
  return (
    <section aria-labelledby="faq-heading" className="not-prose mt-16">
      <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold tracking-tight text-secondary-900 mb-6">
        Frequently asked questions
      </h2>
      <Accordion items={items} />
    </section>
  )
}
