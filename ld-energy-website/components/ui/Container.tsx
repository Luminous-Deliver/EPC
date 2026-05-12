import { cn } from '@/lib/cn'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'div' | 'section' | 'header' | 'footer' | 'nav'
}

export function Container({ as: Tag = 'div', className, ...props }: ContainerProps) {
  return (
    <Tag
      className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}
