import Logo from "/Home_Logo.png";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Navbar_Mobile from "./Navbar_Mobile/Navbar_Mobile";
const Navbar = () => {
  const [OpenMenu, setOpenMenu] = useState(false);
  return (
    <nav className="bg-light sticky z-40 top-0 pr-4  w-full flex sm:block justify-between items-center">
    <div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <div>
          <img src={Logo} alt="home-campas" />
        </div>

        <div className="space-x-6 font-semibold text-lg hidden sm:flex text-basic justify-end">
          <AnchorLink href='#home'>Home</AnchorLink>
         
           <AnchorLink href="#about">About</AnchorLink>
           <AnchorLink href="#contacts">Contact</AnchorLink>
           <Link to='/login'>Login</Link>
          
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
