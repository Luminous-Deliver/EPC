import { Container } from '@/components/ui/Container'
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
    <section
      id="how-it-works"
      className="relative overflow-hidden py-16 md:py-24 scroll-mt-20 md:scroll-mt-24"
      style={{ background: 'linear-gradient(160deg, #0D1B33 0%, #142644 50%, #0D1B33 100%)' }}
    >
      {/* Atmospheric glow, reuses footer palette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-[0.10]"
        style={{ background: 'radial-gradient(ellipse, #47846E 0%, transparent 70%)' }}
      />

      <Container className="relative">
        <div className="max-w-3xl">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs uppercase tracking-wide font-semibold"
            style={{ background: 'rgba(71,132,110,0.12)', border: '1px solid rgba(71,132,110,0.3)', color: '#95BFAD' }}
          >
            <Route className="w-3.5 h-3.5" aria-hidden="true" />
            The Process
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-white" style={{ letterSpacing: '-0.01em' }}>
            How It Works
          </h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(214,225,240,0.65)' }}>
            Three simple steps from first contact to certificate in your inbox.
          </p>
        </div>

        <ol className="relative mt-12 grid gap-6 md:grid-cols-3">
          {/* Desktop connector */}
          <div
            className="hidden md:block pointer-events-none absolute left-0 right-0 top-1 h-px border-t border-dashed"
            style={{ borderColor: 'rgba(71,132,110,0.3)' }}
            aria-hidden="true"
          />
          {/* Mobile vertical connector */}
          <div
            className="md:hidden pointer-events-none absolute left-10 top-8 bottom-8 w-px border-l border-dashed"
            style={{ borderColor: 'rgba(71,132,110,0.3)' }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl p-6 md:p-8 transition-all duration-200 hover:-translate-y-1 animate-reveal"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(71,132,110,0.18)' }}
            >
              <div
                className="absolute -top-4 left-6 inline-flex items-center justify-center w-9 h-9 rounded-xl font-bold text-sm shadow-sm"
                style={{ background: 'linear-gradient(135deg, #95BFAD, #6CA28C)', color: '#0D1B33', boxShadow: '0 0 0 4px #0D1B33' }}
              >
                {i + 1}
              </div>
              <step.Icon className="mt-3 w-9 h-9" style={{ color: '#95BFAD' }} aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-sm" style={{ color: 'rgba(214,225,240,0.6)' }}>{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
