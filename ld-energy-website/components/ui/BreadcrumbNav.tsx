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
              {item.href ? (
                <Link href={item.href} className="text-secondary-500 hover:text-primary-700">
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-secondary-800" aria-current="page">
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
