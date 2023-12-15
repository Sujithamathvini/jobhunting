import React from 'react'

import { FaFacebook } from "react-icons/fa"
import { BiLogoInstagramAlt } from "react-icons/bi"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className='flex flex-wrap justify-between items-center py-[100px] px-[250px]'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-[60px] text-black'><strong className='text-greenColor textStroke pr-[3px]'>Job</strong><span className='font-bold'>Hunting</span></h1>
        <div className='flex flex-row gap-4'>
          <h6 className='icon'>Support centre</h6>
          <h6 className='icon'>Feedback</h6>
          <h6 className='icon'>FAQ</h6>
        </div>
      </div>
      <div className='flex flex-col gap-2 justify-center items-center'>
        <h5 className='text-[25px] font-bold'>Contact us</h5>
        <h6 className='text-[15px] font-medium text-gray-800'>email123@gmail.com</h6>
        <div className='flex flex-row gap-4 pt-2 items-end'>
          <FaFacebook className='icon text-[20px] hover:text-greenColor'/>
          <BiLogoInstagramAlt className='icon text-[23px] hover:text-greenColor'/>
          <FaXTwitter className='icon text-[20px] hover:text-greenColor'/>
        </div>
      </div>
    </div>
  )
}

export default Footer