import React from 'react'
import Produkt from "../Front-End/Main/Produkt"
import FilterMenu from '../Front-End/Main/FilterMenu'

const Category = () => {
  return (
    <div className='category'>
      <div className='w-full max-w-screen-2xl m-auto  flex flex-col md:flex-row'>
        <FilterMenu/>
        <div><Produkt/></div>
        
    </div>
    </div>

  )
}

export default Category
