import { useState } from "react";

export const useSideBar = () => {
  const [open, setOpen] = useState(true);
  const toggleSideBar = () => setOpen(!open);
  return { open, toggleSideBar };
};
