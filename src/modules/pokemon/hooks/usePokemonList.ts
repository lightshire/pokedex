import { useQuery } from "react-query";
import getPokemonListByGraphQL from "@/modules/pokemon/requests/getPokemonListByGraphQL";
import { useEffect, useMemo, useState } from "react";
import PokemonListItem from "@/modules/pokemon/types/PokemonListItem";
import useQueryParams from "@/modules/global/hooks/useQueryParams";

const usePokemonList = (page: number) => {
  const [currentPage, setCurrentPage] = useState(page);
  const { queryParams, setQueryParams } = useQueryParams<{
    page?: string;
    limit?: string;
  }>();

  const query = useQuery([`pokemon-list-${currentPage}`], () =>
    getPokemonListByGraphQL(currentPage)
  );
  const pokemonList = useMemo<PokemonListItem[]>(() => {
    if (query.data) {
      return query.data.pokemon_v2_pokemon;
    }
    return [];
  }, [query.data]);

  const onNextPage = () => setCurrentPage(currentPage + 1);

  const onPrevPage = () => setCurrentPage(currentPage - 1);

  useEffect(() => {
    if (query.isSuccess) {
      if (parseInt(queryParams.page || "1") !== currentPage) {
        setQueryParams({
          page: currentPage + "",
        });
      }
    }
  }, [currentPage, query.isSuccess]);

  return {
    query,
    pokemonList,
    onNextPage,
    onPrevPage,
  };
};

export default usePokemonList;
