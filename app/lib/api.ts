const BASE_URL = "https://rickandmortyapi.com/api" as const

export interface CharacterListInfo {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

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

export async function getAllCharacters(page: number = 1) {
  const res = await fetch(`${BASE_URL}/character?page=${page}`)

  if (!res.ok) {
    throw new Error(`Failed to fetch characters (status ${res.status})`)
  }

  return res.json() as Promise<{ info: CharacterListInfo; results: Character[] }>
}

export async function getCharacter(id: number) {
  const res = await fetch(`${BASE_URL}/character/${id}`)

  if (!res.ok) {
    throw new Error(`Failed to fetch character ${id} (status ${res.status})`)
  }

  return res.json() as Promise<Character>
}

