import { Phone, MessageCircle } from 'lucide-react'
import { site } from '@/lib/site'

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary-600 text-white shadow-lg md:hidden">
      <div className="grid grid-cols-2">
        <a
          href={site.phoneHref}
          className="flex items-center justify-center gap-2 py-3 font-semibold border-r border-primary-500 active:bg-primary-700"
          aria-label={`Call ${site.phone}`}
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          Call Us
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 font-semibold active:bg-primary-700"
          aria-label="Message us on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
