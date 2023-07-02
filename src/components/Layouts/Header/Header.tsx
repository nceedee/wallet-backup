import { DashboardRoutTo } from "./DashboardRoutTo";
import { UserSigningAbout } from "./UserDetail/UserSigningAbout";

export const Header = () => {
  return (
    <div className="w-full px-3 py-2">
      <div className="m-auto flex w-full max-w-7xl items-center justify-between px-0  ">
        <div>
          <DashboardRoutTo />
        </div>
        <div>
          <UserSigningAbout />
        </div>
      </div>
    </div>
  );
};
