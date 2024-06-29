import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Shelter from "./pages/Shelter/Shelter";
import Login from "./pages/Login/Login";
import Missing from "./pages/Missing/Missing";
import Dashboard from "./pages/Dashboard/Dashboard";

import Feed from "./pages/Feed/Feed";

import Settings from "./pages/Settings/Settings";

import SignUp from "./pages/SignUp/SignUp";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Works from "./pages/Works/Works";
import ChatBot from "./pages/ChatBot/ChatBot";


import ChangePassword from "./pages/ChangePassword/ChangePassword";
import ConfirmPassword from "./pages/ConfirmPassword/ConfirmPassword";

import ConfirmSignUpwithToken from "./pages/ConfirmSignUpWithToken/ConfirmSignUpwithToken";
import Homeless from "./pages/Homeless/Homeless";
import Search from "./pages/Search/Search";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} exact />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/confirmtoken" element={<ConfirmPassword />} />

          <Route
            path="/confirmsignupwithToken"
            element={<ConfirmSignUpwithToken />}
          />
          <Route path="/changepassword" element={<ChangePassword />} />

          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="shelter" element={<Shelter />} />
            <Route path="missingpeople" element={<Missing />} />
            <Route path="chatbot" element={<ChatBot />} />
            <Route path="search"element={<Search/>}/>
            <Route path="homeless" element={<Homeless />} />

            <Route path="works" element={<Works />} />
            <Route path="feed" element={<Feed />} />

            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
