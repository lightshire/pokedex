import { useQuery } from "react-query";
import getPokemonListByGraphQL from "@/modules/pokemon/requests/getPokemonListByGraphQL";
import { useEffect, useMemo, useState } from "react";
import PokemonListItem from "@/modules/pokemon/types/PokemonListItem";
import useQueryParams from "@/modules/global/hooks/useQueryParams";

const usePokemonList = (page: number, limit: number) => {
  const [currentPage, setCurrentPage] = useState(page);
  const [currentLimit, setCurrentLimit] = useState(limit);

  const { queryParams, setQueryParams } = useQueryParams<{
    page?: string;
    limit?: string;
  }>();

  const query = useQuery([`pokemon-list-${currentPage}`], () =>
    getPokemonListByGraphQL(currentPage, limit)
  );
  const pokemonList = useMemo<PokemonListItem[]>(() => {
    if (query.data) {
      return query.data.pokemon_v2_pokemon;
    }
    return [];
  }, [query.data]);

  useEffect(() => {
    if (query.isSuccess) {
      if (parseInt(queryParams.page || "1") !== currentPage) {
        setQueryParams({
          page: currentPage + "",
          limit: limit + "",
        });
      }
    }
  }, [currentPage, query.isSuccess]);

  useEffect(() => {
    if (query.isSuccess) {
      if (parseInt(queryParams.limit || "1") !== currentLimit) {
        setQueryParams({
          limit: limit + "",
          page: currentPage + "",
        });
      }
    }
  }, [limit, query.isSuccess]);

  const onNextPage = () => setCurrentPage(currentPage + 1);

  const onPrevPage = () => currentPage !== 1 && setCurrentPage(currentPage - 1);

  const changeLimit = async (limit: number) => {
    await setCurrentLimit(limit);
    query.refetch();
    setQueryParams({
      limit: limit + "",
      page: currentPage + "",
    });
  };

  return {
    query,
    pokemonList,
    onNextPage,
    onPrevPage,
    setCurrentLimit,
    currentLimit,
    changeLimit,
  };
};

export default usePokemonList;
