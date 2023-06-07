import { PokemonStatType } from "@/modules/pokemon/types/Pokemon";
import { stat } from "fs";

interface Props {
  value: string;
  statType: PokemonStatType;
}

export const STAT_LABELS = {
  hp: "HP",
  attack: "AK",
  defense: "Defense",
  "special-attack": "Sp AK",
  "special-defense": "Sp DF",
};

export const STAT_DESIGN_STYLE = {
  hp: "bg-poke-green",
  attack: "bg-poke-red",
  defense: "bg-poke-cyan",
  "special-defense": "bg-poke-cyan",
  "special-attack": "bg-poke-red",
};

const PokemonStatPill = ({ value, statType }: Props) => {
  return (
    <div
      className={`text-[9px]  text-white text-center flex items-center justify-center ${STAT_DESIGN_STYLE[statType]} w-full h-[20px] w-[140px] rounded-full border-black border-[2px]`}
    >
      {STAT_LABELS[statType]}: {value}
    </div>
  );
};

export default PokemonStatPill;
