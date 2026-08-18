'use client'

import { useEffect, useState } from 'react'

/**
 * Returns true once the page has scrolled past `threshold` px, so chrome
 * that starts transparent over a hero can switch to a solid, shadowed
 * style once real content is scrolling underneath it. rAF-throttled.
 */
export function useScrolled(threshold = 60): boolean {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false

    const update = () => {
      setScrolled(window.scrollY > threshold)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}
