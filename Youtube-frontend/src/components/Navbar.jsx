import React, { useEffect, useState } from "react";
import { FaYoutube, FaMicrophone, FaVideo, FaRegBell } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { Login } from "./Login";
import axios from "axios";

function Navbar({ sideNavbar, setSideNavbarfunc }) {
  const [userPic, setUserPic] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const [navbarModal, setNavbarModal] = useState(false);
  const [login, setlogin] = useState(false);
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const handleClickModal = () => {
    setNavbarModal((prev) => !prev);
  };

  const sideNavBarfunc = () => {
    setSideNavbarfunc(!sideNavbar);
  };

  const navigate = useNavigate();

  const handleProfile = () => {
     let user =localStorage.getItem("user");
    navigate(`/user/${user}`);
   
    setNavbarModal(false);
  };

  const onClickOnPopUpOption = (button) => {
    setNavbarModal(false);
    if (button === "login") {
      setlogin(true);
    } else {
      console.log(`${button} clicked`);
      localStorage.clear();
      getLogOutFun();
      setTimeout(() => {
        navigate("/");
        window.location.reload();
        
      }, 2000);
    }
  };

  const getLogOutFun=()=> {
    axios.post(`http://localhost:5000/auth/logout`,{},{withCredentials:true}).then((res)=>{
      console.log("logOUt");
    }).catch((err) => {
      console.log(err);
    })
  }

  const setLoginModal = () => {
    setlogin(false);
  };
  useEffect(() => {
    //profilePic
    //user
    let profilePic = localStorage.getItem("profilePic");
    setIsloggedIn(localStorage.getItem("user") !== null ? true : false);
    if (profilePic !== null) {
      setUserPic(profilePic);
    }
  }, []);

  return (
    <div className=" h-14 flex items-center w-full justify-between top-0 fixed bg-black z-40 px-4">
      {/* Left Section (Menu + Logo) */}
      <div className="flex items-center gap-4">
        <div
          className="w-8 h-8 flex justify-center items-center cursor-pointer "
          onClick={sideNavBarfunc}
        >
          <IoMdMenu className="text-white text-xl" />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Link
            to={"/"}
            className="bg-red-500 flex justify-center items-center text-white rounded p-1"
          >
            <FaYoutube className="text-2xl" />
          </Link>
          <div
            className="text-red-600 font-bold text-lg"
            style={{ wordSpacing: "4px" }}
          >
            YouTube
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex gap-2 w-1/3">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Search"
            className="text-white w-full h-9 px-4 border border-gray-700 bg-black text-base rounded-l-full outline-none"
          />
          <div className="w-12 flex justify-center items-center cursor-pointer border border-gray-700 bg-[#222] rounded-r-full">
            <CiSearch className="text-white text-xl" />
          </div>
        </div>
        <div className="w-9 h-9 flex justify-center items-center bg-[#222] rounded-full cursor-pointer hover:bg-[#333]">
          <FaMicrophone className="text-white text-lg" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-10">
        =
        <Link to={"/:id/upload"}>
          <FaVideo className="text-white cursor-pointer w-5 h-5 hover:bg-[#333]" />
        </Link>
        <FaRegBell className="text-white cursor-pointer w-5 h-5 hover:bg-[#333]" />
        <img
          onClick={handleClickModal}
          className="cursor-pointer w-8 h-8 rounded-full hover:bg-[#333]"
          src={userPic}
          alt="logo"
        />
        {navbarModal && (
          <div className="absolute top-[50px] right-4 w-48 z-20 bg-white text-black rounded shadow-lg">
            {isLoggedIn && <div
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={handleProfile}
            >
              Profile
            </div> }
           { isLoggedIn && <div
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => onClickOnPopUpOption("logout")}
            >
              Logout
            </div> }
           { !isLoggedIn && <div
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => onClickOnPopUpOption("login")}
            >
              Login
            </div>}
          </div> 
        )}
      </div>

      {login && <Login setLoginModal={setLoginModal} />}
    </div>
  );
}

export default Navbar;
