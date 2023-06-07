import "./globals.css";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import ScreenComponent from "@/components/ScreenComponent";
import DirectionalButtons from "@/components/DirectionalButtons";

export const metadata = {
  title: "Pokedex",
  description: "Built with NextJS, React Query, and the Pokedex API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-black h-screen flex items-center justify-center py-[48px] px-[24px]`}
      >
        <div
          className={
            "mx-auto md:max-w-[680px] bg-poke-red h-full w-full rounded-[16px] flex flex-col"
          }
        >
          <div className={"flex p-[24px] items-center flex-none"}>
            <div
              className={
                "w-[80px] h-[80px] rounded-full bg-[#c9070b] border-[2px] flex items-center justify-center border-black flex-none"
              }
            >
              <div className={"w-[64px] h-[64px] rounded-full bg-poke-cyan"} />
            </div>
            <div
              className={
                "font-start-2p text-white text-[16px] text-right flex-1"
              }
            >
              <h3>NextJS Pokedex</h3>
            </div>
          </div>
          <div className={"flex-1 px-[16px]"}>
            <div className={"border-black border-[1px] h-full"}>
              <div
                className={"border-x-[2px] border-x-poke-gray bg-white h-full"}
              ></div>
            </div>
          </div>
          <div className={"flex-none p-[16px]"}>
            <ScreenComponent>
              <div className={"flex items-center"}>
                <h3 className={"flex-1"}>POKEMON NAME</h3>
                <h3 className={"flex-none"}>TYPE(S)</h3>
              </div>
            </ScreenComponent>
            <div className={"flex items-center mt-[24px] gap-[4px]"}>
              <DirectionalButtons />
              <div className={"flex-1"}>
                <ScreenComponent>
                  Put the description here <br />
                  More description <br />
                  Mor
                </ScreenComponent>
              </div>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
