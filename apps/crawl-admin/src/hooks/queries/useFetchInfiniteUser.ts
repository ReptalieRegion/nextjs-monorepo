import { PaginationQueryKey } from "@/types/react-query/key";
import { PaginationParam, WithInfinitePageParam } from "@/types/server/base";
import { FetchUserList } from "@/types/server/user";
import HTTPError from "@/utils/error/http-error";
import authFetch from "@/utils/fetch/fetcher";
import { objectToQueryString } from "@/utils/parser/query-string";
import { UndefinedInitialDataOptions, useQuery } from "@tanstack/react-query";

async function fetchInfiniteUser({
  pageParam,
  limit,
}: WithInfinitePageParam<{ limit: number }>) {
  const queryString = objectToQueryString({ pageParam, limit });
  const response = await authFetch(`/api/user/list?${queryString}`, {
    method: "GET",
  });

  return response.json();
}

export default function useFetchUserList(
  { limit, pageParam }: PaginationParam,
  options?: Omit<
    UndefinedInitialDataOptions<
      FetchUserList["Response"],
      HTTPError,
      FetchUserList["Response"],
      PaginationQueryKey
    >,
    "queryKey" | "queryFn"
  >
) {
  return useQuery<
    FetchUserList["Response"],
    HTTPError,
    FetchUserList["Response"],
    PaginationQueryKey
  >({
    queryKey: ["user_get-infinite-user", { limit, pageParam }],
    queryFn: () => fetchInfiniteUser({ limit, pageParam }),
    ...options,
  });
}
