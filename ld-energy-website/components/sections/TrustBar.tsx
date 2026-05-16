import { ShieldCheck, CheckCircle2, Clock, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'

const items = [
  { Icon: ShieldCheck, label: 'Elmhurst Accredited' },
  { Icon: CheckCircle2, label: 'Fully Insured' },
  { Icon: Clock, label: '72-Hour Standard Delivery' },
  { Icon: MapPin, label: 'All London Coverage' },
]

export function TrustBar() {
  return (
    <section className="bg-secondary-50 border-b border-secondary-100" aria-label="Trust signals">
      <Container className="py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map(({ Icon, label }) => (
          <div key={label} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-700 shrink-0">
              <Icon className="w-5 h-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-secondary-800">{label}</span>
          </div>
        ))}
      </Container>
    </section>
  )
}
