


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function HomePage({ sideNavbar }) {
const [data,setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/allvideo').then(res=> {
      console.log(res.data.videos);
      setData(res.data.videos);
    }).catch(err=>{
      console.log(err);


    })
  })

  const options = [
    "All",
    "Music",
    "Disha Vakani",
    "News",
    "Mixes",
    "React Routers",
    "Podcasts",
    "Web Development",
    "Data Structures",
    "WWE Championship",
    "Restaurants",
    "Live",
    "Asian Music",
    "Information",
    "Tourism",
    "Roads",
    "Recently Uploaded",
    "Watched",
    "New to You"
  ];

  return (
    <div className={`flex flex-col  scrollbar-hide overflow-x-hidden flex-1 min-h-screen ${sideNavbar ? 'ml-[262px]' : ''} bg-black`}>
      
      {/* Category Scroll Bar */}
      <div className="flex fixed top-[56px] w-full gap-[10px] shrink-0 h-auto overflow-x-scroll bg-black p-2 z-10 hide-scrollbar">

        {options.map((item, index) => (
          <div
            key={index}
            className="text-white flex-shrink-0 px-3 h-[30px] bg-[rgb(42,42,42)] font-semibold rounded-[5px] flex items-center justify-center cursor-pointer hover:bg-[#3f3f3f]"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Video Grid */}
      <div className={`grid gap-[10px] px-4 pb-[20px] box-border bg-black ${sideNavbar ? 'grid-cols-3 ml-5' : 'grid-cols-4'} mt-[100px]`}>
        

     {
  data?.map((item, ind) => {
    return (
      <Link
        key={ind}
        to={`/watch/${item._id}`}
        className="text-white no-underline cursor-pointer h-auto box-border flex flex-col"
      >
        {/* Thumbnail */}
        <div className="w-full relative h-[216px] box-border">
          <img
            className="w-full h-full rounded-[10px]"
            src={item.thumbnail}
            alt="Video Thumbnail"
          />
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-[#2a2a2a] rounded-[5px] text-xs">
            28:20
          </div>
        </div>

        {/* User Info */}
        <div className="flex pt-[10px]">
          <div className="w-[50px] h-[50px] flex items-center justify-center">
            <img
              className="rounded-full w-[80%]"
              src={item?.user?.profilePic}
              alt="Profile"
            />
          </div>

          <div className="w-full p-[5px] box-border flex flex-col">
            <div className="font-semibold text-[16px]">{item?.title}</div>
            <div className="text-[rgb(170,170,170)] mt-[5px] text-[14px]">{item?.user?.channelName}</div>
            <div className="text-[rgb(170,170,170)] text-[12px]">{item?.like} likes</div>
          </div>
        </div>
      </Link>
    );
  })
}




        {/* Add more video cards here as needed */}

      </div>
    </div>
  );
}

export { HomePage };
