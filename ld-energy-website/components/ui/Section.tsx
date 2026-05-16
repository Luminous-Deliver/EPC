import { cn } from '@/lib/cn'
import { Container } from './Container'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'muted' | 'primary' | 'dark'
  containerClassName?: string
  bleed?: boolean
}

const variantStyles: Record<NonNullable<SectionProps['variant']>, string> = {
  default: 'bg-white',
  muted: 'bg-secondary-50',
  primary: 'bg-primary-600 text-white',
  dark: 'bg-secondary-900 text-secondary-100',
}

export function Section({
  variant = 'default',
  className,
  containerClassName,
  bleed = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn('py-12 sm:py-16 md:py-24', variantStyles[variant], className)}
      {...props}
    >
      {bleed ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  )
}
