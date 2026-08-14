import Link from 'next/link'
import { ArrowRight, Calculator, CalendarClock, ReceiptText } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'

/**
 * Three things customers ask before booking, answered in one line each.
 *
 * These are the conversations that actually happen on the phone: will the price
 * change, can you get me a better rating, and why is my new EPC different from
 * the old one. Answering them up front removes friction and — for the second
 * one — sets a boundary that protects the assessment's integrity.
 *
 * Deliberately three short cards, not three essays. The full explanations live
 * on /preparing-for-your-epc and in the guides; this section's job is to make
 * the reader confident enough to enquire.
 */
const items = [
  {
    Icon: ReceiptText,
    title: 'Exact quote',
    body: 'Based on the property details you give us. Anything materially different is discussed and agreed before the assessment begins.',
    href: '/preparing-for-your-epc#quote-and-property-complexity',
  },
  {
    Icon: Calculator,
    title: 'Independent rating',
    body: 'We record the property; the score is calculated by the approved methodology. It cannot be manually adjusted.',
    href: '/preparing-for-your-epc#how-your-epc-rating-is-calculated',
  },
  {
    Icon: CalendarClock,
    title: 'RdSAP 10',
    body: 'Existing homes have used the updated methodology since June 2025, so an older EPC may not reproduce exactly.',
    href: '/preparing-for-your-epc#rdsap-10',
  },
]

export function GoodToKnow() {
  return (
    <Section variant="muted" tier="compact" id="good-to-know" className="scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-3xl">
        <SectionHeader
          tier="compact"
          eyebrow="Good to know"
          heading="Three things worth knowing first"
        />
      </div>

      <ul className="mt-5 grid gap-4 md:grid-cols-3">
        {items.map(({ Icon, title, body, href }) => (
          <li key={title} className="rounded-2xl border border-secondary-200 bg-white p-5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary-50 text-primary-700 ring-1 ring-primary-100">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <h3 className="mt-3 text-[15px] font-bold leading-snug text-secondary-900">
              <Link href={href} className="underline-offset-2 hover:underline">
                {title}
              </Link>
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-secondary-600">{body}</p>
          </li>
        ))}
      </ul>

      <Link
        href="/preparing-for-your-epc#what-to-have-ready"
        className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800"
      >
        Read the full EPC assessment guide
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </Section>
  )
}
