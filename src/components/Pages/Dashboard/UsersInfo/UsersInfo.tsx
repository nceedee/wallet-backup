import { ActiveUsers } from "./ActiveUsers/ActiveUsers";
import { AllUsers } from "./AllUsers/AllUsers";
import { UsersTotalAmountOnBet } from "./UsersTotalAmountOnBet/UsersTotalAmountOnBet";

export const UsersInfo = () => {
	return (
		<div className="flex  sm:flex-col lg:flex-row sm:items-center sm:justify-center lg:justify-start lg:items-start space-x-3 w-full">
			<AllUsers />
			<ActiveUsers />
			<UsersTotalAmountOnBet />
		</div>
	);
};
