import { MaxCard } from "../../Global/Card/MaxCard";
import { UsersInfo } from "../../Layouts/UsersInfo";

export const Dashboard = () => {
	return (
		<MaxCard className="w-full ">
			<div className="flex ">
				<div className="">
					<UsersInfo />
				</div>
				<div>
					<div >hello</div>
				</div>
			</div>
		</MaxCard>
	);
};
