"use client";

import HTTPError from "@/utils/error/http-error";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { PropsWithChildren, useState } from "react";

export default function ReactQueryProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
            retry: (failureCount, error) => {
              if (failureCount > 1) {
                return false;
              }

              if (
                error instanceof HTTPError &&
                (error.statusCode === 401 || error.statusCode === 403)
              ) {
                return false;
              }

              return true;
            },
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
