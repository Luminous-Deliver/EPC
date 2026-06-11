import Link from 'next/link'
import { cn } from '@/lib/cn'

interface LogoProps {
  className?: string
  href?: string | null
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

/** Inline SVG recreation of the LD Energy wordmark logo. */
function LogoMark({ size = 'md', variant = 'dark' }: { size?: 'sm' | 'md' | 'lg'; variant?: 'dark' | 'light' }) {
  const heights: Record<string, number> = { sm: 28, md: 36, lg: 48 }
  const h = heights[size]
  const scale = h / 48

  // Text colours
  const ldColor = variant === 'light' ? '#ffffff' : '#1B2A4A'
  const energyFrom = variant === 'light' ? '#A7F3D0' : '#1B2A4A'
  const energyTo = variant === 'light' ? '#67E8F9' : '#0D9488'

  return (
    <svg
      width={Math.round(296 * scale)}
      height={h}
      viewBox="0 0 296 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="L&D Energy"
      role="img"
    >
      <defs>
        <linearGradient id="energyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={energyFrom} />
          <stop offset="100%" stopColor={energyTo} />
        </linearGradient>
        {/* Splash / wave clip mask */}
        <clipPath id="iconClip">
          <rect width="48" height="48" rx="6" />
        </clipPath>
      </defs>

      {/* ─── Icon mark: L + D monogram ─────────────────────────── */}
      <g clipPath="url(#iconClip)">
        {/* Background: transparent (icon sits on page) */}

        {/* L arm — vertical stroke */}
        <rect x="5" y="6" width="9" height="36" rx="2.5" fill={ldColor} />
        {/* L base — horizontal foot */}
        <rect x="5" y="34.5" width="20" height="7.5" rx="2.5" fill={ldColor} />

        {/* D letterform — outer rounded rectangle */}
        <path
          d="M19 6 H30 C38.84 6 46 13.16 46 22 V26 C46 34.84 38.84 42 30 42 H19 V6Z"
          fill={ldColor}
        />
        {/* D cutout — white interior */}
        <path
          d="M25 13 H30 C34.42 13 38 16.58 38 21 V27 C38 31.42 34.42 35 30 35 H25 V13Z"
          fill="white"
        />

        {/* Teal energy splash — diagonal wave over top-left of icon */}
        <path
          d="M0 0 C4 8 10 6 12 0 C14 -4 20 4 18 12 C16 18 8 16 6 22 C4 26 2 18 0 16 Z"
          fill="#0D9488"
          opacity="0.80"
        />
        <path
          d="M2 0 C5 5 9 4 10 0 C11 -2 15 3 13.5 8 C12 13 7 12 6 16 C5 19 3 14 2 12 Z"
          fill="#34D399"
          opacity="0.60"
        />
      </g>

      {/* ─── Wordmark ───────────────────────────────────────────── */}
      {/* "L&D" — bold, brand navy / white */}
      <text
        x="56"
        y="34"
        fontFamily="'Plus Jakarta Sans', 'Inter', Arial, sans-serif"
        fontWeight="800"
        fontSize="26"
        letterSpacing="-0.4"
        fill={ldColor}
      >
        L&amp;D
      </text>
      {/* "Energy" — slightly lighter weight, gradient fill, offset by 8px gap */}
      <text
        x="118"
        y="34"
        fontFamily="'Plus Jakarta Sans', 'Inter', Arial, sans-serif"
        fontWeight="700"
        fontSize="26"
        letterSpacing="-0.4"
        fill="url(#energyGrad)"
      >
        Energy
      </text>
    </svg>
  )
}

export function Logo({ className, href = '/', variant = 'dark', size = 'md' }: LogoProps) {
  const content = (
    <span className={cn('inline-flex items-center', className)}>
      <LogoMark size={size} variant={variant} />
    </span>
  )

  if (!href) return content

  return (
    <Link href={href} aria-label="L&D Energy — home" className="inline-flex shrink-0">
      {content}
    </Link>
  )
}
