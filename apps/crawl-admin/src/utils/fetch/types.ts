interface FetcherRequestInit extends Omit<RequestInit, "method" | "body"> {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: Record<string, unknown> | FormData;
  ignorePrefixInput?: boolean;
}

type FetchInfo = { input: RequestInfo; init: RequestInit };

interface RefreshItem {
  resolve: (value: Response | PromiseLike<Response>) => void;
  reject: (reason?: any) => void;
  input: RequestInfo;
  init?: RequestInit;
}

export type { FetchInfo, FetcherRequestInit, RefreshItem };
