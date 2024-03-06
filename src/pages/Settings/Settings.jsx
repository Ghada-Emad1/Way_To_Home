import { Outlet } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import ProfileImage from "/people.avif";
import { useSelector } from "react-redux";
import { useState } from "react";
import { IoToggleOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BiUserX } from "react-icons/bi";

import "./setting.css"
const Settings = () => {
  const users = useSelector((state) => state.Adduser);
  const [show, setShow] = useState(false);
  const [shownot, setShownot] = useState(false);
  const [showreb, setShowreb] = useState(false);
  const [msg, setmsg] = useState(false);
  console.log(users);


  
  const [active, setActive] = useState(false);
    // تحويل الحالة عند النقر
  const handleClick = () => {
    setActive(!active);
  };


  
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
              onClick={() => setShownot((prev) => !prev)}
              className=" transition-all ease-out duration-150"
             >
              <IoIosArrowDropdown />
            </button>
          </div>
          {shownot ? (
            
            <div className="flex flex-col items-right gap-2">
              <div>
                <p id="para">Messages</p>
               
              </div>
              <div>
                <h1 className="font-semibold text-basic text-lg">
                Notifications tone
                <span id="span">Lorem ipsum dolor sit amet</span>
               
                </h1>
                <h1 className="font-semibold text-basic text-lg">
                Popup notifications
                <span id="span">No pop</span>
               
                </h1>
               <div className="flex justify-between">
                  <h1>High priority notifications</h1>
                  <div className={`icon-button ${active ? 'active' : ''}`} onClick={handleClick}>
                    <button>
                    <IoToggleOutline size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          
    
         
          
        </div>
       
      </div>
      <div className="mx-10 w-[300px] mt-9">
          <h1 className="text-Text font-bold text-xl mb-3">Feedback</h1>
          <div className="bg-light rounded-lg p-4">
            <div className="flex justify-between">
              <button className="flex items-center gap-2">
                <AiOutlineExclamationCircle size={20}/> 
                Report
              </button>
              <button
                onClick={() => setShowreb((prev) => !prev)}
                className=" transition-all ease-out duration-150"
              >
                <IoIosArrowDropdown />
              </button>
            </div>
            {showreb ? (
            
            <div className="flex flex-col items-right gap-2">
              <div>
                <p id="para">what’s going on? </p>
               
              </div>
              
                <div>
                  <h2 className="font-semibold text-basic text-m mb-3">
                  Nudity
                  <span id="spanbr"></span>
                  </h2>
                  <h2 className="font-semibold text-basic text-m mb-3">
                  Violence
                  <span id="spanbr"></span>
                  </h2>
                  <h2 className="font-semibold text-basic text-m mb-3">
                  Harassment
                  <span id="spanbr"></span>
                  </h2>
                  <h2 className="font-semibold text-basic text-m mb-3">
                  False information
                  <span id="spanbr"></span>
                  </h2>
                  <h2 className="font-semibold text-basic text-m mb-3">
                  Spam
                  <span id="spanbr"></span>
                  </h2>
                  <h2 className="font-semibold text-basic text-m mb-3">
                  Hate speech
                  <span id="spanbr"></span>
                  </h2>
                  <h2 className="font-semibold text-basic text-m mb-3">
                  Terrorism
                 </h2>
                  
                </div>
            </div>
            
          ) : (
            ""
          )}
        </div>
        <div className="bg-light rounded-lg p-4 mt-6">
          <div className="flex justify-between">
            <button onClick={() => setmsg((prev) => !prev)}  
              className="flex items-center gap-2 " >
              <BiUserX size={25}/> 
              Delete account
            </button>           
          </div> 
        </div>  
        {msg ?(
          <div className="parent"></div>
        ):(
          ""
          )}
      </div>
      <Outlet />
    </div>
  );
};

export default Settings;
