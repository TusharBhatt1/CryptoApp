import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import RefreshIcon from '@mui/icons-material/Refresh';
import { Link } from 'react-router-dom';
import LaunchIcon from '@mui/icons-material/Launch';
import Navbar from '../Components/Navbar'


export default function SearchResult() {

  
let {uuid}= useParams()    
let [alldetails,setAllDetails] =useState({})

let url=`https://api.coinranking.com/v2/coin/${uuid}`

useEffect(()=>{

axios.get(url).then(res=>setAllDetails(res.data.data.coin))

},[])
console.log(alldetails)




  return (
    <div className='bg-black text-white'>
    <Navbar/>
    <div className=' h-screen'>
    <Link to="/">
    <button class="bg-blue-500 text-white hover:bg-blue-700  font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2">
    Back</button>
    </Link>
    {Object.keys(alldetails).length==0 ? <div className='flex justify-center mt-48 '><RefreshIcon className='animate-spin h-20 text-black'/></div> 
    :
   <div className='flex gap-10 flex-col font-serif text-center p-4 text-white'>
    <p className='font-bold text text-3xl '>{alldetails.name}</p>
    <img src={alldetails.iconUrl} className=' max-h-20  max-w-sm  m-auto ' alt={alldetails.name}/>
    <p className='font-semibold '>All Time High : ${alldetails.allTimeHigh.price.slice(0,7)}</p>
    <p className='font-bold '>Current : $ {alldetails.price.slice(0,7)}</p>
    
    <p className={`${alldetails.change >= 0 ? "text-green-500": "text-red-500"} font-semibold `}>In 24 Hours : {alldetails.change>0 && "+"} {alldetails.change}</p>

    <p className='font-bold text-blue-500'>{alldetails.description}</p>
   
    <button className='text-blue-700' onClick={()=>window.open(alldetails.websiteUrl)}>{alldetails.name} <LaunchIcon/></button>
   </div>
    }
   </div>



   </div>

  )
}
