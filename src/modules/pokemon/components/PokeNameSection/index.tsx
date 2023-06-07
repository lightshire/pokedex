"use client";

import ScreenComponent from "@/components/ScreenComponent";
import { useParams } from "next/navigation";

const PokeNameSection = () => {
  const params = useParams();
  return (
    <ScreenComponent>
      <div className={"flex items-center capitalize"}>
        {params.name ? (
          <h3> {params.name} </h3>
        ) : (
          <h3 className={"flex-1"}>Select Pokemon</h3>
        )}
      </div>
    </ScreenComponent>
  );
};

export default PokeNameSection;
