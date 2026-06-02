import { Section } from '@/components/ui/Section'
import { Accordion } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { HelpCircle, Phone, MessageCircle } from 'lucide-react'
import { homepageFaq } from '@/lib/faq'
import { site } from '@/lib/site'

export function Faq() {
  return (
    <Section variant="default" id="faq" className="scroll-mt-20 md:scroll-mt-24">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Left rail */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 ring-1 ring-primary-100 px-3 py-1 text-xs uppercase tracking-wide font-semibold text-primary-700">
              <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
              FAQ
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-secondary-900">
              Common Questions About EPCs
            </h2>
            <p className="mt-4 text-lg text-secondary-700 leading-relaxed">
              The most common questions we’re asked by London homeowners and landlords.
            </p>

            <div className="mt-6 rounded-2xl bg-secondary-50 ring-1 ring-secondary-900/5 p-5">
              <p className="text-sm font-semibold text-secondary-900">Still have questions?</p>
              <p className="mt-1 text-sm text-secondary-600">
                Call {site.phone} or message us on WhatsApp — we reply within 2 hours.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row lg:flex-col gap-2.5">
                <Button href={site.phoneHref} variant="primary" size="md" className="w-full">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  Call Us
                </Button>
                <Button
                  href={site.whatsappHref}
                  variant="secondary"
                  size="md"
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className="lg:col-span-8">
          <Accordion
            items={homepageFaq}
            defaultOpenIndex={0}
            className="rounded-2xl border-0 ring-1 ring-secondary-900/5 shadow-premium overflow-hidden"
          />
        </div>
      </div>
    </Section>
  )
}
