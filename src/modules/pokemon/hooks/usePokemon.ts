import { useQuery } from "react-query";
import { useCallback, useMemo } from "react";
import Pokemon, { PokemonStatType } from "@/modules/pokemon/types/Pokemon";
import getPokemonByRestAPI from "@/modules/pokemon/requests/getPokemonByRestAPI";

const usePokemon = (pokemonName: string) => {
  const query = useQuery(["pokemon", pokemonName], () =>
    getPokemonByRestAPI(pokemonName)
  );

  const pokemon = useMemo<Pokemon | undefined>(() => {
    if (!query.data) {
      return undefined;
    }
    return query.data as Pokemon;
  }, [query.data]);

  const getStatByKeyName = useCallback(
    (keyName: PokemonStatType) => {
      if (!pokemon) {
        return "";
      }
      const stat = pokemon.stats.find((stat) => stat.stat.name === keyName);
      if (!stat) {
        return "";
      }
      return stat.base_stat;
    },
    [pokemon]
  );

  return {
    query,
    pokemon,
    getStatByKeyName,
  };
};

export default usePokemon;
