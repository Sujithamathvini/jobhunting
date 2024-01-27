import { useState } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Searchv2 from '../Components/Searchv2Div/Searchv2'
import JobCardv2 from '../Components/Jobv2Div/JobCardv2'
import products from '../db/data'
import Jobv2 from '../Components/Jobv2Div/Jobv2'

const Page2 = () => {
  
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [companyquery, setCompanyquery] = useState("");
  const [locquery, setLocquery] = useState("");  

  // Input filter
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const handleCompanyChange = (event) => {
    setCompanyquery(event.target.value);
  }

  const handleLocChange = (event) => {
    setLocquery(event.target.value);
  }

  const handleInputClear = () => {
    setQuery("")
  }
  const handleCompanyClear = () => {
    setCompanyquery("")
  }
  const handleLocClear = () => {
    setLocquery("")
  }

  // filtered jobs based on query input
  let filteredItems = products.filter(
    (product) =>
    product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  )

  filteredItems = filteredItems.filter(
    (product) =>
    product.company.toLowerCase().indexOf(companyquery.toLowerCase()) !== -1
  )

  filteredItems = filteredItems.filter(
    (product) =>
    product.location.toLowerCase().indexOf(locquery.toLowerCase()) !== -1
  )

  const handleTypeChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  const handleLevelChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  const handleTimeChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  function filteredData(products, selected, query){
    // if no query is given/filter option is given
    let filteredJobs = products

    // if query is given
    if(query || companyquery || locquery){
      filteredJobs = filteredItems
    }

    // selected filter
    if(selected){
      filteredJobs = filteredJobs.filter(({type, level, time}) =>
      type === selected ||
      level === selected ||
      time === selected
      )
    }

    return filteredJobs.map(
      ({title,time,location,desc,company}) => (
        <JobCardv2
        key={Math.random()}
        title={title}
        time={time}
        location={location}
        desc={desc}
        company={company}
        />
      )
    )

  }

  const result = filteredData(products, selectedCategory, query)

  return (
    <div className='w-[85%] m-auto bg-[#fffcf2]'>
      <NavBar />
      <Searchv2 handleInputChange={handleInputChange} handleInputClear={handleInputClear} handleTypeChange={handleTypeChange} handleLevelChange={handleLevelChange} handleTimeChange={handleTimeChange} handleCompanyChange={handleCompanyChange} handleCompanyClear={handleCompanyClear} handleLocChange={handleLocChange} handleLocClear={handleLocClear} />
      <Jobv2 result={result}/>
    </div>
  )
}

export default Page2
