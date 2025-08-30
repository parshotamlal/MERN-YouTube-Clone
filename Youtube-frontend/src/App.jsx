import "./App.css";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [sideNavbar, setSideNavbar] = useState(true);

  // function to toggle sidebar
  const setSideNavbarfunc = (value) => {
    setSideNavbar(value);
  };

  return (
    <div>
      <Navbar setSideNavbarfunc={setSideNavbarfunc} sideNavbar={sideNavbar} />
      <Home sideNavbar={sideNavbar} />
    </div>
  );
}

export default App;
