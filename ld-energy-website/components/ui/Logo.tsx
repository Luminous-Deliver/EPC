import Link from 'next/link'
import { Zap } from 'lucide-react'
import { cn } from '@/lib/cn'

interface LogoProps {
  className?: string
  href?: string | null
  variant?: 'dark' | 'light'
}

export function Logo({ className, href = '/', variant = 'dark' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-secondary-900'
  const accent = variant === 'light' ? 'text-primary-200' : 'text-primary-600'

  const content = (
    <span className={cn('flex items-center gap-2', className)}>
      <span className="w-8 h-8 bg-primary-600 rounded-md flex items-center justify-center shrink-0">
        <Zap className="w-5 h-5 text-white" aria-hidden="true" />
      </span>
      <span className={cn('text-xl font-extrabold font-display', textColor)}>
        L&amp;D <span className={accent}>Energy</span>
      </span>
    </span>
  )

  if (!href) return content

  return (
    <Link href={href} aria-label="L&D Energy home" className="inline-flex">
      {content}
    </Link>
  )
}
