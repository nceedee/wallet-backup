import { ActiveUsers } from "./ActiveUsers/ActiveUsers";
import { AllUsers } from "./AllUsers/AllUsers";
import { UsersTotalAmountOnBet } from "./UsersTotalAmountOnBet/UsersTotalAmountOnBet";

export const UsersInfo = () => {
  return (
    <div className="mt-8 flex gap-3 sm:flex-col sm:items-center sm:justify-center lg:flex-row lg:items-start lg:justify-start">
      <AllUsers />
      <ActiveUsers />
      <UsersTotalAmountOnBet />
    </div>
  );
};
