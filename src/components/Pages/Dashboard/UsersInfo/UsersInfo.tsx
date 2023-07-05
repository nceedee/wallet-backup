import { ActiveUsers } from "./ActiveUsers/ActiveUsers";
import { AllUsers } from "./AllUsers/AllUsers";
import { UsersTotalAmountOnBet } from "./UsersTotalAmountOnBet/UsersTotalAmountOnBet";

export const UsersInfo = () => {
  return (
    <div className="flex  w-full flex-col space-y-3 sm:items-center sm:justify-center lg:flex-row lg:items-start lg:justify-start lg:space-x-3 lg:space-y-0">
      <AllUsers />
      <ActiveUsers />
      <UsersTotalAmountOnBet />
    </div>
  );
};
