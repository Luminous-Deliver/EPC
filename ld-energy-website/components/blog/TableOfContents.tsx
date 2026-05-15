interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  items: TocItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  if (!items || items.length === 0) return null
  return (
    <nav aria-label="Table of contents" className="not-prose my-8 rounded-lg border border-secondary-200 bg-white p-5">
      <p className="text-xs uppercase tracking-wide font-semibold text-secondary-500 mb-3">
        On this page
      </p>
      <ol className="space-y-1.5 text-sm">
        {items.map((item) => (
          <li key={item.id} className={item.level > 2 ? 'pl-4' : ''}>
            <a
              href={`#${item.id}`}
              className="text-secondary-700 hover:text-primary-700 hover:underline"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function extractToc(markdown: string): TocItem[] {
  const lines = markdown.split('\n')
  const items: TocItem[] = []
  let inFence = false
  for (const line of lines) {
    if (line.trim().startsWith('```')) {
      inFence = !inFence
      continue
    }
    if (inFence) continue
    const m = /^(#{2,3})\s+(.+?)\s*$/.exec(line)
    if (!m) continue
    const level = m[1].length
    const text = m[2].replace(/[#*_`]/g, '').trim()
    const id = slugify(text)
    items.push({ id, text, level })
  }
  return items
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}
