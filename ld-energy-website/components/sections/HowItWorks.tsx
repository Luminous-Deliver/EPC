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
            From first contact to your certificate live on the GOV.UK register — you always know what happens next.
          </p>
        </div>

        <ol className="relative mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
          {/*
            Connector reads as movement 1 → 2 → 3 rather than three stages.

            It can only exist because the markers sit on their own row above the
            headings. The previous layout put each marker beside its heading, so
            a horizontal rule at marker height necessarily struck through the
            titles. Here the marker band contains nothing but markers, and each
            marker carries a 4px ring in the section background colour so the
            line terminates cleanly at the circle rather than passing through it.

            Desktop only: stacked into one column the same line would run down
            through the body copy, and no connector reads better than that.
          */}
          <div
            className="pointer-events-none absolute inset-x-0 top-[18px] hidden h-px md:block"
            style={{ background: 'linear-gradient(to right, transparent, rgba(149,191,173,0.35) 12%, rgba(149,191,173,0.35) 88%, transparent)' }}
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <span
                className="relative z-10 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                style={{ background: '#95BFAD', color: '#0D1B33', boxShadow: '0 0 0 4px #0D1B33' }}
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white md:text-xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(214,225,240,0.65)' }}>
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
