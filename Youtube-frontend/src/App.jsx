import "./App.css";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Route,Router, Routes } from "react-router-dom";
import Video from "./pages/Video";
import Profile from "./pages/Profile";
import VideoUpload from "./pages/VideoUpload";
import { SignUp } from "./components/SignUp";

function App() {
  const [sideNavbar, setSideNavbar] = useState(true);

  // function to toggle sidebar
  const setSideNavbarfunc = (value) => {
    setSideNavbar(value);
  };

  return (
    <div className=" ">
      <Navbar setSideNavbarfunc={setSideNavbarfunc} sideNavbar={sideNavbar} />

      <Routes>
        <Route path='/' element={<Home sideNavbar={sideNavbar} />}/>
        <Route path="/watch/:id" element={<Video />} /> 
        <Route path="/watch" element={<Video />} /> 
        <Route path="/user/:id" element={<Profile sideNavbar={sideNavbar} />} /> 
        <Route path="/:id/upload" element={<VideoUpload />} />
        <Route path="/signup" element={<SignUp />} />
    
      </Routes>

      </div>
  );
}

export default App;
