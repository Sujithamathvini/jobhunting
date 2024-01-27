import React from 'react'

import { FaRegClock } from "react-icons/fa"
import { MdComputer } from "react-icons/md"

const JobCardv2 = ({title, time, location, desc, company}) => {
  return (
    <div className="group group/item singleJob w-[300px] p-[20px] bg-white rounded-[10px] shadow-greenColor shadow-sm border-black border-2 hover:bg-[#a7e017] hover:shadow-lg">

        <span className='flex justify-between items-center gap-4'>
          <h1 className='text-[16px] font-bold text-textColor'>{title}</h1>
          <span className='flex items-center text-[#565555] gap-1 group-hover:text-white'>
            <FaRegClock className='text-[15px]'/>{time}
          </span>
        </span>

        <div className='company flex items-center gap-3 pb-2 pt-1'>
          <MdComputer className='text-black'/>
          <span className='text-[14px] text-black block'>{company}</span>
        </div>

        <p className='text-[14px] text-[#565555] py-2 border-t-[2px] mt-[5px]'>{desc}</p>

        <h6 className='text-[14px] text-black font-semibold mb-4'>{location}</h6>

        <button className='block border-[2px] rounded-[10px] p-[10px] w-full text-[16px] text-textColor font-bold hover:bg-white'>Apply Now</button>
      </div>
  )
}

export default JobCardv2