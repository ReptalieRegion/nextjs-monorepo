import { MouseEventHandler, ReactNode, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type PaginationWithControlsState = {
  totalPages: number;
  currentPage: number;
};
type PaginationWithControlsActions = {
  onPageChange(value: number): void;
};

export default function PaginationWithControls({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationWithControlsState & PaginationWithControlsActions) {
  const [startPage, setStartPage] = useState(1);
  const pageSize = 5; // 한 그룹당 표시할 페이지 수

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const handleClickGroupLastPage = (page: number) => {
    setStartPage((prevStartPage) => prevStartPage + 1);
    onPageChange(page);
  };

  const handleClickPrevGroup = () => {
    if (startPage >= 1) {
      const restPage = currentPage % pageSize;
      const prevGroupFirstPage = Math.max(1, currentPage - 1 - restPage);
      setStartPage(prevGroupFirstPage);
      onPageChange(currentPage - 1);
    }
  };

  const handleClickNextGroup = () => {
    if (startPage + pageSize <= totalPages) {
      const restPage = startPage % pageSize;
      const nextGroupFirstPage = startPage - restPage + pageSize + 1;
      setStartPage(nextGroupFirstPage);
      onPageChange(nextGroupFirstPage);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      <Button disabled={currentPage === 1} onClick={handleClickPrevGroup}>
        <IoIosArrowBack />
      </Button>
      {Array.from({ length: Math.min(pageSize, totalPages) }).map(
        (_, index) => {
          const page = startPage + index;
          const isLastPage = startPage + pageSize - 1 === page;

          return (
            page <= totalPages && (
              <Button
                key={page}
                onClick={() => {
                  isLastPage
                    ? handleClickGroupLastPage(page)
                    : handlePageChange(page);
                }}
                disabled={currentPage === page}
                active={currentPage === page}
              >
                {page}
              </Button>
            )
          );
        }
      )}
      <Button
        disabled={currentPage + pageSize > totalPages}
        onClick={handleClickNextGroup}
      >
        <IoIosArrowForward />
      </Button>
    </div>
  );
}

type ButtonState = {
  children?: ReactNode;
  disabled?: boolean;
  active?: boolean; // 선택된 페이지 버튼을 나타내는 prop 추가
};

interface ButtonActions {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

function Button({
  children,
  onClick,
  disabled,
  active,
}: ButtonState & ButtonActions) {
  return (
    <button
      className={`bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 h-10 rounded ${
        active
          ? "bg-gray-400 text-white"
          : disabled
          ? "opacity-50 cursor-not-allowed text-gray-700"
          : "hover:bg-gray-400 text-gray-700"
      } `} // 선택된 페이지 버튼의 스타일 변경
      onClick={onClick}
      disabled={disabled}
      style={{ filter: disabled ? "brightness(80%)" : "none" }} // 비활성화된 페이지 버튼의 색상 채도 조정
    >
      {children}
    </button>
  );
}
