import axios from "axios";
import React, { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";


function Login({ setLoginModal }) {
  const [loginfield, setLoginfield] = useState({
    userName: "",
    password: "",
  });
  console.log(loginfield);

  const handleOnChangeInput = (event, name) => {
    setLoginfield({
      ...loginfield,
      [name]: event.target.value,
    });
  };

  const handleLoginFun = async () => {
    setLoader(true);
    axios.post(`http://localhost:5000/auth/signin`, loginfield,{withCredentials:true})
      .then((res) => {
        setLoader(false);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.user._id);
        localStorage.setItem("profilePic", res.data.user.profilePic);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid Credentails!");
        setLoader(false);
      });
  };

  const [loader,setLoader] =useState(false);

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
          {/* UserName Input */}
          <input
            className="w-full h-11 px-4 text-base bg-[#2a2a2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            value={loginfield.userName}
            type="text"
            onChange={(e) => handleOnChangeInput(e, "userName")}
            placeholder="username"
          />

          {/* Password Input */}
          <input
            className="w-full h-11 px-4 text-base bg-[#2a2a2a] rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            value={loginfield.password}
            onChange={(e) => handleOnChangeInput(e, "password")}
            type="password"
            placeholder="Password"
          />

          {/* Buttons */}
          <div className="flex gap-3">
            {/* Login button */}
            <button
              onClick={handleLoginFun}
              className="flex-1 h-11 bg-red-600 rounded-lg hover:bg-red-700 transition font-medium text-white"
            >
              Login
            </button>

            {/* Signup link styled as a button */}
            <Link
              to="/signup"
              onClick={() => setLoginModal(false)}
              className="flex-1 h-11 flex items-center justify-center bg-blue-600 rounded-lg hover:bg-blue-700 transition font-medium text-white"
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

          {loader && (
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          )}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export { Login };
