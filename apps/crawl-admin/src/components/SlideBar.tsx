"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { IconType } from "react-icons";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export type MenuItem = {
  link: string;
  label: string;
};

export type SlideBarMenuItems = MenuItem & {
  Icon?: IconType;
  children?: MenuItem[];
};

type SlideBarState = {
  headerLabel: string;
  menuItems: SlideBarMenuItems[];
};

interface SlideBarActions {}

type SlideBarProps = SlideBarState & SlideBarActions;

export default function SlideBar({ headerLabel, menuItems }: SlideBarProps) {
  const pathname = usePathname();
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(0);

  const toggleSubMenu = useCallback((index: number) => {
    setOpenSubMenu((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  const renderSubMenu = useCallback((subItems: MenuItem[]) => {
    return (
      <ul>
        {subItems.map(({ link, label }, subIndex) => (
          <li key={link + subIndex} className="block py-2">
            <Link
              href={link}
              className={`${
                pathname === link ? "text-whit" : "text-gray-300"
              } hover:text-white`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }, []);

  const renderMenuItems = useCallback(
    (items: SlideBarMenuItems[]) => {
      return items.map(({ label, link, Icon, children }, index) => {
        const isSelectedMenu = openSubMenu === index;

        return (
          <li key={link + index} className="w-full px-4 py-3">
            <div
              className={`flex items-center cursor-pointer gap-3 ${
                isSelectedMenu ? "text-white" : "text-gray-300"
              } hover:text-white`}
              onClick={() => toggleSubMenu(index)}
            >
              {Icon && <Icon size={14} />}
              {label}
              <div className="ml-auto">
                {children ? (
                  isSelectedMenu ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )
                ) : null}
              </div>
            </div>
            <motion.div
              className="ml-7 mt-3 overflow-hidden"
              initial={{ height: 0 }}
              animate={{
                height:
                  isSelectedMenu && children ? (children?.length ?? 0) * 40 : 0,
              }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {children && renderSubMenu(children)}
            </motion.div>
          </li>
        );
      });
    },
    [openSubMenu, renderSubMenu]
  );

  return (
    <nav className="bg-gray-800 text-white h-screen w-64 flex flex-col sticky top-0">
      <div className="p-4">
        <h2 className="text-2xl font-bold">{headerLabel}</h2>
      </div>
      <ul className="flex flex-col items-start">
        {renderMenuItems(menuItems)}
      </ul>
    </nav>
  );
}
