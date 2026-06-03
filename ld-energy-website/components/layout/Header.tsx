import Link from 'next/link'
import { Phone, CalendarClock } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { MobileNav } from './MobileNav'
import { navLinks, site } from '@/lib/site'

const primaryNav = navLinks.filter((l) =>
  ['/services/domestic-epc', '/services/floor-plans', '/landlords', '/sellers', '/areas', '/pricing', '/faq', '/blog'].includes(l.href),
)

export function Header() {
  return (
    <header className="relative z-40">
      {/* Announcement strip — scrolls away */}
      <div className="bg-secondary-900 text-white">
        <Container as="div" className="flex items-center justify-center gap-x-2.5 gap-y-0.5 h-8 text-[11px] sm:text-xs font-medium tracking-wide flex-wrap">
          <span className="inline-flex items-center gap-1.5">
            <CalendarClock className="w-3.5 h-3.5 text-accent-400" aria-hidden="true" />
            Available 7 days · 8am–8pm
          </span>
          <span className="text-white/30" aria-hidden="true">·</span>
          <span>72-hour delivery</span>
          <span className="hidden sm:inline text-white/30" aria-hidden="true">·</span>
          <span className="hidden sm:inline">All 32 London boroughs</span>
        </Container>
      </div>

      {/* Main bar — sticky */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-secondary-100">
        <Container as="div" className="flex items-center justify-between h-16 md:h-20">
          <Logo />

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-6">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-secondary-700 hover:text-primary-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-secondary-800 hover:text-primary-700"
              aria-label={`Call ${site.phone}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {site.phone}
            </a>
            <Button href="/contact" variant="accent" className="hidden md:inline-flex" size="md">
              Book Now
            </Button>
            <MobileNav />
          </div>
        </Container>
      </div>
    </header>
  )
}
