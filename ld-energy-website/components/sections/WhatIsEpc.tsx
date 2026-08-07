import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { ArrowRight } from 'lucide-react'

/** Official EPC band colours, as they appear on the certificate itself. */
const BANDS = [
  { band: 'A', range: '92+', color: '#008054', text: 'text-white', width: 40 },
  { band: 'B', range: '81–91', color: '#19B459', text: 'text-white', width: 50 },
  { band: 'C', range: '69–80', color: '#8DCE46', text: 'text-secondary-900', width: 60 },
  { band: 'D', range: '55–68', color: '#FFD500', text: 'text-secondary-900', width: 70 },
  { band: 'E', range: '39–54', color: '#FCAA1B', text: 'text-secondary-900', width: 80 },
  { band: 'F', range: '21–38', color: '#EF8023', text: 'text-white', width: 90 },
  { band: 'G', range: '1–20', color: '#E9153B', text: 'text-white', width: 100 },
]

const questions = [
  {
    q: 'When is one legally required?',
    a: 'Whenever a property is marketed for sale or rent in England and Wales, and at the start of a new tenancy. It must be commissioned before marketing begins.',
  },
  {
    q: 'What rating do landlords need?',
    a: 'Under the Minimum Energy Efficiency Standards, most rented homes must reach band E or above unless a valid exemption is registered.',
  },
  {
    q: 'How long does the visit take?',
    a: 'Typically 45–60 minutes for a flat or standard house. The assessor needs access to all rooms, the loft hatch, the boiler and the meters.',
  },
  {
    q: 'Can I get a same-day EPC in London?',
    a: 'Often, yes. Same-day and next-day slots are regularly available across London. Call or WhatsApp us and we’ll tell you straight away what’s free.',
  },
  {
    q: 'How long is it valid?',
    a: 'Ten years from the date of issue. You only need a new one sooner if you make changes that alter the property’s energy performance.',
  },
]

export function WhatIsEpc() {
  return (
    <Section variant="default" id="what-is-epc" className="scroll-mt-20 md:scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-start">
        {/* Left: definition + the rating scale as it appears on the certificate */}
        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-secondary-400">
            <span className="block h-px w-8 bg-secondary-300" aria-hidden="true" />
            EPC Basics
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-secondary-900">
            What is an EPC?
          </h2>
          <p className="mt-4 text-lg text-secondary-700 leading-relaxed">
            An Energy Performance Certificate rates a property’s energy efficiency from A (most
            efficient) to G (least efficient), alongside a list of improvements that could lift the
            score. It’s produced by an accredited assessor and stays valid for ten years.
          </p>

          <Link
            href="/faq"
            className="mt-5 inline-flex items-center gap-1.5 font-semibold text-primary-700 hover:text-primary-800"
          >
            Read all the EPC questions
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          <div className="mt-8 rounded-2xl border border-secondary-200 bg-white p-5 shadow-sm">
            <p className="text-[11px] uppercase tracking-widest font-semibold text-secondary-400">
              The rating scale, as it appears on the certificate
            </p>
            <ul className="mt-4 space-y-1.5">
              {BANDS.map((b) => (
                <li key={b.band} className="flex items-center gap-2">
                  <span className="w-14 shrink-0 rounded bg-secondary-100 px-2 py-1 text-center font-mono text-[11px] font-semibold text-secondary-700">
                    {b.range}
                  </span>
                  <span
                    className={`flex items-center justify-end rounded px-3 py-1.5 text-sm font-extrabold ${b.text}`}
                    style={{ backgroundColor: b.color, width: `${b.width}%` }}
                  >
                    {b.band}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-secondary-500">
              A higher score means a better rating and, usually, lower running costs.
            </p>
          </div>
        </div>

        {/* Right: the questions people actually ask before booking */}
        <dl className="divide-y divide-secondary-200 border-t border-secondary-200">
          {questions.map(({ q, a }) => (
            <div key={q} className="py-5">
              <dt className="text-base md:text-lg font-bold text-secondary-900">{q}</dt>
              <dd className="mt-2 text-secondary-600 leading-relaxed">{a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
