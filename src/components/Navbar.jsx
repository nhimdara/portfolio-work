import React from "react";
import { IoCall } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div className="w-full h-[80px] px-4 md:px-20 lg:px-50">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold">
            <NavLink to="/" className="hover:font-bold transition-all">
              Nhim Dara
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex text-base lg:text-lg">
            <ul className="flex gap-6 lg:gap-10">
              <li>
                <NavLink to="/" className="hover:font-bold transition-all">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:font-bold transition-all">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  className="hover:font-bold transition-all"
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resume"
                  className="hover:font-bold transition-all"
                >
                  Resume
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden lg:block">
            <button className="flex items-center gap-2 hover:scale-110 transition-transform py-2 md:py-3 px-4 md:px-8 rounded-3xl font-bold bg-black text-white hover:bg-gray-800 text-sm md:text-base">
              <IoCall className="text-white text-lg md:text-xl" />
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl text-black"
            >
              {isOpen ? <IoClose /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-[80px] left-0 w-full bg-white shadow-lg pb-4 px-4 z-50">
            <ul className="flex flex-col gap-4">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 hover:font-bold transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block py-2 hover:font-bold transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  className="block py-2 hover:font-bold transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resume"
                  className="block py-2 hover:font-bold transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Resume
                </NavLink>
              </li>
            </ul>
            <button className="flex items-center justify-center gap-2 w-full mt-4 py-3 px-8 rounded-3xl font-bold bg-black text-white hover:bg-gray-800">
              <IoCall className="text-white text-xl" />
              Contact Me
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
