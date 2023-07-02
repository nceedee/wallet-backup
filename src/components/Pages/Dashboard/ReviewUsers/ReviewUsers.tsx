import { Card } from "../../../Global/Card/Card";
import { Active } from "./Active/Active";
import { AllUsers } from "./AllUsers/AllUsers";

export const ReviewUsers = () => {
	return (
		<Card className="w-1/2">
			{" "}
			<Active />
			<AllUsers />
		</Card>
	);
};
