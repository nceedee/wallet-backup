import { ReactNode } from "react";
import { MobileSideBar } from "../SideBar/Mobile/MobileSideBar";
import { RouterName } from "./RouterName";
type HeaderType = React.ComponentProps<"input"> & { routerName: ReactNode };

export const Header = ({ routerName, ...props }: HeaderType) => {
  return (
    <div className="relative">
      <div className="fixed left-0  top-0 z-40 flex w-full items-center justify-between bg-white px-3 lg:relative lg:bg-transparent">
        <MobileSideBar />
        <RouterName routerName={routerName} />
      </div>
    </div>
  );
};
