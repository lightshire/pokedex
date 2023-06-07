import { useQuery } from "react-query";
import getPokemonList from "@/modules/pokemon/requests/getPokemonList";
import { useMemo } from "react";
import PokemonListItem from "@/modules/pokemon/types/PokemonListItem";

const usePokemonList = (page: number = 1) => {
  const query = useQuery([`pokemon-list-${page}`], () => getPokemonList(page));
  const pokemonList = useMemo<PokemonListItem[]>(() => {
    if (query.data) {
      return query.data.results;
    }
    return [];
  }, [query.data?.results]);
  return {
    query,
    pokemonList,
  };
};

export default usePokemonList;
