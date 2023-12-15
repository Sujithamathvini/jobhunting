import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Search from './Components/SearchDiv/Search'
import Job from './Components/JobDiv/Job'
import Value from './Components/ValueDiv/Value'
import Footer from './Components/FooterDiv/Footer'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[85%] m-auto bg-[#fffcf2]'>
      <NavBar/>
      <Search/>
      <Job/>
      <Value/>
      <Footer/>
    </div>
  )
}

export default App
