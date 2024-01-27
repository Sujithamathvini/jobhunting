import NavBar from '../Components/NavBar/NavBar'
import Search from '../Components/SearchDiv/Search'
import Job from '../Components/JobDiv/Job'
import Value from '../Components/ValueDiv/Value'
import Footer from '../Components/FooterDiv/Footer'
import Header from '../Components/Header/Header'

import React from 'react'

const Page1 = () => {
  return (
    <div className='w-[85%] m-auto bg-[#fffcf2]'>
        <NavBar/>
        <Header />
        <Search/>
        <Job/>
        <Value/>
        <Footer/>
    </div>
  )
}

export default Page1