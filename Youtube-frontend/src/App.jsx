import "./App.css";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Route,Router, Routes } from "react-router-dom";
import Video from "./pages/Video";

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
      </Routes>

      </div>
  );
}

export default App;
