import Logo from "/Home_Logo.png";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import Navbar_Mobile from "./Navbar_Mobile/Navbar_Mobile";
const Navbar = () => {
  const [OpenMenu, setOpenMenu] = useState(false);
  return (
    <nav className="bg-light pr-4  w-full flex sm:block justify-between items-center">
    <div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <div>
          <img src={Logo} alt="home-campas" />
        </div>

        <div className="space-x-6 font-semibold text-lg hidden sm:flex text-basic justify-end">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/login">Login</NavLink>
          
        </div>
      </div>
    </div>

    {OpenMenu ? (
      <div>
        <Navbar_Mobile setOpenMenu={setOpenMenu} />
      </div>
    ) : (
      <div>
        <HiOutlineMenu
          size={35}
          className="cursor-pointer text-basic block sm:hidden"
          onClick={() => setOpenMenu((prev) => !prev)}
        />
      </div>
    )}
  </nav>
  );
};

export default Navbar;
