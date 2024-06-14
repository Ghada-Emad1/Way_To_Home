import { Link ,NavLink } from "react-router-dom";
import { MdOutlineNightShelter } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { MdOutlineFeed } from "react-icons/md";
import ProfileImg from "/people.avif";
import userss from'/public/unkownProfile.png'

import { useSelector ,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import {useNavigate} from 'react-router-dom'
import { deleteuser } from "../../AddReducer/AddUserInfo";

const LeftNav = () => {
  const users = useSelector((state) => state.Adduser);
  const [showlogout, setshowlogout] = useState(false);
  const navigate=useNavigate();
  const dispatch = useDispatch();
  console.log(users);
  

  const StyleLink = `flex items-center gap-2 font-bold text-basic text-lg`;
  useEffect(() => {
    console.log("Current Users:", users);
    if (users.length === 0) {
        navigate("/");
    }
  }, [users, navigate]);

const handleLogout = () => {
    if (users.length > 0) {
        dispatch(deleteuser(users[0].id));
        //navgate("/")
    }
};
  return (
    <aside className="sticky top-0 h-[100vh] w-[12%] md:[20%] sm:full  flex flex-col bg-light overflow-y-auto p-4">
      {users.length>0 ? users.map((element)=>(

        <div key={element.id} className='flex flex-col items-center mt-4'>
            <img src={userss}
            alt='Ellipse' className='w-[100px] rounded-full'/> 
            <div className='inline text-2xl text-center overflow-hidden text-ellipsis whitespace-nowrap w-full max-md:text-sm'>
            <p>{element.username} {''}
            
            </p>
            

            </div>
            <p className='overflow-hidden text-ellipsis whitespace-nowrap w-full text-center max-md:hidden'>{element.email}</p>

        </div>
        )):''}
      <div className="flex flex-col gap-8">
        <div>
          <NavLink to="/dashboard/shelter" className={({ isActive }) => isActive ? `${StyleLink} text-red-500` : StyleLink}>
            <MdOutlineNightShelter size={25} />
            <p className='lg:block max-md:hidden' > Shelter </p>
          </NavLink>
        </div>
        <div>
          <NavLink to="/dashboard/food" className={({ isActive }) => isActive ? `${StyleLink} text-red-500` : StyleLink}>
            <MdOutlineFoodBank size={25} />
            <p className='lg:block max-md:hidden'> Food </p>
          </NavLink>
        </div>

        <div>
          <NavLink to="/dashboard/Works" className={({ isActive }) => isActive ? `${StyleLink} text-red-500` : StyleLink}>
            <GrWorkshop size={25} />
            <p className='lg:block max-md:hidden'> Works </p>
          </NavLink>
        </div>

        <div>
          <NavLink to="/dashboard/feed" className={({ isActive }) => isActive ? `${StyleLink} text-red-500` : StyleLink}>
            <MdOutlineFeed size={25} />
            <p className='lg:block max-md:hidden'> Feed </p>
          </NavLink>
        </div>

        <div>
          <NavLink to="/dashboard/settings" className={({ isActive }) => isActive ? `${StyleLink} text-red-500` : StyleLink}>
            <IoSettingsOutline size={25} />
            <p className='lg:block max-md:hidden'> Settings </p>
          </NavLink>
        </div>

        <div>
          <button
            onClick={() => setshowlogout((prev) => !prev)}
            className={StyleLink}
          >
            <IoLogOutOutline size={25} />
            <p className='lg:block max-md:hidden'>Logout</p>
          </button>
        </div>
      </div>
      {showlogout ? (
        <Modal>

          <div className="bg-white w-[300px] sm:w-[600px] text-center p-5 rounded-lg h-[200px] flex flex-col items-center justify-center relative">
                    <button className='absolute top-5 right-5 text-basic'
                        onClick={()=> setshowlogout(false)}
                        >
                            <IoMdClose size={25}/>
                    </button>
                    <h1 className="font-bold text-basic text-lg">
                    Are You Sure you Logout?
                    </h1>
                    <div className="flex items-center justify-center gap-5 mt-5">
                    <button
                        className="bg-Orange px-8 py-2 rounded-lg text-white font-bold text-lg"
                        
                         onClick={handleLogout}
                        
                    >
                        Yes
                    </button>
                    <button
                        className="bg-basic px-8 py-2 rounded-lg text-white font-bold text-lg"
                        onClick={() => {
                            setshowlogout(false)
                        }}
                    >
                        No
                    </button>
                    </div>
                </div>

          {/* <div className="bg-white w-[300px] sm:w-[600px] text-center p-5 rounded-lg h-[200px] flex flex-col items-center justify-center">
            <h1 className="font-bold text-basic text-lg">
              Are You Sure you Logout?
            </h1>
            <div className="flex items-center justify-center gap-5 mt-5">
              <button
                className="bg-Orange px-8 py-2 rounded-lg text-white font-bold text-lg"
                onClick={() => {
                  navigate("/");
                }}
              >
                Yes
              </button>
              <button
                className="bg-basic px-8 py-2 rounded-lg text-white font-bold text-lg"
                onClick={() => {
                  navigate("/dashboard");
                  setshowlogout(false);
                }}
              >
                No
              </button>
            </div>
          </div> */}

        </Modal>
      ) : null}
    </aside>
  );
};

export default LeftNav;
