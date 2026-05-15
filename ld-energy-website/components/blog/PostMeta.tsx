import { Clock, Calendar, RefreshCw } from 'lucide-react'
import { getAuthor } from '@/lib/authors'

interface PostMetaProps {
  author: string
  publishedAt: string
  updatedAt: string
  readingTime: number
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function PostMeta({ author, publishedAt, updatedAt, readingTime }: PostMetaProps) {
  const a = getAuthor(author)
  const showUpdated = updatedAt && updatedAt !== publishedAt

  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-secondary-600">
      {a && (
        <span className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary-100 text-primary-700 text-xs font-bold">
            {a.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
          </span>
          <span>
            By <span className="font-semibold text-secondary-900">{a.name}</span>
          </span>
        </span>
      )}
      <span className="flex items-center gap-1.5">
        <Calendar className="w-4 h-4" aria-hidden="true" />
        <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
      </span>
      {showUpdated && (
        <span className="flex items-center gap-1.5">
          <RefreshCw className="w-4 h-4" aria-hidden="true" />
          <span>
            Updated <time dateTime={updatedAt}>{formatDate(updatedAt)}</time>
          </span>
        </span>
      )}
      <span className="flex items-center gap-1.5">
        <Clock className="w-4 h-4" aria-hidden="true" />
        {readingTime} min read
      </span>
    </div>
  )
}
