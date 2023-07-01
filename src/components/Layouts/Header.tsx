import { DashboardRoutTo } from "./Header/DashboardRoutTo"
import { UserSigningAbout } from "./Header/UserDetail/UserSigningAbout"

export const Header = () => {
    return (
			<div className=" w-full p-3">
				<div className="flex items-center justify-between  max-w-7xl m-auto ">
					<div>
						<DashboardRoutTo />
					</div>
					<div className="">
						<UserSigningAbout />
					</div>
				</div>
			</div>
		);
}