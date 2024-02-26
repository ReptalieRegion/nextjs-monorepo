interface FetcherRequestInit extends Omit<RequestInit, "method" | "body"> {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: Record<string, unknown> | FormData;
  ignorePrefixInput?: boolean;
}

type FetchInfo = { input: RequestInfo; init: RequestInit };

type Resolve = (value: Response | PromiseLike<Response>) => void;

type Reject = (reason?: unknown) => void;

interface RefreshItem {
  resolve: Resolve;
  reject: Reject;
  input: RequestInfo;
  init?: RequestInit;
}

export type { FetchInfo, FetcherRequestInit, RefreshItem };
