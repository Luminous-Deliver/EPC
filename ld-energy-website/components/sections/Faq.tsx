import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Accordion } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { homepageFaqFeatured } from '@/lib/faq'
import { site } from '@/lib/site'

/**
 * Homepage FAQ. The intro runs across the top rather than sitting in a side
 * rail — with this many questions a short rail beside a long accordion left a
 * large empty column.
 */
export function Faq() {
  return (
    <Section variant="default" tier="secondary" id="faq" className="scroll-mt-20 md:scroll-mt-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-secondary-600">
            <span className="block h-px w-8 bg-secondary-300" aria-hidden="true" />
            FAQ
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-secondary-900">
            Common Questions About EPCs
          </h2>
          <p className="mt-3 text-lg text-secondary-700 leading-relaxed">
            The most common questions we’re asked by London homeowners and landlords.
          </p>
        </div>

        <Link
          href="/faq"
          className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 font-semibold text-primary-700 hover:text-primary-800"
        >
          Read the full EPC FAQ
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>

      <Accordion
        items={homepageFaqFeatured}
        defaultOpenIndex={0}
        className="mt-8 rounded-2xl border-0 ring-1 ring-secondary-900/5 shadow-premium overflow-hidden"
      />

      {/* Closing prompt, full width so nothing is left hanging beside the list */}
      <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-secondary-50 ring-1 ring-secondary-900/5 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold text-secondary-900">Still have questions?</p>
          <p className="mt-1 text-sm text-secondary-600">
            Call {site.phone} or message us on WhatsApp — we reply within 2 hours.
          </p>
        </div>
        <div className="flex flex-col gap-2.5 sm:flex-row sm:shrink-0">
          <Button href={site.phoneHref} variant="primary" size="md">
            <Phone className="w-4 h-4" aria-hidden="true" />
            Call Us
          </Button>
          <Button
            href={site.whatsappHref}
            variant="secondary"
            size="md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            WhatsApp
          </Button>
        </div>
      </div>
    </Section>
  )
}
