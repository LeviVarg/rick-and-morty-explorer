const BASE_URL = "https://rickandmortyapi.com/api" as const

/**
 * Pagination metadata returned by the character list endpoint.
 *
 * @see https://rickandmortyapi.com/documentation/#info-and-pagination
 */
export interface CharacterListInfo {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

/**
 * A Rick and Morty character returned by the REST API.
 *
 * @see https://rickandmortyapi.com/documentation/#character-schema
 */
export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: { name: string; url: string }
  location: { name: string; url: string }
  image: string
  episode: string[]
  url: string
  created: string
}

/**
 * Fetches a paginated list of characters from the Rick and Morty API.
 *
 * @param page - The 1-based page number to request. Defaults to `1`.
 * @returns A promise that resolves to the pagination metadata and character results.
 * @throws {Error} Thrown when the API request does not return a successful response.
 * @see https://rickandmortyapi.com/documentation/#get-all-characters
 */
export async function getAllCharacters(page: number = 1) {
  const res = await fetch(`${BASE_URL}/character?page=${page}`)

  if (!res.ok) {
    throw new Error(`Failed to fetch characters (status ${res.status})`)
  }

  return res.json() as Promise<{ info: CharacterListInfo; results: Character[] }>
}

/**
 * Fetches a single character by its numeric identifier.
 *
 * @param id - The character ID.
 * @returns A promise that resolves to the requested character.
 * @throws {Error} Thrown when the API request does not return a successful response.
 * @see https://rickandmortyapi.com/documentation/#get-a-single-character
 */
export async function getCharacter(id: number) {
  const res = await fetch(`${BASE_URL}/character/${id}`)

  if (!res.ok) {
    throw new Error(`Failed to fetch character ${id} (status ${res.status})`)
  }

  return res.json() as Promise<Character>
}
