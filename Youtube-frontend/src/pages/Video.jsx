import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Video() {


  const [comment, setComment] = useState('');
  console.log(comment);

  const [comments,setComments] = useState([]);

  const [videoUrl,setVideoUrl]= useState("");
  const [data,setData] =useState(null);

  const {id} =useParams();
  
 
  const fetchvideoByID = async() => {
    await axios.get(`http://localhost:5000/api/getVideoBy/${id}`).then((response) => {
      console.log(response.data.video);
      setData(response.data.video);
      setVideoUrl(response?.data?.video?.videoLink);

    }).catch((err) => {
      console.log(err);
      
    })
  }


  const fetchgetCommentByVideoId = async() => {
    await axios.get(`http://localhost:5000/commentapi/comment/${id}`).then((response) => {
      console.log(response.data);
      setComments(response.data);
       }).catch((err) => {
      console.log(err);
      
    }) 
  }



useEffect(() => {
    // fetch only when id is available
      fetchvideoByID(); 
       fetchgetCommentByVideoId();
  }, []); // ✅ dependency array


const handleComment = async () => {
  const body = {
    "message": comment,
    "video": id
  };

  await axios
    .post(`http://localhost:5000/commentapi/comment`, body, { withCredentials: true })
    .then((res) => {
      console.log(res);
      const newComment =res.data.comment;
      setComments([newComment,...comments]);
      setComment("");
    })
    .catch((err) => {
      toast.error("Please Login First! to comment");
    });
};

  return (
    <div className=" bg-black flex justify-center mt-[56px] p-[30px 0] text-white">
     <div className=" w-full max-w-[875px] flex flex-col">
      <div className=" w-full">


       {data  && (
  <video
    width="400"
    height="200"
    autoPlay  
    controls
    className="w-full rounded-[10px]"
  >
    <source src={videoUrl} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
)}
       
      </div>


      <div className=" flex flex-col">
        <div className=" text-[20px] font-bold"> {data?.title}</div>

        <div className=" justify-between flex mr-[10px]">
          <div className=" flex gap-[15px]">

            {/* user profile */}
            
            <Link to={`/user/${data?.user?._id}`} className=" w-[35px] h-[35px] cursor-pointer">

              <img className=" w-full h-full rounded-[50%]" src={data?.user?.profilePic} alt="profile" />
            </Link>

            <div className=" flex flex-col">
              <div className=" font-bold text-[16px]"> {data?.user?.channelName}</div>
              <div className=" text-[14px] text-gray-400">{data?.user?.createdAt.slice(0,10)}</div>
            </div>

            <div className=" font-bold bg-white text-black px-4 rounded-[18px] flex justify-center items-center h-[36px] cursor-pointer text-[14px]">Subscribe</div>
          </div>


<div className="flex gap-[10px] justify-center cursor-pointer rounded-[18px] box-border bg-gray-900 items-center py-[10px] px-[10px]">
  
  {/* Like Section */}
  <div className="flex items-center gap-[10px]">
    <BiLike className="text-gray-400 hover:text-white transition-colors duration-200 text-xl" />
    <div className="font-bold text-gray-200">{data?.like}</div>
  </div>

  {/* Divider */}
  <div className="w-px h-[20px] bg-gray-600"></div>

  {/* Dislike Section */}
  <div className="flex items-center gap-[8px]">
    <BiDislike className="text-gray-400 hover:text-white transition-colors duration-200 text-xl" />
    <div className="font-bold text-gray-200">{data?.dislike}</div>
  </div>

</div>

        </div>


{/* description section */}
       <div className=" flex flex-col p-[10px] w-full rounded-[10px] font-bold text-[14px] gap-[10px] mt-[10px] box-border bg-[#a5a5a538]">
          <div>{data?.createdAt.slice(0,10)}</div>
          <div>{data?.description}</div>
        </div>

{/* comment section */}
 <div className=" flex flex-col mt-[20px]">
  <div className=" font-bold text-[20px]">{comments.length}  Comments</div>

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
         onClick={handleComment}>
          Comment
        </button>
        
      </div>
    </div>

</div>




{comments?.map((item, ind) => (
  <div key={ind} className="flex items-center gap-[15px]">
    
    {/* Profile Image */}
    <div className="w-[35px] h-[35px] cursor-pointer">
      <img
        className="w-full h-full rounded-full object-cover"
        src={item?.user?.profilePic}
        alt="Profile"
      />
    </div>

    {/* User Details */}
    <div className="flex flex-col text-white">  
      <div className="font-medium">{item?.user?.channelNameS}</div>
      <div className="text-xs text-gray-400">{item?.createdAt.slice(0,10)}</div>
      <div className=" text-white">{item?.message}</div>
    </div>
  </div>
))}






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


<ToastContainer  />
    </div>
  );
}

export default Video;
