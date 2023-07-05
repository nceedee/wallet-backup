import { ReactNode } from "react";

type PropType = {
  className?: string;
  children: ReactNode;
};

export const MaxCard = ({ children, className }: PropType) => {
  return (
    <div className="w-full p-3">
      <div className={`m-auto h-full w-full min-w-[300px] max-w-7xl  ${className}`}>{children}</div>
    </div>
  );
};
