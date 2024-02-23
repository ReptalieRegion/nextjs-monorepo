import { StringQueryKey } from "@/types/react-query/key";
import { FetchMeProfile } from "@/types/server/me";
import authFetch from "@/utils/fetch/fetcher";
import { UndefinedInitialDataOptions, useQuery } from "@tanstack/react-query";

async function fetchMeProfile() {
  const response = await authFetch("/api/admin/profile", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

export function useFetchMeProfile(
  options?: Omit<
    UndefinedInitialDataOptions<
      FetchMeProfile["Response"],
      Error,
      FetchMeProfile["Response"],
      StringQueryKey
    >,
    "queryKey" | "queryFn"
  >
) {
  return useQuery<
    FetchMeProfile["Response"],
    Error,
    FetchMeProfile["Response"],
    StringQueryKey
  >({
    queryKey: ["admin_get-admin/profile"],
    queryFn: fetchMeProfile,
    ...options,
  });
}
