import { getAuthor } from '@/lib/authors'

interface AuthorBoxProps {
  author: string
}

export function AuthorBox({ author }: AuthorBoxProps) {
  const a = getAuthor(author)
  if (!a) return null
  return (
    <aside className="not-prose mt-12 rounded-lg border border-secondary-200 bg-secondary-50 p-6 md:p-8">
      <div className="flex items-start gap-4">
        <div className="inline-flex items-center justify-center w-14 h-14 shrink-0 rounded-full bg-primary-600 text-white font-bold text-lg">
          {a.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
        </div>
        <div className="flex-1">
          <p className="font-bold text-secondary-900">{a.name}</p>
          <p className="text-sm text-primary-700 font-medium">{a.role}</p>
          <p className="mt-3 text-secondary-700 leading-relaxed">{a.bio}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {a.credentials.map((c) => (
              <li
                key={c}
                className="text-xs px-2.5 py-1 rounded-full bg-white border border-secondary-200 text-secondary-700"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}
