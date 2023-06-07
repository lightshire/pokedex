const getPokemonIDFromUrl = (url: string) => {
  return url.split("/")[url.split("/").length - 2];
};

export default getPokemonIDFromUrl;
