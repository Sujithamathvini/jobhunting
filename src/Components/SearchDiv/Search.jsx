import React from 'react'

import { FiSearch } from "react-icons/fi"
import { IoCloseCircleOutline } from "react-icons/io5"
import { IoBagSharp } from "react-icons/io5"
import { IoLocationSharp } from "react-icons/io5";

const Search = () => {
  return (
    <>
    {/* heading */}
    <div className='flex flex-col justify-center items-center gap-5 pt-[10px] pb-[40px]'>
      <h1 className='text-black text-center text-[60px] font-extrabold'><span className='text-greenColor textStroke'>EASY WAY</span> TO GET YOUR <br /> <span className='text-greenColor textStroke'>DREAM JOB</span></h1>
      <h5 className='text-black text-center text-[20px] font-medium'>To get your dream job with offers from different countries and different job positions.</h5>
      <h5 className='text-black text-center text-[20px] font-medium'>This is the right place to find it, Go !!!</h5>
    </div>
    {/* searchBox */}
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem] border-black border-2'>

      {/* first Div */}
      <form action="">
        {/* first Div */}
        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>

          {/* Search */}
          <div className='flex gap-2 items-center'>
            <FiSearch className='icon text-[30px]' />
            <input type="text" className='bg-transparent text-black-500 focus:outline-none w-[100%]' placeholder='Search Job Here....' />
            <IoCloseCircleOutline className='icon text-[30px] text-[#a5a6a6] hover:text-textColor' />
          </div>

          {/* company search */}
          <div className='flex gap-2 items-center'>
            <IoBagSharp className='icon text-[30px]' />
            <input type="text" className='bg-transparent text-black-500 focus:outline-none w-[100%]' placeholder='Search by Company....' />
            <IoCloseCircleOutline className='icon text-[30px] text-[#a5a6a6] hover:text-textColor' />
          </div>

          {/* location search */}
          <div className='flex gap-2 items-center'>
            <IoLocationSharp className='icon text-[30px] '/>
            <input type="text" className='bg-transparent text-black-500 focus:outline-none w-[100%]' placeholder='Search by Location....' />
            <IoCloseCircleOutline className='icon text-[30px] text-[#a5a6a6] hover:text-textColor' />
          </div>

          <button className='bg-black h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-[#00000090]'>Search</button>

        </div>
      </form>

      {/* second Div */}
      <div className='secDiv flex items-center gap-10 justify-center'>

        {/* sort by */}
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="relevance" className='text-black font-semibold'>Sort by : </label>

          <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Releavnce</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
        </div>

        {/* type */}
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="type" className='text-black font-semibold'>Type : </label>

          <select name="" id="type" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Full-time</option>
            <option value="">Internship</option>
            <option value="">Remote</option>
          </select>
        </div>

        {/* level */}
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="level" className='text-black font-semibold'>Level : </label>

          <select name="" id="level" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>

        <span className='text-black hover:text-white font-medium cursor-pointer'>Clear All</span>

      </div>
    </div>
    </>
  )
}

export default Search