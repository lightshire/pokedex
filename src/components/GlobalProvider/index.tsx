"use client";

import { FC, PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default GlobalProvider;
