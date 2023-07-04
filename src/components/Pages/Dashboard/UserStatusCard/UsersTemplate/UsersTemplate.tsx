import { Avatar } from "@mui/material";
import { Fragment } from "react";

export const UsersTemplate = ({ name, image }: { name: string; image: string }) => {
  return (
    <Fragment>
      <div className="flex items-center space-x-3">
        <div>
          <Avatar alt="Profile picture of a user" src={image} />
          {/* <div className="h-11 w-11 rounded-full  bg-black "></div> */}
        </div>
        <p className="font-semibold capitalize ">{name}</p>
      </div>
    </Fragment>
  );
};
