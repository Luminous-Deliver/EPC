import { Section } from '@/components/ui/Section'
import { Award, BadgePoundSterling, Zap, MapPin } from 'lucide-react'

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
    <Section variant="default" id="why-us">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">Why Us</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
          Why London Landlords and Sellers Choose Us
        </h2>
      </div>

      <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r) => (
          <li key={r.title} className="rounded-lg border border-secondary-100 bg-white p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-700">
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
