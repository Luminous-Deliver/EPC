import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'

/**
 * Progressive disclosure built on native <details>/<summary>.
 *
 * Chosen over a JS-controlled panel deliberately:
 *  - content stays in the DOM, so it remains crawlable and indexable
 *  - expanded/collapsed state is announced by screen readers for free
 *  - keyboard support (Enter/Space, focus) works without any JS
 *  - no hydration cost, and it renders correctly before JS loads
 *
 * Used only for secondary, vertically expensive content on small screens —
 * never for pricing cards, CTAs, proof or the booking form.
 */
export function Disclosure({
  summary,
  children,
  className,
  defaultOpen = false,
}: {
  summary: string
  children: React.ReactNode
  className?: string
  defaultOpen?: boolean
}) {
  return (
    <details
      open={defaultOpen}
      className={cn(
        'group rounded-xl border border-secondary-200 bg-white [&[open]>summary_svg]:rotate-180',
        className,
      )}
    >
      <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-secondary-900 marker:content-none [&::-webkit-details-marker]:hidden">
        {summary}
        <ChevronDown
          className="h-4 w-4 shrink-0 text-secondary-600 transition-transform duration-200"
          aria-hidden="true"
        />
      </summary>
      <div className="border-t border-secondary-100 p-4">{children}</div>
    </details>
  )
}
