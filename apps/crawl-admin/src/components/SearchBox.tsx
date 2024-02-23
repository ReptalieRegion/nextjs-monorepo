import useSearchBox from "@/hooks/useSearchBox";
import { IoIosSearch } from "react-icons/io";

type Size = "full" | "lg" | "md" | "sm";

type SearchBoxState = {
  placeholder?: string;
  size: Size;
};

interface SearchBoxActions {
  onSearch?(value: string): void;
}

type SearchBoxProps = SearchBoxState & SearchBoxActions;

export default function SearchBox({
  placeholder,
  size = "full",
  onSearch,
}: SearchBoxProps) {
  const { state, api } = useSearchBox({ onSearch });
  const className = generateClassName(size);

  return (
    <div
      className={`flex items-center border border-gray-300 rounded-md px-3 py-2 ${className}`}
    >
      <input
        type="text"
        className="flex-1 mr-2 outline-none"
        placeholder={placeholder || "Search..."}
        value={state}
        {...api.input}
      />
      <IoIosSearch className="text-gray-600" />
    </div>
  );
}

function generateClassName(size: Size) {
  switch (size) {
    case "full":
      return "w-full";
    case "lg":
      return "w-96";
    case "md":
      return "w-72";
  }
}
