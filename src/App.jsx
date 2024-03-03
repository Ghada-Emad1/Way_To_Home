import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Shelter from "./pages/Shelter/Shelter";
import Login from "./pages/Login/Login";
import Food from "./pages/Food/Food";
import Dashboard from "./pages/Dashboard/Dashboard";


import Feed from "./pages/Feed/Feed";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";

import SignUp from "./pages/SignUp/SignUp";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Works from "./pages/Works/Works";
import ChatBot from "./pages/ChatBot/ChatBot";
import Search from "./pages/Search/Search";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/forgetpassword" element={<ForgetPassword/>}/>

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="shelter" element={<Shelter />} />
            <Route path="food" element={<Food />} />
            <Route path="chatbot"element={<ChatBot/>}/>
            <Route path="search" element={<Search/>}/>
          
            <Route path='works' element={<Works/>}/>
            <Route path="feed" element={<Feed/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="settings" element={<Settings/>}/>
           </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
