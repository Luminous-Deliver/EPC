import { ShieldCheck, Clock, MapPin, Star, BadgePoundSterling } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { site, priceFrom, EXPRESS_SURCHARGE } from '@/lib/site'

const GOOGLE_REVIEWS_URL = 'https://share.google/4LTPb4XMjeNq7TpXk'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas border-b border-secondary-100">
      {/* Background photo — modern solar-roof home under a light sky (no people).
          Source: Unsplash (free licence), unsplash.com/photos/Ja8t8nJN2I4 */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Explicit srcset: Next's optimizer is disabled on Cloudflare Pages,
            so it would otherwise ship the 1600w original to every device. */}
        <img
          src="/hero-home-1280.webp"
          srcSet="/hero-home-640.webp 640w, /hero-home-960.webp 960w, /hero-home-1280.webp 1280w, /hero-home.webp 1600w"
          sizes="100vw"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[70%_25%]"
        />
        {/* Legibility overlays: solid over the text column, airy over the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/75 to-canvas/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-canvas/25 via-transparent to-canvas/90" />
        {/* Extra wash on small screens where text spans the full width */}
        <div className="absolute inset-0 bg-canvas/60 md:hidden" />
      </div>

      <Container className="relative py-10 md:py-14 lg:py-16 grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
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
            <span className="font-semibold text-secondary-900">£{priceFrom.epc}</span> — we confirm your exact quote before you book.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="/contact" variant="accent" size="lg" className="w-full sm:w-auto text-base">
              Get my exact quote
            </Button>
            <Button href="#pricing" variant="secondary" size="lg" className="w-full sm:w-auto text-base">
              See guide prices
            </Button>
          </div>
          <p className="mt-3 text-sm text-secondary-500">
            No call-out fees · Same-price guarantee · 2-hour response (8am–8pm)
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

          <dl className="mt-10 grid grid-cols-3 gap-3 max-w-md">
            {[
              { dt: 'From', dd: `£${priceFrom.epc}` },
              { dt: 'Standard', dd: '72h' },
              { dt: 'Boroughs', dd: '32+' },
            ].map((stat) => (
              <div
                key={stat.dt}
                className="rounded-xl bg-white/70 ring-1 ring-secondary-900/5 backdrop-blur px-4 py-3"
              >
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
                    72-hour standard, next day for £{EXPRESS_SURCHARGE}
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
