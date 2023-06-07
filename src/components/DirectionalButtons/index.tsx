import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";

const DirectionalButtons = () => {
  return (
    <div className={"w-[64px]"}>
      <div className={"flex items-center justify-center"}>
        <button
          className={
            "bg-poke-gray text-gray-300 h-[24px] px-[4px] active:bg-white transition-all active:bg-poke-gray/[0.4] active:text-poke-gray"
          }
        >
          <ChevronUpIcon className={"h-[16px] w-[16px]"} />
        </button>
      </div>
      <div className={"flex w-full justify-between items-center"}>
        <button
          className={
            "flex-1 bg-poke-gray text-gray-300 py-[4px] active:bg-white transition-all active:bg-poke-gray/[0.4] active:text-poke-gray"
          }
        >
          <ChevronLeftIcon className={"h-[16px] w-[16px]"} />
        </button>
        <button
          className={
            "flex-1 flex justify-end bg-poke-gray text-gray-300 py-[4px] active:bg-white transition-all active:bg-poke-gray/[0.4] active:text-poke-gray"
          }
        >
          <ChevronRightIcon className={"h-[16px] w-[16px]"} />
        </button>
      </div>
      <div className={"flex items-center justify-center"}>
        <button
          className={
            "bg-poke-gray text-gray-300 h-[24px] px-[4px] active:bg-white transition-all active:bg-poke-gray/[0.4] active:text-poke-gray"
          }
        >
          <ChevronDownIcon className={"h-[16px] w-[16px]"} />
        </button>
      </div>
    </div>
  );
};

export default DirectionalButtons;
