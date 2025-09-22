import React from 'react';
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

function VideoUpload() {
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
          />
          <input
            className="w-full h-[45px] px-[20px] text-[16px] bg-[#222222] border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            type="text"
            placeholder="Description"
          />
          <input
            className="w-full h-[45px] px-[20px] text-[16px] bg-[#222222] border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            type="text"
            placeholder="Category"
          />

          {/* Thumbnail Upload */}
          <div className="flex items-center gap-[15px] w-full">
            <span className="text-[16px] font-medium w-[100px]">Thumbnail</span>
            <label className="flex items-center justify-center px-4 py-2 bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700 transition shadow">
              <span className="text-sm font-medium">Upload</span>
              <input type="file" accept="image/*" className="hidden" />
            </label>
          </div>

          {/* Video Upload */}
          <div className="flex items-center gap-[15px] w-full">
            <span className="text-[16px] font-medium w-[100px]">Video</span>
            <label className="flex items-center justify-center px-4 py-2 bg-green-600 rounded-lg cursor-pointer hover:bg-green-700 transition shadow">
              <span className="text-sm font-medium">Upload</span>
              <input type="file" accept="video/*" className="hidden" />
            </label>
          </div>

          {/* Footer Buttons */}
          <div className="flex gap-[20px] mt-[10px] justify-end">
            <button className="px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition shadow">
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
