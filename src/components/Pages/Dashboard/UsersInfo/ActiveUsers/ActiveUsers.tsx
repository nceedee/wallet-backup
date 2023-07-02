import { PiUserGearLight } from "react-icons/pi";
import { UserCard } from "../UsersCard/UsersCard";

export const ActiveUsers = () => {
  return <UserCard info="Active Users" icon={<PiUserGearLight />} percent={`17%`} />;
};
