import React from 'react'

const NavBar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[2rem]'>
        <div className='logoDiv'>
            <h1 className='logo icon text-[30px] text-black'><strong className='text-greenColor textStroke pr-[3px]'>Job</strong><span className='font-bold'>Hunting</span></h1>
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