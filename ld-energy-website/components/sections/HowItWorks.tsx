import { Section } from '@/components/ui/Section'
import { CalendarCheck, ClipboardList, FileCheck2, Route } from 'lucide-react'

const steps = [
  {
    Icon: CalendarCheck,
    title: 'Book',
    body:
      'Contact us by phone, WhatsApp, email, or use our online form. Tell us your property address and preferred time slot.',
  },
  {
    Icon: ClipboardList,
    title: 'Assessment',
    body:
      'Our qualified DEA visits at your chosen time. The assessment takes 45 minutes to 2 hours depending on property size.',
  },
  {
    Icon: FileCheck2,
    title: 'Certificate',
    body:
      'We lodge your EPC on the official government register and email your certificate within 72 hours (or next day if you’ve chosen express).',
  },
]

export function HowItWorks() {
  return (
    <Section variant="default" id="how-it-works" className="py-16 md:py-24 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 ring-1 ring-primary-100 px-3 py-1 text-xs uppercase tracking-wide font-semibold text-primary-700">
          <Route className="w-3.5 h-3.5" aria-hidden="true" />
          The Process
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-secondary-900">
          How It Works
        </h2>
        <p className="mt-4 text-lg text-secondary-700 leading-relaxed">
          Three simple steps from first contact to certificate in your inbox.
        </p>
      </div>

      <ol className="relative mt-12 grid gap-6 md:grid-cols-3">
        {/* Desktop connector */}
        <div className="hidden md:block pointer-events-none absolute left-0 right-0 top-1 h-px border-t-2 border-dashed border-primary-100" aria-hidden="true" />
        
        {/* Mobile vertical connector */}
        <div className="md:hidden pointer-events-none absolute left-10 top-8 bottom-8 w-px border-l-2 border-dashed border-primary-100" aria-hidden="true" />

        {steps.map((step, i) => (
          <li
            key={step.title}
            className="relative rounded-2xl bg-white ring-1 ring-secondary-900/5 p-6 md:p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-premium animate-fade-in-up"
          >
            <div className="absolute -top-4 left-6 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white font-bold text-sm ring-4 ring-white shadow-sm">
              {i + 1}
            </div>
            <step.Icon className="mt-3 w-9 h-9 text-primary-600" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold text-secondary-900">{step.title}</h3>
            <p className="mt-2 text-secondary-700 leading-relaxed">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
