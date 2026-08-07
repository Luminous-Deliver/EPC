import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

const points = [
  {
    title: 'Repeat instructions, not one-offs',
    body: 'Ongoing relationships with letting and estate agents across the London boroughs.',
  },
  {
    title: 'Tenant access handled',
    body: 'We arrange entry directly with tenants and give proper notice, so nobody has to chase.',
  },
  {
    title: 'One invoice, per-property breakdown',
    body: 'Portfolios batched by postcode with volume rates from five properties a month.',
  },
  {
    title: 'Built for launch dates',
    body: 'Priority slots for agencies and express next-day turnaround when a listing can’t wait.',
  },
]

export function TradeAgency() {
  return (
    <section
      id="agency"
      className="relative overflow-hidden py-16 md:py-24 scroll-mt-20 md:scroll-mt-24"
      style={{ background: 'linear-gradient(160deg, #0D1B33 0%, #142644 50%, #0D1B33 100%)' }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-0 w-[600px] h-[380px] rounded-full opacity-[0.10]"
        style={{ background: 'radial-gradient(ellipse, #47846E 0%, transparent 70%)' }}
      />

      <Container className="relative grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
        <div>
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs uppercase tracking-wide font-semibold"
            style={{ background: 'rgba(71,132,110,0.12)', border: '1px solid rgba(71,132,110,0.3)', color: '#95BFAD' }}
          >
            Trade &amp; agency work
          </span>
          <h2
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-white"
            style={{ letterSpacing: '-0.01em' }}
          >
            Trusted by letting and estate agents across London
          </h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(214,225,240,0.65)' }}>
            A large share of our work comes through agencies who instruct us repeatedly — which means
            the process is already built for deadlines, tenanted access and portal-ready output.
            Individual customers get exactly the same standard.
          </p>

          <Button href="/contact" variant="accent" size="lg" className="mt-7">
            Talk about agency rates
          </Button>
        </div>

        <ol className="space-y-3">
          {points.map((p, i) => (
            <li
              key={p.title}
              className="rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(71,132,110,0.18)' }}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs shrink-0" style={{ color: 'rgba(149,191,173,0.7)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'rgba(214,225,240,0.6)' }}>
                    {p.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
