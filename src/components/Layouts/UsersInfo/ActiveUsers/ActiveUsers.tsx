import { PiUserGearLight } from "react-icons/pi";
import { UserCard } from "../../../Pages/Dashboard/UsersInfo/UsersCard/UsersCard";

export const ActiveUsers = () => {
  return <UserCard info="Active Users" icon={<PiUserGearLight />} percent={`17%`} />;
};
