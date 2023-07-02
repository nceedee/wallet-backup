import { FiUsers } from "react-icons/fi";
import { UserCard } from "../UsersCard/UsersCard";

export const AllUsers = () => {
  return <UserCard info="All Users" icon={<FiUsers />} percent={`17%`} />;
};
