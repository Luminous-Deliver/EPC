import { Section } from '@/components/ui/Section'
import { ContactForm } from '@/components/forms/ContactForm'

/**
 * Homepage booking section. Deliberately lean: the contact channels now live
 * in the form's own sidebar, so this section is just a short lead-in and the
 * form itself rather than a screen of cards before anyone can start.
 */
export function ContactSection() {
  return (
    <Section variant="muted" tier="primary" id="contact" className="scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-semibold text-secondary-600">
          <span className="block h-px w-8 bg-secondary-300" aria-hidden="true" />
          Book Now
        </div>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-secondary-900">
          Book Your EPC Today
        </h2>
        <p className="mt-2 text-secondary-700 leading-relaxed">
          Tell us about your property and we’ll confirm an exact price and a time slot — usually
          within 2 hours. Prefer to talk? Call, WhatsApp or email us instead.
        </p>
      </div>

      <div className="mt-7">
        <ContactForm />
      </div>
    </Section>
  )
}
