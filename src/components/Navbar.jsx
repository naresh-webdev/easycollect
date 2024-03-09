import { useState } from "react";
import { close, logo, logoMain, logoIcon, menu } from "../assets";

import { navLinks } from "../constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="flex items-center justify-center gap-2">
        <img src={logoIcon} alt="easyCollect Logo" className="h-[38px]" />
        <span className="text-white text-[28px] font-semibold font-poppins">
          Easy<span className="text-secondary">Collect</span>
        </span>
      </div>
      <ul className="list-none hidden sm:flex justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={showMenu ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setShowMenu((prev) => !prev)}
        />

        {showMenu && (
          <div className="p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar">
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  }`}
                >
                  <a href={`${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
