import { ShieldCheck, MapPin, ExternalLink } from 'lucide-react'
import { site } from '@/lib/site'

/**
 * Assessor credentials card. Shows the named, accredited assessor and links
 * out to the official government register so anyone can verify independently
 * — the single strongest trust signal we can show on an EPC site.
 */
export function AssessorCard({
  className,
  note,
}: {
  className?: string
  /** Optional line above the credentials, e.g. an invitation to verify independently. */
  note?: string
}) {
  const rows: Array<[string, string]> = [
    ['Name', site.assessor.name],
    ['Accreditation', site.assessor.qualification],
    ['Accreditation number', site.assessor.accreditationNumber],
    ['Scheme', site.assessor.scheme],
  ]

  return (
    <div
      className={`rounded-2xl border border-secondary-200 bg-white p-6 md:p-7 shadow-premium ${className ?? ''}`}
    >
      <h3 className="flex items-center gap-2.5 text-xl font-bold text-secondary-900">
        <ShieldCheck className="w-6 h-6 text-accent-600 shrink-0" aria-hidden="true" />
        Your Assessor
      </h3>

      {note && (
        <p className="mt-3 text-sm leading-relaxed text-secondary-600">{note}</p>
      )}

      <dl className="mt-5 space-y-4">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt className="text-xs uppercase tracking-wide font-medium text-secondary-500">{label}</dt>
            <dd className="mt-0.5 text-base font-semibold text-secondary-900">{value}</dd>
          </div>
        ))}
      </dl>

      <a
        href={site.assessor.verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-secondary-200 px-4 py-3 text-sm font-semibold text-secondary-900 transition-colors hover:bg-secondary-50 hover:border-secondary-300"
      >
        Verify on the official register
        <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
      </a>

      <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-secondary-500">
        <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
        Based in {site.address.locality} {site.address.postalCode}
      </p>
    </div>
  )
}
