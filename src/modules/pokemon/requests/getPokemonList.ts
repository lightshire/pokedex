import PokemonListResponse from "@/modules/pokemon/types/PokemonListResponse";

const LIMIT = 20;
const URL = "https://pokeapi.co/api/v2";

const getPokemonList = async (page: number = 1) => {
  const offset = (page - 1) * LIMIT;
  const response = await fetch(`${URL}/pokemon`);
  return (await response.json()) as PokemonListResponse;
};

export default getPokemonList;
