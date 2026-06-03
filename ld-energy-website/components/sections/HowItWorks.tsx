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
    <Section variant="dark" id="how-it-works" className="relative overflow-hidden scroll-mt-20 md:scroll-mt-24">
      {/* Atmospheric glow */}
      <div
        className="bg-hero-glow pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] opacity-30"
        aria-hidden="true"
      />
      <div className="relative max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-3 py-1 text-xs uppercase tracking-wide font-semibold text-primary-300">
          <Route className="w-3.5 h-3.5" aria-hidden="true" />
          The Process
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          How It Works
        </h2>
        <p className="mt-4 text-lg text-secondary-300 leading-relaxed">
          Three simple steps from first contact to certificate in your inbox.
        </p>
      </div>

      <ol className="relative mt-12 grid gap-6 md:grid-cols-3">
        {/* Desktop connector */}
        <div className="hidden md:block pointer-events-none absolute left-0 right-0 top-1 h-px border-t-2 border-dashed border-white/15" aria-hidden="true" />
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="relative rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-6 md:p-8 backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:bg-white/[0.07] hover:ring-white/20 animate-fade-in-up"
          >
            <div className="absolute -top-4 left-6 inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 text-white font-bold text-sm ring-4 ring-secondary-900 shadow-sm">
              {i + 1}
            </div>
            <step.Icon className="mt-3 w-9 h-9 text-primary-300" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
            <p className="mt-2 text-secondary-300 leading-relaxed">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
