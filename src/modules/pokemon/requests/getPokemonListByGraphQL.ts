import PokemonListResponse from "@/modules/pokemon/types/PokemonListResponse";
import request, { gql } from "graphql-request";

const LIMIT = 20;
const URL = "https://beta.pokeapi.co/graphql/v1beta";

const QUERY = gql`
  query getPokemonlistQuery {
    pokemon_v2_pokemon(offset: 0, limit: ${LIMIT}) {
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

const getPokemonListByGraphQL = async (page: number = 1) => {
  const offset = (page - 1) * LIMIT;
  const response = await request<PokemonListResponse>(URL, QUERY);
  return response;
};

export default getPokemonListByGraphQL;
