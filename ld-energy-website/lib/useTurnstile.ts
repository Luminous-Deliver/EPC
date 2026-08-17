'use client'

import { useEffect, useRef, useCallback, useState } from 'react'

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement | string,
        options: {
          sitekey: string
          callback?: (token: string) => void
          'expired-callback'?: () => void
          'error-callback'?: () => void
          theme?: 'light' | 'dark' | 'auto'
        }
      ) => string
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
      getResponse: (widgetId: string) => string | undefined
    }
  }
}

const TURNSTILE_SCRIPT_ID = 'cf-turnstile-script'
const TURNSTILE_SCRIPT_URL = 'https://challenges.cloudflare.com/turnstile/v0/api.js'

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''

if (!TURNSTILE_SITE_KEY && typeof window !== 'undefined') {
  console.warn('Missing NEXT_PUBLIC_TURNSTILE_SITE_KEY environment variable')
}

interface UseTurnstileOptions {
  onVerify?: (token: string) => void
  onExpire?: () => void
  onError?: () => void
}

export function useTurnstile({ onVerify, onExpire, onError }: UseTurnstileOptions = {}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const loadScript = useCallback(() => {
    return new Promise<void>((resolve) => {
      if (document.getElementById(TURNSTILE_SCRIPT_ID)) {
        if (window.turnstile) {
          resolve()
        } else {
          const checkReady = setInterval(() => {
            if (window.turnstile) {
              clearInterval(checkReady)
              resolve()
            }
          }, 100)
        }
        return
      }

      const script = document.createElement('script')
      script.id = TURNSTILE_SCRIPT_ID
      script.src = TURNSTILE_SCRIPT_URL
      script.async = true
      script.defer = true
      script.onload = () => {
        const checkReady = setInterval(() => {
          if (window.turnstile) {
            clearInterval(checkReady)
            resolve()
          }
        }, 100)
      }
      document.head.appendChild(script)
    })
  }, [])

  const renderWidget = useCallback(async () => {
    if (!containerRef.current || widgetIdRef.current) return

    await loadScript()

    if (!window.turnstile || !containerRef.current) return

    containerRef.current.innerHTML = ''

    try {
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (newToken: string) => {
          setToken(newToken)
          onVerify?.(newToken)
        },
        'expired-callback': () => {
          setToken(null)
          onExpire?.()
        },
        'error-callback': () => {
          setToken(null)
          onError?.()
        },
        theme: 'auto',
      })
      setIsLoading(false)
    } catch (error) {
      console.error('Failed to render Turnstile widget:', error)
      setIsLoading(false)
    }
  }, [loadScript, onVerify, onExpire, onError])

  const reset = useCallback(() => {
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current)
      setToken(null)
    }
  }, [])

  useEffect(() => {
    renderWidget()

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current)
        } catch {
          // Widget might already be removed
        }
        widgetIdRef.current = null
      }
    }
  }, [renderWidget])

  return { containerRef, token, isLoading, reset }
}
