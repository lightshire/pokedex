import Pokemon from "@/modules/pokemon/components/Pokemon";
import getQueryClient from "@/modules/react-query/helpers/getQueryClient";
import { dehydrate } from "@tanstack/query-core";
import HydrateProvider from "@/modules/react-query/components/HydrateProvider";
import getPokemonByRestAPI from "@/modules/pokemon/requests/getPokemonByRestAPI";

const Page = async ({ params }: { params: { name: string } }) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["pokemon", params.name], () =>
    getPokemonByRestAPI(params.name)
  );
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrateProvider state={dehydratedState}>
      <Pokemon pokemonName={params.name} />
    </HydrateProvider>
  );
};

export default Page;
