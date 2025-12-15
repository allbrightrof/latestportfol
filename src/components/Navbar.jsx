import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [showCV, setShowCV] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowCV(true), 200);
  }, []);

  return (
    <>
    <nav className="bg-[#010514] flex md:flex justify-between mx-auto max-w-7xl items-center text-white px-8 py-12 overflow-hidden">

      <div className={`text-xl font-bold cursor-pointer transform transition-all
          ${showCV ? "translate-x-0 opacity-100" : "-translate-x-30 opacity-0"}`}>
        AFO
        <span className="text-[#0EA5E9] cursor-pointer">@ALLBRIGHT016</span>
      </div>

      <ul className="hidden md:flex gap-8 text-sm font-medium">
        <li className="cursor-pointer hover:bg-[#0EA5E9] py-2 px-3 rounded-lg transform transition-all duration-700 hover:scale-105
    active:scale-150">HOME</li>
        <li className="cursor-pointer hover:bg-[#0EA5E9] py-2 px-3 rounded-lg transform transition-all duration-700 hover:scale-105
    active:scale-150">ABOUT</li>
        <li className="cursor-pointer hover:bg-[#0EA5E9] py-2 px-3 rounded-lg transform transition-all duration-700 hover:scale-105
    active:scale-150">PROJECT</li>
        <li className="cursor-pointer hover:bg-[#0EA5E9] transform transition-all duration-700 hover:scale-105
    active:scale-150 py-2 px-3 rounded-lg">SKILL</li>
      </ul>
   <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              className="text-2xl text-[#0EA5E9]"
            />
          </button>
        </div>
 {menuOpen &&  (
        <div className="md:hidden justify-evenly top-20 left-0 h-screen fixed w-full bg-[#010514]  text-white flex flex-col items-center">
        
      <ul className="flex justify-between pt-2 flex-col gap-12 text-sm font-medium">
        <li className="cursor-pointer hover:bg-[#0EA5E9] py-2 px-3 rounded-lg transform transition-all duration-700 hover:scale-105
    active:scale-150">HOME</li>
        <li className="cursor-pointer hover:bg-[#0EA5E9] py-2 px-3 rounded-lg transform transition-all duration-700 hover:scale-105
    active:scale-150">ABOUT</li>
        <li className="cursor-pointer hover:bg-[#0EA5E9] py-2 px-3 rounded-lg transform transition-all duration-700 hover:scale-105
    active:scale-150">PROJECT</li>
        <li className="cursor-pointer hover:bg-[#0EA5E9] transform transition-all duration-700 hover:scale-105
    active:scale-150 py-2 px-3 rounded-lg">SKILL</li>
      </ul>
       <button
        className={`text-sm font-medium block md:block
          cursor-pointer border border-[#0EA5E9] py-2 px-4 rounded-lg
          transform transition-all duration-700 hover:scale-105
    active:scale-150 hover:bg-[#0EA5E9]
          ${showCV ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
        `}
      >
        VIEW CV
      </button>
        </div>
      )}
      <button
        className={`text-sm font-medium hidden md:block
          cursor-pointer border border-[#0EA5E9] py-2 px-4 rounded-lg
          transform transition-all duration-700 hover:scale-105
    active:scale-150 hover:bg-[#0EA5E9]
          ${showCV ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0 "}
        `}
      >
        VIEW CV
      </button>

    </nav>
    </>
  );
}

export default Navbar;
