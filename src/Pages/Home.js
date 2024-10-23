import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Service from '../Components/Service'
import Flex1 from '../Components/Flex1'
import Price from '../Components/Price'
import Demo from '../Components/Demo'
import Footer from '../Components/Footer'
import Choose from '../Components/Choose'
import Benefit from '../Components/Benefit'
import Expert from '../Components/Expert'
import Contact from '../Components/Contact'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Service/>
      <Choose/>
      <Flex1/>
      <Benefit/>
      <Expert/>
      <Demo/>
      <Price/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home