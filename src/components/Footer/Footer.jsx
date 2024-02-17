import Logo from "/Home_Logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="bg-basic text-white py-10">
      <div className="md:flex justify-center mx-auto w-3/4 gap-24">
        <div className="mt-16 basis-1/2 md:mt-0">
          <div className="flex items-center bg-white w-[250px] md:w-1/2 rounded-2xl">
            <img src={Logo} alt="Logo" />
            <h1 className="font-bold text-lg text-basic">H<span className="text-Orange">O</span>Me Campass</h1>
          </div>

          <p className="my-7">
            Through Homecampass,you can find a missing person by uploading a
            photo of that person
          </p>
          <div className="flex justify-center gap-6">
            <FaFacebook size={30} className="hover:text-Orange cursor-pointer"/>
            <FaTelegram size={30} className="hover:text-Orange cursor-pointer"/>
            <FaYoutube size={30} className="hover:text-Orange cursor-pointer"/>
          </div>
        </div>
        <div className="mt-16 md:mt-0 basis-1/4 flex flex-col gap-4">
          <h4 className="font-bold text-2xl">Menue</h4>
          <AnchorLink href="#home" className="hover:text-Orange">Home</AnchorLink>
          <AnchorLink href="#prop" className="hover:text-Orange">Features</AnchorLink>
          <AnchorLink href="#contacts" className="hover:text-Orange">Contact us</AnchorLink>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 ">
          <h4 className="font-bold text-2xl mb-4">Contact Info</h4>
          <div className="flex gap-3  items-center">
            <FaPhoneAlt className="text-Orange "/>
            <span>phone : +20 19872345</span>
          </div>
          <div className="flex gap-3 items-center mt-2">
            <IoMail className="text-Orange"/>
            <span>Email : sm1234@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
