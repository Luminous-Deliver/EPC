'use client'

import { useEffect } from 'react'
import { Phone, Home, RotateCcw } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { site } from '@/lib/site'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white min-h-[70vh] flex items-center">
      <div
        className="bg-dot-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
        aria-hidden="true"
      />
      <Container className="relative py-20 text-center">
        <p className="text-7xl sm:text-8xl font-extrabold text-primary-600 tracking-tight">Oops</p>
        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-secondary-900">
          Something went wrong
        </h1>
        <p className="mt-4 text-lg text-secondary-600 max-w-md mx-auto">
          Sorry, an unexpected error occurred. Try again, or give us a call and we&apos;ll
          sort your EPC the old-fashioned way.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 min-h-[48px] rounded-xl bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-700 transition-colors"
          >
            <RotateCcw className="w-5 h-5" aria-hidden="true" />
            Try Again
          </button>
          <Button href="/" variant="secondary" size="lg">
            <Home className="w-5 h-5" aria-hidden="true" />
            Back to Home
          </Button>
          <Button href={site.phoneHref} variant="secondary" size="lg">
            <Phone className="w-5 h-5" aria-hidden="true" />
            Call {site.phone}
          </Button>
        </div>
      </Container>
    </section>
  )
}
