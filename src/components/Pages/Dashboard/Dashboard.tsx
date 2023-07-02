import { MaxCard } from "../../Global/Card/MaxCard/MaxCard";
import { BetManagement } from "./BetManagement/BetManagement";
import { UserStatusCard } from "./UserStatusCard/UserStatusCard";
import { UsersInfo } from "./UsersInfo/UsersInfo";

export const Dashboard = () => {
	return (
		<MaxCard className="w-full   ">
			<div className="flex flex-wrap lg:flex-nowrap  lg:space-x-6">
				<div className="w-full space-y-3">
					<UsersInfo/>
					<BetManagement/>
				</div>
				<div className="lg:w-1/2">
					<UserStatusCard />
				</div>
			</div>
		</MaxCard>
	);
};
