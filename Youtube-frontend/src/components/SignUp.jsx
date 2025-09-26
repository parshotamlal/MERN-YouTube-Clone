import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function SignUp() {
  const [uploadedImageUrl,setUploadedImageUrl] =useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  const [signupField, setSignupField] = useState({
    channelName: "",
    userName: "",
    password: "",
    about: "",
    profilePic:uploadedImageUrl
  });
  console.log(signupField);

  
  const handleInputField =(event,name) => {
   setSignupField({
    ...signupField,[name] :event.target.value
   })
  }

const uploadImage = async (e) => {
  const files = e.target.files;
  const data = new FormData();
  data.append("file", files[0]);

  // Correct field name
  data.append("upload_preset", "youtube-clone");

  try {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dqqchw5ak/image/upload",data );
      const imageUrl =response.data.url;
      setUploadedImageUrl(imageUrl);
       setSignupField({
        ...signupField,
        profilePic: imageUrl,
      });
  } catch (err) {
    console.error("Upload failed:", err);
  }
};

  return (
     <div className="w-full h-[550px] bg-black fixed mt-30 top-0 text-white flex justify-center font-oswald font-normal">
      <div className="w-[400px] bg-[#1c1c1c] p-8 rounded-xl shadow-lg text-white">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 text-2xl font-semibold mb-6">
          <FaYoutube className="text-4xl text-red-600" />
          <span>Signup</span>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          {/* Name Input */}
          <input
            className="w-full h-11 px-4 text-base bg-[#2a2a2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
             type="text"
            placeholder="channel Name"   value={signupField.channelName} onChange={(e)=>handleInputField(e,"channelName")}
          />

          {/* userNmae Input */}
          <input
            className="w-full h-11 px-4 text-base bg-[#2a2a2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            type="text"
            placeholder="User Name" value={signupField.userName} onChange={(e)=>handleInputField(e,"userName")}
          />rm Password 

          {/* Password Input */}
          <input
            className="w-full h-11 px-4 text-base bg-[#2a2a2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            type="password"
            placeholder="Password"  value={signupField.password} onChange={(e)=>handleInputField(e,"password")}
          />

          {/* About Channel / */}
          <input
            className="w-full h-11 px-4 text-base bg-[#2a2a2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            type="text"
            placeholder="About Your Channel"  value={signupField.about} onChange={(e)=>handleInputField(e,"about")}
          />

          {/* Profile Upload */}
          <div className="flex flex-col gap-3">
            <input type="file" onChange={uploadImage} className="text-sm text-gray-300" />

            <div className="flex justify-center">
              <img
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-500"
                src={uploadedImageUrl}
                alt="Profile Preview"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            {/* Signup button */}
            <button className="flex-1 h-11 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-medium text-white">
              Signup
            </button>

            

            {/* Cancel -> back to homepage */}
            <Link
              to="/"
              className="flex-1 h-11 flex items-center justify-center bg-gray-600 rounded-lg hover:bg-gray-700 transition font-medium text-white"
            >
              HomePage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export {SignUp}
