import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
function SignUp() {
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
            placeholder="Full Name"
          />

          {/* Email Input */}
          <input
            className="w-full h-11 px-4 text-base bg-[#2a2a2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            type="email"
            placeholder="Email"
          />

          {/* Password Input */}
          <input
            className="w-full h-11 px-4 text-base bg-[#2a2a2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            type="password"
            placeholder="Password"
          />

          {/* About Channel / Confirm Password */}
          <input
            className="w-full h-11 px-4 text-base bg-[#2a2a2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            type="text"
            placeholder="About Your Channel"
          />

          {/* Profile Upload */}
          <div className="flex flex-col gap-3">
            <input type="file" className="text-sm text-gray-300" />

            <div className="flex justify-center">
              <img
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-500"
                src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60"
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
