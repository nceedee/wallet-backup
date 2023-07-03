import { MaxCard } from "../../Global/Card/MaxCard/MaxCard";
import { RouterName } from "../../Layouts/Header/RouterName";
import { UserInfoTable } from "./UsersInfoTable";

export const Users = () => {
  return (
    <MaxCard className=" bg-primary text-xl font-semibold text-gray-900 ">
      <RouterName routerName="Users" />
      <UserInfoTable />
    </MaxCard>
  );
};
