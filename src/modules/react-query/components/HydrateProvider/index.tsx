"use client";

import { Hydrate, HydrateProps } from "react-query";

const HydrateProvider = (props: HydrateProps) => {
  return <Hydrate {...props} />;
};

export default HydrateProvider;
