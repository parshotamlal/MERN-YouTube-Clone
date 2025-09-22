import React from 'react'
import SideNavbar from '../components/SideNavbar'
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { Link } from 'react-router-dom';


function Profile({sideNavbar}) {
  return (
    <div className=' flex w-full px-[13px] pt-[10px] pb-0 box-border bg-black text-white'>
      <SideNavbar  sideNavbar={sideNavbar}/>
      

      <div className={sideNavbar ? 'flex flex-col overflow-hidden flex-1 ml-[270px] mt-[56px] text-white justify-center items-center': 'flex flex-col overflow-hidden flex-1  mt-[56px] text-white justify-center items-center'}>
        <div className=' w-full flex px-[20px] py-0'>
     <div className="w-20 md:w-24 lg:w-28 aspect-square overflow-hidden rounded-full flex-shrink-0">
    <img 
      className="object-cover w-full h-full" 
      src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/ultimate-js-tutorial-hindi-1/JS-Thumb.jpg" 
      alt="JS Tutorial Thumbnail" 
    />
  </div>

  {/* Channel Info */}
  <div className="flex flex-col gap-[7px] pl-[10px]">
    <div className="text-lg font-semibold">Coding Channel</div>
    <div className="text-gray-500 text-sm">user1 - 4 Videos</div>
    <div className="text-gray-700 text-sm">
      About Section of videos: This channel covers JavaScript tutorials, React tips, and full-stack projects.
    </div>
  </div>



        </div>


<div className=' w-full'>
<div className="flex items-center text-white gap-1 cursor-pointer text-[22px] pb-[10px] font-medium border-b border-solid pt-[20px]">
  <span>Videos&nbsp;</span>
  <IoMdArrowDroprightCircle className="text-blue-500 bg-black" size={20} />
</div>

<div className=' flex gap-[10px] h-screen flex-wrap mt-[20px]'>

  {/* block 1 */}
  <Link to={'/watch/222'} className=' w-[210px] cursor-pointer'>
    <div className=' w-full'>
      <img className=' w-full' src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/ultimate-js-tutorial-hindi-1/JS-Thumb.jpg" alt="" />
    </div>

 <div className="flex flex-col gap-1">
  <div className="text-md font-semibold text-white">Video Title</div>
  <div className="text-sm text-gray-400">This is a short description of the video. It gives an overview of the content.</div>
</div>


  </Link>

  {/* block 2 */}
  <Link to={'/watch/222'} className=' w-[210px] cursor-pointer'>
    <div className=' w-full'>
      <img className=' w-full' src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/ultimate-js-tutorial-hindi-1/JS-Thumb.jpg" alt="" />
    </div>

 <div className="flex flex-col gap-1">
  <div className="text-md font-semibold text-white">Video Title</div>
  <div className="text-sm text-gray-400">This is a short description of the video. It gives an overview of the content.</div>
</div>


  </Link>


   {/* block 3 */}

  <Link to={'/watch/222'} className=' w-[210px] cursor-pointer'>
    <div className=' w-full'>
      <img className=' w-full' src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/ultimate-js-tutorial-hindi-1/JS-Thumb.jpg" alt="" />
    </div>

 <div className="flex flex-col gap-1">
  <div className="text-md font-semibold text-white">Video Title</div>
  <div className="text-sm text-gray-400">This is a short description of the video. It gives an overview of the content.</div>
</div>


  </Link>

</div>
</div>
      </div>
    </div>


  )
}

export default Profile
