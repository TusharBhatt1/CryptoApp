import React from 'react'
import Navbar from '../Components/Navbar'
import Coins from '../Components/Coins'
import Footer from '../Components/Footer'
import Carouselll from '../Components/Carousel'
export default function Home() {
  return (
    <div className='bg-black text-white'>
     <Navbar/>
     <Carouselll/>
     <Coins/>
     <Footer/>
    </div>
  )
}
