import { FiBell } from "react-icons/fi"
import { Profile } from "../../../global/Profile/Profile"

export const UserSigningAbout = () => {
    return (
        <div className="flex items-center space-x-5">
            <FiBell/>
            <Profile/>
        </div>
    )
}