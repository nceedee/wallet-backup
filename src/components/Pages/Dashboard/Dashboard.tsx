import { MaxCard } from "../../Global/Card/MaxCard/MaxCard";
import { UsersInfo } from "./UsersInfo/UsersInfo";
import { BetManagement } from "./BetManagement/BetManagement";
import { Header } from "../../Layouts/Header/Header";
import { UserStatusCard } from "./UserStatusCard/UserStatusCard";

export const Dashboard = () => {
	return (
		<MaxCard className="w-full   ">
			<Header/>
			<div className="flex flex-wrap lg:flex-nowrap  lg:space-x-6">
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
