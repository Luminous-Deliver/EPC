import { Container } from '@/components/ui/Container'
import { CalendarCheck, ClipboardList, FileCheck2, Route } from 'lucide-react'

const steps = [
  {
    Icon: CalendarCheck,
    title: 'Get your quote',
    body: 'Send the address and property type. We confirm your exact price and a slot — often same day.',
  },
  {
    Icon: ClipboardList,
    title: 'Assessment',
    body: 'A 45–60 minute survey. Tidy, tenant-friendly, nothing invasive.',
  },
  {
    Icon: FileCheck2,
    title: 'Lodged in 72 hours',
    body: 'Lodged on the GOV.UK EPC register, with your certificate link sent once live. Next day available.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-12 md:py-16 scroll-mt-20 md:scroll-mt-24"
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
            Three steps, no chasing
          </h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(214,225,240,0.65)' }}>
            From first contact to certificate in your inbox — you always know what happens next.
          </p>
        </div>

        <ol className="relative mt-10 grid gap-6 md:grid-cols-3">
          {/* Connector line — reads as movement 1 → 2 → 3 rather than three stages */}
          <div
            className="pointer-events-none absolute left-4 top-4 bottom-4 hidden w-px md:left-0 md:right-0 md:top-4 md:bottom-auto md:h-px md:w-auto md:block"
            style={{ background: 'linear-gradient(to right, transparent, rgba(149,191,173,0.35) 12%, rgba(149,191,173,0.35) 88%, transparent)' }}
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{ background: '#95BFAD', color: '#0D1B33', boxShadow: '0 0 0 4px #0D1B33' }}
                >
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold text-white md:text-xl">{step.title}</h3>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed md:pl-11" style={{ color: 'rgba(214,225,240,0.65)' }}>
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
