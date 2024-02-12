import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar_Mobile = ({ setOpenMenu }) => {
  return (
    <div className="block sm:hidden fixed right-0 bottom-0 z-40 h-full w-[300px] bg-light drop-shadow-md">
      <div className="flex justify-end p-4">
        <button>
          <IoClose
            size={30}
            className="block sm:hidden mt-4 cursor-pointer"
            onClick={() => setOpenMenu((prev) => !prev)}
          />
        </button>
      </div>

      <div>
        <div className="flex font-semibold flex-col gap-8 pt-6 items-center justify-center">
          <AnchorLink className="hover:text-Orange" href="#home">Home</AnchorLink>
          <AnchorLink className="hover:text-Orange" href="#about">About</AnchorLink>
          <AnchorLink className="hover:text-Orange" href="#contacts">Contact</AnchorLink>
          <Link to="/login" className="bg-basic text-light px-8 py-2 rounded-lg">Login</Link>
          <Link to="/signup" className="bg-light border-4 border-basic px-8 py-2 rounded-lg">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar_Mobile;
