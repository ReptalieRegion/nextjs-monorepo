import { IconType } from "react-icons";

export type MenuItem = {
  link: string;
  label: string;
};

export type SlideBarMenuItems = MenuItem & {
  Icon?: IconType;
  children?: MenuItem[];
};
