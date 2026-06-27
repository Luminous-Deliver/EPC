'use client'

import { useEffect, useState } from 'react'

/**
 * Returns true when the user is scrolling DOWN past a small threshold,
 * so fixed/sticky chrome can hide for more reading space, and false when
 * scrolling up or near the top so it reveals again. rAF-throttled.
 */
export function useScrollDirection(threshold = 80): boolean {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    const update = () => {
      const y = window.scrollY
      // Always reveal near the very top of the page.
      if (y < threshold) {
        setHidden(false)
      } else if (y > lastY + 4) {
        setHidden(true) // scrolling down
      } else if (y < lastY - 4) {
        setHidden(false) // scrolling up
      }
      lastY = y
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return hidden
}
