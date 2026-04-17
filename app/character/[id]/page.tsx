import Image from "next/image"
import Link from "next/link"
import { getCharacter } from "../../lib/api"
import StatusBadge from "../../components/StatusBadge"

export default async function CharacterProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const character = await getCharacter(Number(id))

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-lg font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        &larr; Back to characters
      </Link>

      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden sm:flex">
        <div className="sm:w-72 sm:shrink-0">
          <Image
            src={character.image}
            alt={character.name}
            width={300}
            height={300}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className="p-6 sm:p-8 flex flex-col justify-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {character.name}
          </h1>

          <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
            <span className="font-semibold text-gray-500 dark:text-gray-400">Status</span>
            <span><StatusBadge status={character.status} /></span>

            <span className="font-semibold text-gray-500 dark:text-gray-400">Species</span>
            <span className="text-gray-900 dark:text-white">{character.species}</span>

            {character.type && (
              <>
                <span className="font-semibold text-gray-500 dark:text-gray-400">Type</span>
                <span className="text-gray-900 dark:text-white">{character.type}</span>
              </>
            )}

            <span className="font-semibold text-gray-500 dark:text-gray-400">Gender</span>
            <span className="text-gray-900 dark:text-white">{character.gender}</span>

            <span className="font-semibold text-gray-500 dark:text-gray-400">Origin</span>
            <span className="text-gray-900 dark:text-white">{character.origin.name}</span>

            <span className="font-semibold text-gray-500 dark:text-gray-400">Location</span>
            <span className="text-gray-900 dark:text-white">{character.location.name}</span>

            <span className="font-semibold text-gray-500 dark:text-gray-400">Episodes</span>
            <span className="text-gray-900 dark:text-white">{character.episode.length}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
