import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
const RightNav = () => {
  return (
    <div className="w-1/4 bg-light text-basic font-semibold shadow-lg flex justify-center pt-10">
      <div className="flex flex-col gap-6">
        <div className="bg-white rounded-xl shadow-lg w-[150px]">
          <Link to='/dashboard/chatbot'>
            <button className="flex items-center p-4">
              <IoChatbubbleEllipsesOutline className="mr-4"/>
              <span>ChatBot</span>
            </button>
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg w-[150px]">
          <Link to='/dashboard/search'>
            <button className="flex items-center p-4">
              <IoIosSearch className="mr-4"/>
              <span>Search</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
