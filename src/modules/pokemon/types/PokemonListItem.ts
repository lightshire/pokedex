import PokemonType from "@/modules/pokemon/types/PokemonType";

export default interface PokemonListItem {
  name: string;
  id: number;
  pokemon_v2_pokemontypes: PokemonListItemType[];
}

export interface PokemonListItemType {
  id: number;
  pokemon_v2_type: PokemonType;
}
