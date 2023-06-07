import PokemonList from "@/modules/pokemon/components/PokemonList";
import getQueryClient from "@/modules/react-query/helpers/getQueryClient";
import getPokemonListByGraphQL from "@/modules/pokemon/requests/getPokemonListByGraphQL";
import { dehydrate } from "@tanstack/query-core";
import HydrateProvider from "@/modules/react-query/components/HydrateProvider";

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["pokemon-list-1"], () =>
    getPokemonListByGraphQL(1)
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrateProvider state={dehydratedState}>
      <PokemonList />
    </HydrateProvider>
  );
}
