import { Section } from '@/components/ui/Section'
import { cn } from '@/lib/cn'
import { Award, BadgePoundSterling, Zap, MapPin } from 'lucide-react'

const reasons = [
  {
    Icon: Award,
    title: 'Elmhurst Accredited',
    body:
      "Fully qualified and accredited with Elmhurst Energy, the UK's largest energy assessor scheme. Every EPC is lodged on the official government register.",
  },
  {
    Icon: BadgePoundSterling,
    title: 'Fixed, Transparent Pricing',
    body:
      'Transparent guide pricing. No travel surcharges. The quote we give is the price you pay — no surprise add-ons. Bundle your EPC with a floor plan to save 50%.',
  },
  {
    Icon: Zap,
    title: 'Fast & Flexible',
    body:
      '72-hour standard delivery. Next-day available for £12. Appointments 7 days a week including evenings and weekends.',
  },
  {
    Icon: MapPin,
    title: 'Local & Reliable',
    body:
      'Based in Stratford, East London. We cover every London borough. We answer our phone, we turn up on time, and we deliver on schedule.',
  },
]

export function WhyChoose() {
  return (
    <Section variant="default" id="why-us" className="scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-secondary-400">
          <span className="block h-px w-8 bg-secondary-300" aria-hidden="true" />
          Why Us
        </div>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-secondary-900">
          Why London Landlords and Sellers Choose Us
        </h2>
      </div>

      <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {reasons.map((r, i) => (
          <li
            key={r.title}
            className={cn(
              'flex sm:flex-col items-start gap-4 sm:gap-0',
              'rounded-2xl bg-canvas ring-1 ring-secondary-900/5 p-5 md:p-6 shadow-sm',
              'transition-all duration-200 hover:-translate-y-1 hover:shadow-premium',
              'animate-reveal',
              i === 1 && 'animate-delay-100',
              i === 2 && 'animate-delay-200',
              i === 3 && 'animate-delay-300',
            )}
          >
            <div className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary-50 ring-1 ring-primary-100">
              <r.Icon className="w-5 h-5 text-primary-700" aria-hidden="true" />
            </div>
            <div className="sm:mt-4">
              <h3 className="text-base md:text-lg font-semibold text-secondary-900">{r.title}</h3>
              <p className="mt-1.5 text-secondary-600 leading-relaxed text-sm">{r.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
