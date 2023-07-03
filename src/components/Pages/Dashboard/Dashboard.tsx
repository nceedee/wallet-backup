import { MaxCard } from "../../Global/Card/MaxCard/MaxCard";
import { Header } from "../../Layouts/Header/Header";
import { BetManagement } from "./BetManagement/BetManagement";
import { UsersInfo } from "./UsersInfo/UsersInfo";
import { UserStatusCard } from "./UserStatusCard/UserStatusCard";

export const Dashboard = () => {
  return (
    <MaxCard className="w-full">
      <Header />
      <div className="flex flex-wrap lg:flex-nowrap  lg:space-x-9">
        <div className="w-full space-y-3">
          <UsersInfo />
          <BetManagement />
        </div>
        <div className="lg:w-1/2">
          <UserStatusCard />
        </div>
      </div>
    </MaxCard>
  );
};
