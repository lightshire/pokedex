import { FC, PropsWithChildren } from "react";
import PokeNameSection from "@/modules/pokemon/components/PokeNameSection";
import DirectionalButtons from "@/components/DirectionalButtons";
import ScreenComponent from "@/components/ScreenComponent";
import Link from "next/link";

const PokeDexBody: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={
        "mx-auto md:max-w-[680px] bg-poke-red h-full w-full rounded-[16px] flex flex-col"
      }
    >
      <div className={"flex p-[24px] items-center flex-none"}>
        <Link
          className={
            "w-[80px] h-[80px] rounded-full bg-[#c9070b] border-[2px] flex items-center justify-center border-black flex-none active:bg-white hover:bg-white transition-all"
          }
          href={"/"}
        >
          <div className={"w-[64px] h-[64px] rounded-full bg-poke-cyan"} />
        </Link>
        <div
          className={"font-start-2p text-white text-[16px] text-right flex-1"}
        >
          <h3>NextJS Pokedex</h3>
        </div>
      </div>
      <div className={"flex-1 px-[16px]  h-auto overflow-y-auto flex-grow"}>
        <div className={"border-black border-[1px] h-full bg-white"}>
          <div className={"border-x-[2px] border-x-poke-gray bg-white h-auto"}>
            {children}
          </div>
        </div>
      </div>
      <div className={"flex-none p-[16px]"}>
        <PokeNameSection />
        <div className={"flex items-center mt-[24px] gap-[4px]"}>
          <DirectionalButtons />
          <div className={"flex-1"}>
            <ScreenComponent>
              The directional button on the left side <br />
              is not yet functional <br />
              Please navigate via the pokedex screen
            </ScreenComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeDexBody;
