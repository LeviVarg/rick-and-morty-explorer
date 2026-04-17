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

export default function CharacterTable({ data, currentPage }: CharacterTableProps) {
  const [search, setSearch] = useState("")

  const filteredCharacters = data.results.filter(character =>
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
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-lg mb-8">
        {filteredCharacters.length === 0 ? (
          <div className="p-8 text-center text-gray-500 dark:text-gray-400">
            {search ? "No characters found matching your search." : "No characters available."}
          </div>
        ) : (
          <table className="w-full bg-white dark:bg-gray-900">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Avatar</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Species</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredCharacters.map((character, index) => (
                <tr
                  key={character.id}
                  className={`border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${index % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800"
                    }`}
                >
                  <td className="px-6 py-4">
                    <Image
                      src={character.image}
                      alt={character.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/character/${character.id}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      {character.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{character.species}</td>
                  <td className="px-6 py-4">
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
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${!data.info.prev
              ? "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
              : "bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-800"
            }`}
          aria-disabled={!data.info.prev}
          onClick={e => !data.info.prev && e.preventDefault()}
        >
          Previous
        </Link>

        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Page {currentPage} of {data.info.pages}
        </span>

        <Link
          href={`/?page=${currentPage + 1}`}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${!data.info.next
              ? "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
              : "bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-800"
            }`}
          aria-disabled={!data.info.next}
          onClick={e => !data.info.next && e.preventDefault()}
        >
          Next
        </Link>
      </div>
    </div>
  )
}
