"use client";

import { useToggle } from "@/hooks/useToggle";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type SelectBoxState<TData> = {
  options: TData[];
  defaultOption?: TData;
};

interface SelectBoxActions<TData> {
  onChange?(value: TData): void;
}

type SelectBoxProps<TData> = SelectBoxState<TData> & SelectBoxActions<TData>;

export default function SelectBox<TData extends number | string>({
  options,
  defaultOption,
  onChange,
}: SelectBoxProps<TData>) {
  const [isOpen, openToggle] = useToggle(false);
  const [selectedOption, setSelectedOption] = useState<TData | undefined>(
    defaultOption ?? options[0]
  );

  useEffect(() => {
    if (selectedOption) {
      onChange?.(selectedOption);
    }
  }, [selectedOption]);

  const handleOptionClick = (option: TData) => {
    setSelectedOption(option);
    openToggle();
  };

  return (
    <div className="relative inline-block">
      <div
        className="flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md cursor-pointer"
        onClick={openToggle}
      >
        <span>{selectedOption}</span>
        <IoIosArrowDown className="ml-2" />
      </div>
      {isOpen && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
