import LeftNav from "../../components/SideNav/LeftNav";
import { Route, Routes, useLocation } from "react-router-dom";
import RightNav from "../../components/SideNav/RightNav";
import Shelter from "../Shelter/Shelter";
import Missing from "../Missing/Missing";
import Settings from "../Settings/Settings";
import Feed from "../Feed/Feed";
import Works from "../Works/Works";
import ChatBot from "../ChatBot/ChatBot";
import DashboarHome from "../DashboardHome/DashboarHome";
import Homeless from "../Homeless/Homeless";
import Search from "../Search/Search";
const Dashboard = () => {
  const location = useLocation();

  return (
    <div className="w-full flex justify-between bg-white h-[100vh]">
      <LeftNav />
      <div className="w-1/2">
        {location.pathname === "/dashboard/" ? (
          <DashboarHome />
        ) : (
          <Routes>
            <Route path="shelter" element={<Shelter />} />
            <Route path="missingpeople" element={<Missing />} />
            <Route path="homeless" element={<Homeless />} />
            <Route path="works" element={<Works />} />
            <Route path="feed" element={<Feed />} />
            <Route path="search" element={<Search />} />
            <Route path="settings" element={<Settings />} />
            <Route path="chatbot" element={<ChatBot />} />
          </Routes>
        )}
      </div>
      <RightNav />
    </div>
  );
};

export default Dashboard;
