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
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-50 to-canvas ring-1 ring-primary-100 p-6 md:p-12">
        <div className="bg-dot-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom_right,black,transparent_75%)]" aria-hidden="true" />

        <div className="relative">
          {/* Large-scale primary element, Google rating badge */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12">
            <div className="md:max-w-sm">
              <p className="text-xs uppercase tracking-widest font-semibold text-primary-600">Trusted Locally</p>
              <div className="mt-4 flex items-center gap-1.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-accent-500 text-accent-500" />
                ))}
              </div>
              <p className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-secondary-900 font-serif">
                Rated on Google
              </p>
              <p className="mt-3 text-secondary-600 leading-relaxed">
                London homeowners, landlords and letting agents trust us for fast, honest EPC service.
              </p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-primary-700 hover:text-primary-800"
              >
                Read our reviews
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            {/* Secondary element, proof chips in 2×2 */}
            <ul className="grid grid-cols-2 gap-3 md:gap-4 md:w-auto md:min-w-[340px]">
              {proofPoints.map(({ Icon, value, label }) => (
                <li
                  key={value}
                  className="flex items-start gap-3 rounded-2xl bg-white/70 ring-1 ring-secondary-900/5 backdrop-blur p-4 shadow-sm"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 shrink-0 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white ring-1 ring-primary-700/10">
                    <Icon className="w-4 h-4" aria-hidden="true" />
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
