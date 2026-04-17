export default function Loading() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 animate-pulse">
      {/* Back button skeleton */}
      <div className="h-10 w-44 rounded-lg bg-rm-meeseeks-blue/20 mb-8" />

      {/* Card skeleton */}
      <div className="rounded-xl border border-rm-meeseeks-blue/20 overflow-hidden sm:flex">
        <div className="sm:w-72 sm:shrink-0 h-72 bg-rm-rick-green/20" />
        <div className="p-6 sm:p-8 flex flex-col gap-4 flex-1">
          <div className="h-8 w-48 rounded bg-rm-morty-blue/20" />
          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-4 w-20 rounded bg-rm-rick-brown/30" />
                <div className="h-4 w-32 rounded bg-rm-meeseeks-blue/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
