import React, { useEffect, useState } from 'react';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Navbar() {
  let [showsidebar, setShowsidebar] = useState(false);
   
  let [query,setQuery]=useState("")
  let [searchData, setSearchData]=useState("")


  const handleSearch=(e)=>{
  setQuery(e.target.value)
  
  console.log(query)
  }

  useEffect(()=>{
    let url=` https://api.coinranking.com/v2/search-suggestions?query=${query}`
    axios.get(url).then(res=>setSearchData(res.data.data.coins))
    console.log(searchData)

  },[query])

  return (
    <>
      <nav className=' hidden sm:flex justify-around items-start p-5 font-bold z-2'>
        <Link to="/home"><CurrencyBitcoinIcon className=' text-yellow-300' /></Link>
        <p>Home</p>

        <div className='bg-white'> 
        <div className='flex justify-between items-center p-1'>
        <input type='text' value={query}  onChange={handleSearch} className='font-thin p-2  text-black' placeholder='  search' />
        <p onClick={()=>setQuery("")} className={`${query !== "" ? "block" :"hidden"} font-bold text-black p-1 cursor-pointer`}>x</p>
        </div>
         {/* DISPLAYING SEARCH RESULT */}
         <span className={`${query==="" ? "hidden" : "flex" } abolute flex-col m-2 gap-2 `} >
          {
           searchData!=="" && searchData.map(coin=>
            <div className='flex flex-col text-black' key={coin.uuid}>
             
            <Link to={`/details/${coin.uuid}`} >{coin.name}</Link>

            </div>)
          }
        </span>
        </div>
         
      
        <Link to={"/watchlist"}><p className='text-blue-400'>WatchList</p></Link>
        <p>Contact</p>
      </nav>
      
      {/* FOR SMALL SCREENS */}
       <nav className='flex items-start justify-between p-2 sm:hidden'>
       {/* 1 */}
        <Link to="/home"> <CurrencyBitcoinIcon className=' text-yellow-200'/> </Link>
        {/* 2 */}
        <div className='bg-white'> 
        <div className='flex items-center justify-between'>
        <input type='text' value={query}  onChange={handleSearch} className='w-24 rounded-lg s550:w-40 border-b-2 border-red-100 p-2  text-black' placeholder='  search' />
        <p onClick={()=>setQuery("")} className={`${query !== "" ? "block" :"hidden"} font-bold text-black p-1 cursor-pointer`}>x</p>
        </div>
         {/* DISPLAYING SEARCH RESULT */}
         <span className={`${query==="" ? "hidden" : "flex" } abolute flex-col m-2 gap-2 `} >
          {
           searchData!=="" && searchData.map(coin=>
            <div className='flex flex-col text-black' key={coin.uuid}>
             
            <Link to={`/details/${coin.uuid}`} >{coin.name}</Link>

            </div>)
          }
        </span>
        </div>
         
        {/* 3 */}
         <Link to={"/watchList"}><p className='text-sm s550:text-xl text-blue-500 font-bold'>Watching</p></Link>
        <button className='flex items-center max-h-sm' onClick={()=>setShowsidebar(!showsidebar)}>
          {showsidebar ?<CloseIcon/> : <MenuOpenIcon/>}
        </button>
        
      </nav>

      <nav className={`absolute ${showsidebar ? '  ease-1s left-[0%]' : 'left-[-50%]'}  top-0 flex flex-col gap-10  p-5 bg-blue-800 text-white w-1/2 z-2 sm:hidden`}>
        <p>Home</p>
        <p>News</p>
        <p>About</p>
        <p>Contact</p>
      </nav> 
    </>
  )
}
