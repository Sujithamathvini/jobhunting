import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[2rem]'>
        <div className='logoDiv'>
          <Link to="/">
            <button className='logo icon text-[30px] text-black'><strong className='text-greenColor textStroke pr-[3px]'>Job</strong><span className='font-bold'>Hunting</span></button>
          </Link>
        </div>
        <div className='menu flex gap-8'>
            <li className='menuList text-[#6f6f6f] hover:text-black'>Jobs</li>
            <li className='menuList text-[#6f6f6f] hover:text-black'>Companies</li>
            <li className='menuList text-[#6f6f6f] hover:text-black'>About</li>
            <li className='menuList text-[#6f6f6f] hover:text-black'>Contact</li>
            <li className='menuList text-[#6f6f6f] hover:text-black'>Login</li>
            <li className='menuList text-[#6f6f6f] hover:text-black'>Register</li>
        </div>
    </div>
  )
}

export default NavBar