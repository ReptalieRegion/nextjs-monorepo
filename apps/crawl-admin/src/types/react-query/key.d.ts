export type StringQueryKey = readonly string[];

export type PaginationQueryKey = readonly (
  | string
  | { pageParam: number; limit: number }
)[];
