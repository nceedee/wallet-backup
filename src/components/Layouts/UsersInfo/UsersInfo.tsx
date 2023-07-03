import { ActiveUsers } from "./ActiveUsers/ActiveUsers"
import { AllUsers } from "./AllUsers/AllUsers"
import { UsersTotalAmountOnBet } from "./UsersTotalAmountOnBet/UsersTotalAmountOnBet"

export const UsersInfo = () => {
    return (
        <div className="flex mt-8 sm:flex-col lg:flex-row sm:items-center sm:justify-center lg:justify-start lg:items-start gap-3">
            <AllUsers />
            <ActiveUsers />
            <UsersTotalAmountOnBet/>
        </div>
    )
}