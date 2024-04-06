import { Link } from "react-router-dom";
import { MdOutlineNightShelter } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import { IoLogOutOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

import { MdOutlineFeed } from "react-icons/md";
import ProfileImg from "/people.avif";

import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "../Modal/Modal";
import {useNavigate} from 'react-router-dom'

const LeftNav = () => {
  const users = useSelector((state) => state.Adduser);
  const [showlogout, setshowlogout] = useState(false);
  const navigate=useNavigate();
  console.log(users);
  

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
          {users.map((element, index) => (
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
          <button
            onClick={() => setshowlogout((prev) => !prev)}
            className={StyleLink}
          >
            <IoLogOutOutline size={25} />
            <h1>Logout</h1>
          </button>
        </div>
      </div>
      {showlogout ? (
        <Modal>
          <div className="bg-white w-[300px] sm:w-[600px] text-center p-5 rounded-lg h-[200px] flex flex-col items-center justify-center">
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
                }}
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </aside>
  );
};

export default LeftNav;
