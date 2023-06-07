export default interface Pokemon {
  id: number;
  stats: PokemonStat[];
  abilities: Ability[];
  species: {
    name: string;
  };
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export interface PokemonStat {
  base_stat: string;
  effort: number;
  stat: {
    name: PokemonStatType;
    url: string;
  };
}

export type PokemonStatType =
  | "attack"
  | "hp"
  | "defense"
  | "special-attack"
  | "special-defense";

export interface Ability {
  name: string;
}
