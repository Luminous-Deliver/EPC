import { cn } from '@/lib/cn'
import { Container } from './Container'

/**
 * Section tiers. Every section previously used identical vertical padding, so
 * a post-booking admin section carried the same visual weight as pricing.
 * Tier drives padding here and heading scale in SectionHeader, which is what
 * gives the page a loud voice and a quiet one.
 */
export type SectionTier = 'primary' | 'secondary' | 'compact'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'muted' | 'primary' | 'dark'
  tier?: SectionTier
  containerClassName?: string
  bleed?: boolean
  /** Tile the subtle house + leaf brand pattern behind the content. Use sparingly. */
  pattern?: boolean
}

const variantStyles: Record<NonNullable<SectionProps['variant']>, string> = {
  default: 'bg-canvas',
  muted: 'bg-sand',
  primary: 'bg-primary-600 text-white',
  dark: 'bg-secondary-900 text-secondary-100',
}

const tierPadding: Record<SectionTier, string> = {
  primary: 'py-14 md:py-20',
  secondary: 'py-10 md:py-14',
  compact: 'py-8 md:py-10',
}

export function Section({
  variant = 'default',
  tier = 'secondary',
  className,
  containerClassName,
  bleed = false,
  pattern = false,
  children,
  ...props
}: SectionProps) {
  const inner = bleed ? children : <Container className={containerClassName}>{children}</Container>
  return (
    <section
      className={cn(
        tierPadding[tier],
        variantStyles[variant],
        pattern && 'relative overflow-hidden',
        className,
      )}
      {...props}
    >
      {pattern && (
        <div
          className="bg-brand-pattern pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,black_60%,transparent)]"
          aria-hidden="true"
        />
      )}
      {pattern ? <div className="relative">{inner}</div> : inner}
    </section>
  )
}
