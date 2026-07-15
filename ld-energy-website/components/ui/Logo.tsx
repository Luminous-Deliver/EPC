import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/cn'

interface LogoProps {
  className?: string
  href?: string | null
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

const displayHeights: Record<string, number> = { sm: 32, md: 40, lg: 52 }

export function Logo({ className, href = '/', variant = 'dark', size = 'md' }: LogoProps) {
  const h = displayHeights[size]

  const img = (
    <Image
      src="/logo.webp"
      alt="L&D Energy"
      width={542}
      height={208}
      priority
      className={cn(
        'block object-contain',
        // Logo has a transparent bg — render as a solid white silhouette
        // on dark backgrounds so it reads clearly against the dark footer
        variant === 'light' && 'brightness-0 invert',
      )}
      style={{ height: h, width: 'auto' }}
    />
  )

  const content = <span className={cn('inline-flex items-center shrink-0', className)}>{img}</span>

  if (!href) return content

  return (
    <Link href={href} aria-label="L&D Energy — home" className="inline-flex shrink-0">
      {content}
    </Link>
  )
}
