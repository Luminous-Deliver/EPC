import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { CTABanner } from './CTABanner'
import { slugify } from './TableOfContents'

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

function isInternal(href: string): boolean {
  return href.startsWith('/') || href.startsWith('#')
}

const components = {
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = typeof children === 'string' ? children : String(children)
    const id = slugify(text)
    return (
      <h2 id={id} {...props}>
        {children}
      </h2>
    )
  },
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = typeof children === 'string' ? children : String(children)
    const id = slugify(text)
    return (
      <h3 id={id} {...props}>
        {children}
      </h3>
    )
  },
  a: ({ href = '', children, ...props }: AnchorProps) => {
    if (isInternal(href)) {
      return (
        <Link href={href} {...(props as Record<string, unknown>)}>
          {children}
        </Link>
      )
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  },
  CTABanner,
}

interface PostContentProps {
  source: string
}

export function PostContent({ source }: PostContentProps) {
  return (
    <div className="prose-blog">
      <MDXRemote source={source} components={components} />
    </div>
  )
}
