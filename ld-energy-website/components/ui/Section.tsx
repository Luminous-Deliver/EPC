import { cn } from '@/lib/cn'
import { Container } from './Container'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'muted' | 'primary' | 'dark'
  containerClassName?: string
  bleed?: boolean
  /** Tile the subtle house + leaf brand pattern behind the content */
  pattern?: boolean
}

const variantStyles: Record<NonNullable<SectionProps['variant']>, string> = {
  default: 'bg-canvas',
  muted: 'bg-sand',
  primary: 'bg-primary-600 text-white',
  dark: 'bg-secondary-900 text-secondary-100',
}

export function Section({
  variant = 'default',
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
      className={cn('py-8 sm:py-12 md:py-20', variantStyles[variant], pattern && 'relative overflow-hidden', className)}
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
