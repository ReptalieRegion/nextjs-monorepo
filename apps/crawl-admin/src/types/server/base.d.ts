export type ServerAPI<Request, Response> = {
  Request: Request;
  Response: Response;
};

export type WithInfinitePageParam<Data = void> = Data extends void
  ? {
      pageParam: number;
    }
  : {
      pageParam: number;
    } & Data;

export interface InfiniteState<Item> {
  items: Item;
  nextPage: number | undefined;
}

export type PaginationParam = {
  pageParam: number;
  limit: number;
};
