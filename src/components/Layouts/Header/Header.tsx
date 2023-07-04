import { MobileSideBar } from "../SideBar/Mobile/MobileSideBar";
import { RouterName } from "./RouterName";

export const Header = () => {
  return (
    <div className="relative">
      <div className="fixed left-0  top-0 z-40 flex w-full items-center justify-between bg-white px-3 lg:relative lg:bg-transparent">
        <MobileSideBar />
        <RouterName routerName="Dashboard" />
      </div>
    </div>
  );
};
