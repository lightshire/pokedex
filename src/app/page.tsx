import PokemonList from "@/modules/pokemon/components/PokemonList";
import getQueryClient from "@/modules/react-query/helpers/getQueryClient";
import getPokemonListByGraphQL from "@/modules/pokemon/requests/getPokemonListByGraphQL";
import { dehydrate } from "@tanstack/query-core";
import HydrateProvider from "@/modules/react-query/components/HydrateProvider";

export default async function Home({
  searchParams: { page = "1", limit = "20" },
}: {
  searchParams: {
    page: string;
    limit: string;
  };
}) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery([`pokemon-list-${page}`], () =>
    getPokemonListByGraphQL(parseInt(page), parseInt(limit))
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrateProvider state={dehydratedState}>
      <PokemonList page={parseInt(page)} limit={parseInt(limit)} />
    </HydrateProvider>
  );
}
