"use client";

import usePokemon from "@/modules/pokemon/hooks/usePokemon";
import Image from "next/image";
import PokemonStatPill from "@/modules/pokemon/components/PokemonStatPill";

const Pokemon = ({ pokemonName }: { pokemonName: string }) => {
  const { pokemon, getStatByKeyName } = usePokemon(pokemonName);

  return (
    <div className={"py-[40px] font-start-2p"}>
      <h1 className={"text-center"}>{pokemonName}</h1>
      <div className={"flex items-center justify-center flex-col"}>
        <PokemonStatPill value={getStatByKeyName("hp")} statType={"hp"} />
        {pokemon && (
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
            width={140}
            height={140}
            alt={pokemonName}
          />
        )}
      </div>
      <div className={"flex gap-[16px]"}>
        <div className={"flex-1 space-y-[8px]"}>
          <PokemonStatPill
            value={getStatByKeyName("attack")}
            statType={"attack"}
          />
          <PokemonStatPill
            value={getStatByKeyName("defense")}
            statType={"defense"}
          />
        </div>
        <div className={"flex-1 space-y-[8px]"}>
          <PokemonStatPill
            value={getStatByKeyName("special-attack")}
            statType={"special-attack"}
          />
          <PokemonStatPill
            value={getStatByKeyName("special-defense")}
            statType={"special-defense"}
          />
        </div>
      </div>
      <div className={"abilities"}></div>
    </div>
  );
};

export default Pokemon;
