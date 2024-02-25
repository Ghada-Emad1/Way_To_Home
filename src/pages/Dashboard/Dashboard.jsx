import LeftNav from "../../components/SideNav/LeftNav";
import { Route, Routes } from "react-router-dom";
import RightNav from "../../components/SideNav/RightNav";
import Shelter from "../Shelter/Shelter";
import Food from "../Food/Food";

import Education from "../Education/Education";
import Settings from "../Settings/Settings";
import Feed from "../Feed/Feed";

import Profile from "../Profile/Profile";
import Works from "../Works/Works";
import ChatBot from "../ChatBot/ChatBot";
import Search from "../Search/Search";
const Dashboard = () => {
  return (
    <div className="w-full flex justify-between bg-white h-[100vh]">
      <LeftNav />
      <div className="w-1/2">
        <Routes>
          <Route path="shelter" element={<Shelter />} />
          <Route path="food" element={<Food />} />
          
          <Route path="education" element={<Education />} />
          <Route path="works" element={<Works />} />
          <Route path="feed" element={<Feed />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="chatbot" element={<ChatBot/>}/>
          <Route path="search" element={<Search/>}/>
        </Routes>
      </div>
      <RightNav />
    </div>
  );
};

export default Dashboard;
