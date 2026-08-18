import { ShieldCheck, Clock, MapPin, Star, BadgePoundSterling } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { site, priceFrom, EXPRESS_SURCHARGE } from '@/lib/site'

const GOOGLE_REVIEWS_URL = site.reviews.profileUrl

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas border-b border-secondary-100 -mt-16 md:-mt-20">
      {/* Branded background — replaces a generic stock roof photo with the
          site's own pattern/glow system (already used in SocialProof, etc.),
          since there's no real on-site photography yet to use instead.
          The negative top margin pulls this section up underneath the
          transparent Header (which reserves its own height in normal flow
          via `sticky`) so the pattern/gradient reads as one continuous
          surface behind the nav, not a separate white bar above it. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-canvas to-accent-50" />
        {/* Soft colour blobs for depth — a flat two-tone gradient read as too
            quiet/empty for a first impression; this gives it real presence
            without needing a photo. */}
        <div className="absolute -top-32 -right-24 h-[520px] w-[520px] rounded-full bg-primary-300/30 blur-3xl" />
        <div className="absolute top-1/4 -left-32 h-[380px] w-[380px] rounded-full bg-accent-300/25 blur-3xl" />
        <div className="bg-hero-glow absolute inset-0" />
        <div className="bg-brand-pattern absolute inset-0 [mask-image:radial-gradient(90%_80%_at_78%_20%,black,transparent_70%)]" />
      </div>

      {/* pt- accounts for the header's own height (h-16/md:h-20) now that this
          section sits underneath it via the negative margin above; pb- keeps
          the original bottom spacing. */}
      <Container className="relative pt-[104px] pb-10 md:pt-[136px] md:pb-14 lg:pt-36 lg:pb-16 grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-wide font-semibold text-primary-700 bg-primary-50 ring-1 ring-primary-100 rounded-full px-3 py-1 animate-fade-in">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            Elmhurst Accredited · All London Boroughs
          </p>
          <h1 className="mt-4 text-[2.1rem] leading-[1.07] sm:text-5xl md:text-6xl font-semibold tracking-tight text-secondary-900 animate-fade-in-up animate-delay-100">
            Fast, <span className="text-gradient-brand">Reliable</span> &amp; Certified EPCs in London
          </h1>
          <p className="mt-5 text-lg md:text-xl text-secondary-700 leading-relaxed max-w-2xl animate-fade-in-up animate-delay-200">
            Domestic EPCs and measured floor plans across all 32 boroughs. Guide prices start at{' '}
            <span className="font-semibold text-secondary-900">{`£${priceFrom.epc}`}</span> — we confirm your exact quote before you book.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="/contact" variant="accent" size="lg" className="w-full sm:w-auto text-base">
              Get my exact quote
            </Button>
            <Button href="#pricing" variant="secondary" size="lg" className="w-full sm:w-auto text-base">
              See guide prices
            </Button>
          </div>
          {/* "Same-price guarantee" contradicted the guide-price model it sat
              beside, and "2-hour response" was a service promise we cannot
              evidence. Both replaced with claims that are true by construction. */}
          <p className="mt-3 text-sm text-secondary-500">
            No call-out fees · Exact quote before booking · 7 days a week, 8am–8pm
          </p>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 min-h-[44px] text-sm font-medium text-secondary-700 hover:text-secondary-900"
          >
            <span className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="font-semibold">Rated on Google</span>
            <span className="text-secondary-500" aria-hidden="true">·</span>
            <span className="text-secondary-600 underline underline-offset-2 decoration-secondary-400 hover:text-secondary-800">Read our reviews</span>
          </a>

          <dl className="mt-10 flex max-w-md divide-x divide-secondary-900/10">
            {[
              // Deliberately not a price tile. The guide price is stated in the
              // paragraph above; repeating it as a large isolated figure anchors
              // the whole hero to "cheapest", which is the wrong customer.
              { dt: 'Lodged in', dd: '72h' },
              { dt: 'Available', dd: '7 days' },
              { dt: 'Boroughs', dd: '32+' },
            ].map((stat) => (
              <div key={stat.dt} className="flex-1 pl-4 first:pl-0">
                <dt className="text-xs uppercase tracking-wide font-medium text-secondary-500">{stat.dt}</dt>
                <dd className="mt-1 text-2xl font-bold text-secondary-900">{stat.dd}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5 mt-10 lg:mt-0">
          <div className="rounded-2xl border border-secondary-200 bg-white/95 p-5 shadow-premium-lg backdrop-blur animate-fade-in animate-delay-300">
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary-600">
              Why people book us
            </p>
            <ul className="mt-3 divide-y divide-secondary-100">
              <li className="flex items-start gap-3 py-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-secondary-900">
                    Accredited &amp; publicly verifiable
                  </span>
                  <span className="block text-sm text-secondary-600">
                    {site.assessor.name} · {site.assessor.accreditationNumber}
                  </span>
                  <a
                    href={site.assessor.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-primary-700 underline underline-offset-2 hover:text-primary-800"
                  >
                    Check the government register
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3 py-3">
                <BadgePoundSterling className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-bold text-secondary-900">
                    Exact quote before you book
                  </span>
                  <span className="block text-sm text-secondary-600">
                    Guide prices online, confirmed price in writing first — including urgent jobs.
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3 py-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-bold text-secondary-900">
                    72-hour standard, next day for {`£${EXPRESS_SURCHARGE}`}
                  </span>
                  <span className="block text-sm text-secondary-600">
                    Seven days a week, 8am&ndash;8pm, evenings included.
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3 py-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-bold text-secondary-900">All 32 London boroughs</span>
                  <span className="block text-sm text-secondary-600">
                    Based in Stratford, no travel or call-out surcharges.
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
