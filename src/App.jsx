import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Shelter from "./pages/Shelter/Shelter";
import Login from "./pages/Login/Login";
import Food from "./pages/Food/Food";
import Dashboard from "./pages/Dashboard/Dashboard";
import Resources from "./pages/Resources/Resources";
import Education from "./pages/Education/Education";
import Feed from "./pages/Feed/Feed";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";
import Logout from "./pages/Logout/Logout";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="shelter" element={<Shelter />} />
            <Route path="food" element={<Food />} />
            <Route path="resources" element={<Resources/>}/>
            <Route path="education" element={<Education/>}/>
            <Route path="feed" element={<Feed/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="settings" element={<Settings/>}/>
            <Route path="logout" element={<Logout/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
