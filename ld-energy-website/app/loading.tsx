export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5" role="status" aria-label="Loading page">
      <div className="relative w-14 h-14">
        <span className="absolute inset-0 rounded-full border-[3px] border-primary-100" aria-hidden="true" />
        <span className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-primary-600 animate-spin" aria-hidden="true" />
        <span className="absolute inset-[9px] rounded-full bg-gradient-to-br from-primary-500 to-primary-600 opacity-15 animate-pulse" aria-hidden="true" />
      </div>
      <p className="text-sm font-medium text-secondary-500 animate-pulse">Loading&hellip;</p>
      <span className="sr-only">Page is loading</span>
    </div>
  )
}
