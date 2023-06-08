import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Carouselll() {
  

let [coins,setAllCoins]=useState([])


let baseurl= "https://api.coinranking.com/v2/coins?" 
let option = "x-access-token=coinranking7f5e11c0fa21759876c2c57dcd50ecd36d51bbcdcb669daf"  

useEffect(()=>{

    try{    
    axios.get(`${baseurl}${option}`)
    .then(res=>{setAllCoins(res.data.data.coins.slice(0,10)) ; console.log(coins)})
  
    }
    catch(error){
    throw new error("Error Found")
    
    }
    },[])

  const responsive= {
    0: {
        items: 1,
    },
    550: {
        items: 3,
        
    }
  }

  return (
    <>
    <div className='mt-20 flex flex-col gap-7 text-grey-500 p-10  '>
    <header className='text-center font-extrabold font-serif text-5xl tracking-widest '>Crypto Buddy</header>
    <p className='text-center font-bold text-2xl tracking-wider '>Get Real Time <br/> Crypto Currency Data</p>
    </div>
  <div className='text-center mt-20 p-10 bg-blue-800 '>

  <h1 className='text-xl font-extrabold mb-20'>TOP 20 (24h)</h1>
   <AliceCarousel mouseTracking infinite autoPlay={true} responsive={responsive}   disableDotsControls={true} animationType='fadeout'  animationDuration={500} disableButtonsControls={true}
   items={coins.map(coin=>
   <div className='flex flex-col gap-5 font-bold '>
   <img className='h-20 m-auto' src={coin.iconUrl} alt={coin.uuid}/>
   <p>{coin.name}</p>
   <p className={`${coin.change>0 ? "text-green-500" :"text-red-500"} `}>{coin.change>0 && "+"}{coin.change}</p>
   </div>)}/>
   </div>
   </>
  )
}
