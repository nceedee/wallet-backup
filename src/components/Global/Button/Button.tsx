import { ReactNode } from "react";

type ButtonType = React.ComponentProps<"button"> & { children: ReactNode };

export const Button = ({ className, children, ...props }: ButtonType) => {
  return <button className={`rounded border-none bg-accent p-2 outline-none ${className}`}>{children} </button>;
};
