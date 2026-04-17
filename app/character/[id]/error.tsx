'use client'

import { useEffect } from 'react'
import Link from 'next/link'

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
    <div className="w-full max-w-3xl mx-auto px-4 py-16 text-center">
      <div className="inline-block p-8 rounded-xl bg-rm-beth-red/10 border border-rm-beth-red/30">
        <h2 className="text-2xl font-bold text-rm-beth-red mb-2">Character not found!</h2>
        <p className="text-rm-morty-blue dark:text-rm-beth-yellow mb-6">
          Failed to load this character. They may have escaped to another dimension.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => unstable_retry()}
            className="px-6 py-2 rounded-lg font-medium bg-rm-meeseeks-blue text-white hover:bg-rm-morty-blue transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-2 rounded-lg font-medium bg-rm-morty-blue text-white hover:bg-rm-jerry-green transition-colors"
          >
            Back to characters
          </Link>
        </div>
      </div>
    </div>
  )
}
