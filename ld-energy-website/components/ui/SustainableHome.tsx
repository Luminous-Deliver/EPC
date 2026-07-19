/**
 * Decorative hero illustration — a sustainable London street in the brand's
 * geometric style: modern homes with rooftop solar panels, an air-source
 * heat pump, and leaves. Slate + sage palette; deliberately contains no
 * people. Purely presentational (aria-hidden by callers).
 */
export function SustainableHome({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      {/* soft sun */}
      <circle cx="1050" cy="46" r="26" fill="#95BFAD" fillOpacity="0.35" />
      <circle cx="1050" cy="46" r="16" fill="#95BFAD" fillOpacity="0.5" />

      {/* ── left home: flat-roof modern, panels tilted on frames ── */}
      <g stroke="#363851" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M80 178V96h150v82" />
        <path d="M72 96h166" />
        {/* tilted solar panels on flat roof */}
        <path d="M96 96l14-22h34l-14 22z" fill="#47846E" fillOpacity="0.55" />
        <path d="M148 96l14-22h34l-14 22z" fill="#47846E" fillOpacity="0.55" />
        {/* door + window */}
        <path d="M112 178v-36h28v36" />
        <rect x="164" y="120" width="40" height="28" rx="2" fill="#DDEBE4" fillOpacity="0.6" />
      </g>

      {/* ── middle trees / leaves ── */}
      <g>
        <path d="M330 178c0-30 18-44 40-52-6 24-12 40-40 52z" fill="#47846E" fillOpacity="0.4" />
        <path d="M394 178c0-22 12-32 28-38-4 18-8 30-28 38z" fill="#47846E" fillOpacity="0.28" />
        <line x1="356" y1="178" x2="360" y2="146" stroke="#363851" strokeOpacity="0.5" strokeWidth="2" />
      </g>

      {/* ── centre terrace: pitched roofs, one panelled ── */}
      <g stroke="#363851" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M470 178v-56l52-38 52 38v56" />
        <path d="M574 178v-56l52-38 52 38v56" />
        {/* panels on the left pitch */}
        <path d="M488 128l30-22 22 16-30 22z" fill="#47846E" fillOpacity="0.55" />
        {/* windows */}
        <rect x="500" y="140" width="22" height="20" rx="2" fill="#DDEBE4" fillOpacity="0.6" />
        <rect x="604" y="140" width="22" height="20" rx="2" fill="#DDEBE4" fillOpacity="0.6" />
        <path d="M540 178v-30h24v30" />
      </g>

      {/* ── right home: brand-logo geometry with solar roof + heat pump ── */}
      <g stroke="#363851" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
        {/* chimney + roofline like the logo */}
        <path d="M868 178v-70l72-54 72 54v70" />
        <path d="M886 76v-20h14v10" />
        {/* solar array on right pitch */}
        <path d="M948 66l56 42-18 0-50-38z" fill="#47846E" fillOpacity="0.6" />
        <path d="M946 84l40 30" strokeWidth="1.5" stroke="#F1F7F4" strokeOpacity="0.9" />
        <path d="M962 72l40 30" strokeWidth="1.5" stroke="#F1F7F4" strokeOpacity="0.9" />
        {/* door + windows */}
        <path d="M918 178v-40h32v40" />
        <rect x="964" y="126" width="30" height="24" rx="2" fill="#DDEBE4" fillOpacity="0.6" />
        <circle cx="944" cy="158" r="2" fill="#363851" />
      </g>

      {/* air-source heat pump beside the right home */}
      <g stroke="#363851" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
        <rect x="1032" y="140" width="58" height="38" rx="6" fill="#F1F7F4" />
        <circle cx="1054" cy="159" r="12" />
        <path d="M1054 149v20M1044 159h20" strokeWidth="2" />
        <path d="M1076 148v22M1082 148v22" strokeWidth="2" strokeOpacity="0.7" />
      </g>

      {/* leaf drifting from the roof — logo motif */}
      <path d="M842 96c10-14 24-14 30-26-12 4-22 8-30 26z" fill="#47846E" fillOpacity="0.5" />

      {/* ground line */}
      <path d="M40 178h1120" stroke="#363851" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.7" />
    </svg>
  )
}
