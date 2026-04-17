'use client'

import { useEffect } from 'react'

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 text-center">
      <div className="inline-block p-8 rounded-xl bg-rm-beth-red/10 border border-rm-beth-red/30">
        <h2 className="text-2xl font-bold text-rm-beth-red mb-2">Something went wrong!</h2>
        <p className="text-rm-morty-blue dark:text-rm-beth-yellow mb-6">
          Failed to load characters. The Rick &amp; Morty API may be unavailable.
        </p>
        <button
          onClick={() => unstable_retry()}
          className="px-6 py-2 rounded-lg font-medium bg-rm-meeseeks-blue text-white hover:bg-rm-morty-blue transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
