import LeftNav from "../../components/SideNav/LeftNav";
import { Route, Routes } from "react-router-dom";
import RightNav from "../../components/SideNav/RightNav";
import Shelter from "../Shelter/Shelter";
import Food from "../Food/Food";
import Resources from "../Resources/Resources";
import Education from "../Education/Education";
import Settings from "../Settings/Settings";
import Feed from "../Feed/Feed";
import Logout from "../Logout/Logout";
import Profile from "../Profile/Profile";
const Dashboard = () => {
  return (
    <div className="w-full flex justify-between">
      <LeftNav />
      <div className="w-1/2">
        <Routes>
          <Route path="shelter" element={<Shelter />} />
          <Route path="food" element={<Food />} />
          <Route path="resources" element={<Resources/>}/>
            <Route path="education" element={<Education/>}/>
            <Route path="feed" element={<Feed/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="settings" element={<Settings/>}/>
            <Route path="logout" element={<Logout/>}/>
        </Routes>
      </div>
      <RightNav />
    </div>
  );
};

export default Dashboard;
