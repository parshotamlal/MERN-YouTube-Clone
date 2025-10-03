import React, { useEffect, useState } from 'react';
import { FaYoutube } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FcApproval  } from "react-icons/fc";

function VideoUpload() {
  const [inputField, setInputField] = useState({
    title: "",
    description: "",
    videoLink: "",
    thumbnail: "",
    videoType: ""
  });

  console.log(inputField);

  const handleOnChangeInput = (event, name) => {
    setInputField({
      ...inputField,
      [name]: event.target.value
    });
  };


  const upload = async (e, type) => {
    setLoader(true);
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "youtube-clone");

    try {
    
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dqqchw5ak/${type}/upload`,
        data
      );
      const url = response.data.secure_url;
      setLoader(false);

      if (type === "image") {
        setInputField(prev => ({ ...prev, thumbnail: url }));
        setImageLoader(true)
      } else if (type === "video") {
        setInputField(prev => ({ ...prev, videoLink: url }));
        setVideoLoader(true)
      }

      console.log(url);
    } catch (err) {
      setLoader(true);
      console.error("Upload failed:", err);
    }
  };


  const [loader,setLoader] =useState(false);
  const [imageLoader,setImageLoader] =useState(false);
  const [videoLoader,setVideoLoader] =useState(false);


  let navigate = useNavigate();
  useEffect(() => {
    let isLogin = localStorage.getItem("user");
    if (isLogin === null) {
      // Redirect if not logged in
      navigate("/");
    }
  }, [])

  const handleSubmitFunc = async () => {
    await axios.post(`http://localhost:5000/api/video`,inputField,{withCredentials:true}).then((res)=>{
      console.log(res);
      navigate("/");

    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className='min-h-screen bg-black flex items-center justify-center px-4 font-oswald text-white'>
      <div className='w-full max-w-lg bg-[#1c1c1c] p-8 rounded-xl shadow-xl'>
        
        {/* Header */}
        <div className='flex items-center justify-center gap-3 text-[28px] mb-6'>
          <FaYoutube className='text-[48px] text-red-600' />
          Upload Video
        </div>

        {/* Form Inputs */}
        <div className='flex flex-col gap-[20px]'>
          <input
            className="w-full h-[45px] px-[20px] text-[16px] bg-[#222222] border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            type="text"
            placeholder="Title of Video"
            value={inputField.title}
            onChange={(e)=>handleOnChangeInput(e,"title")}
          />
          <input
            className="w-full h-[45px] px-[20px] text-[16px] bg-[#222222] border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            type="text"
            placeholder="Description"
            value={inputField.description}
            onChange={(e)=>handleOnChangeInput(e,"description")}
          />
          <input
            className="w-full h-[45px] px-[20px] text-[16px] bg-[#222222] border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            type="text"
            placeholder="Category"
            value={inputField.videoType}
            onChange={(e)=>handleOnChangeInput(e,"videoType")}
          />

          {/* Thumbnail Upload */}
          <div className="flex items-center gap-[15px] w-full">
            <span className="text-[16px] font-medium w-[100px]">Thumbnail</span>
            <label className="flex items-center justify-center px-4 py-2 bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700 transition shadow">
              <span className="text-sm font-medium">Upload</span>
              <input type="file" accept="image/*" className="hidden" onChange={(e)=>upload(e,"image")} />
            </label>
                 {imageLoader && (
            <div className="text-center text-shadow-green-800 font-medium">
              <FcApproval  className=' text-green-700'/>

            </div>
          )}
            
          </div>

          {/* Video Upload */}
          <div className="flex items-center gap-[15px] w-full">
            <span className="text-[16px] font-medium w-[100px]">Video</span>
            <label className="flex items-center justify-center px-4 py-2 bg-green-600 rounded-lg cursor-pointer hover:bg-green-700 transition shadow">
              <span className="text-sm font-medium">Upload</span>
              <input type="file" accept="video/*" className="hidden"  onChange={(e)=>upload(e,"video")} />
            </label>
            {videoLoader && (
            <div className="text-center text-green-700 font-medium">
             <FcApproval  className=' text-green-700'/>
            </div>
          )}
          </div>

           {/* Loader */}
          {loader && (
            <div className="text-center text-yellow-400 font-medium">
              Uploading...
            </div>
          )}

          {/* Footer Buttons */}
          <div className="flex gap-[20px] mt-[10px] justify-end">
            <button onClick={handleSubmitFunc} className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition shadow">
              Upload
            </button>
            <Link to="/">
              <button className="px-6 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 transition shadow">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoUpload;
