import { FiUsers } from "react-icons/fi"
import { UserCard } from "../../../Pages/Dashboard/UsersInfo/UsersCard/UsersCard"

export const AllUsers = () => {
    return (
        <UserCard
            info="All Users"
            icon={<FiUsers />}
            percent={`17%`}
        />
    )
}