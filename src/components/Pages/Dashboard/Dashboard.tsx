import { MaxCard } from "../../Global/Card/MaxCard/MaxCard";
import { UsersInfo } from "./UsersInfo/UsersInfo";
import { ReviewUsers } from "./ReviewUsers/ReviewUsers";

export const Dashboard = () => {
	return (
		<MaxCard className="w-full bg-red-400 ">
			<div className="flex">
				<div className="w-full bg-yellow-300">
					<UsersInfo />
				</div>
				<div className="w-full">
					<ReviewUsers />
				</div>
			</div>
		</MaxCard>
	);
};
