import React from 'react'

function HomePage() {

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
    <div className=' flex flex-col overflow-x-hidden flex-1 ml-[262px] min-h-screen'>
     
     <div className=' flex fixed top-[56px] w-full box-border gap-[10px] shrink-0 h-auto overflow-x-scroll bg-black'>

  {options.map((item, index) => (
        <div
          key={index}
          className="text-white flex-shrink-0 px-3 h-[30px] bg-[rgb(42,42,42)] font-semibold rounded-[5px] flex items-center justify-center cursor-pointer ml-[10px] hover:bg-[#3f3f3f]"
        >
          {item}
        </div>
      ))}

     </div>
    </div>
  )
}

export  {HomePage}
