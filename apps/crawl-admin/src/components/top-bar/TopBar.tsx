"use client";

import { MouseEventHandler } from "react";
import { FaBell, FaHamburger, FaSearch, FaUser } from "react-icons/fa";

type TopBarState = {};

interface TopBarActions {
  onClickHamburgerButton?: MouseEventHandler<SVGElement> | undefined;
  onClickSearchButton?: MouseEventHandler<SVGElement> | undefined;
  onClickBellButton?: MouseEventHandler<SVGElement> | undefined;
  onClickProfileButton?: MouseEventHandler<SVGElement> | undefined;
}

type TopBarProps = TopBarState & TopBarActions;

export default function TopBar({
  onClickHamburgerButton,
  onClickBellButton,
  onClickProfileButton,
  onClickSearchButton,
}: TopBarProps) {
  return (
    <div className="bg-white text-white h-16 flex items-center justify-between px-6 sticky top-0">
      <div className="flex items-center gap-6">
        <FaHamburger
          size={20}
          className="fill-gray-800 cursor-pointer"
          onClick={onClickHamburgerButton}
        />
        <FaSearch
          size={20}
          className="fill-gray-800 cursor-pointer"
          onClick={onClickSearchButton}
        />
      </div>
      <div className="flex items-center gap-6">
        <FaBell
          size={20}
          className="fill-gray-800 cursor-pointer"
          onClick={onClickBellButton}
        />
        <FaUser
          size={20}
          className="fill-gray-800 cursor-pointer"
          onClick={onClickProfileButton}
        />
      </div>
    </div>
  );
}
