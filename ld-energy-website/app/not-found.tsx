import Link from 'next/link'
import { Phone, Home, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { site } from '@/lib/site'

export const metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <section className="bg-gradient-to-b from-primary-50 via-white to-white min-h-[70vh] flex items-center">
      <Container className="py-20 text-center">
        <p className="text-8xl font-extrabold text-primary-600 tracking-tight">404</p>
        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-secondary-900">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-secondary-600 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Try one of the links below.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/" variant="primary" size="lg">
            <Home className="w-5 h-5" aria-hidden="true" />
            Back to Home
          </Button>
          <Button href="/services/domestic-epc" variant="secondary" size="lg">
            Domestic EPC
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Button>
          <Button href={site.phoneHref} variant="secondary" size="lg">
            <Phone className="w-5 h-5" aria-hidden="true" />
            Call Us
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto text-sm">
          {[
            { href: '/pricing', label: 'Pricing' },
            { href: '/areas', label: 'Areas We Cover' },
            { href: '/contact', label: 'Contact Us' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block px-4 py-3 rounded-xl bg-white border border-secondary-200 text-secondary-700 hover:border-primary-300 hover:text-primary-700 hover:shadow-sm transition-all font-medium"
            >
              {label}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
