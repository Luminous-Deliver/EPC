import { Star, ShieldCheck, MapPin, Clock, ArrowRight } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { AssessorCard } from '@/components/ui/AssessorCard'
import { site } from '@/lib/site'

const GOOGLE_REVIEWS_URL = site.reviews.profileUrl
const GOOGLE_WRITE_REVIEW_URL = site.reviews.writeUrl

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
        <div className="bg-brand-pattern pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom_right,black,transparent_75%)]" aria-hidden="true" />

        <div className="relative grid gap-8 lg:grid-cols-12 lg:gap-10 items-start">
          {/* Reviews + proof chips */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-primary-600">Trusted Locally</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex items-center gap-1" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-7 h-7 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-3xl font-bold text-secondary-900 font-serif">
                  {site.reviews.ratingValue.toFixed(1)}
                </span>
              </div>
              <p className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-secondary-900 font-serif">
                Rated on Google
              </p>
              <p className="mt-3 text-secondary-600 leading-relaxed">
                London homeowners, landlords and letting agents trust us for fast, honest EPC service.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-primary-700 hover:text-primary-800"
                >
                  Read our reviews
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href={GOOGLE_WRITE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-secondary-600 hover:text-secondary-800"
                >
                  Leave a review
                </a>
              </div>
            </div>

            {/* Secondary element, proof chips in 2×2 */}
            <ul className="grid grid-cols-2 gap-3 md:gap-4">
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

          {/* Independent verification sits right beside the reviews */}
          <AssessorCard
            className="lg:col-span-5"
            note="Don’t take our word for it — the accreditation below is listed publicly. Look up the number on the government’s own register before you book."
          />
        </div>
      </div>
    </Section>
  )
}
