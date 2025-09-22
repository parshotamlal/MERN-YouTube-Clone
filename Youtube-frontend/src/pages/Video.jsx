import React from "react";
import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { Link } from "react-router-dom";


function Video() {


  const [comment, setComment] = useState('');
  return (
    <div className=" bg-black flex justify-center mt-[56px] p-[30px 0] text-white">
     <div className=" w-full max-w-[875px] flex flex-col">
      <div className=" w-full">
        <video width="400px" height="200px" autoPlay className="  w-full rounded-[10px] ">
          
          <source src="https://www.pexels.com/download/video/1841356/" />

        </video>

      </div>


      <div className=" flex flex-col">
        <div className=" text-[20px] font-bold"> {"javascript for begginar"}</div>

        <div className=" justify-between flex mr-[10px]">
          <div className=" flex gap-[15px]">

            {/* user profile */}
            
            <Link to={'/user/323'} className=" w-[35px] h-[35px] cursor-pointer">

              <img className=" w-full h-full rounded-[50%]" src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </Link>

            <div className=" flex flex-col">
              <div className=" font-bold text-[16px]"> {"user1"}</div>
              <div className=" text-[14px] text-gray-400"> 10-09-2025</div>
            </div>

            <div className=" font-bold bg-white text-black px-4 rounded-[18px] flex justify-center items-center h-[36px] cursor-pointer text-[14px]">Subscribe</div>
          </div>


<div className="flex gap-[10px] justify-center cursor-pointer rounded-[18px] box-border bg-gray-900 items-center py-[10px] px-[10px]">
  
  {/* Like Section */}
  <div className="flex items-center gap-[10px]">
    <BiLike className="text-gray-400 hover:text-white transition-colors duration-200 text-xl" />
    <div className="font-bold text-gray-200">{36}</div>
  </div>

  {/* Divider */}
  <div className="w-px h-[20px] bg-gray-600"></div>

  {/* Dislike Section */}
  <div className="flex items-center gap-[8px]">
    <BiDislike className="text-gray-400 hover:text-white transition-colors duration-200 text-xl" />
    <div className="font-bold text-gray-200">{36}</div>
  </div>

</div>

        </div>


{/* description section */}
       <div className=" flex flex-col p-[10px] w-full rounded-[10px] font-bold text-[14px] gap-[10px] mt-[10px] box-border bg-[#a5a5a538]">
          <div>10-09-2025</div>
          <div>this is my video</div>
        </div>

{/* comment section */}
 <div className=" flex flex-col mt-[20px]">
  <div className=" font-bold text-[20px]">2 Comments</div>

<div className="flex items-center gap-[10px] w-full bg-black p-2 rounded-lg">

  {/* Profile Image */}
  <div className="w-[35px] h-[35px] cursor-pointer">
    <img
      className="w-full h-full rounded-full"
      src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
      alt="Profile"
    />
  </div>

  {/* Input Field Wrapped in a Div */}
<div className="w-full bg-black p-4 rounded-lg">
      
      {/* Input Field */}
      <input
        type="text"
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full bg-black text-white placeholder-gray-400 border-b-2 border-gray-600 focus:border-white focus:outline-none py-2 transition-colors duration-200"
      />

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-2">
        
        <button className="text-gray-400 hover:text-white text-sm font-medium">
          Cancel
        </button>
        
        <button
          className={`text-white text-sm font-medium px-4 py-1 rounded transition-colors duration-200 ${
            comment.trim()
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-gray-500 cursor-not-allowed'
          }`}
          disabled={!comment.trim()}
        >
          Comment
        </button>
        
      </div>
    </div>

</div>
<div className="flex items-center gap-[10px]">
  
  {/* Profile Image */}
  <div className="w-[35px] h-[35px] cursor-pointer">
    <img
      className="w-full h-full rounded-full object-cover"
      src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
      alt="Profile"
    />
  </div>

  {/* User Details */}
  <div className="flex flex-col text-white">
  <div className="flex flex-col text-white">
    <div className="font-medium">User02</div>
    <div className="text-xs text-gray-400">10-09-2025</div>
  </div>

  <div> This is a cool project</div>
  </div>


</div>

<div className="flex items-center gap-[10px]">
  
  {/* Profile Image */}
  <div className="w-[35px] h-[35px] cursor-pointer">
    <img
      className="w-full h-full rounded-full object-cover"
      src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
      alt="Profile"
    />
  </div>

  {/* User Details */}
  <div className="flex flex-col text-white">
  <div className="flex flex-col text-white">
    <div className="font-medium">User02</div>
    <div className="text-xs text-gray-400">10-09-2025</div>
  </div>

  <div> This is a cool project</div>
  </div>


</div>

<div className="flex items-center gap-[10px]">
  
  {/* Profile Image */}
  <div className="w-[35px] h-[35px] cursor-pointer">
    <img
      className="w-full h-full rounded-full object-cover"
      src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
      alt="Profile"
    />
  </div>

  {/* User Details */}
  <div className="flex flex-col text-white">
  <div className="flex flex-col text-white">
    <div className="font-medium">User02</div>
    <div className="text-xs text-gray-400">10-09-2025</div>
  </div>

  <div className=" mt-3"> This is a cool project</div>
  </div>


</div>


 </div>



      </div>
     </div>

<div className="w-full max-w-[406px] text-white rounded-lg overflow-hidden">
  <div className="flex gap-3 p-3 items-start">
    
    {/* Thumbnail Image */}
    <div className="w-[168px] h-[94px] flex-shrink-0 overflow-hidden rounded-[5px]">
      <img
        className="w-full h-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60"
        alt="Video Thumbnail"
      />
    </div>

    {/* Video Info */}
    <div className="flex flex-col justify-between flex-1">
      
      <div className="text-sm font-semibold line-clamp-2">
        Apple iPhone 17, iPhone Air & iPhone 17 Pro Max Exclusive First Look - The Game Changers!🔥🔥🔥
      </div>
      
      <div className="text-xs text-gray-500 space-x-2 mt-1">
        <div>Technical Guruji</div>
        <div>404K views</div>
        <div>5 hours ago</div>
      </div>

    </div>
    
  </div>


  <div className="flex gap-3 p-3 items-start">
    
    {/* Thumbnail Image */}
    <div className="w-[168px] h-[94px] flex-shrink-0 overflow-hidden rounded-[5px]">
      <img
        className="w-full h-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60"
        alt="Video Thumbnail"
      />
    </div>

    {/* Video Info */}
    <div className="flex flex-col justify-between flex-1">
      
      <div className="text-sm font-semibold line-clamp-2">
        Apple iPhone 17, iPhone Air & iPhone 17 Pro Max Exclusive First Look - The Game Changers!🔥🔥🔥
      </div>
      
      <div className="text-xs text-gray-500 space-x-2 mt-1">
        <div>Technical Guruji</div>
        <div>404K views</div>
        <div>5 hours ago</div>
      </div>

    </div>
    
  </div>


  <div className="flex gap-3 p-3 items-start">
    
    {/* Thumbnail Image */}
    <div className="w-[168px] h-[94px] flex-shrink-0 overflow-hidden rounded-[5px]">
      <img
        className="w-full h-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60"
        alt="Video Thumbnail"
      />
    </div>

    {/* Video Info */}
    <div className="flex flex-col justify-between flex-1">
      
      <div className="text-sm font-semibold line-clamp-2">
        Apple iPhone 17, iPhone Air & iPhone 17 Pro Max Exclusive First Look - The Game Changers!🔥🔥🔥
      </div>
      
      <div className="text-xs text-gray-500 space-x-2 mt-1">
        <div>Technical Guruji</div>
        <div>404K views</div>
        <div>5 hours ago</div>
      </div>

    </div>
    
  </div>


  <div className="flex gap-3 p-3 items-start">
    
    {/* Thumbnail Image */}
    <div className="w-[168px] h-[94px] flex-shrink-0 overflow-hidden rounded-[5px]">
      <img
        className="w-full h-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60"
        alt="Video Thumbnail"
      />
    </div>

    {/* Video Info */}
    <div className="flex flex-col justify-between flex-1">
      
      <div className="text-sm font-semibold line-clamp-2">
        Apple iPhone 17, iPhone Air & iPhone 17 Pro Max Exclusive First Look - The Game Changers!🔥🔥🔥
      </div>
      
      <div className="text-xs text-gray-500 space-x-2 mt-1">
        <div>Technical Guruji</div>
        <div>404K views</div>
        <div>5 hours ago</div>
      </div>

    </div>
    
  </div>


  <div className="flex gap-3 p-3 items-start">
    
    {/* Thumbnail Image */}
    <div className="w-[168px] h-[94px] flex-shrink-0 overflow-hidden rounded-[5px]">
      <img
        className="w-full h-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60"
        alt="Video Thumbnail"
      />
    </div>

    {/* Video Info */}
    <div className="flex flex-col justify-between flex-1">
      
      <div className="text-sm font-semibold line-clamp-2">
        Apple iPhone 17, iPhone Air & iPhone 17 Pro Max Exclusive First Look - The Game Changers!🔥🔥🔥
      </div>
      
      <div className="text-xs text-gray-500 space-x-2 mt-1">
        <div>Technical Guruji</div>
        <div>404K views</div>
        <div>5 hours ago</div>
      </div>

    </div>
    
  </div>


  <div className="flex gap-3 p-3 items-start">
    
    {/* Thumbnail Image */}
    <div className="w-[168px] h-[94px] flex-shrink-0 overflow-hidden rounded-[5px]">
      <img
        className="w-full h-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60"
        alt="Video Thumbnail"
      />
    </div>

    {/* Video Info */}
    <div className="flex flex-col justify-between flex-1">
      
      <div className="text-sm font-semibold line-clamp-2">
        Apple iPhone 17, iPhone Air & iPhone 17 Pro Max Exclusive First Look - The Game Changers!🔥🔥🔥
      </div>
      
      <div className="text-xs text-gray-500 space-x-2 mt-1">
        <div>Technical Guruji</div>
        <div>404K views</div>
        <div>5 hours ago</div>
      </div>

    </div>
    
  </div>


  <div className="flex gap-3 p-3 items-start">
    
    {/* Thumbnail Image */}
    <div className="w-[168px] h-[94px] flex-shrink-0 overflow-hidden rounded-[5px]">
      <img
        className="w-full h-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60"
        alt="Video Thumbnail"
      />
    </div>

    {/* Video Info */}
    <div className="flex flex-col justify-between flex-1">
      
      <div className="text-sm font-semibold line-clamp-2">
        Apple iPhone 17, iPhone Air & iPhone 17 Pro Max Exclusive First Look - The Game Changers!🔥🔥🔥
      </div>
      
      <div className="text-xs text-gray-500 space-x-2 mt-1">
        <div>Technical Guruji</div>
        <div>404K views</div>
        <div>5 hours ago</div>
      </div>

    </div>
    
  </div>


  <div className="flex gap-3 p-3 items-start">
    
    {/* Thumbnail Image */}
    <div className="w-[168px] h-[94px] flex-shrink-0 overflow-hidden rounded-[5px]">
      <img
        className="w-full h-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60"
        alt="Video Thumbnail"
      />
    </div>

    {/* Video Info */}
    <div className="flex flex-col justify-between flex-1">
      
      <div className="text-sm font-semibold line-clamp-2">
        Apple iPhone 17, iPhone Air & iPhone 17 Pro Max Exclusive First Look - The Game Changers!🔥🔥🔥
      </div>
      
      <div className="text-xs text-gray-500 space-x-2 mt-1">
        <div>Technical Guruji</div>
        <div>404K views</div>
        <div>5 hours ago</div>
      </div>

    </div>
    
  </div>


  <div className="flex gap-3 p-3 items-start">
    
    {/* Thumbnail Image */}
    <div className="w-[168px] h-[94px] flex-shrink-0 overflow-hidden rounded-[5px]">
      <img
        className="w-full h-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60"
        alt="Video Thumbnail"
      />
    </div>

    {/* Video Info */}
    <div className="flex flex-col justify-between flex-1">
      
      <div className="text-sm font-semibold line-clamp-2">
        Apple iPhone 17, iPhone Air & iPhone 17 Pro Max Exclusive First Look - The Game Changers!🔥🔥🔥
      </div>
      
      <div className="text-xs text-gray-500 space-x-2 mt-1">
        <div>Technical Guruji</div>
        <div>404K views</div>
        <div>5 hours ago</div>
      </div>

    </div>
    
  </div>


  <div className="flex gap-3 p-3 items-start">
    
    {/* Thumbnail Image */}
    <div className="w-[168px] h-[94px] flex-shrink-0 overflow-hidden rounded-[5px]">
      <img
        className="w-full h-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60"
        alt="Video Thumbnail"
      />
    </div>

    {/* Video Info */}
    <div className="flex flex-col justify-between flex-1">
      
      <div className="text-sm font-semibold line-clamp-2">
        Apple iPhone 17, iPhone Air & iPhone 17 Pro Max Exclusive First Look - The Game Changers!🔥🔥🔥
      </div>
      
      <div className="text-xs text-gray-500 space-x-2 mt-1">
        <div>Technical Guruji</div>
        <div>404K views</div>
        <div>5 hours ago</div>
      </div>

    </div>
    
  </div>
</div>











    </div>
  );
}

export default Video;
