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
        className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-lg font-medium bg-rm-morty-blue/10 dark:bg-rm-meeseeks-blue/20 text-rm-morty-blue dark:text-rm-rick-blue hover:bg-rm-rick-green/20 hover:text-rm-jerry-green dark:hover:text-rm-rick-green transition-colors"
      >
        &larr; Back to characters
      </Link>

      <div className="bg-rm-rick-blue/15 dark:bg-rm-morty-blue/20 rounded-xl shadow-md overflow-hidden border border-rm-meeseeks-blue/20 sm:flex">
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
          <h1 className="text-2xl font-bold text-rm-morty-blue dark:text-rm-morty-yellow">
            {character.name}
          </h1>

          <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
            <span className="font-semibold text-rm-rick-brown">Status</span>
            <span><StatusBadge status={character.status} /></span>

            <span className="font-semibold text-rm-rick-brown">Species</span>
            <span className="text-rm-morty-blue dark:text-rm-rick-blue">{character.species}</span>

            {character.type && (
              <>
                <span className="font-semibold text-rm-rick-brown">Type</span>
                <span className="text-rm-morty-blue dark:text-rm-rick-blue">{character.type}</span>
              </>
            )}

            <span className="font-semibold text-rm-rick-brown">Gender</span>
            <span className="text-rm-morty-blue dark:text-rm-rick-blue">{character.gender}</span>

            <span className="font-semibold text-rm-rick-brown">Origin</span>
            <span className="text-rm-morty-blue dark:text-rm-rick-blue">{character.origin.name}</span>

            <span className="font-semibold text-rm-rick-brown">Location</span>
            <span className="text-rm-morty-blue dark:text-rm-rick-blue">{character.location.name}</span>

            <span className="font-semibold text-rm-rick-brown">Episodes</span>
            <span className="text-rm-morty-blue dark:text-rm-rick-blue">{character.episode.length}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
