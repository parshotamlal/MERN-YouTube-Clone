import React from "react";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login({setLoginModal}) {
  return (
    <div className=" w-full h-[400px] bg-black/70 fixed mt-30 top-0 text-white flex justify-center font-oswald font-normal">
      <div className="w-[400px] bg-[#1c1c1c] p-8 rounded-xl shadow-lg text-white">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 text-2xl font-semibold mb-6">
          <FaYoutube className="text-4xl text-red-600" />
          <span>Login</span>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          {/* Email Input */}
          <input
            className="w-full h-11 px-4 text-base bg-[#2a2a2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            type="email"
            placeholder="Email"
          />

          {/* Password Input */}
          <input
            className="w-full h-11 px-4 text-base bg-[#2a2a2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            type="password"
            placeholder="Password"
          />

          {/* Buttons */}
     <div className="flex gap-3">
  {/* Login button */}
  <button className="flex-1 h-11 bg-red-600 rounded-lg hover:bg-red-700 transition font-medium text-white">
    Login
  </button>

  {/* Signup link styled as a button */}
  <Link
    to="/signup"
      onClick={() => setLoginModal(false)} className="flex-1 h-11 flex items-center justify-center bg-blue-600 rounded-lg hover:bg-blue-700 transition font-medium text-white"
  >
    Signup
  </Link>

  {/* Cancel button with modal close */}
  <button
    onClick={() => setLoginModal(false)}
    className="flex-1 h-11 bg-gray-600 rounded-lg hover:bg-gray-700 transition font-medium text-white"
  >
    Cancel
  </button>
</div>

        </div>
      </div>
    </div>
  );
}

export { Login };
