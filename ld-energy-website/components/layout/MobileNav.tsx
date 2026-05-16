'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { navLinks, site } from '@/lib/site'
import { cn } from '@/lib/cn'

export function MobileNav() {
  const [open, setOpen] = useState(false)
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
    triggerRef.current?.focus()
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
            'absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white shadow-2xl flex flex-col transition-transform duration-200',
            open ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 h-14 border-b border-secondary-100 shrink-0">
            <span className="font-display font-extrabold text-base text-secondary-900">
              {site.name}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="inline-flex items-center justify-center w-10 h-10 rounded-md text-secondary-600 hover:bg-secondary-100"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Nav links — takes all remaining height, scrolls if needed */}
          <nav aria-label="Mobile" className="flex-1 min-h-0 overflow-y-auto px-3 py-3">
            <ul className="flex flex-col">
              {/* Book CTA as first item */}
              <li>
                <Link
                  href="/contact"
                  onClick={close}
                  tabIndex={open ? undefined : -1}
                  className="flex items-center w-full bg-accent-500 hover:bg-accent-600 text-white font-bold px-4 py-3 rounded-xl mb-2 min-h-[48px]"
                >
                  Book Your EPC
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    tabIndex={open ? undefined : -1}
                    className="flex items-center w-full px-3 py-3 rounded-lg text-base font-medium text-secondary-800 hover:bg-secondary-50 hover:text-primary-700 min-h-[48px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hours footer */}
          <div className="shrink-0 px-4 py-3 border-t border-secondary-100">
            <p className="text-xs text-secondary-500 text-center">{site.hours}</p>
          </div>
        </div>
      </div>
    </>
  )
}
