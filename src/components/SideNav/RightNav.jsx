import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

import Add from "../../pages/Add/Add";

const RightNav = () => {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div className="w-1/4 ">
      <div className="   h-[100vh]  bg-light text-basic font-semibold  flex justify-center pt-10">
        <div className="flex flex-col items-center gap-6">
          <div className="bg-white rounded-xl shadow-lg w-[150px]">
            <Link to="/dashboard/chatbot">
              <button className="flex items-center p-4">
                <IoChatbubbleEllipsesOutline className="mr-4" />
                <span>ChatBot</span>
              </button>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg w-[150px]">
            <Link to="/dashboard/search">
              <button className="flex items-center p-4">
                <IoIosSearch className="mr-4" />
                <span>Search</span>
              </button>
            </Link>
          </div>
          <div className="bg-white rounded-xl text-Orange font-bold text-xl  shadow-lg w-[150px]">
            <button
              onClick={() => setShowAdd((prev) => !prev)}
              className="flex justify-center p-4"
            >
              <span className="mr-4">+</span>
              <h1>Add</h1>
            </button>
          </div>
          {showAdd ? <Add /> : ""}
        </div>
      </div>
    </div>
  );
};

export default RightNav;
