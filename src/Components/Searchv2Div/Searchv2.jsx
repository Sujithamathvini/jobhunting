import React, { useRef } from 'react'

import { FiSearch } from "react-icons/fi"
import { IoCloseCircleOutline } from "react-icons/io5"
import { IoBagSharp } from "react-icons/io5"
import { IoLocationSharp } from "react-icons/io5";

const Searchv2 = ({handleInputChange, handleInputClear, handleTypeChange, handleLevelChange, handleTimeChange, handleCompanyChange, handleCompanyClear, handleLocChange, handleLocClear}) => {

  // const [type, settype] = useState("")
  // const [level, setlevel] = useState("")
  const handleSClear = () => {
    document.getElementById("search").value=""
    handleInputClear()
  }
  const handleCoClear = () => {
    document.getElementById("company").value=""
    handleCompanyClear()
  }
  const handleLoClear = () => {
    document.getElementById("location").value=""
    handleLocClear()
  }

  // const handleCompanyClear = () => {
  //   document.getElementById("search").value=""
  //   handleInputClear()
  // }

  // const handleLocationClear = () => {
  //   document.getElementById("search").value=""
  //   handleInputClear()
  // }

  return (
    <>
    {/* searchBox */}
    <div className='searchDiv grid gap-6 bg-greyIsh rounded-[10px] py-[1.3rem] px-[4rem] border-black border-2'>

      {/* first Div */}
      <form action="">
        {/* first Div */}
        <div className='firstDiv flex justify-between items-center rounded-[8px] bg-white px-5 py-2 shadow-lg shadow-greyIsh-700'>

          {/* Search */}
          <div className='flex gap-2 items-center'>
            <FiSearch className='icon text-[30px]' />
            <input type="text" id="search" className='bg-transparent text-black-500 focus:outline-none w-[100%]' placeholder='Search Job Here....' onChange={handleInputChange} />
            <IoCloseCircleOutline className='icon text-[30px] text-[#a5a6a6] hover:text-textColor' onClick={handleSClear}/>
          </div>

          {/* company search */}
          <div className='flex gap-2 items-center'>
            <IoBagSharp className='icon text-[30px]' />
            <input type="text" id="company" className='bg-transparent text-black-500 focus:outline-none w-[100%]' placeholder='Search by Company....' onChange={handleCompanyChange} />
            <IoCloseCircleOutline className='icon text-[30px] text-[#a5a6a6] hover:text-textColor' onClick={handleCoClear} />
          </div>

          {/* location search */}
          <div className='flex gap-2 items-center'>
            <IoLocationSharp className='icon text-[30px] '/>
            <input type="text" id="location" className='bg-transparent text-black-500 focus:outline-none w-[100%]' placeholder='Search by Location....' onChange={handleLocChange} />
            <IoCloseCircleOutline className='icon text-[30px] text-[#a5a6a6] hover:text-textColor' onClick={handleLoClear} />
          </div>

          <button className='bg-black h-full py-3 px-10 rounded-[10px] text-white cursor-pointer hover:bg-[#00000090]' onClick={(event) => {
            event.preventDefault()
          }}>Search</button>

        </div>
      </form>

      {/* second Div */}
      <form>
        <div className='secDiv flex items-center gap-10 justify-center'>

          {/* sort by time */}
          <div className='singleSearch flex items-center gap-2'>
            <label htmlFor="posted" className='text-black font-semibold'>Sort by : </label>

            <select name="posted" id="posted" className='custom-select bg-white rounded-[3px] px-4 py-1' onChange={handleTimeChange}>
              <option name="posted" value="">Date posted</option>
              <option name="posted" value="now">now</option>
              <option name="posted" value="past week">past week</option>
              <option name="posted" value="past month">past month</option>
            </select>
          </div>

          {/* type */}
          <div className='singleSearch flex items-center gap-2'>
            <label htmlFor="type" className='custom-select text-black font-semibold'>Type : </label>

            <select name="type" id="type" className='bg-white rounded-[3px] px-4 py-1' onChange={handleTypeChange}>
              <option name="type" value="">All</option>
              <option name="type" value="full-time">Full-time</option>
              <option name="type" value="internship">Internship</option>
              <option name="type" value="remote">Remote</option>
            </select>
          </div>

          {/* level */}
          <div className='singleSearch flex items-center gap-2'>
            <label htmlFor="level" className='text-black font-semibold'>Level : </label>

            <select name="level" id="level" className='custom-select bg-white rounded-[3px] px-4 py-1' onChange={handleLevelChange}>
              <option name="level" value="">All</option>
              <option name="level" value="senior">Senior</option>
              <option name="level" value="beginner">Beginner</option>
              <option name="level" value="intermediate">Intermediate</option>
            </select>
          </div>

          {/* <button className='text-black hover:text-white font-medium cursor-pointer' onClick={handleClear}>Clear All</button> */}

        </div>
      </form>
    </div>
    </>
  )
}

export default Searchv2