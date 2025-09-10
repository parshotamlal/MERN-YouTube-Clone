import React, { useState } from 'react'
import { FaYoutube, FaMicrophone, FaVideo, FaRegBell } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

function Navbar({sideNavbar,setSideNavbarfunc}) {  
  const [userPic, setUserPic] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  const [navbarModal, setNavbarModal] = useState(false);

  const handleClickModal = () => {
    setNavbarModal(prev => !prev);
  };

  const  sideNavBarfunc = () => {
    setSideNavbarfunc(!sideNavbar)

  };

  
  return (
    <div className=" h-14 flex items-center w-full justify-between top-0 fixed bg-black z-40 px-4">  
      
      {/* Left Section (Menu + Logo) */}
      <div className="flex items-center gap-4">                                     
        <div className="w-8 h-8 flex justify-center items-center cursor-pointer " onClick={sideNavBarfunc}>   
          <IoMdMenu className="text-white text-xl"  />
        </div>
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
            <CiSearch className="text-white text-xl" />   
          </div>
        </div>
        <div className="w-9 h-9 flex justify-center items-center bg-[#222] rounded-full cursor-pointer hover:bg-[#333]">
          <FaMicrophone className="text-white text-lg" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-10">
        <FaVideo className="text-white cursor-pointer w-5 h-5 hover:bg-[#333]" />
        <FaRegBell className="text-white cursor-pointer w-5 h-5 hover:bg-[#333]" />
        <img 
          onClick={handleClickModal} 
          className="cursor-pointer w-8 h-8 rounded-full hover:bg-[#333]" 
          src={userPic} 
          alt="logo" 
        />

        {navbarModal && (
          <div className="absolute top-[50px] right-4 w-48 z-20 bg-white text-black rounded shadow-lg">
            <div className="p-2 cursor-pointer hover:bg-gray-200">Profile</div>
            <div className="p-2 cursor-pointer hover:bg-gray-200">Logout</div>
            <div className="p-2 cursor-pointer hover:bg-gray-200">Login</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;


// import React, { useState } from "react";
// import { FaYoutube, FaMicrophone, FaVideo, FaRegBell } from "react-icons/fa";
// import { IoMdMenu } from "react-icons/io";
// import { CiSearch } from "react-icons/ci";

// function Navbar({ sideNavbar, setSideNavbarfun }) {
//   const [userPic] = useState(
//     "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
//   );
//   const [navbarModal, setNavbarModal] = useState(false);

//   const handleClickModal = () => {
//     setNavbarModal((prev) => !prev);
//   };

//   const toggleSidebar = () => {
//     setSideNavbarfun(!sideNavbar);
//   };

//   return (
//     <div className="h-14 flex items-center w-full justify-between top-0 fixed bg-black z-40 px-4">
//       {/* Left Section (Menu + Logo) */}
//       <div className="flex items-center gap-4">
//         <div
//           className="w-8 h-8 flex justify-center items-center cursor-pointer"
//           onClick={toggleSidebar}
//         >
//           <IoMdMenu className="text-white text-xl" />
//         </div>
//         <div className="flex items-center gap-2 cursor-pointer">
//           <div className="bg-red-500 flex justify-center items-center text-white rounded p-1">
//             <FaYoutube className="text-2xl" />
//           </div>
//           <div
//             className="text-red-600 font-bold text-lg"
//             style={{ wordSpacing: "4px" }}
//           >
//             YouTube
//           </div>
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="flex gap-2 w-1/3">
//         <div className="flex w-full">
//           <input
//             type="text"
//             placeholder="Search"
//             className="text-white w-full h-9 px-4 border border-gray-700 bg-black text-base rounded-l-full outline-none"
//           />
//           <div className="w-12 flex justify-center items-center cursor-pointer border border-gray-700 bg-[#222] rounded-r-full">
//             <CiSearch className="text-white text-xl" />
//           </div>
//         </div>
//         <div className="w-9 h-9 flex justify-center items-center bg-[#222] rounded-full cursor-pointer hover:bg-[#333]">
//           <FaMicrophone className="text-white text-lg" />
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center gap-10">
//         <FaVideo className="text-white cursor-pointer w-5 h-5 hover:bg-[#333]" />
//         <FaRegBell className="text-white cursor-pointer w-5 h-5 hover:bg-[#333]" />
//         <img
//           onClick={handleClickModal}
//           className="cursor-pointer w-8 h-8 rounded-full hover:bg-[#333]"
//           src={userPic}
//           alt="logo"
//         />

//         {navbarModal && (
//           <div className="absolute top-[50px] right-4 w-48 z-20 bg-white text-black rounded shadow-lg">
//             <div className="p-2 cursor-pointer hover:bg-gray-200">Profile</div>
//             <div className="p-2 cursor-pointer hover:bg-gray-200">Logout</div>
//             <div className="p-2 cursor-pointer hover:bg-gray-200">Login</div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;
