import { ReactNode } from "react";
type PropType = {
  children: ReactNode;
  className?: string;
};
export const TextWrap = ({ children, className }: PropType) => {
  return <h2 className={`text-xl font-semibold  text-gray-800 ${className}`}>{children}</h2>;
};
