import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { menus } from "./menuLinks/menuLinks";

export const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={` min-h-screen bg-secondary ${open ? "w-72" : "w-16"} px-4 text-gray-100 duration-500 `}>
      <div className="flex justify-end py-5">
        <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
      </div>
      <div className="relative  mt-4 flex flex-col gap-4">
        {menus.map((menu, i) => (
          <Link
            to={menu.link}
            key={i}
            className={`${menu.margin && "mt-5"} ${
              open ? "p-2" : "p-1"
            } first-letter: link group relative flex items-center space-x-2 overflow-hidden rounded-md text-sm font-medium capitalize hover:bg-accent`}
          >
            <menu.icon size={20} className={`${!open && "w-full"}`} />
            <h2
              style={{ transitionDelay: `${i + 3}00ms` }}
              className={`whitespace-pre duration-300  
								${!open && " absolute left-12 translate-x-28 overflow-hidden opacity-0"}
								`}
            >
              {menu.name}
            </h2>

            <h2
              className={`${
                open && "hidden"
              } fixed  left-48 w-0 overflow-hidden whitespace-pre rounded-md bg-accent px-0 py-0 font-semibold lowercase text-white drop-shadow-lg group-hover:left-16 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300`}
            >
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};
