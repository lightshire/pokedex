import Pokemon from "@/modules/pokemon/types/Pokemon";

export const URL = "https://pokeapi.co/api/v2/";

const getPokemonByRestAPI = async (pokemonName: string) => {
  const response = await fetch(`${URL}pokemon/${pokemonName}`);
  return (await response.json()) as Pokemon;
};

export default getPokemonByRestAPI;
