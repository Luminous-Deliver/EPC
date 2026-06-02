'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Phone, ChevronDown } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { MobileNav } from './MobileNav'
import { topNav, servicesDropdown, site } from '@/lib/site'

function ServicesDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="inline-flex items-center gap-1 text-sm font-medium text-secondary-700 hover:text-primary-700 transition-colors"
      >
        Services
        <ChevronDown
          className={`w-3.5 h-3.5 text-secondary-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 rounded-2xl bg-white shadow-premium-lg ring-1 ring-secondary-900/5 overflow-hidden z-50">
          {/* Arrow pointer */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 ring-1 ring-secondary-900/5" aria-hidden="true" />
          <ul className="py-2" role="menu">
            {servicesDropdown.map((item) => (
              <li key={item.href} role="none">
                <Link
                  href={item.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="flex flex-col px-4 py-3 hover:bg-primary-50 transition-colors group"
                >
                  <span className="text-sm font-semibold text-secondary-900 group-hover:text-primary-700">{item.label}</span>
                  <span className="text-xs text-secondary-500 mt-0.5">{item.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-secondary-100">
      <Container as="div" className="flex items-center justify-between h-16 md:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-6">
          <ServicesDropdown />
          {topNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-secondary-700 hover:text-primary-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-secondary-800 hover:text-primary-700 transition-colors"
            aria-label={`Call ${site.phone}`}
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            {site.phone}
          </a>
          <Button href="/contact" variant="accent" className="hidden md:inline-flex" size="md">
            Get a Quote
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  )
}
