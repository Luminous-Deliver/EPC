import { cn } from '@/lib/cn'

interface Step {
  title: string
  body: string
}

interface StepListProps {
  steps: Step[]
  className?: string
}

export function StepList({ steps, className }: StepListProps) {
  return (
    <ol className={cn('space-y-6', className)}>
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-5">
          <div className="flex flex-col items-center">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary-600 text-white font-bold text-sm shrink-0">
              {i + 1}
            </span>
            {i < steps.length - 1 && <span className="mt-2 w-px flex-1 bg-primary-200" aria-hidden="true" />}
          </div>
          <div className="pb-6">
            <h3 className="text-lg font-semibold text-secondary-900">{step.title}</h3>
            <p className="mt-1 text-secondary-700 leading-relaxed">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
