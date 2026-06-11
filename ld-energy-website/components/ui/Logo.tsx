import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/cn'

interface LogoProps {
  className?: string
  href?: string | null
  /** 'light' = used on dark backgrounds (footer) — wraps image in a white pill */
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

// The JPEG canvas is 2752×1536 but the actual logo content sits roughly
// in the centre third — effective content aspect ≈ 3.2:1 after visual crop.
// We display at a taller height so it's legible in the header bar.
const displayHeights: Record<string, number> = { sm: 36, md: 44, lg: 56 }

export function Logo({ className, href = '/', variant = 'dark', size = 'md' }: LogoProps) {
  const h = displayHeights[size]

  const img = (
    <Image
      src="/LDenergy-cropped.png"
      alt="L&D Energy"
      width={2105}
      height={651}
      priority
      className={cn(
        'block object-contain',
        variant === 'light' && 'rounded-lg bg-white px-2 py-1',
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
