import React from 'react'

import { SiAdobe } from "react-icons/si"
import { FaGoogle } from "react-icons/fa"
import { FaMeta } from "react-icons/fa6"
import { SiZoho } from "react-icons/si"

import { IoBagSharp } from "react-icons/io5"
import { IoLocationSharp } from "react-icons/io5"
import { BsPeopleFill } from "react-icons/bs"

const Value = () => {
  return (
    <>
      <div className='flex justify-center items-center w-[full] h-[100px] bg-black mt-[4rem] rounded-[10px] gap-[100px]'>
        <div className='flex justify-center items-center gap-4'>
          <SiAdobe className='text-white text-[30px]'/>
          <h3 className='text-white text-[40px] font-bold'>Adobe</h3>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <FaGoogle className='text-white text-[30px]'/>
          <h3 className='text-white text-[40px] font-bold'>Google</h3>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <FaMeta className='text-white text-[30px]'/>
          <h3 className='text-white text-[40px] font-bold'>Meta</h3>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <SiZoho className='text-white text-[110px]'/>
        </div>
      </div>

      <div className='heading mt-[3rem]'>
        <h1 className='text-black text-[50px] font-black block text-center py-[1rem]'>WHY WE'RE THE BEST</h1>
        <h5 className='text-black text-center pb-[4rem]'>We have been helping people to land their job for more than 5 years, and it still continues to grow</h5>
      </div>

      <div className='valueContainer flex flex-wrap gap-10 justify-center items-center'>

        <div className='w-[200px] p-[20px]'>
          <span className='flex justify-between items-center gap-5'>
            <span className='bg-white p-[15px] rounded-[8px] shadow-greenColor shadow-lg border-black border-2'>
              <IoBagSharp className='text-[20px]'/>
            </span>
            <span className='flex flex-col items-center justify-center'>
              <h3 className='font-bold text-[22px]'>1,500+</h3>
              <h5>jobs</h5>
            </span>
          </span>
        </div>

        <div className='w-[200px] p-[20px]'>
          <span className='flex justify-between items-center gap-5'>
            <span className='bg-white p-[15px] rounded-[8px] shadow-greenColor shadow-lg border-black border-2'>
              <IoLocationSharp className='text-[20px]'/>
            </span>
            <span className='flex flex-col items-center justify-center'>
              <h3 className='font-bold text-[22px]'>150+</h3>
              <h5>country</h5>
            </span>
          </span>
        </div>

        <div className='w-[200px] p-[20px]'>
          <span className='flex justify-between items-center gap-5'>
            <span className='bg-white p-[15px] rounded-[8px] shadow-greenColor shadow-lg border-black border-2'>
              <BsPeopleFill className='text-[20px]'/>
            </span>
            <span className='flex flex-col items-center justify-center'>
              <h3 className='font-bold text-[22px]'>50,000+</h3>
              <h5>members</h5>
            </span>
          </span>
        </div>

      </div>

      <div className='flex flex-row justify-between items-center bg-greyIsh rounded-[10px] py-[50px] px-[150px] mt-[100px] gap-28 border-black border-2'>
        <h1 className='text-[60px] font-black'>SIGNUP NOW <br /> TO FIND YOUR <br /> <span className='text-greenColor textStroke'>DREAM JOB</span></h1>

        <span>
          <button className='w-[fit] py-[20px] px-[30px] rounded-[10px] bg-greenColor text-[30px] font-black border-black border-[3px] hover:bg-white'>Sign Up</button>
        </span>
      </div>

    </>
  )
}

export default Value