import React from 'react'
import Hero from './Components/Hero'
import Foods from './Components/Foods'
import SectionB from './Components/SectionB'
import SectionC from './Components/SectionC'
import Products from './Components/Products'


const HomePage = () => {

  

  return (
    <>
      {/* <Navbar/> */}
      <Hero/>
      <Products/>
      <Foods/>
      <SectionB/>
      <SectionC/>
    </>
  )
}

export default HomePage