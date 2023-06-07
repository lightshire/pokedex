import ScreenComponent from "@/components/ScreenComponent";

const Loading = () => {
  return (
    <div className={"flex flex-col"}>
      <div className={"h-[128px] bg-poke-red w-full"} />
      <div className={"px-[24px] py-[24px]"}>
        <ScreenComponent>Loading Your Pokemon...</ScreenComponent>
      </div>
    </div>
  );
};

export default Loading;
