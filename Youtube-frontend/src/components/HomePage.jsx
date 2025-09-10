// import React from 'react'
// import { Link } from 'react-router-dom';
// function HomePage({sideNavbar}) {

// const options = [
//   "All",
//   "Music",
//   "Disha Vakani",
//   "News",
//   "Mixes",
//   "React Routers",
//   "Podcasts",
//   "Web Development",
//   "Data Structures",
//   "WWE Championship",
//   "Restaurants",
//   "Live",
//   "Asian Music",
//   "Information",
//   "Tourism",
//   "Roads",
//   "Recently Uploaded",
//   "Watched",
//   "New to You"
// ];

//   return (
//    <div className={`flex flex-col overflow-x-hidden flex-1 min-h-screen ${sideNavbar ? 'ml-[262px]' : ''}`}>

     
//      <div className=' flex fixed top-[56px] w-full box-border gap-[10px] shrink-0 h-auto overflow-x-scroll bg-black'>

//   {options.map((item, index) => (
//         <div
//           key={index}
//           className="text-white flex-shrink-0 px-3 h-[30px] bg-[rgb(42,42,42)] font-semibold rounded-[5px] flex items-center justify-center cursor-pointer ml-[10px] hover:bg-[#3f3f3f]"
//         >
//           {item}
//         </div>
//       ))}

//      </div>



// <div className={ sideNavbar ?"grid gap-[10px] grid-cols-[384px_384px_384px] px-0 pt-[90px] pb-[20px] box-border bg-black mt-10 ml-5": "grid gap-[10px] grid-cols-[384px_384px_384px_384px] px-0 pt-[90px] pb-[20px] box-border bg-black mt-10"}>

//   {/* One card */}
//   <Link to={"/watch/123"}  className="text-white no-underline cursor-pointer h-auto box-border flex flex-col">
//     {/* Thumbnail */}
//     <div className="w-full relative h-[216px] box-border">
//       <img
//         className="w-full h-full rounded-[10px]"
//         src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/ultimate-js-tutorial-hindi-1/JS-Thumb.jpg"
//         alt=""
//       />
//       <div className="absolute bottom-0 right-0 w-auto px-[2px] py-[1px] bg-[#2a2a2a] rounded-[5px]">
//         28:20
//       </div>
//     </div>

//     {/* User info */}
//     <div className="flex pt-[10px]">
//       <div className="w-[50px] h-[50px] flex items-center justify-center">
//         <img
//           className="rounded-[50%] w-[80%]"
//           src="https://scontent.fbom3-2.fna.fbcdn.net/v/t39.30808-6/479882318_122213194298229569_7154125407762908791_n.jpg"
//           alt="profile"
//         />
//       </div>

//       <div className="w-full p-[5px] box-border flex flex-col">
//         <div className="font-[600] text-[16px]">user1</div>
//         <div className="text-[rgb(170,170,170)] mt-[5px] text-[14px]">@user1</div>
//         <div className="text-[rgb(170,170,170)] text-[12px]">3 Likes</div>
//       </div>
//     </div>
//   </Link>




// </div>




//     </div>
//   )
// }

// export  {HomePage}


import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({ sideNavbar }) {
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
        
        {/* One Video Card */}
        <Link to={"/watch/123"} className="text-white no-underline cursor-pointer h-auto box-border flex flex-col">
          {/* Thumbnail */}
          <div className="w-full relative h-[216px] box-border">
            <img
              className="w-full h-full rounded-[10px]"
              src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/ultimate-js-tutorial-hindi-1/JS-Thumb.jpg"
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
                src="https://preview.redd.it/studying-basic-to-advanced-java-and-web-development-from-v0-4hmrwszl7xfa1.jpg?width=1080&crop=smart&auto=webp&s=33f9765b6baf71732d7e842aa77fb3ff63e9b7ae"
                alt="Profile"
              />
            </div>

            <div className="w-full p-[5px] box-border flex flex-col">
              <div className="font-semibold text-[16px]">user1</div>
              <div className="text-[rgb(170,170,170)] mt-[5px] text-[14px]">@user1</div>
              <div className="text-[rgb(170,170,170)] text-[12px]">3 Likes</div>
            </div>
          </div>
        </Link>

        {/* Add more video cards here as needed */}

      </div>
    </div>
  );
}

export { HomePage };
