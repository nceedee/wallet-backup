import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useSideBar } from "../hook/useSideBar";

export const MobileSideBar = () => {
  const { open, toggleSideBar } = useSideBar();
  /*  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }*/

  return (
    <div className="block lg:hidden">
      <div id="mySidepanel" className={`sidepanel ${open ? "w-[250px]" : "w-0"}`}>
        {/* <a   className="closebtn">
          &times;
        </a> */}
        <div>
          <MdClose />
        </div>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <div className="flex justify-end py-5">
        <HiMenuAlt3 size={26} className="cursor-pointer" onClick={toggleSideBar} />
      </div>

      {/* <button className="openbtn">&#9776; Toggle Sidepanel</button> */}
      {/* <h2>Collapsed Sidepanel</h2>
      <p>Content...</p> */}
    </div>
  );
};
