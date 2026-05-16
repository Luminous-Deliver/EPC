import { Phone, ShieldCheck, Clock, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary-50 via-white to-white border-b border-secondary-100">
      <Container className="py-10 md:py-20 lg:py-24 grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-wide font-semibold text-primary-700 bg-primary-100 rounded-full px-3 py-1 animate-fade-in">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            Elmhurst Accredited · All London Boroughs
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-secondary-900 animate-fade-in-up animate-delay-100">
            Fast, Affordable EPCs Across London
          </h1>
          <p className="mt-5 text-lg md:text-xl text-secondary-700 leading-relaxed max-w-2xl animate-fade-in-up animate-delay-200">
            Elmhurst-accredited Domestic Energy Assessor. Guide prices from{' '}
            <span className="font-semibold text-secondary-900">£49</span>. Certificate within 72 hours, or next day for just £12 extra.
          </p>
          <p className="mt-3 text-sm text-secondary-600">
            Covering all 32 London boroughs. 7 days a week. Final price depends on property size.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="#contact" variant="accent" size="lg">
              Get Your EPC Quote
            </Button>
            <Button href={site.phoneHref} variant="secondary" size="lg">
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {site.phone}
            </Button>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            <div>
              <dt className="text-xs uppercase tracking-wide font-medium text-secondary-500">From</dt>
              <dd className="mt-1 text-2xl font-bold text-secondary-900">£49</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide font-medium text-secondary-500">Standard</dt>
              <dd className="mt-1 text-2xl font-bold text-secondary-900">72h</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wide font-medium text-secondary-500">Boroughs</dt>
              <dd className="mt-1 text-2xl font-bold text-secondary-900">32+</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-secondary-100 p-6 md:p-8 animate-fade-in animate-delay-300">
            <div className="absolute -top-3 left-6 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
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
