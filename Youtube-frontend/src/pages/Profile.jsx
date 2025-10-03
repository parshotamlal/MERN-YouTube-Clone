import React, { useEffect, useState } from 'react'
import SideNavbar from '../components/SideNavbar'
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';




function Profile({sideNavbar}) {
    const {id} = useParams();
  const [data,setData] =useState([]);
  const[user,setUser] = useState([]);


const fetchProfileData =async() => {
  axios.get(`http://localhost:5000/api/${id}/channel`).then((response)=>{
    console.log(response.data.video);
    setData(response.data.video);
    setUser(response.data.video[0]?.user);

  }).catch((error)=> {
    console.log(error);

  })
 
}

  useEffect(()=> {
    fetchProfileData();

  },[])


  return (
    <div className=' flex w-full px-[13px] pt-[10px] pb-0 box-border bg-black text-white'>
      <SideNavbar  sideNavbar={sideNavbar}/>
      

      <div className={sideNavbar ? 'flex flex-col overflow-hidden flex-1 ml-[270px] mt-[56px] text-white justify-center items-center': 'flex flex-col overflow-hidden flex-1  mt-[56px] text-white justify-center items-center'}>
        <div className=' w-full flex px-[20px] py-0'>
     <div className="w-20 md:w-24 lg:w-28 aspect-square overflow-hidden rounded-full flex-shrink-0">
    <img 
      className="object-cover w-full h-full" 
      src={user?.profilePic} 
      alt="JS Tutorial Thumbnail" 
    />
  </div>

  {/* Channel Info */}
  <div className="flex flex-col gap-[7px] pl-[10px]">
    <div className="text-lg font-semibold">{user?.channelName}</div>
    <div className="text-gray-500 text-sm">{user?.userName} - {data.length} Videos</div>
    <div className="text-gray-700 text-sm">
     {user?.about}
    </div>
  </div>



        </div>


<div className=' w-full'>
<div className="flex items-center text-white gap-1 cursor-pointer text-[22px] pb-[10px] font-medium border-b border-solid pt-[20px]">
  <span>Videos&nbsp;</span>
  <IoMdArrowDroprightCircle className="text-blue-500 bg-black" size={20} />
</div>

<div className=' flex gap-[10px] h-screen flex-wrap mt-[20px]'>



{data?.map((item) => (
  <Link to={`/watch/${item._id}`} className=' w-[210px] cursor-pointer'>
    <div className=' w-full'>
      <img className=' w-full' src={item?.thumbnail} alt="thumbnail" />
    </div>

 <div className="flex flex-col gap-1">
  <div className="text-md font-semibold text-white">{item.title}</div>
  <div className="text-sm text-gray-400">{item.description}</div>
  <div className="text-sm text-gray-400">{item?.createdAt.slice(0,10)}</div>
</div>


  </Link>
  
))}



</div>
</div>
      </div>
    </div>


  )
}

export default Profile
