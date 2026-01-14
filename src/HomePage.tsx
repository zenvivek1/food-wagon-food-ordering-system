import React from 'react'
import Hero from './Components/Hero'
import Foods from './Components/Foods'
import SectionB from './Components/SectionB'
import SectionC from './Components/SectionC'
import Products from './Components/Products'
import { useAuth } from './Context/AuthContext'
import FoodLoader from './Pages/Loader/FoodLoader'


const HomePage = () => {
  
  const isLoading  = useAuth();

  // if(isLoading) return(
  //   <FoodLoader/>
  // )

  return (
    <>
      {/* <Navbar/> */}
      <Hero/>
      <Products bg='zinc'/>
      <Foods/>
      <SectionB/>
      <SectionC/>
    </>
  )
}

export default HomePage