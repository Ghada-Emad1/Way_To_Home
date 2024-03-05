import { Link } from "react-router-dom";
import { MdOutlineNightShelter } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

import { MdOutlineFeed } from "react-icons/md";
import ProfileImg from "/people.avif";
// import { userInfo } from "../../data/UserInfo";
import {useSelector} from "react-redux"
const LeftNav = () => {
  const users=useSelector((state)=>state.Adduser)
  console.log(users)
  
  
  const StyleLink = `flex items-center gap-2 font-bold text-basic text-lg`;
  return (
    <aside className="sticky top-0 h-[100vh] w-1/4  flex flex-col bg-light overflow-y-auto p-4">
      <div className="flex items-center justify-center gap-4 py-4">
        <img
          className="w-[100px] h-[100px] object-cover rounded-full"
          src={ProfileImg}
          alt=""
        />
        <div>
          {users.map((element,index)=>(
            <div key={index}>
              <h1 className="font-bold text-basic ">{element.Name}</h1>
              <p>{element.Email}</p>
            </div>
          ))}
        </div>
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
          <Link to="/dashboard/Works" className={StyleLink}>
            <GrWorkshop size={25} />
            <h1>Works</h1>
          </Link>
        </div>

        <div>
          <Link to="/dashboard/feed" className={StyleLink}>
            <MdOutlineFeed size={25} />
            <h1>Feed</h1>
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
    </aside>
  );
};

export default LeftNav;
