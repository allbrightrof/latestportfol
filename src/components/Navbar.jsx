import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [showCV, setShowCV] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Animate CV button after mount (desktop only)
  useEffect(() => {
    setTimeout(() => setShowCV(true), 200);
  }, []);

  // Lock background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <nav className="bg-[#010514] flex justify-between items-center max-w-7xl mx-auto px-8 py-12 text-white overflow-hidden">
        
        {/* LOGO */}
        <div className="text-xl font-bold cursor-pointer">
          AFO
          <span className="text-[#0EA5E9]">@ALLBRIGHT016</span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {["HOME", "ABOUT", "PROJECT", "SKILL"].map(item => (
            <li
              key={item}
              className="cursor-pointer hover:bg-[#0EA5E9] py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* DESKTOP CV BUTTON */}
      <a href="./public/Toyale Rofiq.pdf"  target="_blank"> <button
          className={`hidden md:block text-sm font-medium border border-[#0EA5E9] py-2 px-4 rounded-lg transition-all duration-500 hover:scale-105 hover:bg-[#0EA5E9]
            ${showCV ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}
          `}
        >
          VIEW CV
        </button></a> 

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-2xl text-[#0EA5E9]"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>

      {/* MOBILE SLIDE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 right-0 h-screen w-full bg-[#010514] text-white z-50 flex flex-col"
          >
            {/* CLOSE ICON */}
            <div className="flex justify-end p-8">
              <button onClick={() => setMenuOpen(false)}>
                <FontAwesomeIcon
                  icon={faTimes}
                  className="text-2xl text-[#0EA5E9]"
                />
              </button>
            </div>

            {/* MENU LINKS */}
            <ul className="flex flex-col items-center gap-10 text-sm font-medium mt-10">
              {["HOME", "ABOUT", "PROJECT", "SKILL"].map(item => (
                <li
                  key={item}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer hover:bg-[#0EA5E9] py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* MOBILE CV BUTTON */}
            <div className="flex justify-center mt-16">
              <a href="/Toyale Rofiq.pdf" rel="noopener noreferrer" target="_blank">  <button
                className="text-sm font-medium border border-[#0EA5E9] py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-[#0EA5E9]"
              >
                VIEW CV
              </button></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
