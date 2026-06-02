import { Section } from '@/components/ui/Section'
import { cn } from '@/lib/cn'
import { Award, BadgePoundSterling, Zap, MapPin } from 'lucide-react'

const delays = ['', 'animate-delay-100', 'animate-delay-200', 'animate-delay-300']

const reasons = [
  {
    Icon: Award,
    title: 'Elmhurst Accredited',
    body:
      'Fully qualified and accredited with Elmhurst Energy, the UK’s largest energy assessor scheme. Every EPC is lodged on the official government register.',
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
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 ring-1 ring-primary-100 px-3 py-1 text-xs uppercase tracking-wide font-semibold text-primary-700">
          <Award className="w-3.5 h-3.5" aria-hidden="true" />
          Why Us
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-secondary-900">
          Why London Landlords and Sellers Choose Us
        </h2>
      </div>

      <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <li
            key={r.title}
            className={cn(
              'rounded-2xl bg-glass card-glow-teal p-6 shadow-premium animate-fade-in-up',
              delays[i],
            )}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white ring-1 ring-primary-700/10 shadow-sm">
              <r.Icon className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-secondary-900">{r.title}</h3>
            <p className="mt-2 text-secondary-700 leading-relaxed text-sm">{r.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
