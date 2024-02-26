import { SlideBarMenuItems } from "@/components/SlideBar";
import { FaHome, FaLock, FaShoppingCart, FaUser } from "react-icons/fa";

export const slideBarMenu: SlideBarMenuItems[] = [
  {
    Icon: FaHome,
    link: "/dashboard",
    label: "대시보드",
  },
  {
    Icon: FaLock,
    link: "/dashboard/auth",
    label: "인증",
    children: [
      {
        label: "어드민 생성",
        link: "/dashboard/auth/admin",
      },
    ],
  },
  {
    Icon: FaUser,
    link: "/dashboard/user",
    label: "사용자",
    children: [
      {
        label: "사용자 조회",
        link: "/dashboard/user/list",
      },
    ],
  },
  {
    Icon: FaShoppingCart,
    link: "/dashboard/product",
    label: "상품",
    children: [
      {
        label: "상품 조회",
        link: "/dashboard/product/list",
      },
    ],
  },
];
