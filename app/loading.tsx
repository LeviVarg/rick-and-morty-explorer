export default function Loading() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 animate-pulse">
      {/* Search skeleton */}
      <div className="mb-8 h-10 rounded-lg bg-rm-meeseeks-blue/20" />

      {/* Table skeleton */}
      <div className="rounded-lg border border-rm-meeseeks-blue/20 overflow-hidden mb-8">
        <div className="bg-rm-morty-blue h-10" />
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 px-6 py-4 border-b border-rm-meeseeks-blue/10">
            <div className="w-12 h-12 rounded-full bg-rm-rick-green/20 shrink-0" />
            <div className="h-4 rounded bg-rm-meeseeks-blue/20 w-40" />
            <div className="h-4 rounded bg-rm-rick-brown/20 w-24" />
            <div className="h-6 rounded-full bg-rm-rick-green/20 w-20" />
          </div>
        ))}
      </div>

      {/* Pagination skeleton */}
      <div className="flex justify-between">
        <div className="h-10 w-24 rounded-lg bg-rm-meeseeks-blue/20" />
        <div className="h-10 w-32 rounded-lg bg-rm-rick-brown/20" />
        <div className="h-10 w-24 rounded-lg bg-rm-meeseeks-blue/20" />
      </div>
    </div>
  )
}
