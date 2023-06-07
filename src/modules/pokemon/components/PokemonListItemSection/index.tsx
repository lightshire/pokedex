import PokemonListItem from "@/modules/pokemon/types/PokemonListItem";
import Image from "next/image";
import { useMemo } from "react";
import getPokemonImageFromId from "@/modules/pokemon/helpers/getPokemonImageFromId";
import Link from "next/link";

const PokemonListItemSection = ({
  pokemonListItem,
}: {
  pokemonListItem: PokemonListItem;
}) => {
  const imageLink = useMemo(() => {
    return getPokemonImageFromId(pokemonListItem.id);
  }, [pokemonListItem]);

  return (
    <Link
      className={
        "flex border-poke-gray/[0.4] border-[1px] rounded-[20px] items-center text-poke-gray active:bg-poke-gray active:text-white transition-all"
      }
      href={`/pokemon/${pokemonListItem.name}`}
    >
      <Image
        src={imageLink}
        alt={pokemonListItem.name}
        width={64}
        height={64}
      />
      <span className={"font-start-2p text-[16px]"}>
        {pokemonListItem.name}
      </span>
    </Link>
  );
};

export default PokemonListItemSection;
