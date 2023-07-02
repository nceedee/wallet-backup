import { MaxCard } from "../../Global/Card/MaxCard";
import { UsersInfo } from "../../Layouts/UsersInfo";
import { ReviewUsers } from "./ReviewUsers/ReviewUsers";

export const Dashboard = () => {
	return (
		<MaxCard className="w-full ">
			<div className="flex ">
				<div className="">
					<UsersInfo />
				</div>
				<div>
					<ReviewUsers />
				</div>
			</div>
		</MaxCard>
	);
};
