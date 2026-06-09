export function MovingLinesBg({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden opacity-20 ${className}`} aria-hidden data-hero="bg">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-lines" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-navy-700" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-lines)" className="animate-[line-drift_30s_linear_infinite]" />
      </svg>
    </div>
  )
}
