import React from 'react'

import { FiSearch } from "react-icons/fi"
import { IoCloseCircleOutline } from "react-icons/io5"
import { IoBagSharp } from "react-icons/io5"
import { IoLocationSharp } from "react-icons/io5"
import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <>
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

          <Link to="/search">
          <button className='bg-black h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-[#00000090]'>Search</button></Link>
        </div>
      </form>
    </div>
    </>
  )
}

export default Search