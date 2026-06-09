export function PageFallback() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center section-band-white"
      role="status"
      aria-label="Loading"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-navy-900/15 border-t-coral-500" />
    </div>
  )
}
