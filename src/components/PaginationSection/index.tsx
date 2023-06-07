import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const PaginationSection = ({
  onNext,
  onPrev,
}: {
  onNext: Function;
  onPrev: Function;
}) => {
  return (
    <div
      className={
        "flex items-center font-start-2p justify-between gap-[8px] py-[8px]"
      }
    >
      <button
        className={"flex gap-[4px] text-[8px] items-center"}
        onClick={() => onPrev()}
      >
        <ChevronLeftIcon className={"text-poke-gray h-[24px]"} />
        Prev
      </button>
      <button
        className={"flex gap-[4px] text-[8px] items-center"}
        onClick={() => onNext()}
      >
        Next
        <ChevronRightIcon className={"text-poke-gray h-[24px]"} />
      </button>
    </div>
  );
};

export default PaginationSection;
