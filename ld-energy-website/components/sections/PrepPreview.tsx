import Link from 'next/link'
import { ArrowRight, Check, FileText, KeyRound } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Disclosure } from '@/components/ui/Disclosure'

/**
 * Compact preview of the preparation guide.
 *
 * The full six-card version of this content used to live on the homepage and
 * was the single tallest thing on mobile, which is why it moved to
 * /preparing-for-your-epc. But "what do I need to do before the assessor
 * arrives?" is a real pre-booking question, and answering it here removes a
 * reason to hesitate.
 *
 * So: one line per item instead of a card with an icon and a paragraph, and on
 * mobile the list sits behind a native disclosure while the question, the
 * access point and the link to the full guide stay visible. The detail lives on
 * the dedicated page; this is the answer, not the guide.
 */
const items = [
  'All rooms, including the loft hatch and any locked or storage rooms',
  'The boiler, hot water cylinder and heating controls',
  'Every window and external door',
  'All radiators, with access clear of furniture',
  'Light fittings, so low-energy and halogen can be counted',
  'The electricity meter, plus the cupboard key if it is external',
]

function PrepList() {
  return (
    <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-secondary-700">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function PrepPreview() {
  return (
    <Section variant="default" tier="compact" id="before-the-visit" className="scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-3xl">
        <SectionHeader
          tier="compact"
          eyebrow="Before the visit"
          heading="What to have ready"
          intro="The survey takes 45–60 minutes when everything is reachable. We need to see:"
        />
      </div>

      <div className="mt-5 hidden md:block">
        <PrepList />
      </div>

      <div className="mt-4 md:hidden">
        <Disclosure summary="See what the assessor needs access to">
          <PrepList />
        </Disclosure>
      </div>

      {/* Documents are a secondary note, not a second checklist. Listing every
          possible certificate here would rebuild the section we deliberately
          moved off the homepage. */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <p className="flex items-start gap-2.5 text-sm leading-relaxed text-secondary-700">
          <KeyRound className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
          <span>
            <strong className="font-semibold text-secondary-900">Tenanted property?</strong> Give your
            tenant notice and confirm access before the visit. Evening and weekend slots are available.
          </span>
        </p>
        <p className="flex items-start gap-2.5 text-sm leading-relaxed text-secondary-700">
          <FileText className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
          <span>
            <strong className="font-semibold text-secondary-900">Have supporting documents?</strong>{' '}
            Where applicable, evidence helps us record improvements accurately — for example glazing,
            insulation, extensions, renewables or heating upgrades.{' '}
            <Link
              href="/preparing-for-your-epc#evidence"
              className="font-semibold text-primary-700 underline underline-offset-2 hover:text-primary-800"
            >
              See what documents may be useful
            </Link>
          </span>
        </p>
      </div>

      <Link
        href="/preparing-for-your-epc"
        className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800"
      >
        See the full EPC preparation checklist
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </Section>
  )
}
