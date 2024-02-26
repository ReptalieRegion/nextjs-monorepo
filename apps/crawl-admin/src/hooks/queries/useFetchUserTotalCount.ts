import { StringQueryKey } from "@/types/react-query/key";
import { FetchUserTotalCount } from "@/types/server/user";
import HTTPError from "@/utils/error/http-error";
import authFetch from "@/utils/fetch/fetcher";
import {
  UndefinedInitialDataOptions,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";

async function fetchUserTotalCount() {
  const response = await authFetch("/api/user/total-count", {
    method: "GET",
  });

  return response.json();
}

export default function useFetchUserTotalCount<
  TData = FetchUserTotalCount["Response"]
>(
  options?: Omit<
    UndefinedInitialDataOptions<
      FetchUserTotalCount["Response"],
      HTTPError,
      TData,
      StringQueryKey
    >,
    "queryKey" | "queryFn"
  >
): UseQueryResult<TData, HTTPError> {
  return useQuery<
    FetchUserTotalCount["Response"],
    HTTPError,
    TData,
    StringQueryKey
  >({
    queryKey: ["user_get-fetch-user-total-count"],
    queryFn: fetchUserTotalCount,
  });
}
