const PokemonListItem = () => {
  return (
    <div
      className={
        "flex border-poke-gray/[0.4] border-[1px] rounded-[20px] gap-[24px] p-[10px]"
      }
    >
      <div
        className={
          "h-[64px] flex-none w-[64px] bg-poke-gray/[0.4] rounded-[2px] animate-pulse"
        }
      />
      <div className={"flex-1"}>
        <div
          className={
            "font-start-2p text-[16px] flex flex-col h-[16px] bg-poke-gray w-full mb-[8px] animate-pulse"
          }
        />
        <div className={"flex gap-[8px]"}>
          <div
            className={
              "text-[9px] flex-none text-white bg-poke-gray p-[2px] rounded-[2px] inline-block mr-[8px] h-[9px] w-[48px] bg-poke-gray animate-pulse"
            }
          />
          <div
            className={
              "text-[9px] flex-none text-white bg-poke-gray p-[2px] rounded-[2px] inline-block mr-[8px] h-[9px] w-[48px] bg-poke-gray animate-pulse"
            }
          />
        </div>
      </div>
    </div>
  );
};

const PokemonListLoadingSection = () => {
  return (
    <>
      <PokemonListItem />
      <PokemonListItem />
      <PokemonListItem />
      <PokemonListItem />
      <PokemonListItem />
    </>
  );
};

export default PokemonListLoadingSection;
