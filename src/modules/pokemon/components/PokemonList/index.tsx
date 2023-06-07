"use client";

import usePokemonList from "@/modules/pokemon/hooks/usePokemonList";
import PokemonListItemSection from "@/modules/pokemon/components/PokemonListItemSection";
import PaginationSection from "@/components/PaginationSection";

const PokemonList = ({ page, limit }: { page: number; limit: number }) => {
  const {
    query,
    pokemonList,
    onPrevPage,
    onNextPage,
    changeLimit,
    currentLimit,
  } = usePokemonList(page, limit);
  return (
    <>
      <PaginationSection
        onNext={() => onNextPage()}
        onPrev={() => onPrevPage()}
        setCurrentLimit={changeLimit}
        currentLimit={currentLimit}
      />
      <div className={"space-y-[8px] p-[8px]"}>
        {pokemonList.map((pokemonListItem) => (
          <PokemonListItemSection
            key={`pokemon-list-item-${pokemonListItem.id}`}
            pokemonListItem={pokemonListItem}
          />
        ))}
      </div>
      {!query.isLoading && (
        <PaginationSection
          onNext={() => onNextPage()}
          onPrev={() => onPrevPage()}
          setCurrentLimit={changeLimit}
          currentLimit={currentLimit}
        />
      )}
    </>
  );
};

export default PokemonList;
