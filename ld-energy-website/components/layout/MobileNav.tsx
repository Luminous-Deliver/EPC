'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react'
import { site } from '@/lib/site'
import { cn } from '@/lib/cn'

const groups = [
  {
    id: 'services',
    label: 'Services',
    items: [
      { href: '/services/domestic-epc', label: 'Domestic EPC' },
      { href: '/services/floor-plans', label: 'Floor Plans' },
    ],
  },
  {
    id: 'for-you',
    label: 'For You',
    items: [
      { href: '/landlords', label: 'For Landlords' },
      { href: '/sellers', label: 'For Sellers' },
    ],
  },
]

const directLinks = [
  { href: '/areas', label: 'Areas' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  // Scroll lock
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [open])

  // Escape to close
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); triggerRef.current?.focus() }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open])

  // Focus close button on open
  useEffect(() => {
    if (open) closeRef.current?.focus()
  }, [open])

  // Focus trap
  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    if (!panel) return
    const focusable = panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    panel.addEventListener('keydown', trap)
    return () => panel.removeEventListener('keydown', trap)
  }, [open])

  function close() {
    setOpen(false)
    setOpenGroup(null)
    triggerRef.current?.focus()
  }

  function toggleGroup(id: string) {
    setOpenGroup((prev) => (prev === id ? null : id))
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-secondary-800 hover:bg-secondary-100"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
      >
        <Menu className="w-6 h-6" aria-hidden="true" />
      </button>

      <div
        className={cn('fixed inset-0 z-50 lg:hidden', !open && 'pointer-events-none')}
        aria-hidden={open ? undefined : true}
      >
        {/* Backdrop */}
        <div
          className={cn(
            'absolute inset-0 bg-secondary-900/60 transition-opacity duration-200',
            open ? 'opacity-100' : 'opacity-0',
          )}
          onClick={close}
          aria-hidden="true"
        />

        {/* Panel */}
        <div
          id="mobile-nav-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          style={{ backgroundColor: '#ffffff' }}
          className={cn(
            'absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-200',
            open ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 h-14 border-b border-secondary-100 shrink-0 bg-white">
            <span className="font-display font-bold text-secondary-900">{site.name}</span>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="inline-flex items-center justify-center w-10 h-10 rounded-md text-secondary-500 hover:bg-secondary-100"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Book CTA */}
          <div className="px-4 pt-4 pb-2 shrink-0 bg-white">
            <Link
              href="/contact"
              onClick={close}
              tabIndex={open ? undefined : -1}
              className="flex items-center justify-center w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold px-4 py-3 rounded-xl min-h-[48px] shadow-md"
            >
              Book Your EPC
            </Link>
          </div>

          {/* Nav */}
          <nav aria-label="Mobile" className="flex-1 min-h-0 overflow-y-auto px-3 py-2 bg-white">
            {/* Accordion groups */}
            {groups.map((group) => {
              const isOpen = openGroup === group.id
              return (
                <div key={group.id} className="mb-1">
                  <button
                    type="button"
                    onClick={() => toggleGroup(group.id)}
                    tabIndex={open ? undefined : -1}
                    aria-expanded={isOpen}
                    className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-[15px] font-semibold text-secondary-800 hover:bg-secondary-50 hover:text-primary-700 transition-colors"
                  >
                    {group.label}
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 text-secondary-400 transition-transform duration-200',
                        isOpen && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Sub-items */}
                  <div className={cn('overflow-hidden transition-all duration-200', isOpen ? 'max-h-40' : 'max-h-0')}>
                    <ul className="pl-3 py-1 border-l-2 border-primary-100 ml-3 mb-1">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={close}
                            tabIndex={open ? undefined : -1}
                            className="flex items-center w-full px-3 py-2 rounded-lg text-sm font-medium text-secondary-700 hover:bg-secondary-50 hover:text-primary-700 transition-colors"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}

            {/* Divider */}
            <div className="my-2 border-t border-secondary-100" />

            {/* Direct links */}
            <ul className="flex flex-col">
              {directLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    tabIndex={open ? undefined : -1}
                    className="flex items-center w-full px-3 py-2.5 rounded-lg text-[15px] font-medium text-secondary-800 hover:bg-secondary-50 hover:text-primary-700 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Phone + WhatsApp */}
          <div className="shrink-0 border-t border-secondary-100 bg-white p-3 grid grid-cols-2 gap-2">
            <a
              href={site.phoneHref}
              tabIndex={open ? undefined : -1}
              className="flex items-center justify-center gap-1.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-3 py-2.5 rounded-lg min-h-[44px] transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              Call Us
            </a>
            <a
              href={site.whatsappHref}
              tabIndex={open ? undefined : -1}
              className="flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-3 py-2.5 rounded-lg min-h-[44px] transition-colors"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
