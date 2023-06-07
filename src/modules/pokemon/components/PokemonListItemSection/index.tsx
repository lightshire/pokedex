import PokemonListItem from "@/modules/pokemon/types/PokemonListItem";
import Image from "next/image";
import { useMemo } from "react";
import getPokemonImageFromUrl from "@/modules/pokemon/helpers/getPokemonImageFromUrl";
import Link from "next/link";

const PokemonListItemSection = ({
  pokemonListItem,
}: {
  pokemonListItem: PokemonListItem;
}) => {
  const imageLink = useMemo(() => {
    return getPokemonImageFromUrl(pokemonListItem.url);
  }, [pokemonListItem]);

  return (
    <Link
      className={
        "flex border-poke-gray/[0.4] border-[1px] rounded-[20px] items-center"
      }
      href={`/pokemon/${pokemonListItem.name}`}
    >
      <Image
        src={imageLink}
        alt={pokemonListItem.name}
        width={64}
        height={64}
      />
      <span className={"font-start-2p text-[16px] text-poke-gray"}>
        {pokemonListItem.name}
      </span>
    </Link>
  );
};

export default PokemonListItemSection;
