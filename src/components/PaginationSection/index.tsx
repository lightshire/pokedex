import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const PaginationSection = ({
  onNext,
  onPrev,
  setCurrentLimit,
  currentLimit,
}: {
  onNext: Function;
  onPrev: Function;
  setCurrentLimit: Function;
  currentLimit: number;
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
      <select
        className={""}
        value={currentLimit}
        onChange={(e) => setCurrentLimit(e.currentTarget.value)}
      >
        <option value={20}>20</option>
        <option value={100}>100</option>
        <option value={300}>300</option>
        <option value={500}>500</option>
      </select>
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
