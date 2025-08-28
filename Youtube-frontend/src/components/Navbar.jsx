

import React, { useState } from 'react'
import { FaYoutube } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";


function Navbar() {  
const [userPic, setUserPic] = useState("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fdefault-avatar-profile-icon-vector-unknown-social-media-user-photo-default-avatar-profile-icon-vector-unknown-social-media-user-image184816085&psig=AOvVaw1PEIbvFzaYuEWPVPlPpj86&ust=1756408059311000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjfoojYq48DFQAAAAAdAAAAABAL")
  
  return (
    <div className="h-14 flex items-center w-full justify-between top-0 fixed bg-black z-40 px-4">  
      
      {/* Left Section (Menu + Logo) */}
      <div className="flex items-center gap-4">                                     
        {/* Menu Button */}
        <div className="w-8 h-8 flex justify-center items-center cursor-pointer">   
          <IoMdMenu className="text-white text-xl" />
        </div>

        {/* YouTube Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-red-500 flex justify-center items-center text-white rounded p-1">
            <FaYoutube className="text-2xl" />
          </div>
          <div className="text-red-600 font-bold text-lg" style={{ wordSpacing: "4px" }}>
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
            <CiSearch className="text-white text-xl" />   </div>

        </div>
        {/* Mic Button */}
        <div className="w-9 h-9 flex justify-center items-center bg-[#222] rounded-full cursor-pointer hover:bg-[#333]">
          <FaMicrophone className="text-white text-lg" />
        </div>
      </div>

      <div>
      </div>

<div className=' flex items-center gap-10'>
    <FaVideo className="text-white  cursor-pointer w-5 h-5 flex justify-center items-center  hover:bg-[#333]" />
        <FaRegBell className="text-white  cursor-pointer w-5 h-5 flex justify-center items-center   hover:bg-[#333]" />

    <img className=' text-white  cursor-pointer w-5 h-5 flex justify-center items-center  hover:bg-[#333]' src={userPic} alt="logo" />



   <div className="absolute top-[35px] right-0 w-48 z-20 bg-white text-black rounded">
     <div className=" text-black p-2 cursor-pointer hover:bg-gray-700 rounded-md shadow-lg">
    Profile  </div>
    <div className= "text-black p-2 cursor-pointer hover:bg-gray-700 rounded-md shadow-lg"> logout</div>
    <div className= "text-black p-2 cursor-pointer hover:bg-gray-700 rounded-md shadow-lg">login</div>
                                      </div>

    </div>


</div>

  )

}

export default Navbar
