import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineRecentActors } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { RiVideoChatLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { PiScissorsFill } from "react-icons/pi";


function SideNavbar() {
  return (
    <div  className=' flex flex-col shrink grow basis-[16%] box-border h-[92vh] overflow-y-auto fixed top-[55px] left-0 w-[275px] p-[14px] bg-black text-white'>

      
      <div className=' flex flex-col border-b border-[rgb(86,85,85)] pb-[10px]'> 

        <div className=' flex items-center gap-[20px] px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]'>
          <IoMdHome />

        <div className=' text-[14px] font-[450]'>Home</div>
        </div>

        
    <div className=' flex items-center gap-[20px] px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]'>
          <FaVideo />
        <div className=' text-[14px] font-[450]'>Shorts</div>
        </div>

     <div className=' flex items-center gap-[20px] px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]'>
          <MdSubscriptions />

        <div className=' text-[14px] font-[450]'>Subscriptions</div>
        </div>
      </div>


      <div className=' flex flex-col border-b border-[rgb(86,85,85)]'> 


           <div className=' flex items-center gap-[20px] px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]'>
          <div className=' text-[14px] font-[450]'>You</div>
          <FaChevronRight />
</div>
            <div className=' flex items-center gap-[20px] px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]'>
          <MdOutlineRecentActors />
           <div className=' text-[14px] font-[450]'>Your Channel</div>
               </div>

                <div className=' flex items-center gap-[20px] px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]'>
          <FaHistory />
           <div className=' text-[14px] font-[450]'>History</div>
               </div>



               <div className=' flex items-center gap-[20px] px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]'>
         < MdOutlinePlaylistAdd />
           <div className=' text-[14px] font-[450]'>PlayList</div>
               </div>

                <div className=' flex items-center gap-[20px] px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]'>
          < RiVideoChatLine />
           <div className=' text-[14px] font-[450]'>Your Videos</div>
               </div>


               <div className=' flex items-center gap-[20px] px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]'>
          <MdOutlineWatchLater />
           <div className=' text-[14px] font-[450]'>Watch Later</div>
               </div>

               <div className=' flex items-center gap-[20px] px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]'>
          <AiOutlineLike />
           <div className=' text-[14px] font-[450]'>Liked Videos</div>
               </div>

                 <div className=' flex items-center gap-[20px] px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]'>
         <PiScissorsFill />
           <div className=' text-[14px] font-[450]'>Your Clips</div>
               </div>

      </div>


      <div className=' flex flex-col border-b border-[rgb(86,85,85)] pb-[10px]'>
        <div className='flex items-center gap-[20px] px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]'>

          <div className=' font-[500] '> Subscriptions</div>
        </div>

        <div className=' flex items-center gap-[20px] px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]'>
          <img className=' h-[25px] w-[25px] rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/2/28/Aaj_tak_logo.png" alt="" />
          <div  className=' text-[14px] font-[450]'>Ajtak</div>
        </div>

         <div className=' flex items-center gap-[20px] px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]'>
          <img className=' h-[25px] w-[25px] rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/2/24/Zee_news.svg" alt="" />
          <div  className=' text-[14px] font-[450]'>Zee News</div>
        </div>

         <div className=' flex items-center gap-[20px] px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]'>
          <img className=' h-[25px] w-[25px] rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/6/66/CNN_International_logo.svg" alt="" />
          <div  className=' text-[14px] font-[450]'>CNN</div>
        </div>

          <div className=' flex items-center gap-[20px] px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]'>
          <img className=' h-[25px] w-[25px] rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/7/73/Star_Sports_1_HD.png" alt="" />
          <div  className=' text-[14px] font-[450]'>Star Sports</div>
        </div>

      </div>


      


    </div>
  )
  }

export default SideNavbar;
