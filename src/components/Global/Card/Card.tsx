import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export const Card = ({ children, className }: Props) => {
  return <div className={`shadow-custom rounded-md bg-white p-5 ${className} `}>{children}</div>;
};
