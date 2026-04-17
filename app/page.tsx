import CharacterTable from "./components/CharacterTable";
import { getAllCharacters } from "./lib/api";

export default async function Home({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page = "1" } = await searchParams;
  const characters = await getAllCharacters(Number(page));

  return (
    <CharacterTable data={characters} currentPage={Number(page)} />
  );
}
