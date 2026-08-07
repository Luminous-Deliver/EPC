import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { cn } from '@/lib/cn'
import { formatPrice } from '@/lib/site'

/**
 * Service orientation card — deliberately NOT a pricing tier card.
 *
 * Its job is "which service am I looking at, and roughly where does it start",
 * then route to an enquiry. It is not the quote engine, so copy stays short
 * and the price is always presented with a separate "From" label rather than
 * an inline prefix — a label reads as a qualifier, a prefix reads as decoration
 * and gets skipped.
 *
 * Styling avoids SaaS plan-card conventions (coloured headers, giant tiers,
 * feature checklists of eight items) — this is a property service, not a
 * subscription.
 */
export interface PricingServiceCardProps {
  title: string
  from: number
  positioning: string
  inclusions: string[]
  href: string
  ctaLabel?: string
  /** Modest elevation for the combined service. Not a "most popular" claim. */
  emphasis?: boolean
  emphasisLabel?: string
}

export function PricingServiceCard({
  title,
  from,
  positioning,
  inclusions,
  href,
  ctaLabel = 'Get my exact quote',
  emphasis = false,
  emphasisLabel,
}: PricingServiceCardProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col rounded-2xl border bg-white p-6 transition-all duration-200',
        emphasis
          ? 'border-accent-500 shadow-premium ring-1 ring-accent-500/30'
          : 'border-secondary-200 shadow-sm hover:border-secondary-300 hover:shadow-premium',
      )}
    >
      {emphasis && emphasisLabel && (
        <span className="absolute -top-3 left-6 rounded-full bg-accent-700 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          {emphasisLabel}
        </span>
      )}

      <h3 className="text-lg font-bold text-secondary-900">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-secondary-600">{positioning}</p>

      {/* "From" as its own label line — the qualifier must not be skimmable */}
      <div className="mt-5 border-t border-secondary-100 pt-4">
        <span className="block text-xs font-semibold uppercase tracking-widest text-secondary-600">
          Guide price from
        </span>
        <span className="mt-0.5 block text-3xl font-bold tracking-tight text-secondary-900">
          £{formatPrice(from)}
        </span>
      </div>

      <ul className="mt-4 flex-1 space-y-2">
        {inclusions.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-secondary-700">
            <Check
              className={cn(
                'mt-0.5 h-4 w-4 shrink-0',
                emphasis ? 'text-accent-600' : 'text-primary-600',
              )}
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={cn(
          'mt-6 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all',
          emphasis
            ? 'bg-gradient-to-r from-accent-600 to-accent-700 text-white shadow-md hover:from-accent-700 hover:to-accent-800'
            : 'border border-secondary-200 text-secondary-900 hover:border-primary-300 hover:bg-primary-50',
        )}
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  )
}
