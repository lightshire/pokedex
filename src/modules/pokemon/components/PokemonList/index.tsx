"use client";

import usePokemonList from "@/modules/pokemon/hooks/usePokemonList";
import PokemonListItemSection from "@/modules/pokemon/components/PokemonListItemSection";

const PokemonList = () => {
  const { query, pokemonList } = usePokemonList();

  return (
    <div className={"space-y-[8px] p-[8px]"}>
      {pokemonList.map((pokemonListItem) => (
        <PokemonListItemSection
          key={`pokemon-list-item-${pokemonListItem.id}`}
          pokemonListItem={pokemonListItem}
        />
      ))}
    </div>
  );
};

export default PokemonList;
