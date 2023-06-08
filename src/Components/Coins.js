import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FadeIn } from 'react-slide-fade-in'
import RefreshIcon from '@mui/icons-material/Refresh';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToWatchList } from '../ReduxStore/Store';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Coins() {

let  [maindata,setMainData]=useState([])
let baseurl= "https://api.coinranking.com/v2/coins?" 
let option = "x-access-token=coinranking7f5e11c0fa21759876c2c57dcd50ecd36d51bbcdcb669daf"  

let [buttonText,setButtonText]=useState("Load More")
let [showfulldata,setShowFulldata]=useState(false)
// let [watching,setWatching]=({})

let dispatch=useDispatch()


useEffect(()=>{

try{    
axios.get(`${baseurl}${option}`)
.then(res=>
showfulldata ? setMainData(res.data.data.coins) : setMainData(res.data.data.coins.slice(0,10)))


if (showfulldata===true)
{
    setButtonText("LESS ^")
}
else{
    setButtonText("MORE v")
}


}
catch(error){
throw new error("Error Found")

}
},[showfulldata])

const handleWatch=(coin)=>{
  
  dispatch(addToWatchList(coin))
}


  return (
<div>
    <h1 className='text-2xl text-shadow font-extrabold  tracking-wider text-center mt-40 mb-10'>ALL COINS</h1>
   
 <div>
 
   <div className='flex justify-around font-thin border-t border-b border-blue-300 p-4 bg-blue-600 '>
    <p>Name</p>
    <p>Symbol</p>
    <p>Price</p>
    <p className=' hidden s550:block '>Market Cap</p>
    <p>24h</p>
   </div>
    {maindata.length===0 ? <div className='flex justify-center '><RefreshIcon className=' mt-5 animate-spin ' /></div> 

  
    : maindata.map((coin)=>
    <>
    <Link to={`/details/${coin.uuid}`}>
    <FadeIn delayInMilliseconds={1000}>
  
    <div key={coin.uuid} className=' flex p-12 gap-3 text-sm s550:text-lg justify-around border-white border-t-2 hover:bg-slate-600 '>

        <p  className='flex-1 font-bold text-start text-blue-500 ' >{coin.name} ({coin.symbol})</p>
    
        <img style={{maxWidth:"50px"}} alt={coin.name} className='h-10 flex-1 m-auto' src={coin.iconUrl}/>
       
        <p className='flex-1 text-center font-semibold'>${coin.price.slice(0,8)}</p>
        <p className='font-bold flex-1 hidden s550:block '> ${coin.marketCap.slice(0,3)} billion</p>
        <p className={`${coin.change>=0 ? "text-green-500": "text-red-500"} font-bold`} > {coin.change >0 && "+"}{coin.change}</p>
    </div>
    </FadeIn>
     </Link>
     <button className='w-15 rounded-md text-sm p-2 border-2 border-white
      m-auto flex justify-center my-3' onClick={()=>handleWatch(coin)} ><RemoveRedEyeIcon/></button>
      {/* <p className={`${watching[coin.uuid] && watching[coin.uuid] ? "block" :"hidden"} text-center mb-4 text-green-300`}>Added To WatchList</p> */}
     </>)
   }
    </div>
    <button onClick={()=>{setShowFulldata(!showfulldata)  }} className='flex animate-bounce justify-center border-y-2 border-x-4 border hover:bg-black hover:text-white border-grey-500  tracking-wider  p-2 m-auto my-12 '>{buttonText}</button>
    
    
</div>
  )
}
