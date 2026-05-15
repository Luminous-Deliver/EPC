import { PostCard } from './PostCard'
import type { Post } from '@/lib/blog'

interface RelatedPostsProps {
  posts: Post[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null
  return (
    <section aria-labelledby="related-heading" className="not-prose mt-16">
      <h2 id="related-heading" className="text-2xl md:text-3xl font-bold tracking-tight text-secondary-900 mb-6">
        Related guides
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </section>
  )
}
