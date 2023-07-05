import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSideBar } from "../hook/useSideBar";
import { menus } from "../menuLinks/menuLinks";

export const MobileSideBar = () => {
  const { open, toggleSideBar } = useSideBar();

  return (
    <div className="block lg:hidden">
      <div
        id="mySidepanel"
        className={`sidepanel pt-1l4 fixed left-0 top-0 z-10 h-full overflow-x-hidden bg-secondary text-gray-100   duration-300
      ${open ? "w-0" : "w-[250px]"}`}
      >
        <div className="flex justify-end  px-3 py-5 text-[36px]">
          <MdClose onClick={toggleSideBar} />
        </div>

        {menus.map((menu, i) => (
          <Link
            to={menu.link}
            key={i}
            className={`${menu.margin && "mt-5"} ${
              open ? "p-1" : "px-5 py-2"
            } first-letter: link group relative flex items-center space-x-2 overflow-hidden rounded-md text-sm font-medium capitalize hover:bg-accent`}
          >
            <menu.icon size={20} className={`${open && "w-full"}`} />
            <h2
              style={{ transitionDelay: `${i + 3}00ms` }}
              className={`whitespace-pre duration-300  
								${open && " absolute left-12 translate-x-28 overflow-hidden opacity-0"}
								`}
            >
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>

      <div className="flex justify-end py-5">
        <HiMenuAlt3 size={26} className="cursor-pointer" onClick={toggleSideBar} />
      </div>
    </div>
  );
};
