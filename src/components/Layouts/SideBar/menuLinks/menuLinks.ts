import { AiOutlineUserAdd, AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { TbEyeEdit } from "react-icons/tb";

export const menus = [
  { name: "dasboard", link: "/", icon: MdOutlineDashboard },
  { name: "create users", link: "/", icon: AiOutlineUsergroupAdd },
  { name: "users", link: "users", icon: AiOutlineUserAdd },
  { name: "view bets", link: "/", icon: TbEyeEdit, margin: true },
];
