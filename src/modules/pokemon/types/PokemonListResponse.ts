import PokemonListItem from "@/modules/pokemon/types/PokemonListItem";

export default interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}
