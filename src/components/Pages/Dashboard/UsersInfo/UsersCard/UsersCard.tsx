import { ReactNode } from "react";
import { FiTrendingUp } from "react-icons/fi";
import { Card } from "../../../../Global/Card/Card";
import { TextWrap } from "../../../../Global/TextWrap/TextWrap";

type UserCardType = React.ComponentProps<"div"> & {
  icon?: ReactNode;
  info?: ReactNode;
  percent?: ReactNode;
};

export const UserCard = ({ className, icon, info, percent, ...props }: UserCardType) => {
  return (
    <Card className="sm:w-[100%] lg:w-[33.3%]">
      <div className="flex justify-between">
        {info}
        <div className="rounded-full bg-[rgba(0,153,153,.4)] p-2 text-secondary">{icon}</div>
      </div>
      <div className="mt-3">
        <TextWrap>NaN</TextWrap>
      </div>
      <div className="mt-3">
        <div className="flex items-center space-x-4 text-[12px] text-green-500">
          <div className="flex items-center space-x-2">
            <FiTrendingUp />
            <div>{percent}</div>
          </div>
          <p>Since last week</p>
        </div>
      </div>
    </Card>
  );
};
