import Link from 'next/link'
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react'
import { site } from '@/lib/site'

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary-600 text-white shadow-lg md:hidden">
      <div className="grid grid-cols-3">
        <a
          href={site.phoneHref}
          className="flex items-center justify-center gap-1.5 py-3 text-sm font-semibold border-r border-primary-500 active:bg-primary-700"
          aria-label={`Call ${site.phone}`}
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          Call
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 text-sm font-semibold active:bg-primary-700"
          aria-label="Message us on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-1.5 py-3 text-sm font-bold bg-accent-500 text-secondary-900 active:bg-accent-600"
          aria-label="Book your EPC"
        >
          <CalendarCheck className="w-4 h-4" aria-hidden="true" />
          Book
        </Link>
      </div>
    </div>
  )
}
