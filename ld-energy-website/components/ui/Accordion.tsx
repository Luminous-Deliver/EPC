'use client'

import { useId, useState } from 'react'
import { ChevronDown, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { FaqItem } from '@/lib/faq'

interface AccordionProps {
  items: FaqItem[]
  defaultOpenIndex?: number
  className?: string
}

export function Accordion({ items, defaultOpenIndex, className }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpenIndex ?? null)
  const baseId = useId()

  return (
    <ul className={cn('divide-y divide-secondary-200 rounded-lg border border-secondary-200 bg-white', className)}>
      {items.map((item, i) => {
        const isOpen = open === i
        const headerId = `${baseId}-h-${i}`
        const panelId = `${baseId}-p-${i}`
        return (
          <li key={item.q}>
            <h3>
              <button
                id={headerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left font-semibold text-secondary-900 hover:bg-secondary-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                <span className="text-base md:text-lg">{item.q}</span>
                <ChevronDown
                  className={cn('w-5 h-5 text-secondary-500 transition-transform shrink-0', isOpen && 'rotate-180 text-primary-700')}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
              className="px-5 pb-5 md:px-6 md:pb-6 text-secondary-700 leading-relaxed"
            >
              <p>{item.a}</p>
              {item.links && item.links.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                  {item.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="inline-flex min-h-[44px] items-center gap-1 text-sm font-semibold text-primary-700 underline underline-offset-2 hover:text-primary-800"
                      >
                        {l.label}
                        {l.external && (
                          <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
