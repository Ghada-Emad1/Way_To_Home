import { Link } from "react-router-dom";
import { MdOutlineNightShelter } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { MdCastForEducation } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineFeed } from "react-icons/md";

const LeftNav = () => {
  const StyleLink = `flex items-center gap-2 font-bold text-basic text-lg`;
  return (
    <div className="w-1/4 flex gap-6 flex-col bg-light h-[100vh] shadow-lg  p-4">
      <div className="font-bold text-basic text-lg  text-center border border-basic py-2 ">
        <h1>Services</h1>
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <Link to="/dashboard/shelter" className={StyleLink}>
            <MdOutlineNightShelter size={25} />
            <h1>Shelter</h1>
          </Link>
        </div>
        <div>
          <Link to="/dashboard/food" className={StyleLink}>
            <MdOutlineFoodBank size={25} />
            <h1>Food</h1>
          </Link>
        </div>
        <div>
          <Link to="/dashboard/resources" className={StyleLink}>
            <GrResources size={25} />
            <h1>Resources</h1>
          </Link>
        </div>
        <div>
          <Link to="/dashboard/education" className={StyleLink}>
            <MdCastForEducation size={25} />
            <h1>Education</h1>
          </Link>
        </div>

        <div>
          <Link to="/dashboard/feed" className={StyleLink}>
            <MdOutlineFeed size={25} />
            <h1>Feed</h1>
          </Link>
        </div>

        <div>
          <Link to="/dashboard/profile" className={StyleLink}>
            <CgProfile size={25} />
            <h1>Profile</h1>
          </Link>
        </div>

        <div>
          <Link to="/dashboard/settings" className={StyleLink}>
            <IoSettingsOutline size={25} />
            <h1>Settings</h1>
          </Link>
        </div>

        <div>
          <Link to="/dashboard/logout" className={StyleLink}>
            <IoLogOutOutline size={25} />
            <h1>Logout</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
