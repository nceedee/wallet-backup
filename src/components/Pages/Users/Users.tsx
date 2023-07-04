import { MaxCard } from "../../Global/Card/MaxCard/MaxCard";
import { Header } from "../../Layouts/Header/Header";
import { UsersInfoTable } from "./UsersInfoTable";

export const Users = () => {
  return (
    <MaxCard className=" bg-primary text-xl font-semibold text-gray-900 ">
      <Header routerName="Users" />
      <UsersInfoTable />
    </MaxCard>
  );
};
