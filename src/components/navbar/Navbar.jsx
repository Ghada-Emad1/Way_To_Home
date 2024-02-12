import Logo from "/Home_Logo.png";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Navbar_Mobile from "./Navbar_Mobile/Navbar_Mobile";
const Navbar = () => {
  const [OpenMenu, setOpenMenu] = useState(false);
  return (
    <nav className="flex sticky top-0 z-40 bg-light text-basic px-6 py-2 max-w-[1536px] mx-auto  items-center justify-between">
      {/* image and title */}
      <div className="flex gap-4 items-center">
        <img src={Logo} alt="Logo Image" />
        <h1 className="font-bold text-lg hidden sm:block">
          HOME C<span className="text-Orange">O</span>MPASS
        </h1>
      </div>

      <div className="hidden md:block">
        <ul className="flex gap-4 font-bold text-lg cursor-pointer">
          <AnchorLink
            href="#home"
            className="hover:text-Orange ease-in-out transition-all duration-150"
          >
            Home
          </AnchorLink>
          <AnchorLink
            href="#about"
            className="hover:text-Orange ease-in-out transition-all duration-150"
          >
            About us
          </AnchorLink>
          <AnchorLink
            href="#contacts"
            className="hover:text-Orange ease-in-out transition-all duration-150"
          >
            Contact us
          </AnchorLink>
        </ul>
      </div>
      <div className="hidden sm:flex items-center justify-center gap-6">
        <Link
          className="bg-light hover:bg-basic hover:text-light  px-6 py-1 font-bold text-sm border-4 text-basic rounded-lg border-basic "
          to="/login"
        >
          Sign in
        </Link>
        <Link
          className="bg-basic  text-light px-6 py-1 rounded-lg hover:text-basic hover:bg-light font-bold text-sm border-4 hover:border-basic"
          to="/signup"
        >
          Sign Up
        </Link>
      </div>

      {OpenMenu ? (
        <div>
          <Navbar_Mobile setOpenMenu={setOpenMenu}/>
        </div>
      ) : (
        <div className="block sm:hidden">
          <HiOutlineMenu
            size={30}
            className="font-bold text-basic cursor-pointer"
            onClick={() => setOpenMenu((prev) => !prev)}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
