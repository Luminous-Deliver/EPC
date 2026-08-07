import { cn } from '@/lib/cn'
import type { SectionTier } from './Section'

/**
 * The eyebrow → heading → intro block that opened eleven sections as
 * copy-pasted markup. Extracting it does three jobs at once:
 *
 * 1. The eyebrow used `text-secondary-400`, which measures 2.47:1 against the
 *    canvas and fails WCAG AA. Fixed once here rather than in 11 places, and
 *    it cannot regress by copy-paste.
 * 2. Heading size now follows section tier, so a primary section reads louder
 *    than a supporting one. Previously every section used the same 48px tier.
 * 3. `as` lets a section render an h2 while a nested block renders an h3,
 *    without changing the visual scale.
 */
interface SectionHeaderProps {
  eyebrow?: string
  heading: string
  intro?: React.ReactNode
  tier?: SectionTier
  align?: 'left' | 'center'
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  /** Rendered to the right of the heading on wide screens, e.g. a "see all" link. */
  aside?: React.ReactNode
  /** Light text for dark section backgrounds. */
  inverse?: boolean
}

const headingSize: Record<SectionTier, string> = {
  // Fluid so the 1024px breakpoint stops producing a three-line H1-scale heading.
  primary: 'text-[clamp(1.75rem,3vw,2.25rem)]',
  secondary: 'text-[clamp(1.375rem,2.2vw,1.75rem)]',
  compact: 'text-[clamp(1.125rem,1.6vw,1.375rem)]',
}

export function SectionHeader({
  eyebrow,
  heading,
  intro,
  tier = 'secondary',
  align = 'left',
  as: Heading = 'h2',
  className,
  aside,
  inverse = false,
}: SectionHeaderProps) {
  const centered = align === 'center'

  return (
    <div
      className={cn(
        'flex flex-col gap-5 md:flex-row md:items-end md:justify-between',
        centered && 'md:flex-col md:items-center',
        className,
      )}
    >
      <div className={cn('max-w-2xl', centered && 'mx-auto text-center')}>
        {eyebrow && (
          <div
            className={cn(
              'flex items-center gap-3 text-xs uppercase tracking-widest font-semibold',
              // secondary-600 = 7.31:1 on canvas (was secondary-400 at 2.47:1)
              inverse ? 'text-[#95BFAD]' : 'text-secondary-600',
              centered && 'justify-center',
            )}
          >
            <span
              className={cn('block h-px w-8', inverse ? 'bg-white/30' : 'bg-secondary-300')}
              aria-hidden="true"
            />
            {eyebrow}
            {centered && (
              <span
                className={cn('block h-px w-8', inverse ? 'bg-white/30' : 'bg-secondary-300')}
                aria-hidden="true"
              />
            )}
          </div>
        )}

        <Heading
          className={cn(
            'mt-3 font-bold tracking-tight',
            headingSize[tier],
            inverse ? 'text-white' : 'text-secondary-900',
          )}
        >
          {heading}
        </Heading>

        {intro && (
          <p
            className={cn(
              'mt-3 text-lg leading-relaxed',
              inverse ? 'text-[rgba(214,225,240,0.7)]' : 'text-secondary-700',
            )}
          >
            {intro}
          </p>
        )}
      </div>

      {aside && <div className="shrink-0">{aside}</div>}
    </div>
  )
}
