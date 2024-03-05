import { Outlet } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import ProfileImage from "/people.avif";
import { useSelector } from "react-redux";
import { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
const Settings = () => {
  const users = useSelector((state) => state.Adduser);
  const [show, setShow] = useState(false);
  console.log(users);
  return (
    <div className="h-[100vh] overflow-auto text-nowrap">
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search item"
          className="border p-2 rounded-lg border-basic w-[300px]"
        />
      </div>
      <div className="mx-10 w-[300px]">
        <h1 className="text-Text font-bold text-xl mb-3">General</h1>
        <div className="bg-light rounded-lg p-4">
          <div className="flex justify-between">
            <button className="flex items-center gap-2">
              <MdOutlineAccountCircle size={25}/>
              Account
            </button>
            <button
              onClick={() => setShow((prev) => !prev)}
              className=" transition-all ease-out duration-150"
            >
              <IoIosArrowDropdown />
            </button>
          </div>
          

          {show ? (
            <div className="flex flex-col items-center gap-2">
              <div>
                <img
                  src={ProfileImage}
                  className="w-[90px] h-[90px] rounded-full object-cover"
                  alt=""
                />
              </div>
              <div>
                <h1>
                  <span className="font-semibold text-basic text-lg">
                    Name:{" "}
                  </span>{" "}
                  {users[1].Name}
                </h1>
                <p>
                  <span className="font-semibold text-basic text-lg">
                    Email :{" "}
                  </span>
                  {users[1].Email}
                </p>
                <p>
                  <span className="font-semibold text-basic text-lg">
                    Phone:{" "}
                  </span>{" "}
                  01924322
                </p>
                <p>
                  <span className="font-semibold text-basic text-lg">
                    Gender:{" "}
                  </span>
                  Female
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
          
        </div>

        <div className="bg-light rounded-lg p-4 mt-6">
          <div className="flex justify-between">
            <button className="flex items-center gap-2">
              <IoMdNotificationsOutline size={25}/>
              Notification
            </button>
            <button
             >
              <IoIosArrowDropdown />
            </button>
          </div>
          

         
          
        </div>
        
      </div>

      <Outlet />
    </div>
  );
};

export default Settings;
