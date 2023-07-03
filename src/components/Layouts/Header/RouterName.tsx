import { ReactNode } from "react";
import { UserDetail } from "./UserDetail/UserDetail";

type RouterNameType = React.ComponentProps<"input"> & { routerName: ReactNode };

export const RouterName = ({ routerName, ...props }: RouterNameType) => {
    return (

        <div className=" w-full p-3">
            <div className="flex items-center justify-between  max-w-7xl m-auto ">
                <div>
                    <h1 className="font-bold text-3xl">{routerName}</h1>
                </div>
                <div className="">
                    <UserDetail />
                </div>
            </div>
        </div>
    )
}