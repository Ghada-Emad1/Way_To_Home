import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar_Mobile = ({ setOpenMenu }) => {


  return (
    <div className="block sm:hidden fixed right-0 bottom-0 z-40 h-full w-[300px] bg-light drop-shadow-md">
      <div className="flex justify-end p-4">
        <button>
          <IoClose
            size={50}
            className="block sm:hidden cursor-pointer"
            onClick={() => setOpenMenu((prev) => !prev)}
          />
        </button>
      </div>

      <div>
        <div className="flex flex-col gap-4 pl-4">
          <AnchorLink href="#about">
            About</AnchorLink>
          <AnchorLink href='contacts'>Contact</AnchorLink>
          <AnchorLink href='login'>Login</AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar_Mobile;
