import PokemonListResponse from "@/modules/pokemon/types/PokemonListResponse";
import request, { gql } from "graphql-request";

const URL = "https://beta.pokeapi.co/graphql/v1beta";

const getPokemonListByGraphQL = async (
  page: number = 1,
  limit: number = 20
) => {
  const offset = (page - 1) * limit;

  const QUERY = gql`
  query getPokemonlistQuery {
    pokemon_v2_pokemon(offset: ${offset}, limit: ${limit}) {
      name,
      id
      pokemon_v2_pokemontypes {
        id
        pokemon_v2_type {
          name
        }
      }
    }
  }
`;

  const response = await request<PokemonListResponse>(URL, QUERY);
  return response;
};

export default getPokemonListByGraphQL;
