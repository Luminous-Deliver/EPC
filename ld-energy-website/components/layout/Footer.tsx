import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ShieldCheck, Star, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { navLinks, site } from '@/lib/site'

const services = navLinks.filter(l =>
  ['/services/domestic-epc', '/domestic-energy-assessor-london', '/services/floor-plans', '/landlords', '/sellers'].includes(l.href)
)
const otherLinks = navLinks.filter(l =>
  ['/areas', '/pricing', '/faq', '/blog', '/about'].includes(l.href)
)

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden pb-20 md:pb-0"
      style={{
        background: 'linear-gradient(160deg, #07211e 0%, #0a2e29 40%, #07211e 70%, #061a18 100%)',
      }}
    >
      {/* Subtle decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 w-[500px] h-[300px] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(ellipse, #34d399 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[200px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(ellipse, #6ee7b7 0%, transparent 70%)' }}
      />

      {/* Main content */}
      <Container className="relative pt-14 pb-10 md:pt-16 md:pb-12">
        <div className="grid gap-10 md:grid-cols-12">

          {/* Brand column */}
          <div className="md:col-span-4">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: 'rgba(209,250,229,0.55)' }}>
              Domestic EPCs across London. Elmhurst-accredited Domestic Energy Assessor based in
              Stratford, East London. Covering all 32 London boroughs.
            </p>

            {/* Accreditation badge */}
            <div
              className="mt-5 inline-flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-xs font-medium"
              style={{ background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)' }}
            >
              <ShieldCheck className="w-4 h-4 shrink-0" style={{ color: '#34d399' }} aria-hidden="true" />
              <span style={{ color: 'rgba(209,250,229,0.75)' }}>
                Elmhurst Accredited · {site.assessor.accreditationNumber}
              </span>
            </div>

            {/* Hours */}
            <div className="mt-4 flex items-center gap-2 text-xs" style={{ color: 'rgba(209,250,229,0.4)' }}>
              <Clock className="w-3.5 h-3.5 shrink-0" style={{ color: '#34d399' }} aria-hidden="true" />
              {site.hours}
            </div>
          </div>

          {/* Services + Company, side by side on mobile to avoid dead space */}
          <div className="grid grid-cols-2 gap-8 md:contents">
            {/* Services column */}
            <nav aria-label="Footer services" className="md:col-span-2">
              <h2 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(52,211,153,0.7)' }}>
                Services
              </h2>
              <ul className="space-y-2.5">
                {services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: 'rgba(209,250,229,0.6)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Other links column */}
            <nav aria-label="Footer links" className="md:col-span-2">
              <h2 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(52,211,153,0.7)' }}>
                Company
              </h2>
              <ul className="space-y-2.5">
                {otherLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: 'rgba(209,250,229,0.6)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact column */}
          <div className="md:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(52,211,153,0.7)' }}>
              Get in Touch
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href={site.phoneHref}
                  className="group inline-flex items-center gap-2.5 text-sm transition-colors hover:text-white"
                  style={{ color: 'rgba(209,250,229,0.7)' }}
                >
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                    style={{ background: 'rgba(52,211,153,0.12)' }}
                  >
                    <Phone className="w-3.5 h-3.5" style={{ color: '#34d399' }} aria-hidden="true" />
                  </span>
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="group inline-flex items-center gap-2.5 text-sm transition-colors hover:text-white"
                  style={{ color: 'rgba(209,250,229,0.7)' }}
                >
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                    style={{ background: 'rgba(52,211,153,0.12)' }}
                  >
                    <Mail className="w-3.5 h-3.5" style={{ color: '#34d399' }} aria-hidden="true" />
                  </span>
                  {site.email}
                </a>
              </li>
              <li
                className="inline-flex items-center gap-2.5 text-sm"
                style={{ color: 'rgba(209,250,229,0.7)' }}
              >
                <span
                  className="inline-flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                  style={{ background: 'rgba(52,211,153,0.12)' }}
                >
                  <MapPin className="w-3.5 h-3.5" style={{ color: '#34d399' }} aria-hidden="true" />
                </span>
                Stratford, East London E15
              </li>
            </ul>

            {/* Google Reviews CTA */}
            <a
              href="https://share.google/4LTPb4XMjeNq7TpXk"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all hover:brightness-110"
              style={{
                background: 'rgba(52,211,153,0.1)',
                border: '1px solid rgba(52,211,153,0.2)',
                color: 'rgba(209,250,229,0.85)',
              }}
            >
              <Star className="w-4 h-4 text-yellow-400" aria-hidden="true" />
              View our Google Reviews
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(52,211,153,0.1)' }}>
        <Container className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: 'rgba(209,250,229,0.35)' }}>
          <p className="text-center sm:text-left">
            © {year} {site.name}. Part of {site.legalName}.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a
              href="https://digital.luminousanddeliver.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Made by{' '}
              <span className="font-semibold" style={{ color: 'rgba(110,231,183,0.7)' }}>L&amp;D Digital</span>
            </a>
          </div>
        </Container>
      </div>
    </footer>
  )
}
