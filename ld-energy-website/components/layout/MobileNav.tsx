'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { navLinks, site } from '@/lib/site'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-secondary-800 hover:bg-secondary-100"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
      >
        <Menu className="w-6 h-6" aria-hidden="true" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-secondary-900/60"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-nav-panel"
            className="absolute right-0 top-0 h-full w-full max-w-xs bg-white shadow-xl flex flex-col"
          >
            <div className="flex items-center justify-between h-16 px-4 border-b border-secondary-100">
              <span className="font-display font-extrabold text-lg text-secondary-900">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-md text-secondary-800 hover:bg-secondary-100"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-3 rounded-md text-base font-medium text-secondary-800 hover:bg-secondary-50 hover:text-primary-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="border-t border-secondary-100 p-4">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 py-3 rounded-md"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {site.phone}
              </a>
              <p className="mt-2 text-xs text-secondary-500 text-center">{site.hours}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
