import { Star, ShieldCheck, MapPin, Clock, ArrowRight } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { site } from '@/lib/site'

const GOOGLE_REVIEWS_URL = 'https://share.google/4LTPb4XMjeNq7TpXk'

const proofPoints = [
  { Icon: ShieldCheck, value: 'Elmhurst Accredited', label: `Assessor ${site.assessor.accreditationNumber}` },
  { Icon: MapPin, value: 'All 32 Boroughs', label: 'Plus a 1.5-hour radius' },
  { Icon: Clock, value: '72-Hour Standard', label: 'Next-day for £12 extra' },
  { Icon: Star, value: '7 Days a Week', label: '8am–8pm, evenings too' },
]

export function SocialProof() {
  return (
    <Section variant="default" aria-label="Trusted locally" className="scroll-mt-20 md:scroll-mt-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-50 to-white ring-1 ring-primary-100 p-6 md:p-10">
        <div className="bg-dot-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom_right,black,transparent_75%)]" aria-hidden="true" />

        <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Google badge — focal */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 ring-1 ring-primary-100 px-3 py-1 text-xs uppercase tracking-wide font-semibold text-primary-700">
              <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
              Trusted Locally
            </span>
            <div className="mt-4 flex items-center gap-1" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-accent-500 text-accent-500" />
              ))}
            </div>
            <p className="mt-3 text-xl font-bold tracking-tight text-secondary-900">Rated on Google</p>
            <p className="mt-1 text-secondary-700 leading-relaxed">
              London homeowners, landlords and letting agents trust us for fast, honest EPC service.
            </p>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-primary-700 hover:text-primary-800"
            >
              Read our reviews
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Verifiable proof chips */}
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-2 gap-3 sm:gap-4">
              {proofPoints.map(({ Icon, value, label }) => (
                <li
                  key={value}
                  className="flex items-start gap-3 rounded-2xl bg-white/70 ring-1 ring-secondary-900/5 backdrop-blur p-4 shadow-sm"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white ring-1 ring-primary-700/10">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-secondary-900">{value}</span>
                    <span className="block text-xs text-secondary-600 leading-snug">{label}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
