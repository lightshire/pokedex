import { useQuery } from "react-query";
import getPokemonListByGraphQL from "@/modules/pokemon/requests/getPokemonListByGraphQL";
import { useMemo } from "react";
import PokemonListItem from "@/modules/pokemon/types/PokemonListItem";

const usePokemonList = (page: number = 1) => {
  const query = useQuery([`pokemon-list-${page}`], () =>
    getPokemonListByGraphQL(page)
  );
  const pokemonList = useMemo<PokemonListItem[]>(() => {
    if (query.data) {
      return query.data.pokemon_v2_pokemon;
    }
    return [];
  }, [query.data]);

  return {
    query,
    pokemonList,
  };
};

export default usePokemonList;
