"use client";
import PaginationWithControls from "@/components/PaginationWithControls";
import SearchBox from "@/components/SearchBox";
import SelectBox from "@/components/SelectBox";
import useFetchUserList from "@/hooks/queries/useFetchInfiniteUser";
import useFetchUserTotalCount from "@/hooks/queries/useFetchUserTotalCount";
import { User } from "@/types/server/user";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import dayjs from "dayjs";
import { useState } from "react";

dayjs.locale("ko");

const columnHelper = createColumnHelper<User>();
const columns = [
  columnHelper.accessor("nickname", {
    header: () => "닉네임",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("postCount", {
    header: () => "게시물 수",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("entityCount", {
    header: () => "개체 수",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("lastAccessAt", {
    header: () => "최근 접속 시간",
    cell: (info) =>
      info.getValue() ? dayjs(info.getValue()).format("YY/MM/DD HH:mm") : "",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("createdAt", {
    header: () => "생성 시간",
    cell: (info) => dayjs(info.getValue()).format("YY/MM/DD HH:mm"),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("updatedAt", {
    header: () => "수정 시간",
    cell: (info) => dayjs(info.getValue()).format("YY/MM/DD HH:mm"),
    footer: (info) => info.column.id,
  }),
];

export default function UserListPage() {
  const [pageParam, setPageParam] = useState(0);
  const [limit, setLimit] = useState(10);

  const { data: userInfo } = useFetchUserTotalCount();
  const totalPageCount =
    Math.ceil((userInfo?.users.count ?? 0) / limit) -
    ((userInfo?.users.count ?? 0) % limit === 0 ? 1 : 0);
  const { data } = useFetchUserList({ pageParam, limit });
  const table = useReactTable({
    data: data ?? [],
    columns,
    pageCount: totalPageCount,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log((userInfo?.users.count ?? 0) % limit === 0);

  if (!data) {
    return null;
  }

  return (
    <div className="p-6 border border-solid border-gray-200 m-4 rounded-xl">
      <div className="flex justify-between">
        <SearchBox size="md" />
        <SelectBox
          options={[10, 20, 30, 40, 50]}
          defaultOption={limit}
          onChange={(value) => setLimit(value)}
        />
      </div>
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    align="left"
                    className="py-4"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => {
            return (
              <tr
                key={row.id}
                className="border-t border-solid border-gray-200"
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id + index} className="py-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex items-center justify-center gap-2 w-full">
        <PaginationWithControls
          totalPages={totalPageCount}
          currentPage={pageParam}
          onPageChange={(value) => setPageParam(value)}
        />
      </div>
    </div>
  );
}
