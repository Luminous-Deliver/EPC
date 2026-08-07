import { Container } from '@/components/ui/Container'
import { CalendarCheck, ClipboardList, FileCheck2, Route } from 'lucide-react'

const steps = [
  {
    Icon: CalendarCheck,
    title: 'Book',
    body:
      'Send the address and property type online, by phone or on WhatsApp. We confirm a fixed price and a slot — often the same day.',
  },
  {
    Icon: ClipboardList,
    title: 'Assessment',
    body:
      'A 45–60 minute survey covering measurements, heating, insulation, lighting and glazing. Tidy, tenant-friendly, no disruption.',
  },
  {
    Icon: FileCheck2,
    title: 'Delivered in 72 hours',
    body:
      'Certificate lodged on the official government register and emailed as a PDF, with floor plans in portal-ready formats. Express next-day available.',
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
            Three steps, no chasing
          </h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(214,225,240,0.65)' }}>
            From first contact to certificate in your inbox — you always know what happens next.
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
              {/* Title leads; the icon is a small supporting marker beside it. */}
              <div className="mt-3 flex items-center gap-2.5">
                <step.Icon
                  className="w-4 h-4 shrink-0"
                  style={{ color: 'rgba(149,191,173,0.7)' }}
                  aria-hidden="true"
                />
                <h3 className="text-xl md:text-2xl font-semibold text-white">{step.title}</h3>
              </div>
              <p className="mt-2.5 leading-relaxed text-sm" style={{ color: 'rgba(214,225,240,0.6)' }}>{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
