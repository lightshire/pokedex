"use client";

import { FC, PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000, // no need to re-fetch immediately as the pokemon list should be pristine even after 30s
    },
  },
});

const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default GlobalProvider;
