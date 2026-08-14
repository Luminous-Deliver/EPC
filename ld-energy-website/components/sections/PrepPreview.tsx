import Link from 'next/link'
import { ArrowRight, Check, FileText, KeyRound } from 'lucide-react'
import { Section } from '@/components/ui/Section'

/**
 * Compact preview of the preparation guide.
 *
 * Sits directly under the dark "Three steps" process band, and previously lost
 * that comparison badly — plain text on plain background reads as filler next
 * to a full-bleed dark section. The fix is not to go dark too (two heavy bands
 * in a row is worse) but to give this one a contained, tinted panel so the page
 * reads as three distinct content types: process, practical preparation, and
 * factual notes.
 *
 * The checklist is the point of the section, so it gets circular check marks
 * and real row spacing rather than muted body text. The tenant and documents
 * notes are deliberately styled as a separate lower row — mixed into the list
 * they read as two more things to prepare, which they are not.
 */
const items = [
  'All rooms, including the loft hatch and any locked or storage rooms',
  'Boiler, hot-water cylinder and heating controls',
  'Every window and external door',
  'All radiators, with access clear of furniture',
  'Light fittings, so low-energy and halogen can be counted',
  'Electricity meter, plus the cupboard key if it is external',
]

function PrepList() {
  return (
    <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white shadow-sm"
          >
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
          <span className="text-[15px] font-medium leading-snug text-secondary-800">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function PrepPreview() {
  return (
    <Section variant="muted" tier="compact" id="before-the-visit" className="scroll-mt-20 md:scroll-mt-24">
      <div className="mx-auto max-w-4xl rounded-3xl border border-primary-200 bg-primary-50/60 p-5 shadow-sm sm:p-7">
        <p className="text-xs font-bold uppercase tracking-widest text-primary-700">Before the visit</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-secondary-900 md:text-3xl">
          What to have ready
        </h2>
        <p className="mt-2 max-w-2xl leading-relaxed text-secondary-700">
          Most EPC assessments take around 45–60 minutes. Making these areas accessible beforehand
          helps the visit run smoothly.
        </p>

        <p className="mt-5 text-sm font-bold text-secondary-900">Please make sure we can access:</p>

        {/* Visible at every width. Collapsing this on mobile hid the one thing
            the section exists to communicate, which defeats the point of
            giving it a stronger container in the first place. */}
        <div className="mt-3">
          <PrepList />
        </div>

        {/* Secondary notes: same panel, different treatment, so they read as
            context rather than as two more checklist items. */}
        <div className="mt-5 grid gap-3 border-t border-primary-200/70 pt-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-secondary-200 bg-white p-4">
            <p className="flex items-center gap-2 text-sm font-bold text-secondary-900">
              <KeyRound className="h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
              Tenanted property?
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-secondary-600">
              Give your tenant notice and confirm access before the visit. Evening and weekend slots
              are available.
            </p>
          </div>
          <div className="rounded-2xl border border-secondary-200 bg-white p-4">
            <p className="flex items-center gap-2 text-sm font-bold text-secondary-900">
              <FileText className="h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
              Have supporting documents?
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-secondary-600">
              Where applicable, evidence can help us record improvements accurately — such as
              glazing, insulation, extensions, heating upgrades or renewable systems.{' '}
              <Link
                href="/preparing-for-your-epc#documents-and-evidence"
                className="font-semibold text-primary-700 underline underline-offset-2 hover:text-primary-800"
              >
                See what documents may be useful
              </Link>
            </p>
          </div>
        </div>

        <Link
          href="/preparing-for-your-epc#what-to-have-ready"
          className="mt-5 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-primary-300 bg-white px-5 py-3 text-sm font-bold text-primary-800 shadow-sm transition-all hover:border-primary-400 hover:bg-primary-100"
        >
          View the full EPC preparation checklist
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  )
}
