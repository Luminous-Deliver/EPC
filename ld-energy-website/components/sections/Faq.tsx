import { Section } from '@/components/ui/Section'
import { Accordion } from '@/components/ui/Accordion'
import { homepageFaq } from '@/lib/faq'

export function Faq() {
  return (
    <Section variant="default" id="faq">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-wide font-semibold text-primary-700">FAQ</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
          Common Questions About EPCs
        </h2>
        <p className="mt-5 text-lg text-secondary-700 leading-relaxed">
          The most common questions we’re asked by London homeowners and landlords.
        </p>
      </div>

      <div className="mt-10 max-w-3xl">
        <Accordion items={homepageFaq} defaultOpenIndex={0} />
      </div>
    </Section>
  )
}
