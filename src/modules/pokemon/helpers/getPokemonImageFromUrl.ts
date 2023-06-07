import getPokemonIDFromUrl from "@/modules/pokemon/helpers/getPokemonIDFromUrl";

export const MAIN_IMAGE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const getPokemonImageFromUrl = (url: string) => {
  return `${MAIN_IMAGE_URL}${getPokemonIDFromUrl(url)}.png`;
};

export default getPokemonImageFromUrl;
