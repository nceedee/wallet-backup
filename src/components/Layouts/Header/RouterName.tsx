import { ReactNode } from "react";
import { UserDetail } from "./UserDetail/UserDetail";

type RouterNameType = React.ComponentProps<"input"> & { routerName: ReactNode };

export const RouterName = ({ routerName, ...props }: RouterNameType) => {
  return (
    <div className=" w-full p-3">
      <div className="m-auto flex max-w-7xl  items-center justify-between ">
        <div>
          <h1 className="text-3xl font-bold">{routerName}</h1>
        </div>
        <div className="">
          <UserDetail />
        </div>
      </div>
    </div>
  );
};
