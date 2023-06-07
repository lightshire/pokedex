import { FC, PropsWithChildren } from "react";

const ScreenComponent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={
        "rounded-[24px] border-[4px] border-black bg-poke-gray p-[8px]"
      }
    >
      <div
        className={
          "border-black border-[2px] rounded-[24px] bg-poke-green text-poke-gray font-start-2p text-[8px] p-[8px]"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default ScreenComponent;
