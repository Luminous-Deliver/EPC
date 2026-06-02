import { Phone, ShieldCheck, Clock, MapPin, Star } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { site } from '@/lib/site'

const GOOGLE_REVIEWS_URL = 'https://share.google/4LTPb4XMjeNq7TpXk'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white border-b border-secondary-100">
      {/* Decorative overlays */}
      <div
        className="bg-dot-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="bg-hero-glow pointer-events-none absolute -top-24 right-0 h-[480px] w-[640px]"
        aria-hidden="true"
      />

      <Container className="relative py-10 md:py-20 lg:py-24 grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-wide font-semibold text-primary-700 bg-primary-50 ring-1 ring-primary-100 rounded-full px-3 py-1 animate-fade-in">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            Elmhurst Accredited · All London Boroughs
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-secondary-900 animate-fade-in-up animate-delay-100">
            Fast, <span className="text-gradient-brand">Affordable</span> EPCs Across London
          </h1>
          <p className="mt-5 text-lg md:text-xl text-secondary-700 leading-relaxed max-w-2xl animate-fade-in-up animate-delay-200">
            Elmhurst-accredited Domestic Energy Assessor. Guide prices from{' '}
            <span className="font-semibold text-secondary-900">£49</span>. Certificate within 72 hours, or next day for just £12 extra.
          </p>
          <p className="mt-3 text-sm text-secondary-600">
            Based in Stratford, East London — covering all 32 London boroughs, 7 days a week.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="#contact" variant="accent" size="lg" className="w-full sm:w-auto">
              Get Your EPC Quote
            </Button>
            <Button href={site.phoneHref} variant="secondary" size="lg" className="w-full sm:w-auto">
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {site.phone}
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
                <Star key={i} className="w-4 h-4 fill-accent-500 text-accent-500" />
              ))}
            </span>
            <span className="font-semibold">Rated on Google</span>
            <span className="text-secondary-400">·</span>
            <span className="text-primary-700">Read our reviews</span>
          </a>

          <dl className="mt-10 grid grid-cols-3 gap-3 max-w-md">
            {[
              { dt: 'From', dd: '£49' },
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

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl bg-white shadow-premium-lg ring-1 ring-secondary-900/5 p-6 md:p-8 animate-fade-in animate-delay-300">
            <div className="absolute -top-3 left-6 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
              Sample Rating
            </div>
            <h2 className="text-lg font-semibold text-secondary-900">Energy Performance Certificate</h2>
            <p className="text-sm text-secondary-500">Domestic · Indicative example</p>
            <ul className="mt-5 space-y-1.5">
              {[
                { band: 'A', color: 'bg-[#008054] text-white', range: '92+' },
                { band: 'B', color: 'bg-[#19B459] text-white', range: '81–91' },
                { band: 'C', color: 'bg-[#8DCE46] text-secondary-900', range: '69–80' },
                { band: 'D', color: 'bg-[#FFD500] text-secondary-900', range: '55–68' },
                { band: 'E', color: 'bg-[#FCAA1B] text-secondary-900', range: '39–54' },
                { band: 'F', color: 'bg-[#EF8023] text-white', range: '21–38' },
                { band: 'G', color: 'bg-[#E9153B] text-white', range: '1–20' },
              ].map((row, i) => (
                <li key={row.band} className="flex items-center gap-3">
                  <span
                    className={`flex items-center justify-between w-full px-3 py-1.5 rounded font-bold ${row.color}`}
                    style={{ width: `${100 - i * 8}%` }}
                  >
                    <span>{row.band}</span>
                    <span className="text-xs font-medium opacity-90">{row.range}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-2 text-xs text-secondary-500">
              <Clock className="w-4 h-4" aria-hidden="true" />
              Lodged on the UK Government EPC Register
            </div>
            <div className="mt-1 flex items-center gap-2 text-xs text-secondary-500">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              Valid for 10 years from issue
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
