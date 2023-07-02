import { MaxCard } from "../../Global/Card/MaxCard/MaxCard";
import { ReviewUsers } from "./ReviewUsers/ReviewUsers";
import { UsersInfo } from "./UsersInfo/UsersInfo";

export const Dashboard = () => {
  return (
    <MaxCard className="w-full   ">
      <div className="flex flex-wrap lg:flex-nowrap  lg:space-x-6">
        <div className="w-full ">
          <UsersInfo />
        </div>
        <div className="lg:w-1/2">
          <ReviewUsers />
        </div>
      </div>
    </MaxCard>
  );
};
