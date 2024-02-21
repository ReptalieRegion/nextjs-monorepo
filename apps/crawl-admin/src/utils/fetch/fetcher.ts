import HTTPError, { HTTPErrorField } from "../error/http-error";
import { FetcherRequestInit, RefreshItem } from "./types";

function Fetcher() {
  const initialInit: RequestInit = {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let isRefreshing: boolean = false;
  let refreshQueue: RefreshItem[] = [];

  const _generatorFetchInfo = (
    input: RequestInfo,
    init?: FetcherRequestInit,
  ) => {
    const publicApiUrl = process.env.NEXT_PUBLIC_API_URL ?? "";
    const newInput = publicApiUrl + input;

    if (!init) {
      return {
        input: newInput,
        init: initialInit,
      };
    }

    return {
      input: newInput,
      init: {
        ...init,
        method: init.method ?? initialInit.method ?? "GET",
        url: init.ignorePrefixInput ? input : publicApiUrl,
        credentials: init.credentials ?? initialInit.credentials,
        body: init.body
          ? init.body instanceof FormData
            ? init.body
            : JSON.stringify(init.body)
          : undefined,
        headers:
          init.body instanceof FormData
            ? undefined
            : { ...initialInit.headers, ...init.headers },
      },
    };
  };

  const _refreshAccessToken = async () => {
    isRefreshing = true;
    const publicApiUrl = process.env.NEXT_PUBLIC_API_URL ?? "";
    const response = await fetch(publicApiUrl + "/api/auth/refresh", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    isRefreshing = false;

    return response;
  };

  const _resetRefreshQueue = () => {
    refreshQueue = [];
  };

  const _failedRequestReject = async (error: HTTPError) => {
    await Promise.all(refreshQueue.map(({ reject }) => reject(error)));
  };

  const _failedRequestRefetch = async () => {
    const refetchFunction = refreshQueue.map(
      async ({ input, init, reject, resolve }) => {
        const response = await fetch(input, init);

        if (!response.ok) {
          const error = (await response.json()) as HTTPErrorField;
          reject(
            new HTTPError(
              error.msg,
              error.statusCode,
              error.code,
              error.path,
              error.timestamp,
            ),
          );
        }

        resolve(response);
      },
    );
    await Promise.all(refetchFunction);
  };

  return async (input: RequestInfo, init?: FetcherRequestInit) => {
    const result = _generatorFetchInfo(input, init);
    const response = await fetch(result.input, result.init);

    if (response.status === 401) {
      const promise = new Promise<Response>((resolve, reject) => {
        refreshQueue.push({
          resolve,
          reject,
          input: result.input,
          init: result.init,
        });
      });

      if (!isRefreshing) {
        const refreshResponse = await _refreshAccessToken();
        if (refreshResponse.ok) {
          await _failedRequestRefetch();
        } else {
          const error = (await refreshResponse.json()) as HTTPErrorField;
          await _failedRequestReject(
            new HTTPError(
              error.msg,
              error.statusCode,
              error.code,
              error.path,
              error.timestamp,
            ),
          );
        }
        _resetRefreshQueue();
      }
      return promise;
    }

    if (!response.ok) {
      const error = (await response.json()) as HTTPErrorField;
      throw new HTTPError(
        error.msg,
        error.statusCode,
        error.code,
        error.path,
        error.timestamp,
      );
    }

    return response;
  };
}

const authFetch = Fetcher();

export default authFetch;
