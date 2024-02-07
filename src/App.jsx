import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import Login from "./pages/Login/Login";
import Contact from "./pages/Contacts/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
