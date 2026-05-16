import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { navLinks, site } from '@/lib/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-secondary-300 pb-20 md:pb-0">
      <Container className="py-12 md:py-16 grid gap-10 md:grid-cols-3">
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-relaxed text-secondary-400">
            Domestic EPCs across London. Elmhurst-accredited Domestic Energy Assessor based in Stratford, East London. Covering all 32 London boroughs.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-secondary-400">
            <ShieldCheck className="w-4 h-4 text-primary-300" aria-hidden="true" />
            Elmhurst Accredited Domestic Energy Assessor
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-secondary-300 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-white">
                <Phone className="w-4 h-4 text-primary-300" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="inline-flex items-center gap-2 hover:text-white">
                <Mail className="w-4 h-4 text-primary-300" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary-300" aria-hidden="true" />
              Stratford, East London E15
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary-300" aria-hidden="true" />
              {site.hours}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-secondary-800">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-secondary-400">
          <p className="text-center sm:text-left">
            © {year} {site.name}. Part of {site.legalName}.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <a
              href="https://digital.luminousanddeliver.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Made by <span className="font-semibold text-secondary-200">L&amp;D Digital</span>
            </a>
          </div>
        </Container>
      </div>
    </footer>
  )
}
