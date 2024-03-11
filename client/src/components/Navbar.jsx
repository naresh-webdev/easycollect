import { useState } from "react";
import { close, logoIcon, menu } from "../assets";

import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar flex w-full items-center justify-between py-6">
      <Link to="/">
        <div className="flex items-center justify-center gap-2">
          <img src={logoIcon} alt="easyCollect Logo" className="h-[38px]" />
          <span className="font-poppins text-[28px] font-semibold text-white">
            Easy<span className="text-secondary">Collect</span>
          </span>
        </div>
      </Link>

      {!isAuthenticated && (
        <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`cursor-pointer font-poppins text-[16px] font-normal text-white ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      )}

      {!isAuthenticated && (
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={showMenu ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain"
            onClick={() => setShowMenu((prev) => !prev)}
          />

          {showMenu && (
            <div className="bg-black-gradient sidebar absolute right-0 top-20 mx-4 my-2 min-w-[140px] rounded-xl p-6">
              <ul className="flex flex-1 list-none flex-col items-center justify-end">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`cursor-pointer font-poppins text-[16px] font-normal text-white ${
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
      )}
    </nav>
  );
};

export default Navbar;
