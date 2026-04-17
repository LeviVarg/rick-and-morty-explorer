"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Character, CharacterListInfo } from "../lib/api"
import StatusBadge from "./StatusBadge"

interface CharacterTableProps {
  data: {
    info: CharacterListInfo
    results: Character[]
  }
  currentPage: number
}

export default function CharacterTable({ data: characters, currentPage }: CharacterTableProps) {
  const [search, setSearch] = useState("")

  const filteredCharacters = characters.results.filter(character =>
    character.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Search Input */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search characters by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full px-4 py-2 border-2 border-rm-meeseeks-blue/40 rounded-lg bg-rm-rick-blue/15 dark:bg-rm-morty-blue/30 text-rm-morty-blue dark:text-rm-rick-blue placeholder-rm-rick-brown/60 focus:outline-none focus:ring-2 focus:ring-rm-rick-green focus:border-rm-rick-green transition-colors"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-lg mb-8 border border-rm-meeseeks-blue/20">
        {filteredCharacters.length === 0 ? (
          <div className="p-8 text-center text-rm-rick-brown">
            {search ? "No characters found matching your search." : "No characters available."}
          </div>
        ) : (
          <table className="w-full bg-rm-rick-blue/10 dark:bg-rm-morty-blue/20">
            <thead>
              <tr className="bg-rm-morty-blue dark:bg-rm-morty-blue/80 border-b border-rm-meeseeks-blue/30">
                <th className="px-6 py-3 text-left text-sm font-semibold text-rm-rick-green">Avatar</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-rm-rick-green">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-rm-rick-green">Species</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-rm-rick-green">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredCharacters.map((character, index) => (
                <tr
                  key={character.id}
                  className={`border-b border-rm-meeseeks-blue/10 hover:bg-rm-rick-green/10 transition-colors ${index % 2 === 0
                    ? "bg-rm-rick-blue/10 dark:bg-rm-morty-blue/10"
                    : "bg-rm-rick-blue/20 dark:bg-rm-morty-blue/20"
                    }`}
                >
                  <td className="px-6 py-4 flex justify-center">
                    <Image
                      src={character.image}
                      alt={character.name}
                      width={64}
                      height={64}
                      className="rounded-full ring-2 ring-rm-rick-green/50"
                    />
                  </td>
                  <td className="px-6 py-4 ">
                    <Link
                      href={`/character/${character.id}`}
                      className="text-rm-meeseeks-blue hover:text-rm-rick-green font-medium hover:underline transition-colors"
                    >
                      {character.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-rm-morty-blue dark:text-rm-rick-blue/80 text-center">{character.species}</td>
                  <td className="px-6 py-4 text-center">
                    <StatusBadge status={character.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between">
        <Link
          href={`/?page=${currentPage - 1}`}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${!characters.info.prev
            ? "bg-rm-rick-brown/30 text-rm-rick-brown/50 cursor-not-allowed"
            : "bg-rm-meeseeks-blue text-white hover:bg-rm-morty-blue"
            }`}
          aria-disabled={!characters.info.prev}
          onClick={e => !characters.info.prev && e.preventDefault()}
        >
          Previous
        </Link>

        <span className="text-sm font-medium text-rm-morty-blue dark:text-rm-beth-yellow">
          Page {currentPage} of {characters.info.pages}
        </span>

        <Link
          href={`/?page=${currentPage + 1}`}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${!characters.info.next
            ? "bg-rm-rick-brown/30 text-rm-rick-brown/50 cursor-not-allowed"
            : "bg-rm-meeseeks-blue text-white hover:bg-rm-morty-blue"
            }`}
          aria-disabled={!characters.info.next}
          onClick={e => !characters.info.next && e.preventDefault()}
        >
          Next
        </Link>
      </div>
    </div>
  )
}
