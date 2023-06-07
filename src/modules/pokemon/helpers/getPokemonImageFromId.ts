export const MAIN_IMAGE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const getPokemonImageFromId = (id: number) => {
  return `${MAIN_IMAGE_URL}${id}.png`;
};

export default getPokemonImageFromId;
