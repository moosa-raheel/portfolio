import { useEffect, useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 80) {
        setActiveNav(true);
      } else {
        setActiveNav(false);
      }
    });
  });
  const navUl = useRef();
  const handleNavbar = () => {
    if (navUl.current.classList.contains("h-0")) {
      navUl.current.classList.add("h-auto");
      navUl.current.classList.remove("h-0");
    } else {
      navUl.current.classList.remove("h-auto");
      navUl.current.classList.add("h-0");
    }
  };
  return (
    <>
      <nav className="fixed top-0 left-0 z-50 bg-black text-white w-full md:hidden">
        <div
          className="flex justify-between items-center h-16 px-5
      "
        >
          <NavLink to="/" className="logo text-2xl font-bold">
            <span className="text-blue-400">M</span>.R
          </NavLink>
          <div className="icon" onClick={handleNavbar}>
            <IoIosMenu className="text-2xl" />
          </div>
        </div>
        <ul className="w-full px-5 h-0 overflow-hidden" ref={navUl}>
          <li className="py-2">
            <NavLink to="/" onClick={handleNavbar}>
              Home
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/about" onClick={handleNavbar}>
              About
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/resume" onClick={handleNavbar}>
              Resume
            </NavLink>
          </li>
          <li className="py-2">
            <a href="#" onClick={handleNavbar}>
              Portfolio
            </a>
          </li>
          <li className="py-2">
            <a href="#" onClick={handleNavbar}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <nav
        className={`w-full h-24 fixed top-0 left-0 hidden md:block z-50 ${
          activeNav ? "bg-white shadow-lg" : ""
        }`}
      >
        <div className="max-w-[1400px] h-full  mx-auto flex items-center justify-between w-[90%]">
          <a href="" className="logo lg:text-5xl text-4xl font-bold">
            <span className="text-blue-400">M</span>.R
          </a>
          <ul className="flex gap-10 lg:text-xl text-lg">
            <li className="py-2">
              <NavLink to="/" className="text-gray-600 font-medium">
                Home
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink to="/about" className="text-gray-600 font-medium">
                About
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink to="/resume" className="text-gray-600 font-medium">
                Resume
              </NavLink>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-600 font-medium">
                Portfolio
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-gray-600 font-medium">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
