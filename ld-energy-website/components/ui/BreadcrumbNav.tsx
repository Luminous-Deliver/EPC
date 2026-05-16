import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/cn'

interface BreadcrumbItem {
  href?: string
  label: string
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
  className?: string
}

export function BreadcrumbNav({ items, className }: BreadcrumbNavProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('border-b border-secondary-100 bg-secondary-50', className)}>
      <Container>
        <ol className="flex items-center gap-1 py-3 text-sm flex-wrap">
          {items.map((item, i) => (
            <li key={item.label} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-secondary-400 shrink-0" aria-hidden="true" />}
              {item.href && i < items.length - 1 ? (
                <Link
                  href={item.href}
                  className="inline-block px-1 py-1.5 text-secondary-600 hover:text-primary-700 hover:underline underline-offset-4"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="px-1 py-2 font-medium text-secondary-900" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  )
}
