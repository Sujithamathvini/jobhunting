import React from 'react'

import { FaRegClock } from "react-icons/fa"
import { MdComputer } from "react-icons/md"

// data for job cards
const data = [
  {
    id:1,
    title:'Web Developer',
    time:'Now',
    location:'Bangalore,India',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, debitis.',
    company:'Myntra Ltd.,'
  },
  {
    id:2,
    title:'Software Developer',
    time:'Now',
    location:'Pune,India',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, debitis.',
    company:'Campuzz Co.,'
  },
  {
    id:3,
    title:'UI/UX Designer',
    time:'Now',
    location:'Chennai,India',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, debitis.',
    company:'Light Networks'
  },
  {
    id:4,
    title:'UX designer',
    time:'Now',
    location:'Mumbai,India',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, debitis.',
    company:'Design & Dine'
  },
  {
    id:5,
    title:'Product designer',
    time:'Now',
    location:'Delhi,India',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, debitis.',
    company:'Adobe'
  },
  {
    id:6,
    title:'Flutter Developer',
    time:'Now',
    location:'Hyderabad,India',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, debitis.',
    company:'Huawei'
  }
]

const Job = () => {
  return (
    <div>
      <div className='jobContainer flex flex-wrap gap-10 justify-center items-center pt-[5rem]'>

        {
          data.map(({id,title,time,location,desc,company}) =>{
            return(
              <div key={id} className="group group/item singleJob w-[300px] p-[20px] bg-white rounded-[10px] shadow-greenColor shadow-sm border-black border-2 hover:bg-[#a7e017] hover:shadow-lg">

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
          })
        }

      </div>
    </div>
  )
}

export default Job