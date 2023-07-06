import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineCreateNewFolder, MdOutlineDashboard } from "react-icons/md";
import { TbEyeEdit } from "react-icons/tb";

export const menus = [
  { name: "dasboard", link: "/", icon: MdOutlineDashboard },
  { name: "create Bets", link: "/createbet", icon: MdOutlineCreateNewFolder },
  { name: "users", link: "/users", icon: AiOutlineUserAdd },
  { name: "view bets", link: "/viewbets", icon: TbEyeEdit, margin: true },
];
