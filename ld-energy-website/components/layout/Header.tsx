import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { MobileNav } from './MobileNav'
import { navLinks, site } from '@/lib/site'

const primaryNav = navLinks.filter((l) =>
  ['/services/domestic-epc', '/services/floor-plans', '/landlords', '/sellers', '/areas', '/pricing', '/faq'].includes(l.href),
)

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-secondary-100">
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
          <Button href="/contact" className="hidden md:inline-flex" size="md">
            Get a Quote
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  )
}
