import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { removeItem } from '../ReduxStore/Store';
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'


export default function WatchList() {

let addedCoins=useSelector(state=>state.watchList)

console.log(addedCoins.length)
   
  localStorage.setItem('watchList', JSON.stringify(addedCoins))
  

let getSavedItems=JSON.parse(localStorage.getItem("watchList"))

console.log(getSavedItems.length)

console.log("hi")

let dispatch=useDispatch()

  return (
    <div className='bg-black text-white'>
    <Navbar/>
    <Link to="/home">
    <button class="bg-blue-500 text-white hover:bg-blue-700  font-semibold py-2 px-4 border border-gray-400 rounded shadow m-2">
    Back</button> </Link>
    <div className='bg-black text-white p-4 '>
    <div className='flex justify-around border-b-2 border-white'>
    <p>Name</p>
    <p>Price</p>
    <p>Change(24h)</p>
    <p>-</p>
    </div>
     

        {getSavedItems.length>0 ? getSavedItems.map(coin=>
        <div className=' flex justify-around flex-1  text-center mt-10 font-bold'>
        <p>{coin.name} </p>
        <p>${coin.price.slice(0,7)}</p>
        <p className={`${coin.change>0 ? "text-green-500" : "text-red-500"}`}>{coin.change}</p>
        <button onClick={()=>dispatch(removeItem(coin.uuid))}> <RemoveCircleOutlineIcon /></button>
        </div>
       
       )  : <p className='text-center font-bold text-2xl p-4 mt-2 text-blue-500'>Empty</p>

  
       }
    </div>
    </div>
  )
}
