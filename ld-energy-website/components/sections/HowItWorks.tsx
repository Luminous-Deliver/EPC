import { Section } from '@/components/ui/Section'
import { CalendarCheck, ClipboardList, FileCheck2 } from 'lucide-react'

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
    <Section variant="default" id="how-it-works">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">The Process</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
          How It Works
        </h2>
        <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
          Three simple steps from first contact to certificate in your inbox.
        </p>
      </div>

      <ol className="mt-10 grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="relative rounded-lg bg-white border border-secondary-100 p-6 md:p-8 shadow-sm"
          >
            <div className="absolute -top-3 left-6 inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white font-bold text-sm">
              {i + 1}
            </div>
            <step.Icon className="w-8 h-8 text-primary-600" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold text-secondary-900">{step.title}</h3>
            <p className="mt-2 text-secondary-700 leading-relaxed">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
